

export default function ClosingBanner() {
  return (
<section className="closing-banner-wrap" aria-label="One more chai">
<div className="closing-banner closing-reveal">
<svg className="closing-banner-art" viewBox="0 0 1200 480" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<use href="#closing-art-table" />
</svg>
<div className="closing-banner-copy">
<p className="closing-eyebrow">
{"ONE MORE THING"}
</p>
<h2>
{"The table's free."}
<span>
{"The chai's on."}
</span>
</h2>
<div className="closing-banner-actions">
<a className="outline-button" href="#visit-the-tapri">
{"Find the café "}
<span aria-hidden="true">
{"→"}
</span>
</a>
<button className="outline-button" data-dialog="menu-dialog">
{"See the menu "}
<span aria-hidden="true">
{"→"}
</span>
</button>
</div>
</div>
</div>
</section>
  );
}
