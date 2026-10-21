(() => {
  const section = document.querySelector('.counter-section');
  if (!section) return;
  const products = [...document.querySelectorAll('.counter-card, .kitchen-card')].map(card => ({
    id: card.dataset.product,
    name: card.querySelector('h3').textContent,
    price: Number(card.dataset.price),
    card
  }));
  const bag = document.querySelector('#bag-dialog');
  const items = bag.querySelector('.bag-items');
  const summary = bag.querySelector('.bag-summary');
  const badge = document.querySelector('.bag-button span');
  const live = section.querySelector('.counter-live');
  const menu = document.querySelector('#menu-dialog');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const quantities = new Map();
  const feedbackTimers = new Map();
  try {
    const saved = JSON.parse(localStorage.getItem('br-tapri-bag') || '{}');
    products.forEach(product => {
      const quantity = saved?.[product.id];
      if (Number.isInteger(quantity) && quantity > 0 && quantity <= 99) quantities.set(product.id, quantity);
    });
  } catch { /* The bag also works when browser storage is unavailable. */ }
  const money = value => `₹${value}`;

  function change(product, delta) {
    const quantity = Math.max(0, Math.min(99, (quantities.get(product.id) || 0) + delta));
    if (quantity) quantities.set(product.id, quantity);
    else quantities.delete(product.id);
    renderBag();
    live.textContent = `${product.name}: ${quantity} in your bag.`;
  }
  function renderBag() {
    items.replaceChildren();
    let total = 0;
    let count = 0;
    products.forEach(product => {
      const quantity = quantities.get(product.id) || 0;
      if (!quantity) return;
      count += quantity;
      total += quantity * product.price;
      const row = document.createElement('div');
      row.className = 'bag-line';
      const description = document.createElement('div');
      const title = document.createElement('h3');
      title.textContent = product.name;
      const price = document.createElement('p');
      price.className = 'bag-line-price';
      price.textContent = `${money(product.price)} each · ${money(product.price * quantity)}`;
      description.append(title, price);
      const controls = document.createElement('div');
      controls.className = 'bag-quantity';
      const minus = document.createElement('button');
      minus.type = 'button';
      minus.textContent = '−';
      minus.setAttribute('aria-label', `Remove one ${product.name}`);
      const amount = document.createElement('span');
      amount.textContent = quantity;
      const plus = document.createElement('button');
      plus.type = 'button';
      plus.textContent = '+';
      plus.disabled = quantity === 99;
      plus.setAttribute('aria-label', `Add one ${product.name}`);
      minus.addEventListener('click', () => {
        change(product, -1);
        const target = items.querySelector(`[data-bag-product="${product.id}"] button`) || bag.querySelector('.close-dialog');
        target.focus();
      });
      plus.addEventListener('click', () => {
        change(product, 1);
        items.querySelector(`[data-bag-product="${product.id}"] .bag-quantity button:last-child`).focus();
      });
      row.dataset.bagProduct = product.id;
      controls.append(minus, amount, plus);
      row.append(description, controls);
      items.append(row);
    });
    if (!count) {
      const empty = document.createElement('p');
      empty.className = 'bag-empty';
      empty.textContent = 'Your bag is empty. Something from the counter?';
      items.append(empty);
    }
    badge.textContent = String(count).padStart(2, '0');
    document.querySelector('.bag-button').setAttribute('aria-label', `Open bag, ${count} ${count === 1 ? 'item' : 'items'}`);
    summary.hidden = !count;
    summary.querySelector('strong').textContent = money(total);
    try { localStorage.setItem('br-tapri-bag', JSON.stringify(Object.fromEntries(quantities))); } catch { /* Keep the in-memory bag. */ }
  }
  products.forEach(product => {
    const button = product.card.querySelector('.counter-add');
    button.addEventListener('click', () => {
      if ((quantities.get(product.id) || 0) === 99) {
        live.textContent = `Your bag already has 99 ${product.name}.`;
        return;
      }
      change(product, 1);
      button.textContent = 'Added ✓';
      button.classList.add('is-added');
      clearTimeout(feedbackTimers.get(product.id));
      feedbackTimers.set(product.id, setTimeout(() => {
        button.textContent = 'Add +';
        button.classList.remove('is-added');
      }, 1000));
    });
  });
  function goToCounter(target = section) {
    target.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
  }
  document.querySelectorAll('[data-counter-jump]').forEach(button => button.addEventListener('click', () => {
    if (menu.open) menu.close();
    if (bag.open) bag.close();
    goToCounter();
  }));
  menu.querySelectorAll('[data-menu-product]').forEach(button => button.addEventListener('click', () => {
    menu.close();
    const product = products.find(product => product.id === button.dataset.menuProduct);
    if (product) goToCounter(product.card);
  }));
  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: .12 });
    products.forEach(product => observer.observe(product.card));
  } else products.forEach(product => product.card.classList.add('is-visible'));
  reducedMotion.addEventListener('change', () => {
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
    if (!headerQueued) { headerQueued = true; requestAnimationFrame(updateHeader); }
  }
  addEventListener('scroll', requestHeaderUpdate, { passive: true });
  addEventListener('resize', requestHeaderUpdate);
  updateHeader();
  renderBag();
})();
