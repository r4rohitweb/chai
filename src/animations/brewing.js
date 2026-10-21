export function initBrewing(scope) {
  const section = document.querySelector('.brewing-scroll');
  if (!section) return;
  const header = document.querySelector('.site-header');
  const darkSections = [...document.querySelectorAll('.brewing-scroll, [data-dark-section]')];
  const chapters = [...section.querySelectorAll('.brewing-chapter')];
  const steps = [...section.querySelectorAll('.brew-step')];
  const ingredients = [...section.querySelectorAll('.ingredient')];
  const labels = [...section.querySelectorAll('[data-spice]')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.min(1, Math.max(0, value));
  const smooth = value => {
    const t = clamp(value);
    return t * t * (3 - 2 * t);
  };
  let queued = false;
  function update() {
    const bounds = section.getBoundingClientRect();
    const progress = clamp(-bounds.top / Math.max(1, section.offsetHeight - innerHeight));
    const milk = smooth((progress - .39) / .22);
    const boiling = smooth((progress - .65) / .16);
    section.style.setProperty('--brew-progress', progress.toFixed(4));
    section.style.setProperty('--dark-brew', smooth((progress - .23) / .12).toFixed(4));
    section.style.setProperty('--milky-brew', milk.toFixed(4));
    section.style.setProperty('--milk-opacity', (smooth((progress - .36) / .05) * (1 - smooth((progress - .58) / .06))).toFixed(4));
    section.style.setProperty('--milk-scale', smooth((progress - .35) / .05).toFixed(4));
    section.style.setProperty('--boil', boiling.toFixed(4));
    section.style.setProperty('--steam-strength', (.03 + milk * .2 + boiling * .6).toFixed(4));
    // Three rises, each followed by a brief simmer, while the final chapter is pinned.
    const boilWave = Math.sin(clamp((progress - .67) / .33) * Math.PI * 6);
    section.querySelector('.pan-liquid').style.translate = `0 ${reducedMotion.matches ? 0 : -boiling * (9 + boilWave * 5)}px`;
    ingredients.forEach((ingredient, index) => {
      const phase = smooth((progress - (.015 + index * .045)) / .075);
      ingredient.style.setProperty('--ingredient-opacity', clamp(phase * 2).toFixed(4));
      ingredient.style.setProperty('--ingredient-drop', `${(1 - phase) * -170}px`);
    });
    labels.forEach(label => {
      const phase = smooth((progress - (.015 + Number(label.dataset.spice) * .045)) / .075);
      label.style.setProperty('--ingredient-opacity', phase.toFixed(4));
      label.style.setProperty('--ingredient-drop', `${(1 - phase) * -100}px`);
    });
    const second = smooth((progress - .32) / .06);
    const third = smooth((progress - .64) / .06);
    const opacities = [1 - second, second * (1 - third), third];
    const current = progress < .35 ? 0 : progress < .67 ? 1 : 2;
    chapters.forEach((chapter, index) => {
      chapter.style.opacity = opacities[index].toFixed(4);
      chapter.style.translate = `0 ${(1 - opacities[index]) * 20}px`;
      chapter.setAttribute('aria-hidden', String(index !== current));
    });
    steps.forEach((step, index) => {
      if (index === current) step.setAttribute('aria-current', 'step');else step.removeAttribute('aria-current');
    });
    header.classList.toggle('on-dark', darkSections.some(element => {
      const rect = element.getBoundingClientRect();
      return rect.top <= 58 && rect.bottom > 58;
    }));
    section.classList.toggle('is-brewing-visible', bounds.top < innerHeight && bounds.bottom > 0);
    queued = false;
  }
  function requestUpdate() {
    if (!queued) {
      queued = true;
      scope.frame(update);
    }
  }
  scope.listen(window, 'scroll', requestUpdate, {
    passive: true
  });
  scope.listen(window, 'resize', requestUpdate);
  scope.listen(reducedMotion, 'change', requestUpdate);
  const stagePositions = [.16, .47, .86];
  steps.forEach((step, index) => scope.listen(step, 'click', () => {
    const top = section.getBoundingClientRect().top + scrollY;
    scrollTo({
      top: top + stagePositions[index] * (section.offsetHeight - innerHeight),
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  }));
  update();
}
