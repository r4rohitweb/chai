

export default function DunkTest() {
  return (
<section className="dunk-test" id="the-dunk-test" aria-labelledby="dunk-test-title">
<div className="dunk-layout">
<div className="dunk-copy">
<p className="dunk-eyebrow">
{"09 — PLAY WITH YOUR FOOD"}
</p>
<h2 id="dunk-test-title">
{"The dunk"}
<span>
{"test."}
</span>
</h2>
<p className="dunk-intro" id="dunk-instructions">
{"Every biscuit has a number. Hold the button to dunk, let go before the chai wins."}
</p>
<div className="dunk-options" role="radiogroup" aria-label="Choose your biscuit">
<button className="dunk-option" role="radio" aria-checked="true" data-biscuit="glucose">
<strong>
{"Glucose"}
</strong>
<small>
{"THE CLASSIC"}
</small>
</button>
<button className="dunk-option" role="radio" aria-checked="false" tabIndex="-1" data-biscuit="rusk">
<strong>
{"Rusk"}
</strong>
<small>
{"TWICE BAKED"}
</small>
</button>
<button className="dunk-option" role="radio" aria-checked="false" tabIndex="-1" data-biscuit="osmania">
<strong>
{"Osmania"}
</strong>
<small>
{"SWEET & SALTY"}
</small>
</button>
<button className="dunk-option" role="radio" aria-checked="false" tabIndex="-1" data-biscuit="nankhatai">
<strong>
{"Nankhatai"}
</strong>
<small>
{"GHEE SHORTBREAD"}
</small>
</button>
</div>
<div className="dunk-score-row">
<div className="dunk-timer" aria-live="off">
<span className="dunk-seconds">
{"0.0"}
</span>
<small>
{"s"}
</small>
</div>
<div className="dunk-scores">
<p>
{"SAVED "}
<strong className="dunk-saved">
{"00"}
</strong>
</p>
<p>
{"LOST "}
<strong className="dunk-lost">
{"00"}
</strong>
</p>
</div>
</div>
<div className="dunk-progress" aria-hidden="true">
<span className="dunk-sweet-zone" />
<span className="dunk-progress-fill" />
<span className="dunk-progress-cursor" />
</div>
<div className="dunk-meter-labels" aria-hidden="true">
<span>
{"DRY"}
</span>
<span className="dunk-sweet-label">
{"SWEET SPOT 2.4–3.2 S"}
</span>
<span className="dunk-limit-label">
{"DONE AT 4 S"}
</span>
</div>
<div className="dunk-controls">
<button className="dunk-hold" aria-pressed="false" aria-describedby="dunk-instructions">
{"HOLD TO DUNK"}
</button>
<p className="dunk-result" role="status" aria-live="polite">
{"Glucose: three seconds. It forgives nothing after four."}
</p>
</div>
<button className="dunk-restart">
{"TRY AGAIN ↺"}
</button>
</div>
<div className="dunk-panel">
<div className="dunk-panel-hint" aria-hidden="true">
{"4s"}
</div>
<svg className="dunk-test-art" viewBox="0 0 550 700" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs xmlns="http://www.w3.org/2000/svg">
<linearGradient id="dunk-game-glass-body" x1="0" y1="0" x2="1" y2=".15">
<stop stopColor="#fff8cd" stopOpacity=".7" />
<stop offset=".09" stopColor="#fffaf0" stopOpacity=".16" />
<stop offset=".27" stopColor="#f8c87a" stopOpacity=".12" />
<stop offset=".44" stopColor="#fff" stopOpacity=".27" />
<stop offset=".67" stopColor="#e2bd74" stopOpacity=".06" />
<stop offset=".88" stopColor="#fff9d1" stopOpacity=".6" />
<stop offset="1" stopColor="#a47a34" stopOpacity=".3" />
</linearGradient>
<linearGradient id="dunk-game-tea-body" x1="0" y1="0" x2="1" y2=".1">
<stop stopColor="#98541e" />
<stop offset=".12" stopColor="#b57536" />
<stop offset=".42" stopColor="#cb914e" />
<stop offset=".74" stopColor="#b87c3c" />
<stop offset="1" stopColor="#864915" />
</linearGradient>
<linearGradient id="dunk-game-tea-top" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#d6a267" />
<stop offset="1" stopColor="#c18a4b" />
</linearGradient>
<linearGradient id="dunk-game-glass-edge">
<stop stopColor="#b68d4c" stopOpacity=".45" />
<stop offset=".23" stopColor="#fffbed" stopOpacity=".95" />
<stop offset=".5" stopColor="#f7edce" stopOpacity=".4" />
<stop offset=".8" stopColor="#fffbed" />
<stop offset="1" stopColor="#b9914b" stopOpacity=".5" />
</linearGradient>
<linearGradient id="dunk-game-glass-foot" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#f3e3b0" stopOpacity=".2" />
<stop offset=".55" stopColor="#fff9e1" stopOpacity=".85" />
<stop offset=".85" stopColor="#c1aa72" stopOpacity=".6" />
<stop offset="1" stopColor="#fffcec" />
</linearGradient>
<linearGradient id="dunk-game-plate-face" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#fffbed" />
<stop offset=".62" stopColor="#f4edda" />
<stop offset="1" stopColor="#c4b597" />
</linearGradient>
<radialGradient id="dunk-game-plate-well">
<stop stopColor="#dad0b6" />
<stop offset=".76" stopColor="#e8dfc9" />
<stop offset="1" stopColor="#fff9e9" />
</radialGradient>
<linearGradient id="dunk-game-biscuit-top" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#f7ce83" />
<stop offset=".32" stopColor="#eeb865" />
<stop offset=".72" stopColor="#e4a34e" />
<stop offset="1" stopColor="#c88937" />
</linearGradient>
<linearGradient id="dunk-game-biscuit-edge" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#d79742" />
<stop offset=".6" stopColor="#b97429" />
<stop offset="1" stopColor="#a46122" />
</linearGradient>
<linearGradient id="dunk-game-rib-light">
<stop stopColor="#fffce3" stopOpacity=".04" />
<stop offset=".43" stopColor="#fffbe1" stopOpacity=".05" />
<stop offset=".57" stopColor="#fffde5" stopOpacity=".9" />
<stop offset=".82" stopColor="#fff9ce" stopOpacity=".2" />
<stop offset="1" stopColor="#976420" stopOpacity=".15" />
</linearGradient>
<filter id="dunk-game-contact-shadow" x="-.5" y="-1" width="2" height="3">
<feGaussianBlur stdDeviation="4" />
</filter>
<filter id="dunk-game-soft-shadow" x="-.5" y="-1" width="2" height="3">
<feGaussianBlur stdDeviation="1.6" />
</filter>
<filter id="dunk-game-biscuit-grain" x="0" y="0" width="1" height="1">
<feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" seed="8" />
<feColorMatrix type="saturate" values="0" />
<feBlend in="SourceGraphic" mode="soft-light" />
</filter>
<clipPath id="dunk-game-inside-glass">
<path d="M172 25 Q275 4 378 25 L349 307 Q275 335 201 307Z" />
</clipPath>
<clipPath id="dunk-game-biscuit-clip">
<path className="dunk-game-biscuit-outline" d="M12 4 H135 Q146 4 146 15 V180 Q146 192 134 192 H13 Q2 192 2 180 V16 Q2 4 12 4Z" />
</clipPath>
<pattern id="dunk-game-biscuit-pores" width="17" height="19" patternUnits="userSpaceOnUse">
<circle cx="3" cy="5" r=".8" fill="#a66b29" opacity=".42" />
<circle cx="11" cy="14" r=".5" fill="#fff0b8" opacity=".7" />
<path d="m13 3 1 1M5 14l1 .7" stroke="#aa702e" strokeWidth=".6" opacity=".4" />
</pattern>
<pattern id="dunk-game-biscuit-holes" width="28" height="29" patternUnits="userSpaceOnUse">
<ellipse cx="14" cy="14" rx="1.6" ry="2" fill="#af7532" />
<path d="M12 15q2 3 4 0" stroke="#ffda92" strokeWidth="1" fill="none" />
</pattern>
<g id="dunk-game-biscuit">
<path className="dunk-game-biscuit-thickness" d="M12 4 Q18 -2 24 4 Q30 -2 36 4 Q42 -2 48 4 Q54 -2 60 4 Q66 -2 72 4 Q78 -2 84 4 Q90 -2 96 4 Q102 -2 108 4 Q114 -2 120 4 Q126 -2 132 4 Q146 4 146 16 Q152 22 146 28 Q152 34 146 40 Q152 46 146 52 Q152 58 146 64 Q152 70 146 76 Q152 82 146 88 Q152 94 146 100 Q152 106 146 112 Q152 118 146 124 Q152 130 146 136 Q152 142 146 148 Q152 154 146 160 Q152 166 146 172 Q146 192 134 192 Q128 198 122 192 Q116 198 110 192 Q104 198 98 192 Q92 198 86 192 Q80 198 74 192 Q68 198 62 192 Q56 198 50 192 Q44 198 38 192 Q32 198 26 192 Q20 198 14 192 Q2 192 2 180 Q-4 174 2 168 Q-4 162 2 156 Q-4 150 2 144 Q-4 138 2 132 Q-4 126 2 120 Q-4 114 2 108 Q-4 102 2 96 Q-4 90 2 84 Q-4 78 2 72 Q-4 66 2 60 Q-4 54 2 48 Q-4 42 2 36 Q-4 30 2 24 Q2 4 12 4Z" transform="translate(3 7)" fill="url(#dunk-game-biscuit-edge)" />
<path className="dunk-game-biscuit-face" d="M12 4 Q18 -2 24 4 Q30 -2 36 4 Q42 -2 48 4 Q54 -2 60 4 Q66 -2 72 4 Q78 -2 84 4 Q90 -2 96 4 Q102 -2 108 4 Q114 -2 120 4 Q126 -2 132 4 Q146 4 146 16 Q152 22 146 28 Q152 34 146 40 Q152 46 146 52 Q152 58 146 64 Q152 70 146 76 Q152 82 146 88 Q152 94 146 100 Q152 106 146 112 Q152 118 146 124 Q152 130 146 136 Q152 142 146 148 Q152 154 146 160 Q152 166 146 172 Q146 192 134 192 Q128 198 122 192 Q116 198 110 192 Q104 198 98 192 Q92 198 86 192 Q80 198 74 192 Q68 198 62 192 Q56 198 50 192 Q44 198 38 192 Q32 198 26 192 Q20 198 14 192 Q2 192 2 180 Q-4 174 2 168 Q-4 162 2 156 Q-4 150 2 144 Q-4 138 2 132 Q-4 126 2 120 Q-4 114 2 108 Q-4 102 2 96 Q-4 90 2 84 Q-4 78 2 72 Q-4 66 2 60 Q-4 54 2 48 Q-4 42 2 36 Q-4 30 2 24 Q2 4 12 4Z" fill="url(#dunk-game-biscuit-top)" stroke="#ca8b36" strokeWidth="1" />
<g clipPath="url(#dunk-game-biscuit-clip)">
<rect x="3" y="4" width="143" height="189" fill="#c89551" opacity=".16" filter="url(#dunk-game-biscuit-grain)" />
<rect x="4" y="4" width="140" height="185" fill="url(#dunk-game-biscuit-pores)" />
<rect x="22" y="25" width="104" height="143" fill="url(#dunk-game-biscuit-holes)" />
</g>
<rect x="13" y="15" width="122" height="166" rx="7" fill="none" stroke="#f9d28a" strokeWidth="2.5" />
<rect x="17" y="19" width="114" height="158" rx="5" fill="none" stroke="#b88035" strokeOpacity=".5" />
<rect x="20" y="22" width="108" height="152" rx="4" fill="none" stroke="#ffe0a0" strokeOpacity=".65" />
<path d="M24 28H124M24 167H124" stroke="#f9d18a" strokeWidth="1" />
</g>
</defs>
<defs>
<linearGradient id="dunk-game-wet" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#8d5524" stopOpacity="0" />
<stop offset="1" stopColor="#6e3e18" stopOpacity=".85" />
</linearGradient>
<radialGradient id="dunk-game-round">
<stop stopColor="#f6d18b" />
<stop offset=".8" stopColor="#e4b05d" />
<stop offset="1" stopColor="#bb7e32" />
</radialGradient>
<clipPath id="dunk-game-waterline">
<rect x="0" y="0" width="550" height="344" />
</clipPath>
<clipPath id="dunk-game-main-clip">
<path className="game-biscuit-cut" d="M-10-10H165V220H-10Z" />
</clipPath>
<clipPath id="dunk-game-fragment-clip">
<path d="M-10 157 18 152 34 160 49 153 65 158 81 152 96 158 112 151 129 159 143 153 165 156V220H-10Z" />
</clipPath>
<clipPath id="dunk-game-model-clip">
<path className="game-model-outline" d="M4 4H144V194H4Z" />
</clipPath>
<g id="dunk-game-glucose">
<use href="#dunk-game-biscuit" />
</g>
<g id="dunk-game-rusk">
<rect x="2" y="5" width="145" height="202" rx="14" fill="#a86c2d" />
<rect x="4" y="0" width="140" height="199" rx="13" fill="url(#dunk-game-biscuit-top)" />
<rect x="14" y="12" width="120" height="174" rx="10" fill="#e9bc72" stroke="#c3934a" strokeWidth="3" />
<rect x="17" y="15" width="114" height="168" rx="8" fill="url(#dunk-game-biscuit-pores)" />
<path d="M24 40h97M24 71h97M24 102h97M24 133h97M24 164h97" stroke="#cb9a51" strokeOpacity=".55" strokeWidth="2" />
</g>
<g id="dunk-game-osmania">
<ellipse cx="74" cy="117" rx="78" ry="72" fill="#bd853c" />
<ellipse cx="74" cy="110" rx="78" ry="72" fill="url(#dunk-game-round)" />
<ellipse cx="74" cy="110" rx="72" ry="65" fill="url(#dunk-game-biscuit-pores)" />
<path d="m43 83 62 55m-62 0 62-55" stroke="#f8dd9e" strokeWidth="2" />
<ellipse cx="74" cy="110" rx="68" ry="61" stroke="#c79245" strokeOpacity=".4" fill="none" />
</g>
<g id="dunk-game-nankhatai">
<ellipse cx="74" cy="119" rx="73" ry="65" fill="#bd9356" />
<ellipse cx="74" cy="110" rx="73" ry="65" fill="#edce96" />
<ellipse cx="74" cy="104" rx="67" ry="58" fill="#f2d9a5" />
<path d="m73 59-8 24 11 14-13 26 9 27m-37-48 25 7 16-12 23 6 19-13" stroke="#c5a66a" strokeWidth="1.7" fill="none" />
<path d="M66 84Q45 105 65 123Q89 111 83 87Z" fill="#d0a771" stroke="#ab8550" />
<path d="M70 88 65 116" stroke="#f8e3bb" strokeWidth="2" />
</g>
</defs>
<ellipse cx="376" cy="616" rx="131" ry="22" transform="rotate(-12 376 616)" fill="#755e3c" opacity=".24" filter="url(#dunk-game-contact-shadow)" />
<ellipse cx="275" cy="629" rx="78" ry="12" fill="#755e3c" opacity=".13" filter="url(#dunk-game-contact-shadow)" />
<g transform="translate(0 280)">
<g xmlns="http://www.w3.org/2000/svg" className="dunk-game-chai-glass">
<path className="dunk-game-glass-back" d="M164 23Q275 -2 386 23L358 324Q275 365 192 324Z" fill="url(#dunk-game-glass-body)" stroke="#fff4cc" strokeOpacity=".7" strokeWidth="1.5" />
<g clipPath="url(#dunk-game-inside-glass)">
<g className="dunk-game-tea-liquid">
<rect className="dunk-game-tea-fill" x="165" y="62" width="220" height="282" fill="url(#dunk-game-tea-body)" />
<ellipse cx="275" cy="308" rx="75" ry="17" fill="#814719" opacity=".4" />
<ellipse className="dunk-game-tea-surface" cx="275" cy="62" rx="101" ry="13" fill="url(#dunk-game-tea-top)" stroke="#e7b57b" strokeWidth="1.5" />
<ellipse className="dunk-game-tea-meniscus" cx="275" cy="63" rx="96" ry="9" fill="none" stroke="#edc48b" strokeOpacity=".45" />
</g>
<g className="dunk-game-glass-facets">
<path d="M170 20 185 20 211 317 200 311Z" fill="url(#dunk-game-rib-light)" />
<path d="M203 12 219 10 235 324 222 321Z" fill="url(#dunk-game-rib-light)" />
<path d="M258 9 270 9 272 329 261 328Z" fill="url(#dunk-game-rib-light)" opacity=".6" />
<path d="M316 10 330 12 318 322 306 325Z" fill="url(#dunk-game-rib-light)" />
<path d="M364 16 380 20 351 311 338 317Z" fill="url(#dunk-game-rib-light)" />
<path d="m180 30 28 272m163-271-28 270" stroke="#fff4c0" strokeWidth="2" opacity=".45" />
<path d="M225 23 237 306" stroke="#fff8df" strokeWidth="1.4" opacity=".25" />
</g>
</g>
<path className="dunk-game-glass-base" d="M191 310Q275 350 359 310L357 327Q275 371 193 327Z" fill="url(#dunk-game-glass-foot)" stroke="#fff7d8" strokeOpacity=".8" strokeWidth="1.5" />
<path d="M203 325Q275 354 347 325M210 330Q275 353 339 331" fill="none" stroke="#fffce7" strokeWidth="2" opacity=".8" />
<path d="M164 23 192 324M386 23 358 324" stroke="url(#dunk-game-glass-edge)" strokeWidth="4" fill="none" />
<ellipse className="dunk-game-glass-rim" cx="275" cy="23" rx="111" ry="16" fill="#ffedb9" fillOpacity=".08" stroke="url(#dunk-game-glass-edge)" strokeWidth="2.5" />
<path d="M165 24Q275 49 385 24" stroke="#fff9e0" strokeOpacity=".8" strokeWidth="1.3" fill="none" />
<path d="M187 18Q211 13 228 13M302 11l32 3" stroke="#fffceb" strokeWidth="3" strokeLinecap="round" opacity=".9" />
</g>
</g>
<g clipPath="url(#dunk-game-waterline)">
<g className="game-biscuit" transform="translate(223 105) scale(.7)">
<g className="game-biscuit-main" clipPath="url(#dunk-game-main-clip)">
<use className="game-selected-biscuit" href="#dunk-game-glucose" />
<g clipPath="url(#dunk-game-model-clip)">
<rect className="game-soak" x="-5" y="135" width="160" height="80" fill="url(#dunk-game-wet)" opacity="0" />
</g>
</g>
<g className="game-biscuit-fragment" clipPath="url(#dunk-game-fragment-clip)" opacity="0">
<use className="game-selected-biscuit" href="#dunk-game-glucose" />
</g>
</g>
</g>
<path d="M176 345Q275 369 374 345" fill="none" stroke="#e2b076" strokeWidth="3" />
<g className="game-ripples" fill="none" stroke="#f4cf97" opacity="0">
<ellipse className="dunk-water-ripple" cx="275" cy="342" rx="53" ry="9" strokeWidth="1.5" />
<ellipse className="dunk-water-ripple" cx="275" cy="342" rx="80" ry="13" strokeWidth="1" />
</g>
<g className="dunk-panel-steam" fill="none" stroke="#fff6df" strokeOpacity=".55" strokeWidth="10" filter="url(#dunk-game-contact-shadow)">
<path d="M240 287q-19-32 0-59t0-52m56 110q20-34 0-62t0-56" />
</g>
</svg>
<p className="dunk-panel-caption">
{"LIVE · GLUCOSE · THE CLASSIC"}
</p>
</div>
</div>
</section>
  );
}
