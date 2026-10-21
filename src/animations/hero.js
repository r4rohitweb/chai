export function initHero(scope) {
  const root = document.documentElement;
  const section = document.querySelector('.hero-scroll');
  const teaFill = document.querySelector('.tea-fill');
  const teaSurface = document.querySelector('.tea-surface');
  const teaMeniscus = document.querySelector('.tea-meniscus');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const badges = [...document.querySelectorAll('.fact')].map((element, index) => ({
    element,
    start: .20 + index * .08,
    direction: index % 2 === 0 ? -1 : 1
  }));
  let queued = false;
  function updateScroll() {
    const distance = Math.max(1, section.offsetHeight - innerHeight);
    const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / distance));
    root.style.setProperty('--progress', progress.toFixed(4));
    root.style.setProperty('--intro-opacity', Math.max(0, 1 - progress * 3).toFixed(4));
    root.style.setProperty('--facts-opacity', Math.min(1, Math.max(0, (progress - .25) / .4)).toFixed(4));
    // Each badge follows its own scroll interval, including a small spring overshoot.
    // Scrubbing backwards reverses the entrance and resets it for the next scroll.
    badges.forEach(({
      element,
      start,
      direction
    }) => {
      const phase = Math.min(1, Math.max(0, (progress - start) / .30));
      const remaining = phase - 1;
      const spring = 1 + 2.70158 * remaining ** 3 + 1.70158 * remaining ** 2;
      element.style.setProperty('--badge-opacity', Math.min(1, phase * 3).toFixed(4));
      element.style.setProperty('--badge-x', `${direction * (1 - spring) * 45}px`);
      element.style.setProperty('--badge-y', `${(1 - spring) * 70}px`);
      element.style.setProperty('--badge-turn', `${direction * (1 - spring) * 22}deg`);
      element.style.setProperty('--badge-scale', (.7 + spring * .3).toFixed(4));
    });
    // Lower the liquid within the tapered glass, retaining its elliptical surface.
    const level = 62 + progress * 240;
    const radius = 103 - (level - 25) * (29 / 282);
    teaFill.setAttribute('y', level.toFixed(2));
    teaFill.setAttribute('height', (344 - level).toFixed(2));
    teaSurface.setAttribute('cy', level.toFixed(2));
    teaSurface.setAttribute('rx', radius.toFixed(2));
    teaMeniscus.setAttribute('cy', (level + 1).toFixed(2));
    teaMeniscus.setAttribute('rx', (radius - 4).toFixed(2));
    document.body.classList.toggle('is-sipped', progress > .65);
    queued = false;
  }
  function requestUpdate() {
    if (!queued) {
      queued = true;
      scope.frame(updateScroll);
    }
  }
  scope.listen(window, 'scroll', requestUpdate, {
    passive: true
  });
  scope.listen(window, 'resize', requestUpdate);
  scope.listen(reducedMotion, 'change', requestUpdate);
  updateScroll();
  scope.listen(document.querySelector('.scroll-cue'), 'click', () => {
    scrollTo({
      top: section.offsetHeight - innerHeight,
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  });
  scope.listen(document.querySelector('.replay'), 'click', () => {
    scrollTo({
      top: 0,
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  });
  if (matchMedia('(pointer: fine)').matches) {
    scope.listen(document.querySelector('.hero'), 'pointermove', event => {
      if (reducedMotion.matches) return;
      root.style.setProperty('--pointer-x', `${(event.clientX / innerWidth - .5) * 5}px`);
      root.style.setProperty('--pointer-y', `${(event.clientY / innerHeight - .5) * 4}px`);
    });
    scope.listen(document.querySelector('.hero'), 'pointerleave', () => {
      root.style.setProperty('--pointer-x', '0px');
      root.style.setProperty('--pointer-y', '0px');
    });
  }
  document.querySelectorAll('[data-dialog]').forEach(button => {
    scope.listen(button, 'click', () => document.getElementById(button.dataset.dialog).showModal());
  });
  document.querySelectorAll('dialog').forEach(dialog => {
    dialog.querySelectorAll('.close-dialog, .close-menu').forEach(button => {
      scope.listen(button, 'click', () => dialog.close());
    });
    scope.listen(dialog, 'click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
  });
}
