

export default function Hero() {
  return (
<section className="hero-scroll" aria-label="First, chai">
<div className="hero">
<div className="paper-grain" aria-hidden="true" />
<h1 className="hero-heading">
<span className="first">
{"First,"}
</span>
<span className="chai">
{"chai."}
</span>
</h1>
<div className="hero-intro">
<p>
{"A chai café in Fort, Delhi. Ginger"}
<br className="desktop-break" />
{" pounded every morning, milk boiled up"}
<br className="desktop-break" />
{" three times, poured from as high as the"}
<br className="desktop-break" />
{" arm goes."}
</p>
<button className="outline-button" data-dialog="menu-dialog">
{"See the menu "}
<span aria-hidden="true">
{"→"}
</span>
</button>
</div>
<div className="scene-position" aria-label="A glass of cutting chai on a saucer with two biscuits" role="img">
<div className="scene-motion">
<svg className="chai-illustration" viewBox="0 0 550 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs>
<linearGradient id="glass-body" x1="0" y1="0" x2="1" y2=".15">
<stop stopColor="#fff8cd" stopOpacity=".7" />
<stop offset=".09" stopColor="#fffaf0" stopOpacity=".16" />
<stop offset=".27" stopColor="#f8c87a" stopOpacity=".12" />
<stop offset=".44" stopColor="#fff" stopOpacity=".27" />
<stop offset=".67" stopColor="#e2bd74" stopOpacity=".06" />
<stop offset=".88" stopColor="#fff9d1" stopOpacity=".6" />
<stop offset="1" stopColor="#a47a34" stopOpacity=".3" />
</linearGradient>
<linearGradient id="tea-body" x1="0" y1="0" x2="1" y2=".1">
<stop stopColor="#98541e" />
<stop offset=".12" stopColor="#b57536" />
<stop offset=".42" stopColor="#cb914e" />
<stop offset=".74" stopColor="#b87c3c" />
<stop offset="1" stopColor="#864915" />
</linearGradient>
<linearGradient id="tea-top" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#d6a267" />
<stop offset="1" stopColor="#c18a4b" />
</linearGradient>
<linearGradient id="glass-edge">
<stop stopColor="#b68d4c" stopOpacity=".45" />
<stop offset=".23" stopColor="#fffbed" stopOpacity=".95" />
<stop offset=".5" stopColor="#f7edce" stopOpacity=".4" />
<stop offset=".8" stopColor="#fffbed" />
<stop offset="1" stopColor="#b9914b" stopOpacity=".5" />
</linearGradient>
<linearGradient id="glass-foot" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#f3e3b0" stopOpacity=".2" />
<stop offset=".55" stopColor="#fff9e1" stopOpacity=".85" />
<stop offset=".85" stopColor="#c1aa72" stopOpacity=".6" />
<stop offset="1" stopColor="#fffcec" />
</linearGradient>
<linearGradient id="plate-face" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#fffbed" />
<stop offset=".62" stopColor="#f4edda" />
<stop offset="1" stopColor="#c4b597" />
</linearGradient>
<radialGradient id="plate-well">
<stop stopColor="#dad0b6" />
<stop offset=".76" stopColor="#e8dfc9" />
<stop offset="1" stopColor="#fff9e9" />
</radialGradient>
<linearGradient id="biscuit-top" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#f7ce83" />
<stop offset=".32" stopColor="#eeb865" />
<stop offset=".72" stopColor="#e4a34e" />
<stop offset="1" stopColor="#c88937" />
</linearGradient>
<linearGradient id="biscuit-edge" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#d79742" />
<stop offset=".6" stopColor="#b97429" />
<stop offset="1" stopColor="#a46122" />
</linearGradient>
<linearGradient id="rib-light">
<stop stopColor="#fffce3" stopOpacity=".04" />
<stop offset=".43" stopColor="#fffbe1" stopOpacity=".05" />
<stop offset=".57" stopColor="#fffde5" stopOpacity=".9" />
<stop offset=".82" stopColor="#fff9ce" stopOpacity=".2" />
<stop offset="1" stopColor="#976420" stopOpacity=".15" />
</linearGradient>
<filter id="contact-shadow" x="-.5" y="-1" width="2" height="3">
<feGaussianBlur stdDeviation="4" />
</filter>
<filter id="soft-shadow" x="-.5" y="-1" width="2" height="3">
<feGaussianBlur stdDeviation="1.6" />
</filter>
<filter id="biscuit-grain" x="0" y="0" width="1" height="1">
<feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" seed="8" />
<feColorMatrix type="saturate" values="0" />
<feBlend in="SourceGraphic" mode="soft-light" />
</filter>
<clipPath id="inside-glass">
<path d="M172 25 Q275 4 378 25 L349 307 Q275 335 201 307Z" />
</clipPath>
<clipPath id="biscuit-clip">
<path className="biscuit-outline" d="M12 4 H135 Q146 4 146 15 V180 Q146 192 134 192 H13 Q2 192 2 180 V16 Q2 4 12 4Z" />
</clipPath>
<pattern id="biscuit-pores" width="17" height="19" patternUnits="userSpaceOnUse">
<circle cx="3" cy="5" r=".8" fill="#a66b29" opacity=".42" />
<circle cx="11" cy="14" r=".5" fill="#fff0b8" opacity=".7" />
<path d="m13 3 1 1M5 14l1 .7" stroke="#aa702e" strokeWidth=".6" opacity=".4" />
</pattern>
<pattern id="biscuit-holes" width="28" height="29" patternUnits="userSpaceOnUse">
<ellipse cx="14" cy="14" rx="1.6" ry="2" fill="#af7532" />
<path d="M12 15q2 3 4 0" stroke="#ffda92" strokeWidth="1" fill="none" />
</pattern>
<g id="biscuit">
<path className="biscuit-thickness" d="M12 4 Q18 -2 24 4 Q30 -2 36 4 Q42 -2 48 4 Q54 -2 60 4 Q66 -2 72 4 Q78 -2 84 4 Q90 -2 96 4 Q102 -2 108 4 Q114 -2 120 4 Q126 -2 132 4 Q146 4 146 16 Q152 22 146 28 Q152 34 146 40 Q152 46 146 52 Q152 58 146 64 Q152 70 146 76 Q152 82 146 88 Q152 94 146 100 Q152 106 146 112 Q152 118 146 124 Q152 130 146 136 Q152 142 146 148 Q152 154 146 160 Q152 166 146 172 Q146 192 134 192 Q128 198 122 192 Q116 198 110 192 Q104 198 98 192 Q92 198 86 192 Q80 198 74 192 Q68 198 62 192 Q56 198 50 192 Q44 198 38 192 Q32 198 26 192 Q20 198 14 192 Q2 192 2 180 Q-4 174 2 168 Q-4 162 2 156 Q-4 150 2 144 Q-4 138 2 132 Q-4 126 2 120 Q-4 114 2 108 Q-4 102 2 96 Q-4 90 2 84 Q-4 78 2 72 Q-4 66 2 60 Q-4 54 2 48 Q-4 42 2 36 Q-4 30 2 24 Q2 4 12 4Z" transform="translate(3 7)" fill="url(#biscuit-edge)" />
<path className="biscuit-face" d="M12 4 Q18 -2 24 4 Q30 -2 36 4 Q42 -2 48 4 Q54 -2 60 4 Q66 -2 72 4 Q78 -2 84 4 Q90 -2 96 4 Q102 -2 108 4 Q114 -2 120 4 Q126 -2 132 4 Q146 4 146 16 Q152 22 146 28 Q152 34 146 40 Q152 46 146 52 Q152 58 146 64 Q152 70 146 76 Q152 82 146 88 Q152 94 146 100 Q152 106 146 112 Q152 118 146 124 Q152 130 146 136 Q152 142 146 148 Q152 154 146 160 Q152 166 146 172 Q146 192 134 192 Q128 198 122 192 Q116 198 110 192 Q104 198 98 192 Q92 198 86 192 Q80 198 74 192 Q68 198 62 192 Q56 198 50 192 Q44 198 38 192 Q32 198 26 192 Q20 198 14 192 Q2 192 2 180 Q-4 174 2 168 Q-4 162 2 156 Q-4 150 2 144 Q-4 138 2 132 Q-4 126 2 120 Q-4 114 2 108 Q-4 102 2 96 Q-4 90 2 84 Q-4 78 2 72 Q-4 66 2 60 Q-4 54 2 48 Q-4 42 2 36 Q-4 30 2 24 Q2 4 12 4Z" fill="url(#biscuit-top)" stroke="#ca8b36" strokeWidth="1" />
<g clipPath="url(#biscuit-clip)">
<rect x="3" y="4" width="143" height="189" fill="#c89551" opacity=".16" filter="url(#biscuit-grain)" />
<rect x="4" y="4" width="140" height="185" fill="url(#biscuit-pores)" />
<rect x="22" y="25" width="104" height="143" fill="url(#biscuit-holes)" />
</g>
<rect x="13" y="15" width="122" height="166" rx="7" fill="none" stroke="#f9d28a" strokeWidth="2.5" />
<rect x="17" y="19" width="114" height="158" rx="5" fill="none" stroke="#b88035" strokeOpacity=".5" />
<rect x="20" y="22" width="108" height="152" rx="4" fill="none" stroke="#ffe0a0" strokeOpacity=".65" />
<path d="M24 28H124M24 167H124" stroke="#f9d18a" strokeWidth="1" />
</g>
</defs>
<g className="scene-shadows" fill="#776343">
<path d="M215 335 430 255Q502 243 541 267Q550 279 504 294L334 360Z" opacity=".23" filter="url(#soft-shadow)" />
<ellipse cx="278" cy="365" rx="186" ry="16" opacity=".2" filter="url(#contact-shadow)" />
</g>
<g className="saucer">
<ellipse cx="274" cy="349" rx="168" ry="34" fill="#a99875" opacity=".35" />
<path d="M106 342Q274 376 442 342L430 354Q274 400 118 355Z" fill="#d1c4a7" />
<ellipse cx="274" cy="341" rx="168" ry="34" fill="url(#plate-face)" stroke="#fff7df" strokeWidth="1.5" />
<ellipse cx="274" cy="339" rx="126" ry="25" fill="url(#plate-well)" stroke="#d8ccb0" strokeWidth="1" />
<path d="M118 349Q274 391 431 349" fill="none" stroke="#fff9e6" strokeWidth="2" />
<ellipse cx="276" cy="331" rx="78" ry="17" fill="#7e6036" opacity=".23" filter="url(#contact-shadow)" />
</g>
<g className="chai-glass">
<path className="glass-back" d="M164 23Q275 -2 386 23L358 324Q275 365 192 324Z" fill="url(#glass-body)" stroke="#fff4cc" strokeOpacity=".7" strokeWidth="1.5" />
<g clipPath="url(#inside-glass)">
<g className="tea-liquid">
<rect className="tea-fill" x="165" y="62" width="220" height="282" fill="url(#tea-body)" />
<ellipse cx="275" cy="308" rx="75" ry="17" fill="#814719" opacity=".4" />
<ellipse className="tea-surface" cx="275" cy="62" rx="101" ry="13" fill="url(#tea-top)" stroke="#e7b57b" strokeWidth="1.5" />
<ellipse className="tea-meniscus" cx="275" cy="63" rx="96" ry="9" fill="none" stroke="#edc48b" strokeOpacity=".45" />
</g>
<g className="glass-facets">
<path d="M170 20 185 20 211 317 200 311Z" fill="url(#rib-light)" />
<path d="M203 12 219 10 235 324 222 321Z" fill="url(#rib-light)" />
<path d="M258 9 270 9 272 329 261 328Z" fill="url(#rib-light)" opacity=".6" />
<path d="M316 10 330 12 318 322 306 325Z" fill="url(#rib-light)" />
<path d="M364 16 380 20 351 311 338 317Z" fill="url(#rib-light)" />
<path d="m180 30 28 272m163-271-28 270" stroke="#fff4c0" strokeWidth="2" opacity=".45" />
<path d="M225 23 237 306" stroke="#fff8df" strokeWidth="1.4" opacity=".25" />
</g>
</g>
<path className="glass-base" d="M191 310Q275 350 359 310L357 327Q275 371 193 327Z" fill="url(#glass-foot)" stroke="#fff7d8" strokeOpacity=".8" strokeWidth="1.5" />
<path d="M203 325Q275 354 347 325M210 330Q275 353 339 331" fill="none" stroke="#fffce7" strokeWidth="2" opacity=".8" />
<path d="M164 23 192 324M386 23 358 324" stroke="url(#glass-edge)" strokeWidth="4" fill="none" />
<ellipse className="glass-rim" cx="275" cy="23" rx="111" ry="16" fill="#ffedb9" fillOpacity=".08" stroke="url(#glass-edge)" strokeWidth="2.5" />
<path d="M165 24Q275 49 385 24" stroke="#fff9e0" strokeOpacity=".8" strokeWidth="1.3" fill="none" />
<path d="M187 18Q211 13 228 13M302 11l32 3" stroke="#fffceb" strokeWidth="3" strokeLinecap="round" opacity=".9" />
</g>
<g className="biscuit biscuit-flat" transform="matrix(.96 .23 -.52 .30 123 275)">
<use href="#biscuit" />
</g>
<g className="biscuit biscuit-standing" transform="translate(355 202) rotate(11) scale(.79 .83)">
<use href="#biscuit" />
</g>
</svg>
<div className="steam" aria-hidden="true">
<i />
<i />
<i />
</div>
</div>
</div>
<div className="chai-facts" aria-hidden="true">
<div className="fact fact-batch">
<strong>
{"11"}
<span>
{"min"}
</span>
</strong>
<small>
{"A BATCH. NEVER LESS."}
</small>
</div>
<div className="fact fact-boil">
<strong>
{"3"}
<span>
{"×"}
</span>
</strong>
<small>
{"BOILED UP"}
</small>
</div>
<div className="fact fact-price">
<strong>
{"₹20"}
</strong>
<small>
{"A CUTTING"}
</small>
</div>
<div className="fact fact-time">
<strong>
{"6"}
<span>
{"am"}
</span>
</strong>
<small>
{"FIRST BOIL"}
</small>
</div>
</div>
<p className="hero-note">
{"CUTTING CHAI · 90 ML · ₹20"}
<br />
{"6 AM — 11 PM, EVERY DAY"}
</p>
<button className="scroll-cue" aria-label="Scroll to take a sip">
<span aria-hidden="true" />
<span className="scroll-label">
{"SCROLL TO TAKE A SIP"}
</span>
</button>
<button className="replay" aria-label="Replay the hero animation">
{"↺ "}
<span>
{"ONE MORE CHAI?"}
</span>
</button>
</div>
</section>
  );
}
