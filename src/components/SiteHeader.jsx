import { BagButton } from "../state/BagContext.jsx";

export default function SiteHeader() {
  return (
<header className="site-header">
<a className="brand" href="./" aria-label="Chai & Chill home">
<svg className="brand-glass" viewBox="0 0 28 40" fill="none" aria-hidden="true">
<path d="M5 13h18l-3 23H8L5 13Z" stroke="currentColor" strokeWidth="1.8" />
<path d="M8 19h12l-2 14h-8L8 19Z" fill="#b9793e" />
<path d="M9 8c-3-3 3-4 0-7m5 7c-3-3 3-4 0-7m5 7c-3-3 3-4 0-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
</svg>
<span>
<strong>
{"Chai & Chill"}
</strong>
<small>
{"CHAI CAFÉ · FORT, DELHI"}
</small>
</span>
</a>
<nav className="header-actions" aria-label="Main navigation">
<BagButton />
<button className="menu-button" data-dialog="menu-dialog">
<span className="menu-lines" aria-hidden="true" />
{"Menu"}
</button>
</nav>
</header>
  );
}
