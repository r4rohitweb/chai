import { PassForm } from "./Forms.jsx";

export default function SiteFooter() {
  return (
<footer className="site-footer" id="the-regulars-list" data-dark-section="">
<div className="footer-top">
<div className="footer-signup">
<p className="footer-label">
{"THE REGULARS' LIST"}
</p>
<h2>
{"Your first cutting is on us. "}
<span>
{"The second you'll want anyway."}
</span>
</h2>
<PassForm />
</div>
<nav className="footer-nav" aria-label="Explore the café">
<p className="footer-label">
{"EXPLORE"}
</p>
<a href="#the-first-pan">
{"The chai"}
</a>
<a href="#the-counter">
{"Menu"}
</a>
<a href="#the-dunk-test">
{"The dunk test"}
</a>
<a href="#visit-the-tapri">
{"Visit"}
</a>
<a href="#the-regulars">
{"Reviews"}
</a>
</nav>
<nav className="footer-nav" aria-label="On the counter">
<p className="footer-label">
{"ON THE COUNTER"}
</p>
<a href="#counter-chai">
{"Cutting Chai"}
</a>
<a href="#counter-biscuits">
{"Glucose Biscuits"}
</a>
<a href="#counter-bun">
{"Bun Maska"}
</a>
<a href="#counter-samosa">
{"Punjabi Samosa"}
</a>
<a href="#counter-cappuccino">
{"Cappuccino"}
</a>
<a href="#counter-kaapi">
{"Filter Kaapi"}
</a>
</nav>
<div className="footer-nav">
<p className="footer-label">
{"FIND US"}
</p>
<address className="footer-address">
<a href="https://www.google.com/maps/search/?api=1&query=14%20Homi%20Mody%20Street%2C%20Fort%2C%20Mumbai%20400001" target="_blank" rel="noopener noreferrer">
{"14 Homi Mody Street, Fort,"}
<br />
{"Delhi 110084"}
</a>
<p>
{"6 am — 11 pm, every day"}
</p>
<a href="tel:+91 9718416956">
{"+91 9718416956"}
</a>
</address>
</div>
</div>
<div className="footer-wordmark" aria-hidden="true">
<strong>
{"Chai & Chill"}
</strong>
<svg viewBox="0 0 60 85">
<path d="M9 25h42l-7 52H16Z" />
<path d="M16 38h28l-4 32H20Z" fill="currentColor" />
<path d="M18 16c-6-6 6-9 0-15m12 15c-6-6 6-9 0-15m12 15c-6-6 6-9 0-15" strokeLinecap="round" />
</svg>
</div>
<div className="footer-bottom">
<p>
{"© 2026 Chai & Chill. CHAI CAFÉ, FORT, MUMBAI."}
</p>
<p>
{"CHAI BOILED FRESH EVERY ELEVEN MINUTES."}
</p>
</div>
</footer>
  );
}
