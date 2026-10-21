

export default function Brewing() {
  return (
<section className="brewing-scroll" id="the-first-pan" aria-label="How we make our chai">
<div className="brewing-stage">
<div className="paper-grain" aria-hidden="true" />
<div className="brewing-scene" role="img" aria-label="A stainless steel saucepan over a blue flame. Whole spices, milk, and three boils make our chai.">
<svg className="brewing-illustration" viewBox="0 0 960 720" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs>
<linearGradient id="pan-steel">
<stop stopColor="#30352e" />
<stop offset=".07" stopColor="#62665a" />
<stop offset=".18" stopColor="#aaa89a" />
<stop offset=".31" stopColor="#74776c" />
<stop offset=".46" stopColor="#b2b1a5" />
<stop offset=".55" stopColor="#dfc5a2" />
<stop offset=".63" stopColor="#c5beaa" />
<stop offset=".77" stopColor="#969b8d" />
<stop offset=".92" stopColor="#5e6658" />
<stop offset="1" stopColor="#272e24" />
</linearGradient>
<radialGradient id="pan-heat-reflection" cx=".5" cy="1" r=".7">
<stop stopColor="#829fff" stopOpacity=".48" />
<stop offset=".35" stopColor="#9a9edf" stopOpacity=".16" />
<stop offset="1" stopColor="#829fff" stopOpacity="0" />
</radialGradient>
<radialGradient id="pan-warm-reflection" cx=".58" cy=".3" r=".43">
<stop stopColor="#ffe2ba" stopOpacity=".22" />
<stop offset="1" stopColor="#ffe2ba" stopOpacity="0" />
</radialGradient>
<linearGradient id="pan-inside">
<stop stopColor="#25251e" />
<stop offset=".12" stopColor="#939084" />
<stop offset=".27" stopColor="#34352e" />
<stop offset=".46" stopColor="#c6b79a" />
<stop offset=".59" stopColor="#96744a" />
<stop offset=".73" stopColor="#ded7c5" />
<stop offset=".85" stopColor="#4e4e42" />
<stop offset="1" stopColor="#282b22" />
</linearGradient>
<linearGradient id="pan-lip">
<stop stopColor="#706f64" />
<stop offset=".15" stopColor="#f1e9d7" />
<stop offset=".3" stopColor="#8c8b80" />
<stop offset=".5" stopColor="#fff8e9" />
<stop offset=".7" stopColor="#9c9a8c" />
<stop offset=".9" stopColor="#e5e4d6" />
<stop offset="1" stopColor="#4d5146" />
</linearGradient>
<linearGradient id="handle-metal" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#e9e4cf" />
<stop offset=".25" stopColor="#777b71" />
<stop offset=".7" stopColor="#353a31" />
<stop offset="1" stopColor="#d9d1b9" />
</linearGradient>
<linearGradient id="handle-black" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#38342b" />
<stop offset=".18" stopColor="#16140f" />
<stop offset=".75" stopColor="#080a07" />
<stop offset="1" stopColor="#5a5040" />
</linearGradient>
<radialGradient id="water-depth">
<stop stopColor="#91958a" />
<stop offset="1" stopColor="#727e74" />
</radialGradient>
<radialGradient id="tea-dark">
<stop stopColor="#75421c" />
<stop offset="1" stopColor="#3c1c0b" />
</radialGradient>
<radialGradient id="tea-milky">
<stop stopColor="#d7ac73" />
<stop offset=".72" stopColor="#bd8c57" />
<stop offset="1" stopColor="#a97742" />
</radialGradient>
<radialGradient id="bubble-light" cx=".36" cy=".25">
<stop stopColor="#f9d59c" />
<stop offset=".55" stopColor="#ddb27a" />
<stop offset=".8" stopColor="#ba8c52" />
<stop offset="1" stopColor="#e2b77d" stopOpacity=".3" />
</radialGradient>
<radialGradient id="flame-glow">
<stop stopColor="#2ea5ff" stopOpacity=".35" />
<stop offset=".6" stopColor="#6141c8" stopOpacity=".17" />
<stop offset="1" stopColor="#345aff" stopOpacity="0" />
</radialGradient>
<linearGradient id="blue-flame" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#b1eaff" stopOpacity="0" />
<stop offset=".4" stopColor="#61caff" />
<stop offset=".75" stopColor="#2d69ff" />
<stop offset="1" stopColor="#34248d" />
</linearGradient>
<linearGradient id="ginger-skin" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#f1d18a" />
<stop offset=".6" stopColor="#c8a45c" />
<stop offset="1" stopColor="#9c7c37" />
</linearGradient>
<linearGradient id="cardamom-skin">
<stop stopColor="#526322" />
<stop offset=".4" stopColor="#9caf42" />
<stop offset=".65" stopColor="#869436" />
<stop offset="1" stopColor="#4b5d20" />
</linearGradient>
<linearGradient id="milk-stream">
<stop stopColor="#ccae7c" />
<stop offset=".4" stopColor="#fff0cd" />
<stop offset="1" stopColor="#e7d1a7" />
</linearGradient>
<filter id="burner-shadow">
<feGaussianBlur stdDeviation="12" />
</filter>
<filter id="vapor-blur" x="-.5" y="-.5" width="2" height="2">
<feGaussianBlur stdDeviation="11" />
</filter>
<pattern id="steel-brush" width="5" height="5" patternUnits="userSpaceOnUse">
<path d="M0 1H5M0 4H5" stroke="#fff6e1" strokeOpacity=".025" strokeWidth=".45" />
</pattern>
<clipPath id="pan-front-clip">
<path d="M205 285C205 364 312 428 445 428S685 364 685 285L654 428C654 490 561 541 445 541S236 490 236 428Z" />
</clipPath>
<clipPath id="pan-opening">
<ellipse cx="445" cy="285" rx="232" ry="137" />
</clipPath>
<g id="ginger-piece">
<path d="M-16-7Q-14-21-1-18Q11-22 17-8Q26 0 14 11Q5 21-9 14Q-23 12-16-7Z" fill="url(#ginger-skin)" />
<path d="M-12-7Q-1-18 11-7M-15 3Q-6 0-1 10" fill="none" stroke="#f8dba1" strokeOpacity=".4" strokeWidth="2" />
</g>
<g id="cardamom-pod">
<ellipse rx="9" ry="17" fill="url(#cardamom-skin)" />
<path d="M0-14Q-6 0 0 14M2-12Q7 0 2 12" stroke="#c0c875" strokeOpacity=".45" fill="none" strokeWidth="1" />
</g>
<g id="clove-piece">
<path d="m0 0 3 20 3-20" fill="#49301a" />
<circle cx="3" cy="0" r="5" fill="#61432b" />
<path d="m0-2 5 1" stroke="#99754b" strokeWidth="1.5" />
</g>
</defs>
<ellipse cx="460" cy="586" rx="258" ry="56" fill="#000" opacity=".5" filter="url(#burner-shadow)" />
<g className="burner">
<ellipse cx="445" cy="544" rx="254" ry="108" fill="none" stroke="#0d0b09" strokeWidth="9" />
<ellipse cx="445" cy="548" rx="248" ry="104" fill="none" stroke="#58402b" strokeOpacity=".5" strokeWidth="2" />
<ellipse cx="445" cy="526" rx="164" ry="69" fill="#12100f" stroke="#302c2a" strokeWidth="3" />
<ellipse cx="445" cy="525" rx="220" ry="92" fill="url(#flame-glow)" />
<path d="m265 485-39 34 9 65m388-99 41 34-9 65M445 566v63" fill="none" stroke="#0b0d10" strokeWidth="10" strokeLinejoin="round" />
<g className="gas-flames">
<g transform="translate(593.0 520.0)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.76s", "--flame-delay": "-0.95s"}} />
</g>
<g transform="translate(590.6 528.7)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.75s", "--flame-delay": "-0.08s"}} />
</g>
<g transform="translate(583.6 537.2)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.60s", "--flame-delay": "-0.42s"}} />
</g>
<g transform="translate(572.1 545.1)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.57s", "--flame-delay": "-0.13s"}} />
</g>
<g transform="translate(556.5 552.2)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.40s", "--flame-delay": "-0.44s"}} />
</g>
<g transform="translate(537.3 558.3)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.41s", "--flame-delay": "-0.46s"}} />
</g>
<g transform="translate(515.1 563.1)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.31s", "--flame-delay": "-0.09s"}} />
</g>
<g transform="translate(490.7 566.6)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.66s", "--flame-delay": "-0.42s"}} />
</g>
<g transform="translate(464.9 568.6)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.56s", "--flame-delay": "-0.73s"}} />
</g>
<g transform="translate(438.4 569.0)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.48s", "--flame-delay": "-0.06s"}} />
</g>
<g transform="translate(412.1 567.8)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.69s", "--flame-delay": "-0.59s"}} />
</g>
<g transform="translate(386.8 565.1)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.63s", "--flame-delay": "-0.62s"}} />
</g>
<g transform="translate(363.5 560.9)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.79s", "--flame-delay": "-0.36s"}} />
</g>
<g transform="translate(342.7 555.4)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.68s", "--flame-delay": "-0.37s"}} />
</g>
<g transform="translate(325.3 548.8)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.59s", "--flame-delay": "-0.66s"}} />
</g>
<g transform="translate(311.7 541.3)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.46s", "--flame-delay": "-0.09s"}} />
</g>
<g transform="translate(302.3 533.0)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.54s", "--flame-delay": "-0.72s"}} />
</g>
<g transform="translate(297.6 524.4)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.60s", "--flame-delay": "-0.45s"}} />
</g>
<g transform="translate(297.6 515.6)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.62s", "--flame-delay": "-0.18s"}} />
</g>
<g transform="translate(302.3 507.0)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.39s", "--flame-delay": "-0.32s"}} />
</g>
<g transform="translate(311.7 498.7)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.71s", "--flame-delay": "-0.20s"}} />
</g>
<g transform="translate(325.3 491.2)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.36s", "--flame-delay": "-0.10s"}} />
</g>
<g transform="translate(342.7 484.6)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.32s", "--flame-delay": "-0.28s"}} />
</g>
<g transform="translate(363.5 479.1)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.59s", "--flame-delay": "-0.82s"}} />
</g>
<g transform="translate(386.8 474.9)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.47s", "--flame-delay": "-0.37s"}} />
</g>
<g transform="translate(412.1 472.2)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.44s", "--flame-delay": "-0.30s"}} />
</g>
<g transform="translate(438.4 471.0)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.69s", "--flame-delay": "-0.55s"}} />
</g>
<g transform="translate(464.9 471.4)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.43s", "--flame-delay": "-0.11s"}} />
</g>
<g transform="translate(490.7 473.4)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.69s", "--flame-delay": "-0.71s"}} />
</g>
<g transform="translate(515.1 476.9)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.71s", "--flame-delay": "-0.24s"}} />
</g>
<g transform="translate(537.3 481.7)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.57s", "--flame-delay": "-0.92s"}} />
</g>
<g transform="translate(556.5 487.8)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.60s", "--flame-delay": "-0.95s"}} />
</g>
<g transform="translate(572.1 494.9)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.38s", "--flame-delay": "-0.98s"}} />
</g>
<g transform="translate(583.6 502.8)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.33s", "--flame-delay": "-0.42s"}} />
</g>
<g transform="translate(590.6 511.3)">
<path className="flame-jet" d="M-8 3Q-15-7-7-23Q-2-32 0-43Q3-25 8-20Q16-7 8 3Z" fill="url(#blue-flame)" style={{"--flame-speed": "0.31s", "--flame-delay": "-0.81s"}} />
</g>
</g>
</g>
<g className="saucepan">
<g className="pan-handle" transform="rotate(-9 670 285)">
<path d="M672 274 698 277H822V293H698L672 299Z" fill="url(#handle-metal)" stroke="#b9b5a5" strokeWidth="1" />
<path d="M800 271Q805 267 818 268L958 270Q965 270 966 277V292Q965 300 957 300L812 301Q799 300 798 293Z" fill="url(#handle-black)" stroke="#29271d" strokeWidth="2" />
<path d="M812 274 955 276M812 295H956" stroke="#70634b" strokeOpacity=".4" strokeWidth="2" />
<ellipse cx="701" cy="284" rx="3" ry="4" fill="#d4d0bc" />
<ellipse cx="715" cy="284" rx="3" ry="4" fill="#858a78" />
</g>
<path className="pan-body" d="M205 285C205 206 312 142 445 142S685 206 685 285L654 428C654 490 561 541 445 541S236 490 236 428Z" fill="url(#pan-steel)" stroke="#9a9889" strokeWidth="1.5" />
<ellipse cx="445" cy="285" rx="237" ry="140" fill="url(#pan-inside)" />
<g clipPath="url(#pan-opening)">
<g className="pan-liquid">
<ellipse cx="445" cy="328" rx="220" ry="129" fill="url(#water-depth)" />
<ellipse className="dark-brew" cx="445" cy="328" rx="220" ry="129" fill="url(#tea-dark)" />
<ellipse className="milky-brew" cx="445" cy="328" rx="220" ry="129" fill="url(#tea-milky)" />
<g className="spice-ingredients">
<g className="ingredient ginger" style={{"--drop-start": ".04", "--drift-delay": "-.6s"}}>
<use href="#ginger-piece" transform="translate(410 272) rotate(-18) scale(1.2)" />
<use href="#ginger-piece" transform="translate(438 290) rotate(30)" />
<use href="#ginger-piece" transform="translate(393 299) rotate(16)" />
<use href="#ginger-piece" transform="translate(493 386) rotate(-22) scale(.85)" />
</g>
<g className="ingredient cardamom" style={{"--drop-start": ".09", "--drift-delay": "-1.4s"}}>
<use href="#cardamom-pod" transform="translate(333 332) rotate(-38)" />
<use href="#cardamom-pod" transform="translate(529 293) rotate(28)" />
<use href="#cardamom-pod" transform="translate(453 351) rotate(-5) scale(.8)" />
<use href="#cardamom-pod" transform="translate(379 399) rotate(-60) scale(.8)" />
</g>
<g className="ingredient cinnamon" style={{"--drop-start": ".14", "--drift-delay": "-2s"}}>
<g transform="translate(408 345) rotate(21)">
<rect width="89" height="14" rx="3" fill="#97602b" />
<path d="M3 3H85M4 10H84" stroke="#c08a40" strokeWidth="2" />
<ellipse cx="2" cy="7" rx="3" ry="7" fill="#5a351d" />
<ellipse cx="86" cy="7" rx="3" ry="7" fill="#bb8341" />
</g>
</g>
<g className="ingredient cloves" style={{"--drop-start": ".18", "--drift-delay": "-.2s"}}>
<use href="#clove-piece" transform="translate(477 317) rotate(28)" />
<use href="#clove-piece" transform="translate(367 370) rotate(-55)" />
<use href="#clove-piece" transform="translate(551 362) rotate(48)" />
</g>
<g className="ingredient tea-leaves" style={{"--drop-start": ".22", "--drift-delay": "-3s"}}>
<ellipse cx="370.7" cy="236.2" rx="2.4" ry="3.2" fill="#5b3821" transform="rotate(113 370.7 236.2)" />
<ellipse cx="444.3" cy="269.4" rx="2.7" ry="1.9" fill="#201b12" transform="rotate(9 444.3 269.4)" />
<ellipse cx="563.9" cy="362.3" rx="1.3" ry="3.1" fill="#352319" transform="rotate(55 563.9 362.3)" />
<ellipse cx="567.6" cy="371.8" rx="2.1" ry="2.6" fill="#5b3821" transform="rotate(61 567.6 371.8)" />
<ellipse cx="442.6" cy="396.9" rx="2.5" ry="2.0" fill="#352319" transform="rotate(168 442.6 396.9)" />
<ellipse cx="582.9" cy="271.8" rx="2.5" ry="2.6" fill="#352319" transform="rotate(17 582.9 271.8)" />
<ellipse cx="382.4" cy="242.1" rx="2.1" ry="1.5" fill="#352319" transform="rotate(108 382.4 242.1)" />
<ellipse cx="299.9" cy="378.7" rx="1.9" ry="2.3" fill="#352319" transform="rotate(27 299.9 378.7)" />
<ellipse cx="517.2" cy="336.1" rx="2.6" ry="2.7" fill="#352319" transform="rotate(63 517.2 336.1)" />
<ellipse cx="525.8" cy="402.1" rx="1.6" ry="2.6" fill="#201b12" transform="rotate(60 525.8 402.1)" />
<ellipse cx="590.4" cy="264.3" rx="2.4" ry="3.3" fill="#352319" transform="rotate(1 590.4 264.3)" />
<ellipse cx="429.1" cy="343.5" rx="2.6" ry="2.7" fill="#352319" transform="rotate(52 429.1 343.5)" />
<ellipse cx="454.2" cy="312.8" rx="2.1" ry="2.7" fill="#201b12" transform="rotate(107 454.2 312.8)" />
<ellipse cx="402.7" cy="262.2" rx="2.2" ry="2.2" fill="#5b3821" transform="rotate(45 402.7 262.2)" />
<ellipse cx="339.5" cy="320.8" rx="2.5" ry="1.2" fill="#201b12" transform="rotate(127 339.5 320.8)" />
<ellipse cx="426.2" cy="339.6" rx="1.8" ry="1.9" fill="#5b3821" transform="rotate(81 426.2 339.6)" />
<ellipse cx="298.1" cy="380.8" rx="1.5" ry="3.1" fill="#201b12" transform="rotate(99 298.1 380.8)" />
<ellipse cx="623.0" cy="355.8" rx="2.1" ry="2.7" fill="#352319" transform="rotate(137 623.0 355.8)" />
<ellipse cx="434.7" cy="360.3" rx="1.4" ry="1.6" fill="#201b12" transform="rotate(128 434.7 360.3)" />
<ellipse cx="338.6" cy="388.8" rx="2.7" ry="1.6" fill="#352319" transform="rotate(1 338.6 388.8)" />
<ellipse cx="507.8" cy="289.2" rx="2.4" ry="1.6" fill="#5b3821" transform="rotate(162 507.8 289.2)" />
<ellipse cx="322.3" cy="342.5" rx="1.1" ry="1.5" fill="#5b3821" transform="rotate(37 322.3 342.5)" />
<ellipse cx="320.3" cy="266.9" rx="1.3" ry="2.2" fill="#5b3821" transform="rotate(173 320.3 266.9)" />
<ellipse cx="319.8" cy="408.3" rx="2.1" ry="2.6" fill="#5b3821" transform="rotate(43 319.8 408.3)" />
<ellipse cx="510.7" cy="339.1" rx="2.3" ry="3.3" fill="#201b12" transform="rotate(156 510.7 339.1)" />
<ellipse cx="367.6" cy="239.2" rx="1.5" ry="3.1" fill="#352319" transform="rotate(145 367.6 239.2)" />
<ellipse cx="456.9" cy="308.4" rx="1.1" ry="2.7" fill="#201b12" transform="rotate(83 456.9 308.4)" />
<ellipse cx="559.1" cy="341.2" rx="1.3" ry="1.5" fill="#352319" transform="rotate(81 559.1 341.2)" />
<ellipse cx="449.4" cy="281.5" rx="2.0" ry="3.2" fill="#5b3821" transform="rotate(92 449.4 281.5)" />
<ellipse cx="355.0" cy="320.5" rx="2.0" ry="2.7" fill="#352319" transform="rotate(168 355.0 320.5)" />
<ellipse cx="637.9" cy="318.1" rx="1.2" ry="1.9" fill="#352319" transform="rotate(10 637.9 318.1)" />
<ellipse cx="329.2" cy="333.2" rx="1.4" ry="2.5" fill="#201b12" transform="rotate(53 329.2 333.2)" />
<ellipse cx="393.8" cy="391.3" rx="1.1" ry="2.7" fill="#352319" transform="rotate(41 393.8 391.3)" />
<ellipse cx="338.2" cy="294.7" rx="1.4" ry="1.7" fill="#5b3821" transform="rotate(75 338.2 294.7)" />
<ellipse cx="368.2" cy="344.4" rx="2.4" ry="2.3" fill="#201b12" transform="rotate(137 368.2 344.4)" />
<ellipse cx="570.1" cy="281.3" rx="2.4" ry="1.4" fill="#352319" transform="rotate(48 570.1 281.3)" />
<ellipse cx="376.8" cy="272.7" rx="1.1" ry="2.9" fill="#352319" transform="rotate(163 376.8 272.7)" />
<ellipse cx="410.4" cy="346.6" rx="1.1" ry="1.9" fill="#5b3821" transform="rotate(171 410.4 346.6)" />
<ellipse cx="404.0" cy="248.6" rx="1.5" ry="1.4" fill="#5b3821" transform="rotate(16 404.0 248.6)" />
<ellipse cx="446.3" cy="237.2" rx="1.8" ry="2.7" fill="#201b12" transform="rotate(108 446.3 237.2)" />
<ellipse cx="371.3" cy="336.6" rx="2.1" ry="1.7" fill="#5b3821" transform="rotate(4 371.3 336.6)" />
<ellipse cx="445.2" cy="249.8" rx="1.9" ry="1.5" fill="#352319" transform="rotate(79 445.2 249.8)" />
<ellipse cx="432.8" cy="384.5" rx="1.8" ry="2.3" fill="#5b3821" transform="rotate(75 432.8 384.5)" />
<ellipse cx="356.4" cy="405.3" rx="1.4" ry="2.5" fill="#5b3821" transform="rotate(39 356.4 405.3)" />
<ellipse cx="604.7" cy="365.3" rx="1.2" ry="3.1" fill="#5b3821" transform="rotate(79 604.7 365.3)" />
<ellipse cx="509.1" cy="323.5" rx="2.4" ry="1.2" fill="#201b12" transform="rotate(8 509.1 323.5)" />
<ellipse cx="409.0" cy="231.0" rx="2.1" ry="2.2" fill="#352319" transform="rotate(139 409.0 231.0)" />
<ellipse cx="269.8" cy="284.7" rx="2.1" ry="3.0" fill="#201b12" transform="rotate(168 269.8 284.7)" />
<ellipse cx="439.0" cy="302.8" rx="2.4" ry="1.4" fill="#201b12" transform="rotate(125 439.0 302.8)" />
<ellipse cx="592.9" cy="361.5" rx="1.2" ry="3.2" fill="#201b12" transform="rotate(153 592.9 361.5)" />
<ellipse cx="507.4" cy="246.5" rx="2.0" ry="2.3" fill="#201b12" transform="rotate(162 507.4 246.5)" />
<ellipse cx="519.3" cy="334.4" rx="1.0" ry="2.5" fill="#5b3821" transform="rotate(142 519.3 334.4)" />
<ellipse cx="548.9" cy="292.4" rx="2.5" ry="1.2" fill="#352319" transform="rotate(73 548.9 292.4)" />
<ellipse cx="371.6" cy="259.3" rx="2.4" ry="1.5" fill="#201b12" transform="rotate(36 371.6 259.3)" />
<ellipse cx="542.5" cy="408.0" rx="2.1" ry="1.3" fill="#352319" transform="rotate(129 542.5 408.0)" />
<ellipse cx="471.7" cy="370.3" rx="2.2" ry="2.5" fill="#5b3821" transform="rotate(52 471.7 370.3)" />
<ellipse cx="498.7" cy="285.0" rx="2.0" ry="2.9" fill="#5b3821" transform="rotate(32 498.7 285.0)" />
<ellipse cx="541.4" cy="374.7" rx="1.1" ry="2.6" fill="#352319" transform="rotate(85 541.4 374.7)" />
<ellipse cx="452.1" cy="297.8" rx="1.4" ry="1.9" fill="#352319" transform="rotate(117 452.1 297.8)" />
<ellipse cx="475.1" cy="405.3" rx="2.3" ry="1.8" fill="#5b3821" transform="rotate(151 475.1 405.3)" />
<ellipse cx="504.9" cy="324.6" rx="1.2" ry="3.0" fill="#201b12" transform="rotate(143 504.9 324.6)" />
<ellipse cx="420.8" cy="343.1" rx="1.1" ry="2.9" fill="#201b12" transform="rotate(67 420.8 343.1)" />
<ellipse cx="393.1" cy="368.0" rx="2.2" ry="2.5" fill="#352319" transform="rotate(23 393.1 368.0)" />
<ellipse cx="504.8" cy="236.9" rx="2.3" ry="1.2" fill="#5b3821" transform="rotate(170 504.8 236.9)" />
<ellipse cx="332.1" cy="387.3" rx="1.0" ry="2.3" fill="#5b3821" transform="rotate(17 332.1 387.3)" />
<ellipse cx="624.6" cy="344.2" rx="2.3" ry="2.6" fill="#201b12" transform="rotate(171 624.6 344.2)" />
<ellipse cx="466.1" cy="249.2" rx="2.6" ry="3.2" fill="#5b3821" transform="rotate(179 466.1 249.2)" />
<ellipse cx="511.3" cy="374.2" rx="1.9" ry="2.2" fill="#5b3821" transform="rotate(162 511.3 374.2)" />
<ellipse cx="500.8" cy="258.0" rx="2.1" ry="2.2" fill="#5b3821" transform="rotate(45 500.8 258.0)" />
<ellipse cx="344.5" cy="291.5" rx="1.6" ry="1.4" fill="#201b12" transform="rotate(86 344.5 291.5)" />
<ellipse cx="478.3" cy="255.7" rx="2.5" ry="2.1" fill="#5b3821" transform="rotate(13 478.3 255.7)" />
<ellipse cx="475.5" cy="247.5" rx="2.4" ry="1.6" fill="#201b12" transform="rotate(4 475.5 247.5)" />
<ellipse cx="372.9" cy="298.8" rx="2.7" ry="2.0" fill="#201b12" transform="rotate(154 372.9 298.8)" />
<ellipse cx="574.1" cy="375.3" rx="2.2" ry="1.6" fill="#201b12" transform="rotate(54 574.1 375.3)" />
<ellipse cx="370.4" cy="235.8" rx="2.7" ry="1.3" fill="#5b3821" transform="rotate(82 370.4 235.8)" />
<ellipse cx="440.8" cy="241.9" rx="1.6" ry="2.2" fill="#5b3821" transform="rotate(109 440.8 241.9)" />
<ellipse cx="471.1" cy="311.1" rx="1.6" ry="1.7" fill="#5b3821" transform="rotate(29 471.1 311.1)" />
<ellipse cx="509.2" cy="344.6" rx="1.3" ry="3.0" fill="#352319" transform="rotate(32 509.2 344.6)" />
<ellipse cx="406.8" cy="355.9" rx="2.1" ry="1.8" fill="#5b3821" transform="rotate(116 406.8 355.9)" />
<ellipse cx="615.1" cy="278.9" rx="1.3" ry="2.3" fill="#352319" transform="rotate(153 615.1 278.9)" />
<ellipse cx="442.6" cy="275.3" rx="1.9" ry="2.8" fill="#201b12" transform="rotate(163 442.6 275.3)" />
<ellipse cx="543.3" cy="252.0" rx="1.9" ry="2.5" fill="#201b12" transform="rotate(32 543.3 252.0)" />
<ellipse cx="279.6" cy="342.4" rx="2.6" ry="3.0" fill="#352319" transform="rotate(58 279.6 342.4)" />
<ellipse cx="374.1" cy="319.6" rx="2.2" ry="2.6" fill="#352319" transform="rotate(147 374.1 319.6)" />
<ellipse cx="482.5" cy="383.7" rx="1.8" ry="3.0" fill="#201b12" transform="rotate(68 482.5 383.7)" />
<ellipse cx="439.7" cy="404.4" rx="1.3" ry="2.4" fill="#352319" transform="rotate(107 439.7 404.4)" />
<ellipse cx="461.6" cy="296.1" rx="1.3" ry="1.9" fill="#201b12" transform="rotate(104 461.6 296.1)" />
<ellipse cx="567.1" cy="390.8" rx="1.5" ry="1.6" fill="#201b12" transform="rotate(55 567.1 390.8)" />
<ellipse cx="455.2" cy="412.1" rx="1.5" ry="1.5" fill="#201b12" transform="rotate(45 455.2 412.1)" />
<ellipse cx="370.9" cy="354.2" rx="2.6" ry="2.9" fill="#201b12" transform="rotate(18 370.9 354.2)" />
<ellipse cx="443.0" cy="324.4" rx="1.6" ry="2.7" fill="#201b12" transform="rotate(131 443.0 324.4)" />
<ellipse cx="350.0" cy="361.1" rx="1.8" ry="2.4" fill="#201b12" transform="rotate(57 350.0 361.1)" />
<ellipse cx="423.4" cy="419.8" rx="1.2" ry="1.2" fill="#201b12" transform="rotate(27 423.4 419.8)" />
<ellipse cx="529.3" cy="355.8" rx="1.2" ry="1.2" fill="#352319" transform="rotate(135 529.3 355.8)" />
<ellipse cx="430.6" cy="401.6" rx="2.2" ry="2.8" fill="#201b12" transform="rotate(141 430.6 401.6)" />
<ellipse cx="436.7" cy="322.5" rx="1.9" ry="2.4" fill="#201b12" transform="rotate(146 436.7 322.5)" />
<ellipse cx="355.5" cy="363.3" rx="2.0" ry="1.1" fill="#5b3821" transform="rotate(140 355.5 363.3)" />
<ellipse cx="552.9" cy="248.8" rx="1.9" ry="3.1" fill="#201b12" transform="rotate(124 552.9 248.8)" />
<ellipse cx="386.3" cy="364.8" rx="1.5" ry="3.1" fill="#352319" transform="rotate(163 386.3 364.8)" />
<ellipse cx="597.8" cy="317.3" rx="1.5" ry="2.8" fill="#201b12" transform="rotate(107 597.8 317.3)" />
</g>
</g>
<g className="milk-ripples" fill="none" stroke="#f4d7a5">
<ellipse cx="427" cy="308" rx="28" ry="12" strokeWidth="3" />
<ellipse cx="427" cy="308" rx="47" ry="21" strokeWidth="1.5" />
<ellipse cx="427" cy="308" rx="66" ry="30" strokeWidth="1" />
</g>
<g className="boiling-bubbles">
<ellipse className="boil-bubble" cx="456.1" cy="425.7" rx="2.9" ry="1.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.38s", "--bubble-delay": "-1.19s"}} />
<ellipse className="boil-bubble" cx="295.5" cy="286.5" rx="9.3" ry="5.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.27s", "--bubble-delay": "-0.28s"}} />
<ellipse className="boil-bubble" cx="350.6" cy="321.2" rx="5.7" ry="3.6" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.09s", "--bubble-delay": "-0.27s"}} />
<ellipse className="boil-bubble" cx="403.5" cy="315.1" rx="4.5" ry="2.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.56s", "--bubble-delay": "-0.28s"}} />
<ellipse className="boil-bubble" cx="510.0" cy="230.4" rx="2.7" ry="1.8" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.27s", "--bubble-delay": "-0.53s"}} />
<ellipse className="boil-bubble" cx="438.7" cy="299.1" rx="8.1" ry="5.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.49s", "--bubble-delay": "-0.78s"}} />
<ellipse className="boil-bubble" cx="504.4" cy="378.3" rx="8.9" ry="5.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.23s", "--bubble-delay": "-0.47s"}} />
<ellipse className="boil-bubble" cx="585.3" cy="272.3" rx="9.7" ry="6.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.55s", "--bubble-delay": "-0.48s"}} />
<ellipse className="boil-bubble" cx="440.6" cy="308.6" rx="3.9" ry="2.5" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.81s", "--bubble-delay": "-0.70s"}} />
<ellipse className="boil-bubble" cx="468.7" cy="387.1" rx="5.9" ry="3.8" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.46s", "--bubble-delay": "-1.74s"}} />
<ellipse className="boil-bubble" cx="285.8" cy="294.0" rx="3.9" ry="2.5" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.27s", "--bubble-delay": "-2.29s"}} />
<ellipse className="boil-bubble" cx="497.7" cy="259.6" rx="6.6" ry="4.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.03s", "--bubble-delay": "-1.38s"}} />
<ellipse className="boil-bubble" cx="324.3" cy="243.9" rx="9.2" ry="5.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.48s", "--bubble-delay": "-2.27s"}} />
<ellipse className="boil-bubble" cx="566.2" cy="243.3" rx="7.6" ry="4.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.46s", "--bubble-delay": "-2.62s"}} />
<ellipse className="boil-bubble" cx="594.9" cy="333.1" rx="5.9" ry="3.8" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.40s", "--bubble-delay": "-1.86s"}} />
<ellipse className="boil-bubble" cx="469.9" cy="366.1" rx="2.8" ry="1.8" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.18s", "--bubble-delay": "-2.35s"}} />
<ellipse className="boil-bubble" cx="378.8" cy="360.8" rx="6.7" ry="4.3" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.23s", "--bubble-delay": "-1.58s"}} />
<ellipse className="boil-bubble" cx="382.3" cy="374.8" rx="7.7" ry="4.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.32s", "--bubble-delay": "-0.99s"}} />
<ellipse className="boil-bubble" cx="266.3" cy="284.8" rx="3.6" ry="2.3" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.42s", "--bubble-delay": "-0.82s"}} />
<ellipse className="boil-bubble" cx="389.5" cy="392.9" rx="8.7" ry="5.5" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.21s", "--bubble-delay": "-2.16s"}} />
<ellipse className="boil-bubble" cx="307.3" cy="358.2" rx="6.3" ry="4.0" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.93s", "--bubble-delay": "-0.54s"}} />
<ellipse className="boil-bubble" cx="350.4" cy="280.2" rx="8.4" ry="5.4" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.91s", "--bubble-delay": "-1.22s"}} />
<ellipse className="boil-bubble" cx="529.3" cy="321.4" rx="2.6" ry="1.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.11s", "--bubble-delay": "-2.07s"}} />
<ellipse className="boil-bubble" cx="588.7" cy="374.6" rx="3.2" ry="2.0" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.41s", "--bubble-delay": "-1.87s"}} />
<ellipse className="boil-bubble" cx="575.5" cy="334.1" rx="10.0" ry="6.4" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.14s", "--bubble-delay": "-1.17s"}} />
<ellipse className="boil-bubble" cx="571.6" cy="281.5" rx="8.6" ry="5.5" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.48s", "--bubble-delay": "-1.14s"}} />
<ellipse className="boil-bubble" cx="391.6" cy="237.0" rx="7.7" ry="4.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.16s", "--bubble-delay": "-1.26s"}} />
<ellipse className="boil-bubble" cx="405.0" cy="371.4" rx="3.4" ry="2.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.17s", "--bubble-delay": "-0.42s"}} />
<ellipse className="boil-bubble" cx="428.4" cy="336.5" rx="7.8" ry="5.0" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.96s", "--bubble-delay": "-0.23s"}} />
<ellipse className="boil-bubble" cx="634.8" cy="292.4" rx="8.1" ry="5.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.27s", "--bubble-delay": "-2.11s"}} />
<ellipse className="boil-bubble" cx="548.5" cy="332.6" rx="4.3" ry="2.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "0.94s", "--bubble-delay": "-1.92s"}} />
<ellipse className="boil-bubble" cx="343.9" cy="290.4" rx="8.1" ry="5.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.30s", "--bubble-delay": "-0.84s"}} />
<ellipse className="boil-bubble" cx="517.7" cy="359.0" rx="8.9" ry="5.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.73s", "--bubble-delay": "-2.21s"}} />
<ellipse className="boil-bubble" cx="555.1" cy="261.1" rx="5.2" ry="3.3" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.54s", "--bubble-delay": "-0.24s"}} />
<ellipse className="boil-bubble" cx="284.2" cy="376.8" rx="7.6" ry="4.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.50s", "--bubble-delay": "-2.48s"}} />
<ellipse className="boil-bubble" cx="453.4" cy="235.0" rx="4.5" ry="2.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.06s", "--bubble-delay": "-1.97s"}} />
<ellipse className="boil-bubble" cx="521.8" cy="260.9" rx="9.5" ry="6.1" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.12s", "--bubble-delay": "-0.63s"}} />
<ellipse className="boil-bubble" cx="366.9" cy="302.8" rx="7.1" ry="4.6" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.45s", "--bubble-delay": "-2.99s"}} />
<ellipse className="boil-bubble" cx="347.7" cy="403.8" rx="8.8" ry="5.6" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.53s", "--bubble-delay": "-1.77s"}} />
<ellipse className="boil-bubble" cx="458.2" cy="389.6" rx="5.8" ry="3.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.11s", "--bubble-delay": "-1.52s"}} />
<ellipse className="boil-bubble" cx="530.6" cy="397.4" rx="6.4" ry="4.1" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.79s", "--bubble-delay": "-1.34s"}} />
<ellipse className="boil-bubble" cx="553.3" cy="261.3" rx="7.5" ry="4.8" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.75s", "--bubble-delay": "-1.21s"}} />
<ellipse className="boil-bubble" cx="297.2" cy="363.6" rx="5.8" ry="3.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.02s", "--bubble-delay": "-0.66s"}} />
<ellipse className="boil-bubble" cx="486.8" cy="332.7" rx="5.2" ry="3.3" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.54s", "--bubble-delay": "-1.37s"}} />
<ellipse className="boil-bubble" cx="474.2" cy="373.8" rx="5.9" ry="3.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.39s", "--bubble-delay": "-0.78s"}} />
<ellipse className="boil-bubble" cx="270.5" cy="329.9" rx="3.0" ry="1.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "0.92s", "--bubble-delay": "-1.34s"}} />
<ellipse className="boil-bubble" cx="570.1" cy="273.0" rx="5.2" ry="3.4" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.55s", "--bubble-delay": "-2.04s"}} />
<ellipse className="boil-bubble" cx="528.8" cy="238.4" rx="2.8" ry="1.8" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.23s", "--bubble-delay": "-2.37s"}} />
<ellipse className="boil-bubble" cx="297.9" cy="388.5" rx="3.0" ry="1.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.49s", "--bubble-delay": "-1.86s"}} />
<ellipse className="boil-bubble" cx="290.3" cy="376.0" rx="6.5" ry="4.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.68s", "--bubble-delay": "-0.55s"}} />
<ellipse className="boil-bubble" cx="461.2" cy="285.4" rx="4.8" ry="3.0" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.05s", "--bubble-delay": "-0.05s"}} />
<ellipse className="boil-bubble" cx="432.7" cy="346.4" rx="6.0" ry="3.9" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.49s", "--bubble-delay": "-0.05s"}} />
<ellipse className="boil-bubble" cx="340.7" cy="337.8" rx="4.2" ry="2.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.82s", "--bubble-delay": "-1.00s"}} />
<ellipse className="boil-bubble" cx="626.8" cy="359.3" rx="9.8" ry="6.3" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.30s", "--bubble-delay": "-1.98s"}} />
<ellipse className="boil-bubble" cx="359.2" cy="298.1" rx="6.5" ry="4.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.35s", "--bubble-delay": "-0.83s"}} />
<ellipse className="boil-bubble" cx="404.3" cy="331.5" rx="4.2" ry="2.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.57s", "--bubble-delay": "-2.31s"}} />
<ellipse className="boil-bubble" cx="347.2" cy="417.3" rx="5.0" ry="3.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.35s", "--bubble-delay": "-0.97s"}} />
<ellipse className="boil-bubble" cx="550.8" cy="281.0" rx="9.0" ry="5.8" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.13s", "--bubble-delay": "-1.18s"}} />
<ellipse className="boil-bubble" cx="346.0" cy="402.6" rx="9.0" ry="5.8" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.13s", "--bubble-delay": "-1.23s"}} />
<ellipse className="boil-bubble" cx="469.0" cy="349.0" rx="3.5" ry="2.2" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.03s", "--bubble-delay": "-0.91s"}} />
<ellipse className="boil-bubble" cx="272.5" cy="367.5" rx="7.4" ry="4.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.19s", "--bubble-delay": "-0.99s"}} />
<ellipse className="boil-bubble" cx="389.1" cy="386.2" rx="4.2" ry="2.7" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "0.93s", "--bubble-delay": "-0.83s"}} />
<ellipse className="boil-bubble" cx="485.7" cy="314.6" rx="6.3" ry="4.0" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.29s", "--bubble-delay": "-2.29s"}} />
<ellipse className="boil-bubble" cx="583.8" cy="343.0" rx="7.9" ry="5.1" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.69s", "--bubble-delay": "-0.43s"}} />
<ellipse className="boil-bubble" cx="466.2" cy="315.6" rx="9.4" ry="6.0" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "2.29s", "--bubble-delay": "-2.65s"}} />
<ellipse className="boil-bubble" cx="525.7" cy="276.8" rx="7.2" ry="4.6" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.70s", "--bubble-delay": "-1.75s"}} />
<ellipse className="boil-bubble" cx="310.3" cy="392.1" rx="4.8" ry="3.1" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.85s", "--bubble-delay": "-0.20s"}} />
<ellipse className="boil-bubble" cx="620.5" cy="360.9" rx="5.2" ry="3.3" fill="url(#bubble-light)" stroke="#f2c997" strokeOpacity=".35" strokeWidth=".7" style={{"--bubble-duration": "1.54s", "--bubble-delay": "-2.96s"}} />
</g>
</g>
</g>
<path className="pan-front" d="M205 285C205 364 312 428 445 428S685 364 685 285L654 428C654 490 561 541 445 541S236 490 236 428Z" fill="url(#pan-steel)" />
<path d="M205 285C205 364 312 428 445 428S685 364 685 285L654 428C654 490 561 541 445 541S236 490 236 428Z" fill="url(#steel-brush)" />
<path d="M236 428C236 490 329 541 445 541S654 490 654 428" fill="none" stroke="#bcb9aa" strokeWidth="2" />
<g clipPath="url(#pan-front-clip)">
<rect x="205" y="428" width="480" height="114" fill="url(#pan-heat-reflection)" />
<rect x="205" y="285" width="480" height="256" fill="url(#pan-warm-reflection)" />
<path d="M209 311 240 431M681 308 651 431" stroke="#e4e4ce" strokeOpacity=".35" strokeWidth="1.3" />
</g>
<ellipse className="pan-rim" cx="445" cy="285" rx="240" ry="143" fill="none" stroke="url(#pan-lip)" strokeWidth="3.4" />
<path d="M215 259C242 194 339 144 445 144S646 188 676 252" fill="none" stroke="#faf0dd" strokeOpacity=".65" strokeWidth="1.5" />
<g className="pouring-milk">
<path d="M417-125Q424 38 421 151T427 306" fill="none" stroke="url(#milk-stream)" strokeWidth="13" />
<path d="M419-125Q426 38 423 151T429 306" fill="none" stroke="#fff5dc" strokeOpacity=".7" strokeWidth="3" />
<ellipse cx="427" cy="308" rx="11" ry="5" fill="#f5dfb8" />
</g>
</g>
<g className="brewing-vapor" fill="#fff5df" filter="url(#vapor-blur)">
<path className="vapor vapor-one" d="M370 277Q317 234 369 189T361 94Q343 64 379 30Q357 102 393 137T390 211Q369 247 395 277Z" />
<path className="vapor vapor-two" d="M434 268Q470 217 437 181T452 101Q469 68 444 18Q493 71 473 117T475 191Q471 234 454 273Z" />
<path className="vapor vapor-three" d="M514 283Q474 240 514 199T512 119Q493 91 520 62Q514 113 544 142T541 215Q510 248 535 283Z" />
</g>
</svg>
</div>
<div className="brewing-copy">
<article className="brewing-chapter" data-chapter="0">
<p className="brew-eyebrow">
{"01 — 5:40 AM, THE FIRST PAN"}
</p>
<h2>
{"Ginger first."}
<span>
{"Always pounded."}
</span>
</h2>
<p className="brew-description">
{"Every spice goes into the water whole and bruised, never as a powder — then two heaped spoons of Assam."}
</p>
</article>
<article className="brewing-chapter" data-chapter="1" aria-hidden="true">
<p className="brew-eyebrow">
{"02 — THE POUR"}
</p>
<h2>
{"Then the milk,"}
<span>
{"all at once."}
</span>
</h2>
<p className="brew-description">
{"Full-cream buffalo milk, straight into the boiling tea. No water-on-milk rituals or a whisper."}
</p>
</article>
<article className="brewing-chapter" data-chapter="2" aria-hidden="true">
<p className="brew-eyebrow">
{"03 — NO SHORTCUTS"}
</p>
<h2>
{"Boiled up"}
<span>
{"three times."}
</span>
</h2>
<p className="brew-description">
{"Let it rise. Turn it down. Bring it back. Three boils for a chai that stays with you."}
</p>
</article>
</div>
<ul className="ingredient-list" aria-label="Whole spices and tea">
<li data-spice="0">
<strong>
{"Ginger"}
</strong>
<small>
{"POUNDED · NOT GRATED"}
</small>
</li>
<li data-spice="1">
<strong>
{"Green cardamom"}
</strong>
<small>
{"PODS SPLIT BY HAND"}
</small>
</li>
<li data-spice="2">
<strong>
{"Clove"}
</strong>
<small>
{"WHOLE · NOT GROUND"}
</small>
</li>
<li data-spice="2">
<strong>
{"Cinnamon"}
</strong>
<small>
{"A PIECE OF BARK"}
</small>
</li>
<li data-spice="3">
<strong>
{"Black pepper"}
</strong>
<small>
{"FOR THE LITTLE KICK"}
</small>
</li>
<li data-spice="4">
<strong>
{"Assam CTC"}
</strong>
<small>
{"TWO HEAPED SPOONS"}
</small>
</li>
</ul>
<div className="boil-note">
<div className="boil-number">
{"3"}
<span>
{"×"}
</span>
</div>
<p>
{"Up to the rim."}
<br />
{"Back to the flame."}
<br />
{"Never rushed."}
</p>
</div>
<nav className="brew-navigation" aria-label="Chai-making stages">
<div className="brew-steps">
<button className="brew-step" data-brew-step="0" aria-current="step">
{"SPICED "}
<span>
{"01"}
</span>
</button>
<button className="brew-step" data-brew-step="1">
{"MILK "}
<span>
{"02"}
</span>
</button>
<button className="brew-step" data-brew-step="2">
{"BOIL "}
<span>
{"03"}
</span>
</button>
</div>
<div className="brew-track" aria-hidden="true">
<span />
</div>
</nav>
<div className="brew-scroll-label" aria-hidden="true">
{"KEEP SCROLLING "}
<span>
{"↓"}
</span>
</div>
</div>
</section>
  );
}
