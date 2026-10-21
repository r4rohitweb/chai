import { AddToBag, BagAnnouncement } from "../state/BagContext.jsx";

export default function Counter() {
  return (
<section className="counter-section" id="the-counter" aria-labelledby="counter-title">
<svg className="counter-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs>
<defs xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="counter-table-spread-glass-body" x1="0" y1="0" x2="1" y2=".15">
<stop stopColor="#fff8cd" stopOpacity=".7" />
<stop offset=".09" stopColor="#fffaf0" stopOpacity=".16" />
<stop offset=".27" stopColor="#f8c87a" stopOpacity=".12" />
<stop offset=".44" stopColor="#fff" stopOpacity=".27" />
<stop offset=".67" stopColor="#e2bd74" stopOpacity=".06" />
<stop offset=".88" stopColor="#fff9d1" stopOpacity=".6" />
<stop offset="1" stopColor="#a47a34" stopOpacity=".3" />
</linearGradient>
<linearGradient id="counter-table-spread-tea-body" x1="0" y1="0" x2="1" y2=".1">
<stop stopColor="#98541e" />
<stop offset=".12" stopColor="#b57536" />
<stop offset=".42" stopColor="#cb914e" />
<stop offset=".74" stopColor="#b87c3c" />
<stop offset="1" stopColor="#864915" />
</linearGradient>
<linearGradient id="counter-table-spread-tea-top" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#d6a267" />
<stop offset="1" stopColor="#c18a4b" />
</linearGradient>
<linearGradient id="counter-table-spread-glass-edge">
<stop stopColor="#b68d4c" stopOpacity=".45" />
<stop offset=".23" stopColor="#fffbed" stopOpacity=".95" />
<stop offset=".5" stopColor="#f7edce" stopOpacity=".4" />
<stop offset=".8" stopColor="#fffbed" />
<stop offset="1" stopColor="#b9914b" stopOpacity=".5" />
</linearGradient>
<linearGradient id="counter-table-spread-glass-foot" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#f3e3b0" stopOpacity=".2" />
<stop offset=".55" stopColor="#fff9e1" stopOpacity=".85" />
<stop offset=".85" stopColor="#c1aa72" stopOpacity=".6" />
<stop offset="1" stopColor="#fffcec" />
</linearGradient>
<linearGradient id="counter-table-spread-plate-face" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#fffbed" />
<stop offset=".62" stopColor="#f4edda" />
<stop offset="1" stopColor="#c4b597" />
</linearGradient>
<radialGradient id="counter-table-spread-plate-well">
<stop stopColor="#dad0b6" />
<stop offset=".76" stopColor="#e8dfc9" />
<stop offset="1" stopColor="#fff9e9" />
</radialGradient>
<linearGradient id="counter-table-spread-biscuit-top" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#f7ce83" />
<stop offset=".32" stopColor="#eeb865" />
<stop offset=".72" stopColor="#e4a34e" />
<stop offset="1" stopColor="#c88937" />
</linearGradient>
<linearGradient id="counter-table-spread-biscuit-edge" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#d79742" />
<stop offset=".6" stopColor="#b97429" />
<stop offset="1" stopColor="#a46122" />
</linearGradient>
<linearGradient id="counter-table-spread-rib-light">
<stop stopColor="#fffce3" stopOpacity=".04" />
<stop offset=".43" stopColor="#fffbe1" stopOpacity=".05" />
<stop offset=".57" stopColor="#fffde5" stopOpacity=".9" />
<stop offset=".82" stopColor="#fff9ce" stopOpacity=".2" />
<stop offset="1" stopColor="#976420" stopOpacity=".15" />
</linearGradient>
<filter id="counter-table-spread-contact-shadow" x="-.5" y="-1" width="2" height="3">
<feGaussianBlur stdDeviation="4" />
</filter>
<filter id="counter-table-spread-soft-shadow" x="-.5" y="-1" width="2" height="3">
<feGaussianBlur stdDeviation="1.6" />
</filter>
<filter id="counter-table-spread-biscuit-grain" x="0" y="0" width="1" height="1">
<feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" seed="8" />
<feColorMatrix type="saturate" values="0" />
<feBlend in="SourceGraphic" mode="soft-light" />
</filter>
<clipPath id="counter-table-spread-inside-glass">
<path d="M172 25 Q275 4 378 25 L349 307 Q275 335 201 307Z" />
</clipPath>
<clipPath id="counter-table-spread-biscuit-clip">
<path className="counter-art-spread-biscuit-outline" d="M12 4 H135 Q146 4 146 15 V180 Q146 192 134 192 H13 Q2 192 2 180 V16 Q2 4 12 4Z" />
</clipPath>
<pattern id="counter-table-spread-biscuit-pores" width="17" height="19" patternUnits="userSpaceOnUse">
<circle cx="3" cy="5" r=".8" fill="#a66b29" opacity=".42" />
<circle cx="11" cy="14" r=".5" fill="#fff0b8" opacity=".7" />
<path d="m13 3 1 1M5 14l1 .7" stroke="#aa702e" strokeWidth=".6" opacity=".4" />
</pattern>
<pattern id="counter-table-spread-biscuit-holes" width="28" height="29" patternUnits="userSpaceOnUse">
<ellipse cx="14" cy="14" rx="1.6" ry="2" fill="#af7532" />
<path d="M12 15q2 3 4 0" stroke="#ffda92" strokeWidth="1" fill="none" />
</pattern>
<g id="counter-table-spread-biscuit">
<path className="counter-art-spread-biscuit-thickness" d="M12 4 Q18 -2 24 4 Q30 -2 36 4 Q42 -2 48 4 Q54 -2 60 4 Q66 -2 72 4 Q78 -2 84 4 Q90 -2 96 4 Q102 -2 108 4 Q114 -2 120 4 Q126 -2 132 4 Q146 4 146 16 Q152 22 146 28 Q152 34 146 40 Q152 46 146 52 Q152 58 146 64 Q152 70 146 76 Q152 82 146 88 Q152 94 146 100 Q152 106 146 112 Q152 118 146 124 Q152 130 146 136 Q152 142 146 148 Q152 154 146 160 Q152 166 146 172 Q146 192 134 192 Q128 198 122 192 Q116 198 110 192 Q104 198 98 192 Q92 198 86 192 Q80 198 74 192 Q68 198 62 192 Q56 198 50 192 Q44 198 38 192 Q32 198 26 192 Q20 198 14 192 Q2 192 2 180 Q-4 174 2 168 Q-4 162 2 156 Q-4 150 2 144 Q-4 138 2 132 Q-4 126 2 120 Q-4 114 2 108 Q-4 102 2 96 Q-4 90 2 84 Q-4 78 2 72 Q-4 66 2 60 Q-4 54 2 48 Q-4 42 2 36 Q-4 30 2 24 Q2 4 12 4Z" transform="translate(3 7)" fill="url(#counter-table-spread-biscuit-edge)" />
<path className="counter-art-spread-biscuit-face" d="M12 4 Q18 -2 24 4 Q30 -2 36 4 Q42 -2 48 4 Q54 -2 60 4 Q66 -2 72 4 Q78 -2 84 4 Q90 -2 96 4 Q102 -2 108 4 Q114 -2 120 4 Q126 -2 132 4 Q146 4 146 16 Q152 22 146 28 Q152 34 146 40 Q152 46 146 52 Q152 58 146 64 Q152 70 146 76 Q152 82 146 88 Q152 94 146 100 Q152 106 146 112 Q152 118 146 124 Q152 130 146 136 Q152 142 146 148 Q152 154 146 160 Q152 166 146 172 Q146 192 134 192 Q128 198 122 192 Q116 198 110 192 Q104 198 98 192 Q92 198 86 192 Q80 198 74 192 Q68 198 62 192 Q56 198 50 192 Q44 198 38 192 Q32 198 26 192 Q20 198 14 192 Q2 192 2 180 Q-4 174 2 168 Q-4 162 2 156 Q-4 150 2 144 Q-4 138 2 132 Q-4 126 2 120 Q-4 114 2 108 Q-4 102 2 96 Q-4 90 2 84 Q-4 78 2 72 Q-4 66 2 60 Q-4 54 2 48 Q-4 42 2 36 Q-4 30 2 24 Q2 4 12 4Z" fill="url(#counter-table-spread-biscuit-top)" stroke="#ca8b36" strokeWidth="1" />
<g clipPath="url(#counter-table-spread-biscuit-clip)">
<rect x="3" y="4" width="143" height="189" fill="#c89551" opacity=".16" filter="url(#counter-table-spread-biscuit-grain)" />
<rect x="4" y="4" width="140" height="185" fill="url(#counter-table-spread-biscuit-pores)" />
<rect x="22" y="25" width="104" height="143" fill="url(#counter-table-spread-biscuit-holes)" />
</g>
<rect x="13" y="15" width="122" height="166" rx="7" fill="none" stroke="#f9d28a" strokeWidth="2.5" />
<rect x="17" y="19" width="114" height="158" rx="5" fill="none" stroke="#b88035" strokeOpacity=".5" />
<rect x="20" y="22" width="108" height="152" rx="4" fill="none" stroke="#ffe0a0" strokeOpacity=".65" />
<path d="M24 28H124M24 167H124" stroke="#f9d18a" strokeWidth="1" />
</g>
</defs>
<radialGradient id="counter-table-table-marble">
<stop stopColor="#f8efda" />
<stop offset=".8" stopColor="#f0e4cc" />
<stop offset="1" stopColor="#e4d3b5" />
</radialGradient>
<linearGradient id="counter-table-table-plate" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#fffaf0" />
<stop offset=".7" stopColor="#f8f0df" />
<stop offset="1" stopColor="#c8bba4" />
</linearGradient>
<linearGradient id="counter-table-table-steel">
<stop stopColor="#33352e" />
<stop offset=".15" stopColor="#e2dfd1" />
<stop offset=".35" stopColor="#74786c" />
<stop offset=".55" stopColor="#fff9e6" />
<stop offset=".75" stopColor="#73796a" />
<stop offset="1" stopColor="#343a30" />
</linearGradient>
<radialGradient id="counter-table-table-bun" cx=".38" cy=".25">
<stop stopColor="#edbc6e" />
<stop offset=".32" stopColor="#e3a553" />
<stop offset=".7" stopColor="#c37a2f" />
<stop offset="1" stopColor="#96531f" />
</radialGradient>
<radialGradient id="counter-table-bun-crown" cx=".5" cy=".2">
<stop stopColor="#fbd390" />
<stop offset=".4" stopColor="#e8ae5b" />
<stop offset=".75" stopColor="#c68736" />
<stop offset="1" stopColor="#efd198" />
</radialGradient>
<linearGradient id="counter-table-bun-crumb" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#fff0bd" />
<stop offset=".5" stopColor="#f7dfa4" />
<stop offset="1" stopColor="#cfab6d" />
</linearGradient>
<linearGradient id="counter-table-samosa-gold" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#f4c269" />
<stop offset=".45" stopColor="#c88c34" />
<stop offset=".75" stopColor="#b87922" />
<stop offset="1" stopColor="#855417" />
</linearGradient>
<radialGradient id="counter-table-table-coffee">
<stop stopColor="#bb7536" />
<stop offset=".75" stopColor="#8d4118" />
<stop offset="1" stopColor="#5c280f" />
</radialGradient>
<radialGradient id="counter-table-round-cookie">
<stop stopColor="#edb45c" />
<stop offset=".8" stopColor="#e0a04b" />
<stop offset="1" stopColor="#b8792e" />
</radialGradient>
<radialGradient id="counter-table-round-cookie-pale">
<stop stopColor="#f2d28d" />
<stop offset=".8" stopColor="#e7c17c" />
<stop offset="1" stopColor="#c39b54" />
</radialGradient>
<pattern id="counter-table-samosa-blisters" width="17" height="19" patternUnits="userSpaceOnUse">
<circle cx="4" cy="5" r="1.6" fill="#f5cd7e" opacity=".6" />
<circle cx="12" cy="14" r="1" fill="#8b5d23" opacity=".45" />
<path d="m8 9 3-1" stroke="#e6b663" strokeWidth="1" />
</pattern>
<pattern id="counter-table-table-bread-pores" width="9" height="8" patternUnits="userSpaceOnUse">
<circle cx="2" cy="3" r=".7" fill="#b9853f" opacity=".4" />
<circle cx="6" cy="7" r=".5" fill="#fff1cd" opacity=".7" />
</pattern>
<filter id="counter-table-table-shadow" x="-.5" y="-.5" width="2" height="2">
<feGaussianBlur stdDeviation="3" />
</filter>
<clipPath id="counter-table-table-edge-clip">
<circle cx="570" cy="440" r="430" />
</clipPath>
<g id="counter-table-table-saucer">
<ellipse cy="7" rx="104" ry="56" fill="#69523b" opacity=".18" filter="url(#counter-table-table-shadow)" />
<path d="M-102 0Q0 90 102 0V8Q0 104-102 8Z" fill="#bfb39e" />
<ellipse rx="104" ry="56" fill="url(#counter-table-table-plate)" stroke="#fff7e7" strokeWidth="1.5" />
<ellipse rx="73" ry="39" fill="none" stroke="#ded3bc" />
</g>
<g id="counter-table-table-steel-plate">
<ellipse cy="9" rx="100" ry="54" fill="#584630" opacity=".24" filter="url(#counter-table-table-shadow)" />
<ellipse rx="102" ry="57" fill="url(#counter-table-table-steel)" stroke="#e5dfcc" strokeWidth="2" />
<ellipse cy="-2" rx="88" ry="46" fill="#696b5c" />
<path d="M-97 13Q0 85 97 13" stroke="#fcf2dc" strokeWidth="2" fill="none" />
</g>
<g id="counter-table-table-samosa">
<path d="M-46 34Q-51 24-43 8L-7-66Q-3-77 4-72L51 21Q61 37 45 43Q-6 58-46 34Z" fill="url(#counter-table-samosa-gold)" stroke="#ac762d" strokeWidth="1.5" />
<path d="M-5-64-18 18 44 36-7 20-44 29Z" fill="#f1b951" opacity=".45" />
<path d="M-46 34Q-51 24-43 8L-7-66Q-3-77 4-72L51 21Q61 37 45 43Q-6 58-46 34Z" fill="url(#counter-table-samosa-blisters)" />
<path d="M-40 34Q0 49 46 36M-5-60-16 17" fill="none" stroke="#f0bf70" strokeWidth="2" strokeLinecap="round" />
<path d="M-16 20 44 35" stroke="#8b591c" strokeWidth="2" fill="none" />
</g>
</defs>
<defs xmlns="http://www.w3.org/2000/svg">
<linearGradient id="counter-hero-glass-body" x1="0" y1="0" x2="1" y2=".15">
<stop stopColor="#fff8cd" stopOpacity=".7" />
<stop offset=".09" stopColor="#fffaf0" stopOpacity=".16" />
<stop offset=".27" stopColor="#f8c87a" stopOpacity=".12" />
<stop offset=".44" stopColor="#fff" stopOpacity=".27" />
<stop offset=".67" stopColor="#e2bd74" stopOpacity=".06" />
<stop offset=".88" stopColor="#fff9d1" stopOpacity=".6" />
<stop offset="1" stopColor="#a47a34" stopOpacity=".3" />
</linearGradient>
<linearGradient id="counter-hero-tea-body" x1="0" y1="0" x2="1" y2=".1">
<stop stopColor="#98541e" />
<stop offset=".12" stopColor="#b57536" />
<stop offset=".42" stopColor="#cb914e" />
<stop offset=".74" stopColor="#b87c3c" />
<stop offset="1" stopColor="#864915" />
</linearGradient>
<linearGradient id="counter-hero-tea-top" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#d6a267" />
<stop offset="1" stopColor="#c18a4b" />
</linearGradient>
<linearGradient id="counter-hero-glass-edge">
<stop stopColor="#b68d4c" stopOpacity=".45" />
<stop offset=".23" stopColor="#fffbed" stopOpacity=".95" />
<stop offset=".5" stopColor="#f7edce" stopOpacity=".4" />
<stop offset=".8" stopColor="#fffbed" />
<stop offset="1" stopColor="#b9914b" stopOpacity=".5" />
</linearGradient>
<linearGradient id="counter-hero-glass-foot" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#f3e3b0" stopOpacity=".2" />
<stop offset=".55" stopColor="#fff9e1" stopOpacity=".85" />
<stop offset=".85" stopColor="#c1aa72" stopOpacity=".6" />
<stop offset="1" stopColor="#fffcec" />
</linearGradient>
<linearGradient id="counter-hero-plate-face" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#fffbed" />
<stop offset=".62" stopColor="#f4edda" />
<stop offset="1" stopColor="#c4b597" />
</linearGradient>
<radialGradient id="counter-hero-plate-well">
<stop stopColor="#dad0b6" />
<stop offset=".76" stopColor="#e8dfc9" />
<stop offset="1" stopColor="#fff9e9" />
</radialGradient>
<linearGradient id="counter-hero-biscuit-top" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#f7ce83" />
<stop offset=".32" stopColor="#eeb865" />
<stop offset=".72" stopColor="#e4a34e" />
<stop offset="1" stopColor="#c88937" />
</linearGradient>
<linearGradient id="counter-hero-biscuit-edge" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#d79742" />
<stop offset=".6" stopColor="#b97429" />
<stop offset="1" stopColor="#a46122" />
</linearGradient>
<linearGradient id="counter-hero-rib-light">
<stop stopColor="#fffce3" stopOpacity=".04" />
<stop offset=".43" stopColor="#fffbe1" stopOpacity=".05" />
<stop offset=".57" stopColor="#fffde5" stopOpacity=".9" />
<stop offset=".82" stopColor="#fff9ce" stopOpacity=".2" />
<stop offset="1" stopColor="#976420" stopOpacity=".15" />
</linearGradient>
<filter id="counter-hero-contact-shadow" x="-.5" y="-1" width="2" height="3">
<feGaussianBlur stdDeviation="4" />
</filter>
<filter id="counter-hero-soft-shadow" x="-.5" y="-1" width="2" height="3">
<feGaussianBlur stdDeviation="1.6" />
</filter>
<filter id="counter-hero-biscuit-grain" x="0" y="0" width="1" height="1">
<feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" seed="8" />
<feColorMatrix type="saturate" values="0" />
<feBlend in="SourceGraphic" mode="soft-light" />
</filter>
<clipPath id="counter-hero-inside-glass">
<path d="M172 25 Q275 4 378 25 L349 307 Q275 335 201 307Z" />
</clipPath>
<clipPath id="counter-hero-biscuit-clip">
<path className="counter-art-biscuit-outline" d="M12 4 H135 Q146 4 146 15 V180 Q146 192 134 192 H13 Q2 192 2 180 V16 Q2 4 12 4Z" />
</clipPath>
<pattern id="counter-hero-biscuit-pores" width="17" height="19" patternUnits="userSpaceOnUse">
<circle cx="3" cy="5" r=".8" fill="#a66b29" opacity=".42" />
<circle cx="11" cy="14" r=".5" fill="#fff0b8" opacity=".7" />
<path d="m13 3 1 1M5 14l1 .7" stroke="#aa702e" strokeWidth=".6" opacity=".4" />
</pattern>
<pattern id="counter-hero-biscuit-holes" width="28" height="29" patternUnits="userSpaceOnUse">
<ellipse cx="14" cy="14" rx="1.6" ry="2" fill="#af7532" />
<path d="M12 15q2 3 4 0" stroke="#ffda92" strokeWidth="1" fill="none" />
</pattern>
<g id="counter-hero-biscuit">
<path className="counter-art-biscuit-thickness" d="M12 4 Q18 -2 24 4 Q30 -2 36 4 Q42 -2 48 4 Q54 -2 60 4 Q66 -2 72 4 Q78 -2 84 4 Q90 -2 96 4 Q102 -2 108 4 Q114 -2 120 4 Q126 -2 132 4 Q146 4 146 16 Q152 22 146 28 Q152 34 146 40 Q152 46 146 52 Q152 58 146 64 Q152 70 146 76 Q152 82 146 88 Q152 94 146 100 Q152 106 146 112 Q152 118 146 124 Q152 130 146 136 Q152 142 146 148 Q152 154 146 160 Q152 166 146 172 Q146 192 134 192 Q128 198 122 192 Q116 198 110 192 Q104 198 98 192 Q92 198 86 192 Q80 198 74 192 Q68 198 62 192 Q56 198 50 192 Q44 198 38 192 Q32 198 26 192 Q20 198 14 192 Q2 192 2 180 Q-4 174 2 168 Q-4 162 2 156 Q-4 150 2 144 Q-4 138 2 132 Q-4 126 2 120 Q-4 114 2 108 Q-4 102 2 96 Q-4 90 2 84 Q-4 78 2 72 Q-4 66 2 60 Q-4 54 2 48 Q-4 42 2 36 Q-4 30 2 24 Q2 4 12 4Z" transform="translate(3 7)" fill="url(#counter-hero-biscuit-edge)" />
<path className="counter-art-biscuit-face" d="M12 4 Q18 -2 24 4 Q30 -2 36 4 Q42 -2 48 4 Q54 -2 60 4 Q66 -2 72 4 Q78 -2 84 4 Q90 -2 96 4 Q102 -2 108 4 Q114 -2 120 4 Q126 -2 132 4 Q146 4 146 16 Q152 22 146 28 Q152 34 146 40 Q152 46 146 52 Q152 58 146 64 Q152 70 146 76 Q152 82 146 88 Q152 94 146 100 Q152 106 146 112 Q152 118 146 124 Q152 130 146 136 Q152 142 146 148 Q152 154 146 160 Q152 166 146 172 Q146 192 134 192 Q128 198 122 192 Q116 198 110 192 Q104 198 98 192 Q92 198 86 192 Q80 198 74 192 Q68 198 62 192 Q56 198 50 192 Q44 198 38 192 Q32 198 26 192 Q20 198 14 192 Q2 192 2 180 Q-4 174 2 168 Q-4 162 2 156 Q-4 150 2 144 Q-4 138 2 132 Q-4 126 2 120 Q-4 114 2 108 Q-4 102 2 96 Q-4 90 2 84 Q-4 78 2 72 Q-4 66 2 60 Q-4 54 2 48 Q-4 42 2 36 Q-4 30 2 24 Q2 4 12 4Z" fill="url(#counter-hero-biscuit-top)" stroke="#ca8b36" strokeWidth="1" />
<g clipPath="url(#counter-hero-biscuit-clip)">
<rect x="3" y="4" width="143" height="189" fill="#c89551" opacity=".16" filter="url(#counter-hero-biscuit-grain)" />
<rect x="4" y="4" width="140" height="185" fill="url(#counter-hero-biscuit-pores)" />
<rect x="22" y="25" width="104" height="143" fill="url(#counter-hero-biscuit-holes)" />
</g>
<rect x="13" y="15" width="122" height="166" rx="7" fill="none" stroke="#f9d28a" strokeWidth="2.5" />
<rect x="17" y="19" width="114" height="158" rx="5" fill="none" stroke="#b88035" strokeOpacity=".5" />
<rect x="20" y="22" width="108" height="152" rx="4" fill="none" stroke="#ffe0a0" strokeOpacity=".65" />
<path d="M24 28H124M24 167H124" stroke="#f9d18a" strokeWidth="1" />
</g>
</defs>
<symbol id="counter-art-chai" viewBox="0 0 400 260">
<g transform="translate(20 0) scale(.65)">
<g xmlns="http://www.w3.org/2000/svg" className="counter-art-scene-shadows" fill="#776343">
<path d="M215 335 430 255Q502 243 541 267Q550 279 504 294L334 360Z" opacity=".23" filter="url(#counter-hero-soft-shadow)" />
<ellipse cx="278" cy="365" rx="186" ry="16" opacity=".2" filter="url(#counter-hero-contact-shadow)" />
</g>
<g xmlns="http://www.w3.org/2000/svg" className="counter-art-saucer">
<ellipse cx="274" cy="349" rx="168" ry="34" fill="#a99875" opacity=".35" />
<path d="M106 342Q274 376 442 342L430 354Q274 400 118 355Z" fill="#d1c4a7" />
<ellipse cx="274" cy="341" rx="168" ry="34" fill="url(#counter-hero-plate-face)" stroke="#fff7df" strokeWidth="1.5" />
<ellipse cx="274" cy="339" rx="126" ry="25" fill="url(#counter-hero-plate-well)" stroke="#d8ccb0" strokeWidth="1" />
<path d="M118 349Q274 391 431 349" fill="none" stroke="#fff9e6" strokeWidth="2" />
<ellipse cx="276" cy="331" rx="78" ry="17" fill="#7e6036" opacity=".23" filter="url(#counter-hero-contact-shadow)" />
</g>
<g xmlns="http://www.w3.org/2000/svg" className="counter-art-chai-glass">
<path className="counter-art-glass-back" d="M164 23Q275 -2 386 23L358 324Q275 365 192 324Z" fill="url(#counter-hero-glass-body)" stroke="#fff4cc" strokeOpacity=".7" strokeWidth="1.5" />
<g clipPath="url(#counter-hero-inside-glass)">
<g className="counter-art-tea-liquid">
<rect className="counter-art-tea-fill" x="165" y="62" width="220" height="282" fill="url(#counter-hero-tea-body)" />
<ellipse cx="275" cy="308" rx="75" ry="17" fill="#814719" opacity=".4" />
<ellipse className="counter-art-tea-surface" cx="275" cy="62" rx="101" ry="13" fill="url(#counter-hero-tea-top)" stroke="#e7b57b" strokeWidth="1.5" />
<ellipse className="counter-art-tea-meniscus" cx="275" cy="63" rx="96" ry="9" fill="none" stroke="#edc48b" strokeOpacity=".45" />
</g>
<g className="counter-art-glass-facets">
<path d="M170 20 185 20 211 317 200 311Z" fill="url(#counter-hero-rib-light)" />
<path d="M203 12 219 10 235 324 222 321Z" fill="url(#counter-hero-rib-light)" />
<path d="M258 9 270 9 272 329 261 328Z" fill="url(#counter-hero-rib-light)" opacity=".6" />
<path d="M316 10 330 12 318 322 306 325Z" fill="url(#counter-hero-rib-light)" />
<path d="M364 16 380 20 351 311 338 317Z" fill="url(#counter-hero-rib-light)" />
<path d="m180 30 28 272m163-271-28 270" stroke="#fff4c0" strokeWidth="2" opacity=".45" />
<path d="M225 23 237 306" stroke="#fff8df" strokeWidth="1.4" opacity=".25" />
</g>
</g>
<path className="counter-art-glass-base" d="M191 310Q275 350 359 310L357 327Q275 371 193 327Z" fill="url(#counter-hero-glass-foot)" stroke="#fff7d8" strokeOpacity=".8" strokeWidth="1.5" />
<path d="M203 325Q275 354 347 325M210 330Q275 353 339 331" fill="none" stroke="#fffce7" strokeWidth="2" opacity=".8" />
<path d="M164 23 192 324M386 23 358 324" stroke="url(#counter-hero-glass-edge)" strokeWidth="4" fill="none" />
<ellipse className="counter-art-glass-rim" cx="275" cy="23" rx="111" ry="16" fill="#ffedb9" fillOpacity=".08" stroke="url(#counter-hero-glass-edge)" strokeWidth="2.5" />
<path d="M165 24Q275 49 385 24" stroke="#fff9e0" strokeOpacity=".8" strokeWidth="1.3" fill="none" />
<path d="M187 18Q211 13 228 13M302 11l32 3" stroke="#fffceb" strokeWidth="3" strokeLinecap="round" opacity=".9" />
</g>
<g xmlns="http://www.w3.org/2000/svg" className="counter-art-biscuit biscuit-flat" transform="matrix(.96 .23 -.52 .30 123 275)">
<use href="#counter-hero-biscuit" />
</g>
<g xmlns="http://www.w3.org/2000/svg" className="counter-art-biscuit biscuit-standing" transform="translate(355 202) rotate(11) scale(.79 .83)">
<use href="#counter-hero-biscuit" />
</g>
</g>
</symbol>
<symbol id="counter-art-bun" viewBox="0 0 400 260">
<g xmlns="http://www.w3.org/2000/svg" transform="translate(200 185)">
<use href="#counter-table-table-saucer" />
<ellipse cx="16" cy="-6" rx="65" ry="27" fill="#6f4721" opacity=".2" />
<path d="M-66-40Q0-63 66-40L62-4Q0 38-62-4Z" fill="url(#counter-table-table-bun)" />
<ellipse cy="-26" rx="65" ry="28" fill="url(#counter-table-bun-crumb)" />
<path d="M-60-23Q0-6 60-23L55-8Q0 15-55-8Z" fill="#ffe8a4" />
<path d="M-63-40Q-62-100 0-106Q62-102 65-42Q50-6 0-13Q-49-10-63-40Z" fill="url(#counter-table-bun-crown)" />
<ellipse cy="-71" rx="37" ry="21" fill="#b88039" opacity=".34" />
<path d="M-51-56Q-41-91-12-94" stroke="#ffdd9a" strokeOpacity=".5" strokeWidth="6" fill="none" strokeLinecap="round" />
<path d="M-56-26Q0-9 57-26" stroke="#f7d797" strokeWidth="2" fill="none" />
</g>
</symbol>
<symbol id="counter-art-samosa" viewBox="0 0 400 260">
<g xmlns="http://www.w3.org/2000/svg" transform="translate(200 174)">
<use href="#counter-table-table-steel-plate" />
<g transform="translate(40 -20) rotate(7) scale(.72)">
<use href="#counter-table-table-samosa" />
</g>
<g transform="translate(-43 -7) rotate(-7) scale(.72)">
<use href="#counter-table-table-samosa" />
</g>
<g transform="translate(57 39)">
<ellipse rx="26" ry="17" fill="#e9e7ce" stroke="#ede8d6" strokeWidth="2" />
<ellipse cy="-1" rx="22" ry="13" fill="#527610" />
<path d="M-15-5Q0-13 15-5" stroke="#90a936" strokeWidth="2" fill="none" />
</g>
</g>
</symbol>
<symbol id="counter-art-cappuccino" viewBox="0 0 400 260">
<g xmlns="http://www.w3.org/2000/svg" transform="translate(200 192) scale(1.1)">
<use href="#counter-table-table-saucer" />
<ellipse cx="65" cy="-40" rx="21" ry="24" fill="none" stroke="#f4e8d1" strokeWidth="10" />
<path d="M-62-53Q-61 19 0 23Q61 19 62-53Z" fill="url(#counter-table-table-plate)" stroke="#d8ccb4" />
<ellipse cy="-53" rx="62" ry="35" fill="#fff3d9" />
<ellipse cy="-52" rx="56" ry="30" fill="url(#counter-table-table-coffee)" />
<g transform="translate(-8 -55) rotate(-18) scale(1 .6)" stroke="#f7e7bd" fill="none" strokeWidth="3.3" strokeLinecap="round">
<path d="M0-32Q37-20 0-13Q-36-8 0-4Q39 1 0 7Q-31 12 0 16Q25 21 0 25" />
<path d="M-7-29 8 31" strokeWidth="2" />
<path d="M7 30Q18 22 24 23" />
</g>
</g>
</symbol>
<symbol id="counter-art-kaapi" viewBox="0 0 400 260">
<g xmlns="http://www.w3.org/2000/svg" transform="translate(200 194) scale(1.1)">
<use href="#counter-table-table-steel-plate" />
<ellipse cy="-1" rx="69" ry="35" fill="#593019" />
<path d="M-47-73-39-5Q0 20 39-5L47-73Z" fill="url(#counter-table-table-steel)" stroke="#a8ab99" />
<ellipse cy="-73" rx="47" ry="27" fill="#4d4f42" stroke="#f0e8d1" strokeWidth="3" />
<ellipse cy="-67" rx="40" ry="22" fill="#d7aa70" />
<g fill="#f2d6aa" opacity=".8">
<circle cx="-18" cy="-74" r="3" />
<circle cx="-8" cy="-66" r="2" />
<circle cx="5" cy="-77" r="3" />
<circle cx="18" cy="-68" r="4" />
<circle cx="-23" cy="-62" r="2" />
<circle cx="0" cy="-60" r="4" />
<circle cx="23" cy="-76" r="2" />
<circle cx="12" cy="-60" r="2" />
</g>
<path d="M-36-66-31-8M20-65 17 3" stroke="#f8f5dd" strokeOpacity=".6" strokeWidth="2" />
</g>
</symbol>
<symbol id="counter-art-biscuits" viewBox="0 0 400 260">
<g transform="translate(200 189)">
<use href="#counter-table-table-steel-plate" />
</g>
<g transform="translate(143 82) rotate(-7) scale(.48 .57)">
<g transform="translate(0 48)">
<use href="#counter-table-spread-biscuit" />
</g>
<g transform="translate(0 32)">
<use href="#counter-table-spread-biscuit" />
</g>
<g transform="translate(0 16)">
<use href="#counter-table-spread-biscuit" />
</g>
<use href="#counter-table-spread-biscuit" />
</g>
<g transform="translate(260 96) rotate(22) scale(.43 .56)">
<use href="#counter-table-spread-biscuit" />
</g>
</symbol>
</defs>
</svg>
<header className="counter-heading">
<p className="counter-eyebrow">
{"08 — THE COUNTER"}
</p>
<h2 id="counter-title">
{"Chai, and"}
<span>
{"what goes with it."}
</span>
</h2>
<div className="counter-stamp" aria-hidden="true">
<svg viewBox="0 0 90 90">
<defs>
<path id="counter-stamp-circle" d="M45 10a35 35 0 1 1-.1 0" />
</defs>
<circle cx="45" cy="45" r="42" fill="#eab044" />
<circle cx="45" cy="45" r="40" fill="none" stroke="#9f6b26" strokeDasharray="2 3" />
<text>
<textPath href="#counter-stamp-circle" textLength="218" lengthAdjust="spacing">
{"THE DAILY COUNTER · SMALL BATCH · "}
</textPath>
</text>
</svg>
</div>
<div className="counter-intro">
<p className="counter-hint">
{"MADE FOR A CHAI BREAK"}
</p>
<p>
{"Six things we will never take off the menu. The biscuits are baked upstairs at four every morning, everything else is made when you ask."}
</p>
</div>
</header>
<div className="counter-grid">
<article className="counter-card" id="counter-chai" data-product="chai" data-price="20" style={{"--card-color": "#f3dcb7", "--card-delay": "0ms"}}>
<div className="counter-card-top">
<span>
{"01 / 06"}
</span>
<span className="counter-price-pill">
{"₹20"}
</span>
</div>
<svg className="counter-art" viewBox="0 0 400 260" role="img" aria-label="Cutting Chai, drawn in code">
<use href="#counter-art-chai" />
</svg>
<h3>
{"Cutting Chai"}
</h3>
<p className="counter-subtitle">
{"MASALA · 90 ML"}
</p>
<p className="counter-description">
{"Half a glass, twice the strength. Ginger-forward, boiled up three times and poured from as high as the arm goes."}
</p>
<ul className="counter-tags">
<li>
{"GINGER"}
</li>
<li>
{"CARDAMOM"}
</li>
<li>
{"STRONG"}
</li>
</ul>
<div className="counter-card-footer">
<span className="counter-unit-price">
{"PER GLASS "}
<strong>
{"₹20"}
</strong>
</span>
<AddToBag productId="chai" />
</div>
</article>
<article className="counter-card" id="counter-biscuits" data-product="biscuits" data-price="30" style={{"--card-color": "#efe1bf", "--card-delay": "100ms"}}>
<div className="counter-card-top">
<span>
{"02 / 06"}
</span>
<span className="counter-price-pill">
{"₹30"}
</span>
</div>
<svg className="counter-art" viewBox="0 0 400 260" role="img" aria-label="Glucose Biscuits, drawn in code">
<use href="#counter-art-biscuits" />
</svg>
<h3>
{"Glucose Biscuits"}
</h3>
<p className="counter-subtitle">
{"BAKED IN-HOUSE · STACK OF 6"}
</p>
<p className="counter-description">
{"Malty, barely sweet, and engineered for exactly three seconds in hot chai. We tested. A lot."}
</p>
<ul className="counter-tags">
<li>
{"MALTY"}
</li>
<li>
{"CRISP"}
</li>
<li>
{"DUNKABLE"}
</li>
</ul>
<div className="counter-card-footer">
<span className="counter-unit-price">
{"PER STACK "}
<strong>
{"₹30"}
</strong>
</span>
<AddToBag productId="biscuits" />
</div>
</article>
<article className="counter-card" id="counter-bun" data-product="bun" data-price="60" style={{"--card-color": "#f4dfca", "--card-delay": "200ms"}}>
<div className="counter-card-top">
<span>
{"03 / 06"}
</span>
<span className="counter-price-pill">
{"₹60"}
</span>
</div>
<svg className="counter-art" viewBox="0 0 400 260" role="img" aria-label="Bun Maska, drawn in code">
<use href="#counter-art-bun" />
</svg>
<h3>
{"Bun Maska"}
</h3>
<p className="counter-subtitle">
{"SOFT BUN · WHITE BUTTER"}
</p>
<p className="counter-description">
{"A pillowy bun, split and loaded with a slab of cold salted butter thick enough to leave teeth marks."}
</p>
<ul className="counter-tags">
<li>
{"SOFT"}
</li>
<li>
{"BUTTERY"}
</li>
<li>
{"SALTY"}
</li>
</ul>
<div className="counter-card-footer">
<span className="counter-unit-price">
{"PER PLATE "}
<strong>
{"₹60"}
</strong>
</span>
<AddToBag productId="bun" />
</div>
</article>
<article className="counter-card" id="counter-samosa" data-product="samosa" data-price="50" style={{"--card-color": "#eae2c1", "--card-delay": "0ms"}}>
<div className="counter-card-top">
<span>
{"04 / 06"}
</span>
<span className="counter-price-pill">
{"₹50"}
</span>
</div>
<svg className="counter-art" viewBox="0 0 400 260" role="img" aria-label="Punjabi Samosa, drawn in code">
<use href="#counter-art-samosa" />
</svg>
<h3>
{"Punjabi Samosa"}
</h3>
<p className="counter-subtitle">
{"TWO · GREEN CHUTNEY"}
</p>
<p className="counter-description">
{"Blistered, hand-folded pastry around potato, peas and crushed coriander seed. Fried to order, never reheated."}
</p>
<ul className="counter-tags">
<li>
{"CRISP"}
</li>
<li>
{"SPICED"}
</li>
<li>
{"HOT"}
</li>
</ul>
<div className="counter-card-footer">
<span className="counter-unit-price">
{"PER PLATE "}
<strong>
{"₹50"}
</strong>
</span>
<AddToBag productId="samosa" />
</div>
</article>
<article className="counter-card" id="counter-cappuccino" data-product="cappuccino" data-price="140" style={{"--card-color": "#ecd8c5", "--card-delay": "100ms"}}>
<div className="counter-card-top">
<span>
{"05 / 06"}
</span>
<span className="counter-price-pill">
{"₹140"}
</span>
</div>
<svg className="counter-art" viewBox="0 0 400 260" role="img" aria-label="Cappuccino, drawn in code">
<use href="#counter-art-cappuccino" />
</svg>
<h3>
{"Cappuccino"}
</h3>
<p className="counter-subtitle">
{"CHIKMAGALUR ARABICA"}
</p>
<p className="counter-description">
{"For the ones who came with a chai drinker. A double shot, steamed milk and a rosetta poured with real concentration."}
</p>
<ul className="counter-tags">
<li>
{"DOUBLE SHOT"}
</li>
<li>
{"SILKY"}
</li>
<li>
{"NUTTY"}
</li>
</ul>
<div className="counter-card-footer">
<span className="counter-unit-price">
{"PER CUP "}
<strong>
{"₹140"}
</strong>
</span>
<AddToBag productId="cappuccino" />
</div>
</article>
<article className="counter-card" id="counter-kaapi" data-product="kaapi" data-price="70" style={{"--card-color": "#e7dccb", "--card-delay": "200ms"}}>
<div className="counter-card-top">
<span>
{"06 / 06"}
</span>
<span className="counter-price-pill">
{"₹70"}
</span>
</div>
<svg className="counter-art" viewBox="0 0 400 260" role="img" aria-label="Filter Kaapi, drawn in code">
<use href="#counter-art-kaapi" />
</svg>
<h3>
{"Filter Kaapi"}
</h3>
<p className="counter-subtitle">
{"TUMBLER + DABARA"}
</p>
<p className="counter-description">
{"Eighty-twenty peaberry and chicory, dripped overnight, pulled a metre between tumbler and dabara until it froths."}
</p>
<ul className="counter-tags">
<li>
{"CHICORY"}
</li>
<li>
{"FROTHY"}
</li>
<li>
{"SWEET"}
</li>
</ul>
<div className="counter-card-footer">
<span className="counter-unit-price">
{"PER TUMBLER "}
<strong>
{"₹70"}
</strong>
</span>
<AddToBag productId="kaapi" />
</div>
</article>
</div>
<BagAnnouncement />
</section>
  );
}
