(() => {
  const section = document.querySelector('.table-section');
  if (!section) return;
  const objects = [...section.querySelectorAll('.table-object')];
  const stage = section.querySelector('.table-stage');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.max(0, Math.min(1, value));
  let queued = false;
  function update() {
    const bounds = section.getBoundingClientRect();
    const distance = Math.max(1, section.offsetHeight - stage.offsetHeight);
    const progress = clamp(-bounds.top / distance);
    const surface = clamp((innerHeight * .85 - bounds.top) / (innerHeight * .4));
    section.style.setProperty('--table-progress', progress);
    section.style.setProperty('--surface-opacity', surface);
    section.style.setProperty('--table-cue-opacity', 1 - clamp((progress - .68) / .10));
    section.style.setProperty('--table-cue-events', progress > .78 ? 'none' : 'auto');
    section.classList.toggle('is-table-visible', bounds.top < innerHeight && bounds.bottom > 0);
    objects.forEach(object => {
      const order = Number(object.style.getPropertyValue('--table-order'));
      // Give the bare surface its own beat, then place exactly one product at a time.
      const phase = clamp((progress - .15 - order * .075) / .06);
      const rest = phase - 1;
      const ease = 1 + 2.70158 * rest ** 3 + 1.70158 * rest ** 2;
      const turn = parseFloat(object.style.getPropertyValue('--table-turn'));
      object.style.setProperty('--object-opacity', clamp(phase * 3));
      object.style.setProperty('--object-y', `${(1 - ease) * -55}px`);
      object.style.setProperty('--object-turn', `${(1 - ease) * turn}deg`);
      object.style.setProperty('--object-scale', .94 + ease * .06);
    });
    queued = false;
  }
  function requestUpdate() {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }
  addEventListener('scroll', requestUpdate, { passive: true });
  addEventListener('resize', requestUpdate);
  reducedMotion.addEventListener('change', requestUpdate);
  section.querySelector('.table-scroll-cue').addEventListener('click', () => {
    scrollTo({
      top: section.getBoundingClientRect().top + scrollY + .95 * (section.offsetHeight - stage.offsetHeight),
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  });
  update();
})();
