(() => {
  const section = document.querySelector('.dunk-test');
  if (!section) return;
  const configs = {
    glucose: { name:'Glucose', subtitle:'THE CLASSIC', sweet:[2.4,3.2], limit:4, message:'Glucose: three seconds. It forgives nothing after four.', shape:'M4 4H144V194H4Z' },
    rusk: { name:'Rusk', subtitle:'TWICE BAKED', sweet:[5,7], limit:8, message:'Rusk: twice baked, and built for a longer dip.', shape:'M5 3H143V202H5Z' },
    osmania: { name:'Osmania', subtitle:'SWEET & SALTY', sweet:[1.5,2.3], limit:3, message:'Osmania: sweet, salty, and happiest with a short dip.', shape:'M-4 110a78 72 0 1 0 156 0a78 72 0 1 0-156 0' },
    nankhatai: { name:'Nankhatai', subtitle:'GHEE SHORTBREAD', sweet:[1,1.7], limit:2.4, message:'Nankhatai: a quick dip. This one likes to crumble.', shape:'M1 110a73 65 0 1 0 146 0a73 65 0 1 0-146 0' }
  };
  const options = [...section.querySelectorAll('.dunk-option')];
  const hold = section.querySelector('.dunk-hold');
  const timer = section.querySelector('.dunk-seconds');
  const result = section.querySelector('.dunk-result');
  const biscuit = section.querySelector('.game-biscuit');
  const main = section.querySelector('.game-biscuit-main');
  const fragment = section.querySelector('.game-biscuit-fragment');
  const cut = section.querySelector('.game-biscuit-cut');
  const soak = section.querySelector('.game-soak');
  const ripples = section.querySelector('.game-ripples');
  const header = document.querySelector('.site-header');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  let selected = 'glucose', elapsed = 0, saved = 0, lost = 0;
  let holding = false, broken = false, startedAt = 0, brokenAt = 0, dip = 0;
  let frame = null, previousTime = 0, pointer = null;
  const fullCut = 'M-10-10H165V220H-10Z';
  const brokenCut = 'M-10-10H165V156L143 153 129 159 112 151 96 158 81 152 65 158 49 153 34 160 18 152-10 157Z';
  const format = n => Number.isInteger(n) ? String(n) : n.toFixed(1);
  function say(text, kind = '') {
    result.textContent = text;
    result.classList.toggle('is-perfect', kind === 'perfect');
    result.classList.toggle('is-lost', kind === 'lost');
  }
  function updateStats() {
    section.querySelector('.dunk-saved').textContent = String(saved).padStart(2,'0');
    section.querySelector('.dunk-lost').textContent = String(lost).padStart(2,'0');
  }
  function setHolding(value) {
    holding = value;
    hold.setAttribute('aria-pressed', String(value));
    hold.textContent = value ? 'RELEASE TO SAVE' : 'HOLD TO DUNK';
    section.classList.toggle('is-holding', value);
  }
  function paint(now) {
    frame = null;
    const dt = previousTime ? Math.min(80, now - previousTime) : 16;
    previousTime = now;
    const config = configs[selected];
    if (holding) {
      elapsed = Math.min(config.limit, (now - startedAt) / 1000);
      if (elapsed >= config.limit) {
        broken = true;
        brokenAt = now;
        lost++;
        setHolding(false);
        updateStats();
        say('The chai wins. One biscuit lost. Try a shorter dip.', 'lost');
      }
    }
    const target = holding ? 1 : 0;
    dip = reducedMotion.matches ? target : dip + (target - dip) * (1 - Math.exp(-dt / 95));
    if (Math.abs(dip - target) < .002) dip = target;
    biscuit.setAttribute('transform', `translate(223 ${105 + dip * (120 + (selected === 'osmania' ? 15 : selected === 'nankhatai' ? 20 : 0))}) scale(.7)`);
    main.setAttribute('clip-path','url(#dunk-game-main-clip)');
    cut.setAttribute('d', broken ? brokenCut : fullCut);
    const age = broken ? now - brokenAt : 0;
    fragment.setAttribute('opacity', broken ? Math.max(0,1-age/800) : 0);
    fragment.setAttribute('transform', `translate(0 ${Math.min(120,age*.18)}) rotate(${Math.min(22,age*.035)} 75 160)`);
    soak.setAttribute('opacity', Math.min(.8, elapsed / config.limit));
    ripples.setAttribute('opacity', dip * .8);
    const display = elapsed.toFixed(1);
    if (timer.textContent !== display) timer.textContent = display;
    section.style.setProperty('--dunk-fill', `${Math.min(100,elapsed/config.limit*100)}%`);
    section.classList.toggle('is-broken', broken);
    if (holding || dip !== target || (broken && age < 850)) frame = requestAnimationFrame(paint);
    else previousTime = 0;
  }
  function requestPaint() { if (frame === null) frame = requestAnimationFrame(paint); }
  function start() {
    if (holding) return;
    elapsed = 0;
    broken = false;
    startedAt = performance.now();
    setHolding(true);
    say('Keep an eye on the sweet spot. Release to save your biscuit.');
    requestPaint();
  }
  function release(cancel = false) {
    if (!holding) return;
    const config = configs[selected];
    elapsed = Math.min(config.limit, (performance.now() - startedAt) / 1000);
    setHolding(false);
    if (cancel) { elapsed = 0; say(config.message); }
    else if (elapsed >= config.limit) {
      broken = true; brokenAt = performance.now(); lost++; updateStats();
      say('The chai wins. One biscuit lost. Try a shorter dip.', 'lost');
    } else {
      saved++; updateStats();
      if (elapsed >= config.sweet[0] && elapsed <= config.sweet[1]) say('Saved. A perfect tea-soaked bite.', 'perfect');
      else if (elapsed < config.sweet[0]) say('Saved, but still a little dry. Try the green sweet spot.');
      else say('Saved, just in time. The next dip could be shorter.');
    }
    requestPaint();
  }
  function choose(key) {
    if (holding) release(true);
    selected = key;
    elapsed = 0; broken = false;
    const config = configs[key];
    options.forEach(option => {
      const active = option.dataset.biscuit === key;
      option.setAttribute('aria-checked',String(active));
      option.tabIndex = active ? 0 : -1;
    });
    section.querySelectorAll('.game-selected-biscuit').forEach(use => use.setAttribute('href', `#dunk-game-${key}`));
    section.querySelector('.game-model-outline').setAttribute('d',config.shape);
    section.style.setProperty('--sweet-start',`${config.sweet[0]/config.limit*100}%`);
    section.style.setProperty('--sweet-width',`${(config.sweet[1]-config.sweet[0])/config.limit*100}%`);
    section.querySelector('.dunk-sweet-label').textContent = `SWEET SPOT ${format(config.sweet[0])}–${format(config.sweet[1])} S`;
    section.querySelector('.dunk-limit-label').textContent = `DONE AT ${format(config.limit)} S`;
    section.querySelector('.dunk-panel-caption').textContent = `LIVE · ${config.name.toUpperCase()} · ${config.subtitle}`;
    section.querySelector('.dunk-panel-hint').textContent = `${format(config.limit)}s`;
    say(config.message);
    requestPaint();
  }
  options.forEach((option,index) => {
    option.addEventListener('click', () => choose(option.dataset.biscuit));
    option.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next=(index+1)%options.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next=(index+options.length-1)%options.length;
      if (event.key === 'Home') next=0;
      if (event.key === 'End') next=options.length-1;
      if (next !== undefined) { event.preventDefault(); choose(options[next].dataset.biscuit); options[next].focus(); }
    });
  });
  hold.addEventListener('pointerdown', event => {
    if (!event.isPrimary || event.button !== 0) return;
    event.preventDefault();
    pointer = event.pointerId;
    hold.focus({preventScroll:true});
    hold.setPointerCapture(pointer);
    start();
  });
  hold.addEventListener('pointerup',event => { if (event.pointerId === pointer) { release(); pointer=null; } });
  hold.addEventListener('pointercancel',event => { if (event.pointerId === pointer) { release(true); pointer=null; } });
  hold.addEventListener('lostpointercapture',() => { if (holding && pointer !== null) release(true); pointer=null; });
  hold.addEventListener('keydown',event => {
    if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); if (!event.repeat) start(); }
  });
  hold.addEventListener('keyup',event => { if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); release(); } });
  hold.addEventListener('blur',() => release(true));
  addEventListener('blur',() => release(true));
  document.addEventListener('visibilitychange',() => { if (document.hidden) release(true); });
  section.querySelector('.dunk-restart').addEventListener('click',() => choose(selected));
  let headerQueued=false;
  function updateHeader() {
    const rect=section.getBoundingClientRect();
    header.classList.toggle('on-dunk',rect.top<=58 && rect.bottom>58);
    headerQueued=false;
  }
  function requestHeader() { if(!headerQueued){headerQueued=true;requestAnimationFrame(updateHeader);} }
  addEventListener('scroll',requestHeader,{passive:true});
  addEventListener('resize',requestHeader);
  choose('glucose');
  updateHeader();
})();
