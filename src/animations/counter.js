export function initCounter(scope) {
  const section = document.querySelector('.counter-section');
  if (!section) return;
  const products = [...document.querySelectorAll('.counter-card, .kitchen-card')].map(card => ({
    id: card.dataset.product,
    name: card.querySelector('h3').textContent,
    price: Number(card.dataset.price),
    card
  }));
  const bag = document.querySelector('#bag-dialog');
  const menu = document.querySelector('#menu-dialog');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  function goToCounter(target = section) {
    target.scrollIntoView({
      behavior: reducedMotion.matches ? 'instant' : 'smooth',
      block: 'start'
    });
  }
  document.querySelectorAll('[data-counter-jump]').forEach(button => scope.listen(button, 'click', () => {
    if (menu.open) menu.close();
    if (bag.open) bag.close();
    goToCounter();
  }));
  menu.querySelectorAll('[data-menu-product]').forEach(button => scope.listen(button, 'click', () => {
    menu.close();
    const product = products.find(product => product.id === button.dataset.menuProduct);
    if (product) goToCounter(product.card);
  }));
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = scope.observer(new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), {
      threshold: .12
    }));
    products.forEach(product => observer.observe(product.card));
  } else products.forEach(product => product.card.classList.add('is-visible'));
  scope.listen(reducedMotion, 'change', () => {
    if (reducedMotion.matches) products.forEach(product => product.card.classList.add('is-visible'));
  });
  const header = document.querySelector('.site-header');
  const lightSections = [...document.querySelectorAll('.counter-section, .kitchen-section, .regulars-section, .closing-banner-wrap')];
  let headerQueued = false;
  function updateHeader() {
    header.classList.toggle('on-counter', lightSections.some(element => {
      const rect = element.getBoundingClientRect();
      return rect.top <= 58 && rect.bottom > 58;
    }));
    headerQueued = false;
  }
  function requestHeaderUpdate() {
    if (!headerQueued) {
      headerQueued = true;
      scope.frame(updateHeader);
    }
  }
  scope.listen(window, 'scroll', requestHeaderUpdate, {
    passive: true
  });
  scope.listen(window, 'resize', requestHeaderUpdate);
  updateHeader();
}
