

export default function Regulars() {
  return (
<section className="regulars-section" id="the-regulars" aria-labelledby="regulars-title">
<header className="regulars-heading">
<p className="closing-eyebrow">
{"11 — THE REGULARS"}
</p>
<div className="regulars-art" aria-hidden="true">
<div className="regulars-art-tile">
<svg viewBox="0 0 400 260">
<use href="#counter-art-bun" />
</svg>
</div>
<div className="regulars-art-tile">
<svg viewBox="0 0 400 260">
<use href="#counter-art-biscuits" />
</svg>
</div>
</div>
<h2 id="regulars-title">
{"Said over"}
<span>
{"a second cup."}
</span>
</h2>
<div className="regulars-controls">
<span className="regulars-counter">
{"01 / 03"}
</span>
<button className="review-arrow" data-review-prev="" aria-label="Previous review">
{"←"}
</button>
<button className="review-arrow" data-review-next="" aria-label="Next review">
{"→"}
</button>
</div>
</header>
<div className="regulars-viewport" tabIndex="0" aria-label="Regulars' reviews. Use the arrow keys to browse.">
<div className="regulars-track" aria-hidden="true">
<article className="regular-card">
<p className="review-stars">
{"★★★★★"}
</p>
<blockquote>
{"“The chai tastes like the one outside my college gate in 2009, except I can sit down and nobody is honking at me.”"}
</blockquote>
<div className="review-byline">
<span className="review-avatar">
{"T"}
</span>
<div>
<p className="review-name">
{"Tanvi R."}
</p>
<p className="review-location">
{"COLABA · REGULAR"}
</p>
</div>
</div>
</article>
<article className="regular-card">
<p className="review-stars">
{"★★★★★"}
</p>
<blockquote>
{"“I have lost four glucose biscuits to the dunk test on their website and zero at the actual counter. Three seconds. It works.”"}
</blockquote>
<div className="review-byline">
<span className="review-avatar">
{"I"}
</span>
<div>
<p className="review-name">
{"Imran S."}
</p>
<p className="review-location">
{"BYCULLA · REGULAR"}
</p>
</div>
</div>
</article>
<article className="regular-card">
<p className="review-stars">
{"★★★★★"}
</p>
<blockquote>
{"“Bun maska with a slab of butter you could tile a floor with. I come twice a week and I regret nothing.”"}
</blockquote>
<div className="review-byline">
<span className="review-avatar">
{"K"}
</span>
<div>
<p className="review-name">
{"Karan J."}
</p>
<p className="review-location">
{"CHURCHGATE · REGULAR"}
</p>
</div>
</div>
</article>
</div>
</div>
<ul className="regulars-reader-copy">
<li>
<blockquote>
{"The chai tastes like the one outside my college gate in 2009, except I can sit down and nobody is honking at me."}
</blockquote>
<p>
{"Tanvi R., COLABA"}
</p>
</li>
<li>
<blockquote>
{"I have lost four glucose biscuits to the dunk test on their website and zero at the actual counter. Three seconds. It works."}
</blockquote>
<p>
{"Imran S., BYCULLA"}
</p>
</li>
<li>
<blockquote>
{"Bun maska with a slab of butter you could tile a floor with. I come twice a week and I regret nothing."}
</blockquote>
<p>
{"Karan J., CHURCHGATE"}
</p>
</li>
</ul>
<p className="regulars-status counter-live" role="status" aria-live="polite">
{"Review 1 of 3"}
</p>
</section>
  );
}
