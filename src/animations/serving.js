export function initServing(scope) {
  const section = document.querySelector('.serving-scroll');
  if (!section) return;
  const glass = section.querySelector('.serving-glass');
  const fill = section.querySelector('.serving-fill');
  const surface = section.querySelector('.serving-surface');
  const meniscus = section.querySelector('.serving-meniscus');
  const pan = section.querySelector('.high-pour-pan');
  const biscuit = section.querySelector('.dunking-biscuit');
  const soak = section.querySelector('.biscuit-soak');
  const chapters = [...section.querySelectorAll('.serving-chapter')];
  const steps = [...section.querySelectorAll('.serving-step')];
  const meter = section.querySelector('.serving-meter');
  const value = section.querySelector('.serving-value');
  const unit = section.querySelector('.serving-unit');
  const note = section.querySelector('.serving-meter-note');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.min(1, Math.max(0, value));
  const smooth = value => {
    const t = clamp(value);
    return t * t * (3 - 2 * t);
  };
  const mix = (a, b, t) => a + (b - a) * t;
  let queued = false;
  function update() {
    const bounds = section.getBoundingClientRect();
    const progress = clamp(-bounds.top / Math.max(1, section.offsetHeight - innerHeight));
    const amount = smooth((progress - .06) / .35);
    const change = smooth((progress - .46) / .10);
    const leave = smooth((progress - .42) / .10);
    const dip = smooth((progress - .61) / .08);
    const lift = smooth((progress - .89) / .09);
    const dunk = progress >= .51;
    const scale = mix(.6, .9, change);
    const x = 445 - 275 * scale;
    const y = mix(350, 260, change);
    const level = mix(309, 62, amount);
    const radius = 103 - (level - 25) * (29 / 282);
    const liquidY = y + level * scale;
    const pouring = smooth((progress - .02) / .03) * (1 - smooth((progress - .40) / .035));
    section.style.setProperty('--serving-progress', progress.toFixed(4));
    section.style.setProperty('--pan-opacity', (1 - leave).toFixed(4));
    section.style.setProperty('--pour-opacity', pouring.toFixed(4));
    section.style.setProperty('--dunk-opacity', smooth((progress - .52) / .055).toFixed(4));
    section.style.setProperty('--dunk-ripple-opacity', (dip * (1 - lift)).toFixed(4));
    glass.setAttribute('transform', `translate(${x} ${y}) scale(${scale})`);
    fill.setAttribute('y', level);
    fill.setAttribute('height', 344 - level);
    surface.setAttribute('cy', level);
    surface.setAttribute('rx', radius);
    meniscus.setAttribute('cy', level + 1);
    meniscus.setAttribute('rx', radius - 4);
    const angle = mix(-25, -65, smooth(progress / .09));
    const radians = angle * Math.PI / 180;
    pan.setAttribute('transform', `translate(${445 + 125 * Math.cos(radians)} ${280 + 125 * Math.sin(radians) - leave * 220}) rotate(${angle})`);
    section.querySelector('.chai-stream').setAttribute('d', `M445 280Q443 315 445 350T445 ${liquidY}`);
    section.querySelector('.chai-stream-shine').setAttribute('d', `M443 280Q441 315 443 350T443 ${liquidY}`);
    section.querySelector('.serving-splash').setAttribute('transform', `translate(0 ${liquidY - 537})`);
    section.querySelector('.serving-pan-shadow').style.opacity = (1 - leave).toFixed(4);
    const shadow = section.querySelector('.serving-glass-shadow');
    const base = y + 350 * scale;
    const shadowX = 445 + 95 * (scale / .6);
    shadow.setAttribute('cx', shadowX);
    shadow.setAttribute('cy', base - 20);
    shadow.setAttribute('rx', 106 * (scale / .6));
    shadow.setAttribute('transform', `rotate(-10 ${shadowX} ${base - 20})`);
    const contact = section.querySelector('.serving-contact-shadow');
    contact.setAttribute('cy', base);
    contact.setAttribute('rx', 48 * (scale / .6));
    const biscuitY = mix(70, liquidY - 100, dip) - lift * 150;
    biscuit.setAttribute('transform', `translate(396 ${biscuitY}) rotate(${mix(0, -6, lift)} 49 65) scale(.65)`);
    soak.setAttribute('opacity', smooth((progress - .69) / .15));
    section.querySelector('.serve-waterline').setAttribute('height', liquidY + 2);
    const snap = smooth((progress - .90) / .08);
    section.querySelector('.serve-biscuit-cut').setAttribute('d', snap > 0 ? 'M-10-10H160V155L145 153 128 158 111 152 97 157 82 151 66 159 53 153 38 158 24 151 14 156-10 155Z' : 'M-10-10H160V205H-10Z');
    const piece = section.querySelector('.broken-biscuit-piece');
    piece.setAttribute('opacity', snap > 0 ? 1 - snap * .9 : 0);
    piece.setAttribute('transform', `translate(0 ${snap * 120}) rotate(${snap * 18} 75 165)`);
    section.querySelector('.dunk-ripples').setAttribute('transform', `translate(0 ${liquidY - 316})`);
    section.querySelector('.dunk-front-liquid').setAttribute('opacity', dip * (1 - lift));
    section.querySelector('.dunk-front-liquid').setAttribute('transform', `translate(0 ${liquidY - 320})`);
    chapters.forEach((chapter, index) => {
      const opacity = index === 0 ? 1 - change : change;
      chapter.style.opacity = opacity;
      chapter.style.translate = `0 ${(1 - opacity) * 24}px`;
      chapter.setAttribute('aria-hidden', String(index !== Number(dunk)));
    });
    steps.forEach((step, index) => {
      if (index === Number(dunk)) step.setAttribute('aria-current', 'step');else step.removeAttribute('aria-current');
    });
    const seconds = clamp((progress - .68) / .20) * 4.1;
    value.textContent = dunk ? seconds.toFixed(1) : Math.round(amount * 90);
    unit.textContent = dunk ? 's' : 'ml';
    note.textContent = dunk ? 'GLUCOSE BISCUIT · SAFE TILL 3.2 S' : 'ONE CUTTING · 90 ML · FRESH POURED';
    meter.classList.toggle('is-dunking', dunk);
    meter.classList.toggle('is-overdunked', dunk && seconds > 3.2);
    section.classList.toggle('is-dunking', dunk);
    section.classList.toggle('is-serving-visible', bounds.top < innerHeight && bounds.bottom > 0);
    queued = false;
  }
  function requestUpdate() {
    if (!queued) {
      queued = true;
      scope.frame(update);
    }
  }
  function goTo(progress) {
    scrollTo({
      top: section.getBoundingClientRect().top + scrollY + progress * (section.offsetHeight - innerHeight),
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  }
  steps.forEach((step, index) => scope.listen(step, 'click', () => goTo(index === 0 ? .25 : .78)));
  scope.listen(section.querySelector('.serving-replay'), 'click', () => goTo(0));
  scope.listen(window, 'scroll', requestUpdate, {
    passive: true
  });
  scope.listen(window, 'resize', requestUpdate);
  scope.listen(reducedMotion, 'change', requestUpdate);
  update();
}
