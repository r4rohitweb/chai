import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { products } from '../data/products.js';

const BagContext = createContext(null);
const storageKey = 'br-tapri-bag';
const money = value => `₹${value}`;

function readBag() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    return Object.fromEntries(products.flatMap(product => {
      const quantity = saved?.[product.id];
      return Number.isInteger(quantity) && quantity > 0 && quantity <= 99 ? [[product.id, quantity]] : [];
    }));
  } catch { return {}; }
}

export function BagProvider({ children }) {
  const [quantities, setQuantities] = useState(readBag);
  const [announcement, setAnnouncement] = useState('');
  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify(quantities)); } catch { /* The bag still works in memory. */ }
  }, [quantities]);
  function change(productId, delta) {
    setQuantities(previous => {
      const next = { ...previous };
      const quantity = Math.max(0, Math.min(99, (previous[productId] || 0) + delta));
      if (quantity) next[productId] = quantity;
      else delete next[productId];
      return next;
    });
    const product = products.find(item => item.id === productId);
    setAnnouncement(`${product.name}: ${Math.max(0, Math.min(99, (quantities[productId] || 0) + delta))} in your bag.`);
  }
  return <BagContext.Provider value={{ quantities, change, announcement }}>{children}</BagContext.Provider>;
}

export function BagButton() {
  const { quantities } = useContext(BagContext);
  const count = Object.values(quantities).reduce((sum, quantity) => sum + quantity, 0);
  return <button className="bag-button" aria-label={`Open bag, ${count} ${count === 1 ? 'item' : 'items'}`} data-dialog="bag-dialog">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 8h14l-2 12H7L5 8Z" stroke="currentColor" strokeWidth="1.5" /><path d="m9 9 3-6 3 6" stroke="currentColor" strokeWidth="1.5" /></svg>
    <span>{String(count).padStart(2, '0')}</span>
  </button>;
}

export function AddToBag({ productId }) {
  const { quantities, change } = useContext(BagContext);
  const [added, setAdded] = useState(false);
  const timeout = useRef(null);
  useEffect(() => () => clearTimeout(timeout.current), []);
  function add() {
    if ((quantities[productId] || 0) >= 99) return;
    change(productId, 1);
    setAdded(true);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setAdded(false), 1000);
  }
  return <button className={`counter-add${added ? ' is-added' : ''}`} onClick={add} disabled={(quantities[productId] || 0) >= 99} aria-label={`Add ${products.find(product => product.id === productId).name} to bag`}>{added ? 'Added ✓' : 'Add +'}</button>;
}

export function BagAnnouncement() {
  const { announcement } = useContext(BagContext);
  return <p className="counter-live" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>;
}

export function BagContents() {
  const { quantities, change } = useContext(BagContext);
  const selected = products.filter(product => quantities[product.id]);
  const total = selected.reduce((sum, product) => sum + product.price * quantities[product.id], 0);
  function remove(product) {
    if (quantities[product.id] === 1) document.querySelector('#bag-dialog .close-dialog').focus();
    change(product.id, -1);
  }
  return <>
    <div className="bag-items">
      {!selected.length && <p className="bag-empty">Your bag is empty. Something from the counter?</p>}
      {selected.map(product => <div className="bag-line" data-bag-product={product.id} key={product.id}>
        <div><h3>{product.name}</h3><p className="bag-line-price">{money(product.price)} each · {money(product.price * quantities[product.id])}</p></div>
        <div className="bag-quantity">
          <button type="button" aria-label={`Remove one ${product.name}`} onClick={() => remove(product)}>−</button>
          <span>{quantities[product.id]}</span>
          <button type="button" aria-label={`Add one ${product.name}`} disabled={quantities[product.id] === 99} onClick={() => change(product.id, 1)}>+</button>
        </div>
      </div>)}
    </div>
    <div className="bag-summary" hidden={!selected.length}><span>Total</span><strong>{money(total)}</strong></div>
  </>;
}
