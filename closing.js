(() => {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const visit = document.querySelector('.visit-section');
  if (!visit) return;
  const revealItems = [...document.querySelectorAll('.closing-reveal')];
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); reveal.unobserve(entry.target); }
    }), { threshold:.1 });
    revealItems.forEach(item => reveal.observe(item));
    const visibility = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('is-closing-visible',entry.isIntersecting)));
    visibility.observe(visit);
  } else { revealItems.forEach(item => item.classList.add('is-visible')); visit.classList.add('is-closing-visible'); }
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) revealItems.forEach(item => item.classList.add('is-visible'));
  });

  const stats = [...document.querySelectorAll('[data-stat-total]')];
  function countStats() {
    const start = performance.now();
    function tick(now) {
      const progress = reducedMotion.matches ? 1 : Math.min(1,(now-start)/1350);
      const eased = 1-(1-progress)**3;
      stats.forEach(stat => {
        const value = Math.round(Number(stat.dataset.statTotal)*eased);
        stat.textContent = value.toLocaleString('en-IN') + (stat.dataset.statSuffix || '');
      });
      if(progress<1)requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){countStats();observer.disconnect();}},{threshold:.2});
    observer.observe(document.querySelector('.cafe-stats'));
  } else countStats();

  function indiaParts() {
    const values = Object.fromEntries(new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date()).map(part=>[part.type,part.value]));
    return { date:`${values.year}-${values.month}-${values.day}`, minutes:Number(values.hour)*60+Number(values.minute) };
  }
  function updateOpenState() {
    const {minutes}=indiaParts();
    const open=minutes>=360&&minutes<1380;
    const state=document.querySelector('.visit-open-state');
    state.classList.toggle('is-closed',!open);
    state.querySelector('span:last-child').textContent=open?'OPEN NOW · THE PAN IS ON':'BACK AT 6 AM · EVERY DAY';
    const rows=[...document.querySelectorAll('.cafe-timeline li')];
    let current=0;
    rows.forEach((row,index)=>{if(minutes>=Number(row.dataset.dayMinute))current=index;});
    rows.forEach((row,index)=>{
      row.classList.toggle('is-now',index===current);
      row.querySelector('.day-now').textContent=minutes<360?'SOON':'NOW';
    });
  }
  updateOpenState();
  setInterval(updateOpenState,60000);

  const track=document.querySelector('.regulars-track');
  const viewport=document.querySelector('.regulars-viewport');
  const originals=[...track.children];
  const total=originals.length;
  const clones=()=>originals.map(card=>card.cloneNode(true));
  track.replaceChildren(...clones(),...originals,...clones());
  let index=total, step=0, busy=false, fallback=null;
  function paintReview(immediate=false){
    if(immediate)track.classList.add('is-resetting');
    track.style.transform=`translateX(${-index*step}px)`;
    if(immediate){track.getBoundingClientRect();track.classList.remove('is-resetting');}
    const selected=((index%total)+total)%total;
    document.querySelector('.regulars-counter').textContent=`${String(selected+1).padStart(2,'0')} / ${String(total).padStart(2,'0')}`;
    document.querySelector('.regulars-status').textContent=`Review ${selected+1} of ${total}`;
  }
  function finishReview(){
    clearTimeout(fallback);
    if(index>=total*2){index-=total;paintReview(true);}
    if(index<total){index+=total;paintReview(true);}
    busy=false;
  }
  function moveReview(direction){
    if(busy)return;
    busy=true;index+=direction;paintReview();
    if(reducedMotion.matches)finishReview();
    else fallback=setTimeout(finishReview,650);
  }
  function sizeReviews(){
    const card=track.firstElementChild;
    step=card.getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap);
    paintReview(true);
  }
  document.querySelector('[data-review-prev]').addEventListener('click',()=>moveReview(-1));
  document.querySelector('[data-review-next]').addEventListener('click',()=>moveReview(1));
  track.addEventListener('transitionend',event=>{if(event.target===track&&event.propertyName==='transform')finishReview();});
  viewport.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();moveReview(event.key==='ArrowRight'?1:-1);}});
  let swipeX=null;
  viewport.addEventListener('pointerdown',event=>{swipeX=event.clientX;});
  viewport.addEventListener('pointerup',event=>{if(swipeX!==null&&Math.abs(event.clientX-swipeX)>45)moveReview(event.clientX<swipeX?1:-1);swipeX=null;});
  viewport.addEventListener('pointercancel',()=>{swipeX=null;});
  addEventListener('resize',sizeReviews);
  sizeReviews();
  document.fonts?.ready.then(sizeReviews);

  const planForm=document.querySelector('#visit-plan-form');
  const planDate=planForm.elements.date;
  const planTime=planForm.elements.time;
  planDate.min=indiaParts().date;
  planDate.value=indiaParts().date;
  for(let hour=6;hour<23;hour++)for(const minute of [0,30]){
    const option=document.createElement('option');
    option.value=`${String(hour).padStart(2,'0')}:${String(minute).padStart(2,'0')}`;
    option.textContent=`${hour%12||12}:${String(minute).padStart(2,'0')} ${hour<12?'AM':'PM'}`;
    planTime.append(option);
  }
  planTime.value='18:30';
  planTime.addEventListener('change',()=>planTime.setCustomValidity(''));
  planDate.addEventListener('change',()=>planTime.setCustomValidity(''));
  planForm.addEventListener('submit',event=>{
    event.preventDefault();
    planTime.setCustomValidity('');
    const when=new Date(`${planDate.value}T${planTime.value}:00+05:30`);
    if(when.getTime()<=Date.now()){planTime.setCustomValidity('Choose a future visit time.');planTime.reportValidity();return;}
    if(!planForm.reportValidity())return;
    const plan={name:planForm.elements.name.value.trim(),date:planDate.value,time:planTime.value,guests:Number(planForm.elements.guests.value)};
    if(!plan.name){planForm.elements.name.setCustomValidity('Enter your name.');planForm.elements.name.reportValidity();return;}
    let stored=true;
    try{localStorage.setItem('br-tapri-visit-plan',JSON.stringify(plan));}catch{stored=false;}
    const formatted=new Intl.DateTimeFormat('en-IN',{timeZone:'Asia/Kolkata',dateStyle:'medium',timeStyle:'short'}).format(when);
    document.querySelector('.plan-result').textContent=`Visit plan ${stored ? 'saved' : 'prepared'} for ${plan.name}: ${plan.guests} ${plan.guests===1?'guest':'guests'}, ${formatted}. No table has been reserved. Call the café to confirm.`;
  });
  planForm.elements.name.addEventListener('input',()=>planForm.elements.name.setCustomValidity(''));

  const passForm=document.querySelector('.pass-form');
  passForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!passForm.reportValidity())return;
    const email=passForm.elements.email.value.trim().toLowerCase();
    let stored=true;
    try{localStorage.setItem('br-tapri-first-chai-pass',JSON.stringify({email,savedAt:new Date().toISOString()}));}catch{stored=false;}
    document.querySelector('.pass-status').textContent=stored ? `Pass saved on this device for ${email}. Email delivery is not connected yet.` : `Pass prepared for ${email}. Browser storage and email delivery are unavailable.`;
  });
})();
