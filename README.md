# Chai & Chill

React and Vite version of the animated café website. All illustrations remain inline SVG in JSX.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Changes to components and styles update automatically.

## Build and view

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`. They can be hosted on any static web server.

With XAMPP running, `http://localhost/testing/chai/` serves the production build through `index.php`. Rebuild after editing to update that URL. `index.html` is the Vite source entry.

## Source

- `src/components/`: page sections, dialogs, and React forms.
- `src/state/BagContext.jsx`: shared bag state, quantity controls, and storage.
- `src/animations/`: scroll and SVG animation controllers with managed listeners, observers, frames, and timers.
- `src/hooks/useSiteAnimations.js`: starts the animation controllers and cleans them up on unmount.
- `src/styles/`: the existing responsive styles.
- `src/data/products.js`: product IDs, names, and prices.

The bag, visit planner, and first-chai pass retain their existing localStorage keys. Visit plans and passes save on the device; reservations, orders, and email delivery are not connected to a backend.
