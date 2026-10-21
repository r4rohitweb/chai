(() => {
  const section = document.querySelector('.house-section');
  if (!section) return;
  const intro = section.querySelector('.house-intro-scroll');
  const stage = section.querySelector('.house-intro');
  const words = [];
  section.querySelectorAll('.house-line').forEach(line => {
    const walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      const fragment = document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(text => {
        if (!text.trim()) fragment.append(document.createTextNode(text));
        else {
          const span = document.createElement('span');
          span.className = 'house-word';
          span.textContent = text;
          fragment.append(span);
          words.push(span);
        }
      });
      node.replaceWith(fragment);
    });
  });
  const details = [...section.querySelectorAll('.house-reveal')];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = n => Math.max(0, Math.min(1, n));
  let queued = false;
  function update() {
    const bounds = intro.getBoundingClientRect();
    const progress = clamp(-bounds.top / Math.max(1, intro.offsetHeight - stage.offsetHeight));
    words.forEach((word, index) => {
      const phase = reducedMotion.matches ? 1 : clamp((progress * 1.14 - index / words.length) / .12);
      word.style.setProperty('--word-light', .14 + phase * .86);
    });
    const highlight = clamp((progress - .25) / .15);
    section.style.setProperty('--highlight-scale', .85 + highlight * .15);
    details.forEach(detail => {
      const rect = detail.getBoundingClientRect();
      const phase = clamp((innerHeight * .92 - rect.top) / (innerHeight * .28));
      detail.style.setProperty('--detail-opacity', phase);
      detail.style.setProperty('--detail-y', `${(1 - phase) * 35}px`);
      if (detail.classList.contains('cutting-blueprint')) detail.style.setProperty('--diagram-progress', phase);
    });
    const sectionBounds = section.getBoundingClientRect();
    section.classList.toggle('is-house-visible', sectionBounds.top < innerHeight && sectionBounds.bottom > 0);
    queued = false;
  }
  function requestUpdate() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  addEventListener('scroll', requestUpdate, { passive: true });
  addEventListener('resize', requestUpdate);
  reducedMotion.addEventListener('change', requestUpdate);
  update();
})();
