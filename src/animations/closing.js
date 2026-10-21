export function initClosing(scope) {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const visit = document.querySelector('.visit-section');
  if (!visit) return;
  const revealItems = [...document.querySelectorAll('.closing-reveal')];
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const reveal = scope.observer(new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      }
    }), {
      threshold: .1
    }));
    revealItems.forEach(item => reveal.observe(item));
    const visibility = scope.observer(new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('is-closing-visible', entry.isIntersecting))));
    visibility.observe(visit);
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
    visit.classList.add('is-closing-visible');
  }
  scope.listen(reducedMotion, 'change', () => {
    if (reducedMotion.matches) revealItems.forEach(item => item.classList.add('is-visible'));
  });
  const stats = [...document.querySelectorAll('[data-stat-total]')];
  function countStats() {
    const start = performance.now();
    function tick(now) {
      const progress = reducedMotion.matches ? 1 : Math.min(1, (now - start) / 1350);
      const eased = 1 - (1 - progress) ** 3;
      stats.forEach(stat => {
        const value = Math.round(Number(stat.dataset.statTotal) * eased);
        stat.textContent = value.toLocaleString('en-IN') + (stat.dataset.statSuffix || '');
      });
      if (progress < 1) scope.frame(tick);
    }
    scope.frame(tick);
  }
  if ('IntersectionObserver' in window) {
    const observer = scope.observer(new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        countStats();
        observer.disconnect();
      }
    }, {
      threshold: .2
    }));
    observer.observe(document.querySelector('.cafe-stats'));
  } else countStats();
  function indiaParts() {
    const values = Object.fromEntries(new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(new Date()).map(part => [part.type, part.value]));
    return {
      date: `${values.year}-${values.month}-${values.day}`,
      minutes: Number(values.hour) * 60 + Number(values.minute)
    };
  }
  function updateOpenState() {
    const {
      minutes
    } = indiaParts();
    const open = minutes >= 360 && minutes < 1380;
    const state = document.querySelector('.visit-open-state');
    state.classList.toggle('is-closed', !open);
    state.querySelector('span:last-child').textContent = open ? 'OPEN NOW · THE PAN IS ON' : 'BACK AT 6 AM · EVERY DAY';
    const rows = [...document.querySelectorAll('.cafe-timeline li')];
    let current = 0;
    rows.forEach((row, index) => {
      if (minutes >= Number(row.dataset.dayMinute)) current = index;
    });
    rows.forEach((row, index) => {
      row.classList.toggle('is-now', index === current);
      row.querySelector('.day-now').textContent = minutes < 360 ? 'SOON' : 'NOW';
    });
  }
  updateOpenState();
  scope.interval(updateOpenState, 60000);
  const track = document.querySelector('.regulars-track');
  const viewport = document.querySelector('.regulars-viewport');
  const originals = [...track.children];
  const total = originals.length;
  const clones = () => originals.map(card => card.cloneNode(true));
  scope.restore(() => track.replaceChildren(...originals));
  track.replaceChildren(...clones(), ...originals, ...clones());
  let index = total,
    step = 0,
    busy = false,
    fallback = null;
  function paintReview(immediate = false) {
    if (immediate) track.classList.add('is-resetting');
    track.style.transform = `translateX(${-index * step}px)`;
    if (immediate) {
      track.getBoundingClientRect();
      track.classList.remove('is-resetting');
    }
    const selected = (index % total + total) % total;
    document.querySelector('.regulars-counter').textContent = `${String(selected + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    document.querySelector('.regulars-status').textContent = `Review ${selected + 1} of ${total}`;
  }
  function finishReview() {
    scope.clearTimeout(fallback);
    if (index >= total * 2) {
      index -= total;
      paintReview(true);
    }
    if (index < total) {
      index += total;
      paintReview(true);
    }
    busy = false;
  }
  function moveReview(direction) {
    if (busy) return;
    busy = true;
    index += direction;
    paintReview();
    if (reducedMotion.matches) finishReview();else fallback = scope.timeout(finishReview, 650);
  }
  function sizeReviews() {
    const card = track.firstElementChild;
    step = card.getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap);
    paintReview(true);
  }
  scope.listen(document.querySelector('[data-review-prev]'), 'click', () => moveReview(-1));
  scope.listen(document.querySelector('[data-review-next]'), 'click', () => moveReview(1));
  scope.listen(track, 'transitionend', event => {
    if (event.target === track && event.propertyName === 'transform') finishReview();
  });
  scope.listen(viewport, 'keydown', event => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      moveReview(event.key === 'ArrowRight' ? 1 : -1);
    }
  });
  let swipeX = null;
  scope.listen(viewport, 'pointerdown', event => {
    swipeX = event.clientX;
  });
  scope.listen(viewport, 'pointerup', event => {
    if (swipeX !== null && Math.abs(event.clientX - swipeX) > 45) moveReview(event.clientX < swipeX ? 1 : -1);
    swipeX = null;
  });
  scope.listen(viewport, 'pointercancel', () => {
    swipeX = null;
  });
  scope.listen(window, 'resize', sizeReviews);
  sizeReviews();
  document.fonts?.ready.then(scope.guard(sizeReviews));
}
