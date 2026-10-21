// Keep browser-driven SVG animation outside React's render cycle, while
// releasing every resource when an effect is replaced or unmounted.
export function createAnimationScope() {
  let active = true;
  const listeners = [];
  const observers = new Set();
  const frames = new Set();
  const timeouts = new Set();
  const intervals = new Set();
  const restorers = [];
  return {
    listen(target, type, callback, options) {
      target.addEventListener(type, callback, options);
      listeners.push(() => target.removeEventListener(type, callback, options));
    },
    frame(callback) {
      if (!active) return null;
      const id = requestAnimationFrame(time => {
        frames.delete(id);
        if (active) callback(time);
      });
      frames.add(id);
      return id;
    },
    cancelFrame(id) { cancelAnimationFrame(id); frames.delete(id); },
    timeout(callback, delay) {
      const id = setTimeout(() => {
        timeouts.delete(id);
        if (active) callback();
      }, delay);
      timeouts.add(id);
      return id;
    },
    clearTimeout(id) { clearTimeout(id); timeouts.delete(id); },
    interval(callback, delay) {
      const id = setInterval(() => { if (active) callback(); }, delay);
      intervals.add(id);
      return id;
    },
    clearInterval(id) { clearInterval(id); intervals.delete(id); },
    observer(observer) { observers.add(observer); return observer; },
    guard(callback) { return (...args) => { if (active) return callback(...args); }; },
    restore(callback) { restorers.push(callback); },
    dispose() {
      active = false;
      listeners.forEach(remove => remove());
      observers.forEach(observer => observer.disconnect());
      frames.forEach(cancelAnimationFrame);
      timeouts.forEach(clearTimeout);
      intervals.forEach(clearInterval);
      restorers.reverse().forEach(restore => restore());
    },
  };
}
