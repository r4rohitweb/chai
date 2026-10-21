import { BagContents } from '../state/BagContext.jsx';
import { VisitPlanForm } from './Forms.jsx';

export default function Dialogs() {
return <>
<dialog id="menu-dialog" className="full-menu-dialog" aria-labelledby="menu-title">
<button className="close-dialog" aria-label="Close menu">
{"×"}
</button>
<p className="dialog-eyebrow">
{"BR-TAPRI · THE DAILY COUNTER"}
</p>
<h2 id="menu-title">
{"First, chai."}
</h2>
<button className="menu-counter-link" data-menu-product="chai">
<span>
{"Cutting Chai"}
</span>
<strong>
{"₹20"}
</strong>
</button>
<button className="menu-counter-link" data-menu-product="biscuits">
<span>
{"Glucose Biscuits"}
</span>
<strong>
{"₹30"}
</strong>
</button>
<button className="menu-counter-link" data-menu-product="bun">
<span>
{"Bun Maska"}
</span>
<strong>
{"₹60"}
</strong>
</button>
<button className="menu-counter-link" data-menu-product="samosa">
<span>
{"Punjabi Samosa"}
</span>
<strong>
{"₹50"}
</strong>
</button>
<button className="menu-counter-link" data-menu-product="cappuccino">
<span>
{"Cappuccino"}
</span>
<strong>
{"₹140"}
</strong>
</button>
<button className="menu-counter-link" data-menu-product="kaapi">
<span>
{"Filter Kaapi"}
</span>
<strong>
{"₹70"}
</strong>
</button>
<button className="menu-counter-link" data-menu-product="keema">
<span>
{"Keema Pav"}
</span>
<strong>
{"₹180"}
</strong>
</button>
<button className="menu-counter-link" data-menu-product="akuri">
<span>
{"Akuri on Toast"}
</span>
<strong>
{"₹140"}
</strong>
</button>
<button className="menu-counter-link" data-menu-product="cake">
<span>
{"Mawa Cake"}
</span>
<strong>
{"₹90"}
</strong>
</button>
<button className="menu-counter-link" data-menu-product="cold-coffee">
<span>
{"Cold Coffee"}
</span>
<strong>
{"₹130"}
</strong>
</button>
<button className="outline-button" data-counter-jump="">
{"Explore the counter "}
<span aria-hidden="true">
{"→"}
</span>
</button>
</dialog>
<dialog id="bag-dialog" className="bag-dialog" aria-labelledby="bag-title">
<button className="close-dialog" aria-label="Close bag">
{"×"}
</button>
<p className="dialog-eyebrow">
{"BR-TAPRI · YOUR BAG"}
</p>
<h2 id="bag-title">
{"A little of everything."}
</h2>
<BagContents />
<p className="bag-note">
{"Your selection is saved on this device. No order has been placed."}
</p>
<button className="outline-button" data-counter-jump="">
{"Back to the counter "}
<span aria-hidden="true">
{"→"}
</span>
</button>
</dialog>
<dialog id="visit-dialog" className="visit-dialog" aria-labelledby="visit-title">
<button className="close-dialog" aria-label="Close location">
{"×"}
</button>
<p className="dialog-eyebrow">
{"BR-TAPRI · COME BY"}
</p>
<h2 id="visit-title">
{"Your chai's waiting."}
</h2>
<div className="visit-details">
<strong>
{"14 Homi Mody Street, Fort"}
</strong>
<p>
{"Mumbai 400001"}
<br />
{"6 AM — 11 PM, every day."}
</p>
</div>
<p>
{"Churchgate station is a nine-minute walk away."}
</p>
<a className="outline-button" href="https://www.google.com/maps/search/?api=1&query=14%20Homi%20Mody%20Street%2C%20Fort%2C%20Mumbai%20400001" target="_blank" rel="noopener noreferrer">
{"Get directions "}
<span aria-hidden="true">
{"↗"}
</span>
</a>
<button className="outline-button close-menu">
{"Back to chai "}
<span aria-hidden="true">
{"↗"}
</span>
</button>
</dialog>
<dialog id="visit-plan-dialog" className="plan-dialog" aria-labelledby="plan-title">
<button className="close-dialog" aria-label="Close visit planner">
{"×"}
</button>
<p className="dialog-eyebrow">
{"BR-TAPRI · YOUR NEXT CHAI"}
</p>
<h2 id="plan-title">
{"Plan your table."}
</h2>
<p className="plan-help">
{"Save a visit reminder on this device. This does not reserve a table; call the café to confirm."}
</p>
<VisitPlanForm />
<a className="visit-directions" href="tel:+912255500142">
{"CALL +91 22 5550 0142 ↗"}
</a>
</dialog>
</>;
}
