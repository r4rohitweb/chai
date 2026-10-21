import { AddToBag } from "../state/BagContext.jsx";

export default function Kitchen() {
  return (
<section className="kitchen-section" id="from-the-kitchen" aria-labelledby="kitchen-title">
<svg className="kitchen-definitions" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs>
<linearGradient id="kitchen-room" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#e4d4b7" />
<stop offset=".5" stopColor="#bfb099" />
<stop offset="1" stopColor="#81745d" />
</linearGradient>
<linearGradient id="kitchen-marble" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#fcf5e8" />
<stop offset=".5" stopColor="#e9dfcc" />
<stop offset="1" stopColor="#cfc1aa" />
</linearGradient>
<linearGradient id="kitchen-window">
<stop stopColor="#fff9e4" />
<stop offset=".6" stopColor="#e2d4b8" />
<stop offset="1" stopColor="#968468" />
</linearGradient>
<radialGradient id="kitchen-plate">
<stop stopColor="#fffdf4" />
<stop offset=".7" stopColor="#f7f1e5" />
<stop offset="1" stopColor="#d8ccb6" />
</radialGradient>
<linearGradient id="kitchen-bread" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#f0c57e" />
<stop offset=".4" stopColor="#db9b47" />
<stop offset="1" stopColor="#a76324" />
</linearGradient>
<linearGradient id="kitchen-crumb" x1="0" y1="0" x2="1" y2="1">
<stop stopColor="#f9e7b8" />
<stop offset="1" stopColor="#cfac6c" />
</linearGradient>
<linearGradient id="kitchen-cake-fill" x1="0" y1="0" x2="0" y2="1">
<stop stopColor="#c49a5f" />
<stop offset=".8" stopColor="#9f723d" />
<stop offset="1" stopColor="#70471e" />
</linearGradient>
<linearGradient id="kitchen-cold-coffee-fill">
<stop stopColor="#936238" />
<stop offset=".2" stopColor="#c49b65" />
<stop offset=".5" stopColor="#e4c59a" />
<stop offset=".8" stopColor="#bd945d" />
<stop offset="1" stopColor="#946636" />
</linearGradient>
<radialGradient id="kitchen-foam">
<stop stopColor="#f6e5c9" />
<stop offset=".75" stopColor="#e5cda6" />
<stop offset="1" stopColor="#c9a777" />
</radialGradient>
<filter id="kitchen-soft-shadow" x="-.5" y="-.5" width="2" height="2">
<feGaussianBlur stdDeviation="5" />
</filter>
<clipPath id="kitchen-keema-clip">
<ellipse cx="133" cy="267" rx="90" ry="47" />
</clipPath>
<clipPath id="kitchen-coffee-clip">
<path d="M103 112 121 329Q163 346 205 329L221 112Z" />
</clipPath>
<g id="kitchen-setting">
<path d="M0 0H320V400H0Z" fill="url(#kitchen-room)" />
<path d="M0 0H52V191L0 233Z" fill="url(#kitchen-window)" />
<path d="M9 0V210M36 0V195" stroke="#fff9e8" strokeWidth="8" />
<path d="m0 196 77-55 9 12L0 221Z" fill="#97856a" />
<path d="M0 225 320 114V400H0Z" fill="url(#kitchen-marble)" />
<g fill="none" stroke="#a99d88" strokeOpacity=".34" strokeWidth=".8">
<path d="m0 289 53-30 47 8 36-32 43-3 31-30 65-11 45-25M25 400l28-41 42-9 20-41 52-23 18-32 48-11 29-40 58-5M0 351l61-7 38 23 52-8 28 21 59-3 45 23" />
<path d="m75 250-16-29 15-34m95 99 39 13 34 45 78 9" />
</g>
</g>
<g id="kitchen-serving-plate">
<ellipse cx="163" cy="286" rx="134" ry="74" fill="#5f4f38" opacity=".2" filter="url(#kitchen-soft-shadow)" />
<ellipse cx="160" cy="274" rx="134" ry="75" fill="#c5b9a5" />
<ellipse cx="160" cy="267" rx="134" ry="75" fill="url(#kitchen-plate)" stroke="#fef8e9" strokeWidth="2" />
<ellipse cx="160" cy="267" rx="112" ry="60" fill="none" stroke="#e4d8c3" strokeWidth="1" />
</g>
<g id="kitchen-chai">
<ellipse cx="252" cy="151" rx="30" ry="6" fill="#645039" opacity=".18" />
<path d="M228 71 234 139Q252 152 270 139L276 71Z" fill="#c5955a" stroke="#fff0cb" strokeOpacity=".85" strokeWidth="2" />
<ellipse cx="252" cy="71" rx="24" ry="7" fill="#cda36d" stroke="#f5e6c9" strokeWidth="2" />
<path d="M234 75 239 137m21-62-2 66m13-66-7 63" stroke="#fff4d4" strokeOpacity=".5" strokeWidth="2" />
<path d="M234 139q18 11 36 0" fill="none" stroke="#f7ecd3" strokeWidth="2" />
</g>
<g id="kitchen-toast">
<path d="M-65-23-57 37Q0 62 58 35L64-23Z" fill="#aa6d2c" />
<path d="M-64-24Q-70-44-47-47Q-31-67-11-50Q10-66 31-49Q55-53 64-28L59 21Q1 45-58 24Z" fill="url(#kitchen-bread)" stroke="#bc823c" strokeWidth="2" />
<path d="M-54-25Q-58-35-40-37Q-24-51-9-39Q9-51 25-38Q48-41 53-24L48 14Q0 33-48 15Z" fill="url(#kitchen-crumb)" />
<path d="M-40-15 37-19M-43-4 43-8M-38 9 38 5" fill="none" stroke="#bb955b" strokeOpacity=".3" strokeWidth="1.5" />
</g>
<g id="kitchen-cake-slice">
<path d="M-67-24-63 35 54 43 66-19Z" fill="url(#kitchen-cake-fill)" stroke="#8c6031" strokeWidth="1.5" />
<path d="M-65-25Q-64-45-46-46H44Q62-44 67-23L54 4Q0 25-63 3Z" fill="#c8aa72" stroke="#936332" strokeWidth="3" />
<path d="M-54-23Q0-42 54-22L45-3Q0 14-53-5Z" fill="#d9c28b" />
<g fill="#f7e5b6" stroke="#9f8550" strokeWidth=".6">
<ellipse cx="-31" cy="-15" rx="4" ry="10" transform="rotate(-35 -31 -15)" />
<ellipse cx="23" cy="-18" rx="4" ry="10" transform="rotate(30 23 -18)" />
<path d="M-2-24q-16 1-11 12t14 1q-11 2-7-6t4-7Z" />
<path d="M34-5q-14-5-15 5t14 8q-10-2-7-7t8-6Z" />
</g>
<g fill="#876334" opacity=".5">
<circle cx="-34" cy="15" r="1.5" />
<circle cx="12" cy="20" r="2" />
<circle cx="-13" cy="34" r="1.6" />
<circle cx="36" cy="16" r="1.2" />
<circle cx="-39" cy="29" r="1" />
<circle cx="30" cy="32" r="1.6" />
</g>
</g>
<symbol id="kitchen-art-keema" viewBox="0 0 320 400">
<use href="#kitchen-setting" />
<use href="#kitchen-serving-plate" />
<ellipse cx="133" cy="267" rx="92" ry="49" fill="#6d3f1e" />
<g clipPath="url(#kitchen-keema-clip)">
<ellipse cx="194.4" cy="283.1" rx="4.3" ry="1.6" fill="#755229" />
<circle cx="194.4" cy="283.1" r="2.5" fill="#6d813c" />
<rect x="194.4" y="283.1" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="97.0" cy="249.2" rx="3.5" ry="2.8" fill="#ad7841" />
<ellipse cx="206.8" cy="261.1" rx="2.5" ry="1.7" fill="#936132" />
<ellipse cx="118.1" cy="246.3" rx="3.8" ry="1.8" fill="#603e20" />
<ellipse cx="175.2" cy="281.3" rx="1.5" ry="1.8" fill="#603e20" />
<ellipse cx="126.4" cy="295.4" rx="2.5" ry="1.9" fill="#ad7841" />
<ellipse cx="96.2" cy="293.8" rx="2.0" ry="2.7" fill="#755229" />
<ellipse cx="102.3" cy="294.2" rx="3.9" ry="1.1" fill="#603e20" />
<ellipse cx="85.3" cy="281.2" rx="3.9" ry="1.3" fill="#936132" />
<circle cx="85.3" cy="281.2" r="2.5" fill="#6d813c" />
<ellipse cx="193.8" cy="260.1" rx="3.9" ry="2.0" fill="#755229" />
<ellipse cx="193.5" cy="234.7" rx="2.2" ry="2.4" fill="#bb8b51" />
<ellipse cx="63.5" cy="252.8" rx="2.2" ry="1.6" fill="#bb8b51" />
<ellipse cx="179.1" cy="275.9" rx="2.4" ry="1.7" fill="#ad7841" />
<ellipse cx="145.9" cy="234.4" rx="4.0" ry="2.7" fill="#936132" />
<ellipse cx="69.6" cy="285.4" rx="1.7" ry="1.9" fill="#755229" />
<ellipse cx="172.7" cy="269.2" rx="3.9" ry="2.5" fill="#ad7841" />
<ellipse cx="191.5" cy="296.6" rx="2.2" ry="2.1" fill="#ad7841" />
<circle cx="191.5" cy="296.6" r="2.5" fill="#6d813c" />
<ellipse cx="141.8" cy="233.1" rx="2.9" ry="1.3" fill="#936132" />
<ellipse cx="68.3" cy="243.9" rx="4.2" ry="2.3" fill="#603e20" />
<ellipse cx="199.0" cy="260.9" rx="3.9" ry="1.1" fill="#bb8b51" />
<rect x="199.0" y="260.9" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="165.0" cy="296.4" rx="2.6" ry="2.5" fill="#936132" />
<ellipse cx="117.5" cy="277.8" rx="2.0" ry="2.0" fill="#603e20" />
<ellipse cx="70.1" cy="275.6" rx="2.1" ry="2.8" fill="#936132" />
<ellipse cx="117.7" cy="229.2" rx="3.6" ry="1.2" fill="#bb8b51" />
<ellipse cx="148.2" cy="269.1" rx="3.2" ry="2.3" fill="#603e20" />
<circle cx="148.2" cy="269.1" r="2.5" fill="#6d813c" />
<ellipse cx="181.8" cy="236.6" rx="3.1" ry="1.1" fill="#ad7841" />
<ellipse cx="111.8" cy="248.7" rx="3.9" ry="1.1" fill="#936132" />
<ellipse cx="159.4" cy="245.3" rx="3.8" ry="1.0" fill="#936132" />
<ellipse cx="185.8" cy="304.4" rx="3.4" ry="2.3" fill="#755229" />
<ellipse cx="92.8" cy="304.8" rx="1.8" ry="2.2" fill="#bb8b51" />
<ellipse cx="88.1" cy="226.6" rx="2.2" ry="2.3" fill="#936132" />
<ellipse cx="107.9" cy="274.1" rx="2.7" ry="2.3" fill="#755229" />
<ellipse cx="144.9" cy="242.1" rx="2.7" ry="1.6" fill="#ad7841" />
<circle cx="144.9" cy="242.1" r="2.5" fill="#6d813c" />
<ellipse cx="166.5" cy="260.1" rx="1.8" ry="2.0" fill="#755229" />
<ellipse cx="100.3" cy="268.0" rx="3.3" ry="2.7" fill="#755229" />
<ellipse cx="78.0" cy="243.8" rx="3.8" ry="2.4" fill="#ad7841" />
<ellipse cx="56.2" cy="264.6" rx="3.3" ry="1.1" fill="#ad7841" />
<ellipse cx="86.2" cy="277.2" rx="1.6" ry="1.8" fill="#ad7841" />
<ellipse cx="102.3" cy="230.7" rx="4.2" ry="2.0" fill="#603e20" />
<rect x="102.3" y="230.7" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="81.2" cy="302.4" rx="3.0" ry="1.1" fill="#755229" />
<ellipse cx="75.4" cy="289.1" rx="4.1" ry="2.7" fill="#ad7841" />
<circle cx="75.4" cy="289.1" r="2.5" fill="#6d813c" />
<ellipse cx="56.4" cy="265.2" rx="3.6" ry="1.9" fill="#bb8b51" />
<ellipse cx="204.1" cy="295.2" rx="2.9" ry="2.3" fill="#ad7841" />
<ellipse cx="70.9" cy="259.6" rx="3.5" ry="1.5" fill="#936132" />
<ellipse cx="193.4" cy="245.6" rx="3.3" ry="1.7" fill="#936132" />
<ellipse cx="67.3" cy="296.1" rx="2.9" ry="2.7" fill="#936132" />
<ellipse cx="97.3" cy="236.8" rx="1.9" ry="2.6" fill="#ad7841" />
<ellipse cx="144.5" cy="293.9" rx="2.1" ry="1.3" fill="#755229" />
<ellipse cx="146.6" cy="234.9" rx="3.7" ry="2.3" fill="#bb8b51" />
<circle cx="146.6" cy="234.9" r="2.5" fill="#6d813c" />
<ellipse cx="127.4" cy="251.2" rx="3.9" ry="2.6" fill="#ad7841" />
<ellipse cx="156.2" cy="260.1" rx="4.3" ry="2.6" fill="#bb8b51" />
<ellipse cx="68.3" cy="291.9" rx="3.6" ry="2.0" fill="#936132" />
<ellipse cx="181.8" cy="295.9" rx="4.1" ry="1.8" fill="#936132" />
<ellipse cx="103.6" cy="251.6" rx="4.2" ry="1.7" fill="#755229" />
<ellipse cx="171.4" cy="250.6" rx="2.0" ry="2.7" fill="#ad7841" />
<ellipse cx="173.3" cy="267.7" rx="2.3" ry="1.2" fill="#755229" />
<ellipse cx="160.8" cy="223.0" rx="3.2" ry="2.2" fill="#755229" />
<circle cx="160.8" cy="223.0" r="2.5" fill="#6d813c" />
<ellipse cx="152.1" cy="268.3" rx="2.1" ry="1.9" fill="#755229" />
<rect x="152.1" y="268.3" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="190.2" cy="244.7" rx="2.5" ry="1.5" fill="#bb8b51" />
<ellipse cx="153.4" cy="302.8" rx="3.2" ry="1.2" fill="#755229" />
<ellipse cx="181.7" cy="233.6" rx="2.6" ry="2.1" fill="#ad7841" />
<ellipse cx="147.8" cy="226.3" rx="1.7" ry="1.4" fill="#ad7841" />
<ellipse cx="200.8" cy="292.6" rx="4.3" ry="2.3" fill="#603e20" />
<ellipse cx="157.7" cy="246.0" rx="4.0" ry="1.6" fill="#936132" />
<ellipse cx="184.6" cy="303.0" rx="1.6" ry="2.6" fill="#bb8b51" />
<circle cx="184.6" cy="303.0" r="2.5" fill="#6d813c" />
<ellipse cx="122.6" cy="275.9" rx="2.2" ry="2.0" fill="#bb8b51" />
<ellipse cx="203.5" cy="294.6" rx="2.7" ry="1.4" fill="#603e20" />
<ellipse cx="54.7" cy="284.7" rx="2.6" ry="2.1" fill="#755229" />
<ellipse cx="191.0" cy="265.2" rx="3.8" ry="2.3" fill="#603e20" />
<ellipse cx="198.6" cy="276.0" rx="3.0" ry="1.1" fill="#936132" />
<ellipse cx="124.3" cy="252.9" rx="4.2" ry="1.3" fill="#755229" />
<ellipse cx="103.3" cy="301.0" rx="3.4" ry="2.0" fill="#bb8b51" />
<ellipse cx="212.4" cy="270.9" rx="3.3" ry="2.7" fill="#936132" />
<circle cx="212.4" cy="270.9" r="2.5" fill="#6d813c" />
<ellipse cx="136.1" cy="232.7" rx="4.0" ry="2.7" fill="#bb8b51" />
<ellipse cx="188.2" cy="266.6" rx="4.3" ry="2.8" fill="#603e20" />
<ellipse cx="183.8" cy="305.4" rx="3.9" ry="2.3" fill="#ad7841" />
<ellipse cx="77.8" cy="252.6" rx="3.8" ry="1.7" fill="#bb8b51" />
<rect x="77.8" y="252.6" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="167.0" cy="246.2" rx="1.5" ry="2.3" fill="#bb8b51" />
<ellipse cx="61.7" cy="261.0" rx="2.3" ry="2.6" fill="#ad7841" />
<ellipse cx="192.7" cy="288.3" rx="3.7" ry="2.6" fill="#bb8b51" />
<ellipse cx="97.3" cy="271.8" rx="3.4" ry="1.9" fill="#603e20" />
<circle cx="97.3" cy="271.8" r="2.5" fill="#6d813c" />
<ellipse cx="77.4" cy="287.7" rx="3.7" ry="1.0" fill="#936132" />
<ellipse cx="120.2" cy="264.5" rx="3.8" ry="1.6" fill="#ad7841" />
<ellipse cx="147.6" cy="260.1" rx="4.2" ry="2.2" fill="#603e20" />
<ellipse cx="93.9" cy="267.8" rx="4.1" ry="2.0" fill="#936132" />
<ellipse cx="69.1" cy="239.1" rx="2.9" ry="1.4" fill="#755229" />
<ellipse cx="134.1" cy="271.5" rx="1.8" ry="2.2" fill="#ad7841" />
<ellipse cx="138.0" cy="258.4" rx="3.2" ry="1.3" fill="#755229" />
<ellipse cx="73.8" cy="259.4" rx="3.2" ry="2.7" fill="#603e20" />
<circle cx="73.8" cy="259.4" r="2.5" fill="#6d813c" />
<ellipse cx="213.6" cy="282.6" rx="3.2" ry="2.4" fill="#ad7841" />
<ellipse cx="180.4" cy="306.7" rx="4.2" ry="1.4" fill="#755229" />
<ellipse cx="85.5" cy="290.6" rx="3.8" ry="2.3" fill="#936132" />
<ellipse cx="68.2" cy="256.1" rx="1.6" ry="1.3" fill="#603e20" />
<ellipse cx="61.1" cy="245.9" rx="3.4" ry="2.1" fill="#bb8b51" />
<ellipse cx="193.3" cy="266.0" rx="2.6" ry="2.4" fill="#603e20" />
<ellipse cx="208.7" cy="262.8" rx="3.2" ry="1.4" fill="#603e20" />
<rect x="208.7" y="262.8" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="107.3" cy="232.9" rx="2.5" ry="1.9" fill="#755229" />
<circle cx="107.3" cy="232.9" r="2.5" fill="#6d813c" />
<ellipse cx="195.8" cy="245.6" rx="2.2" ry="2.0" fill="#ad7841" />
<ellipse cx="208.2" cy="247.9" rx="2.0" ry="2.0" fill="#755229" />
<ellipse cx="96.8" cy="272.9" rx="2.8" ry="2.7" fill="#bb8b51" />
<ellipse cx="172.3" cy="271.8" rx="1.8" ry="2.8" fill="#603e20" />
<ellipse cx="188.7" cy="286.1" rx="1.8" ry="1.3" fill="#603e20" />
<ellipse cx="180.6" cy="250.7" rx="3.6" ry="1.7" fill="#ad7841" />
<ellipse cx="91.1" cy="232.8" rx="3.2" ry="1.9" fill="#936132" />
<ellipse cx="107.2" cy="291.5" rx="1.9" ry="2.0" fill="#ad7841" />
<circle cx="107.2" cy="291.5" r="2.5" fill="#6d813c" />
<ellipse cx="103.2" cy="225.3" rx="2.3" ry="2.7" fill="#ad7841" />
<ellipse cx="184.8" cy="257.5" rx="2.5" ry="2.8" fill="#755229" />
<ellipse cx="45.8" cy="269.3" rx="2.6" ry="1.6" fill="#936132" />
<ellipse cx="75.7" cy="271.8" rx="4.3" ry="2.0" fill="#936132" />
<ellipse cx="124.0" cy="286.1" rx="1.9" ry="1.5" fill="#755229" />
<ellipse cx="217.7" cy="275.8" rx="1.9" ry="1.3" fill="#755229" />
<ellipse cx="185.4" cy="235.1" rx="3.6" ry="2.3" fill="#ad7841" />
<ellipse cx="121.7" cy="281.9" rx="2.3" ry="1.1" fill="#603e20" />
<circle cx="121.7" cy="281.9" r="2.5" fill="#6d813c" />
<ellipse cx="182.0" cy="231.6" rx="3.2" ry="2.5" fill="#603e20" />
<ellipse cx="134.5" cy="310.6" rx="2.5" ry="2.2" fill="#755229" />
<rect x="134.5" y="310.6" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="149.1" cy="295.4" rx="2.9" ry="1.1" fill="#ad7841" />
<ellipse cx="86.9" cy="304.5" rx="1.7" ry="2.4" fill="#936132" />
<ellipse cx="59.8" cy="271.2" rx="3.1" ry="1.3" fill="#ad7841" />
<ellipse cx="142.7" cy="295.6" rx="3.4" ry="1.8" fill="#936132" />
<ellipse cx="81.9" cy="277.6" rx="2.7" ry="2.1" fill="#755229" />
<ellipse cx="153.0" cy="298.7" rx="3.9" ry="1.3" fill="#bb8b51" />
<circle cx="153.0" cy="298.7" r="2.5" fill="#6d813c" />
<ellipse cx="153.3" cy="250.8" rx="3.5" ry="1.4" fill="#603e20" />
<ellipse cx="48.3" cy="265.1" rx="2.4" ry="2.2" fill="#603e20" />
<ellipse cx="73.3" cy="295.3" rx="1.9" ry="1.5" fill="#603e20" />
<ellipse cx="177.9" cy="263.1" rx="4.1" ry="1.5" fill="#ad7841" />
<ellipse cx="99.9" cy="243.5" rx="4.2" ry="1.5" fill="#bb8b51" />
<ellipse cx="85.9" cy="297.0" rx="3.8" ry="1.2" fill="#936132" />
<ellipse cx="82.9" cy="263.9" rx="3.4" ry="1.1" fill="#603e20" />
<ellipse cx="119.8" cy="298.3" rx="3.8" ry="2.4" fill="#755229" />
<circle cx="119.8" cy="298.3" r="2.5" fill="#6d813c" />
<ellipse cx="74.9" cy="272.5" rx="2.2" ry="1.0" fill="#ad7841" />
<ellipse cx="148.7" cy="272.8" rx="3.8" ry="1.5" fill="#bb8b51" />
<ellipse cx="91.6" cy="284.3" rx="2.9" ry="2.8" fill="#ad7841" />
<ellipse cx="175.2" cy="268.0" rx="3.6" ry="2.5" fill="#755229" />
<ellipse cx="94.9" cy="245.0" rx="3.7" ry="1.4" fill="#603e20" />
<rect x="94.9" y="245.0" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="203.8" cy="255.6" rx="2.6" ry="2.7" fill="#755229" />
<ellipse cx="164.2" cy="309.7" rx="4.1" ry="2.2" fill="#bb8b51" />
<ellipse cx="159.2" cy="284.8" rx="3.0" ry="2.2" fill="#936132" />
<circle cx="159.2" cy="284.8" r="2.5" fill="#6d813c" />
<ellipse cx="219.8" cy="257.0" rx="3.5" ry="1.2" fill="#603e20" />
<ellipse cx="97.4" cy="239.3" rx="2.8" ry="1.2" fill="#603e20" />
<ellipse cx="83.5" cy="266.2" rx="2.7" ry="2.5" fill="#603e20" />
<ellipse cx="139.3" cy="299.1" rx="2.2" ry="1.7" fill="#755229" />
<ellipse cx="73.8" cy="293.7" rx="3.3" ry="2.8" fill="#936132" />
<ellipse cx="79.4" cy="242.3" rx="1.8" ry="2.3" fill="#ad7841" />
<ellipse cx="92.0" cy="294.3" rx="4.2" ry="1.8" fill="#ad7841" />
<ellipse cx="157.8" cy="255.9" rx="3.9" ry="2.1" fill="#ad7841" />
<circle cx="157.8" cy="255.9" r="2.5" fill="#6d813c" />
<ellipse cx="78.1" cy="258.1" rx="2.3" ry="2.6" fill="#ad7841" />
<ellipse cx="151.3" cy="221.2" rx="4.2" ry="1.4" fill="#ad7841" />
<ellipse cx="188.6" cy="277.0" rx="4.3" ry="2.7" fill="#755229" />
<ellipse cx="101.7" cy="251.4" rx="3.3" ry="1.5" fill="#603e20" />
<ellipse cx="73.0" cy="273.7" rx="2.9" ry="2.3" fill="#936132" />
<ellipse cx="80.3" cy="238.6" rx="1.7" ry="1.0" fill="#603e20" />
<ellipse cx="169.4" cy="288.5" rx="3.5" ry="2.7" fill="#bb8b51" />
<ellipse cx="107.1" cy="302.4" rx="2.9" ry="1.7" fill="#ad7841" />
<circle cx="107.1" cy="302.4" r="2.5" fill="#6d813c" />
<rect x="107.1" y="302.4" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="137.9" cy="279.2" rx="3.9" ry="1.7" fill="#bb8b51" />
<ellipse cx="186.2" cy="233.9" rx="2.5" ry="2.5" fill="#bb8b51" />
<ellipse cx="165.9" cy="266.6" rx="4.1" ry="2.1" fill="#936132" />
<ellipse cx="89.9" cy="274.6" rx="2.9" ry="1.7" fill="#ad7841" />
<ellipse cx="100.3" cy="265.3" rx="3.3" ry="1.2" fill="#bb8b51" />
<ellipse cx="172.8" cy="248.6" rx="1.7" ry="1.0" fill="#755229" />
<ellipse cx="195.2" cy="264.4" rx="2.2" ry="2.8" fill="#ad7841" />
<ellipse cx="77.7" cy="283.0" rx="2.1" ry="1.7" fill="#603e20" />
<circle cx="77.7" cy="283.0" r="2.5" fill="#6d813c" />
<ellipse cx="159.4" cy="276.8" rx="2.8" ry="1.8" fill="#603e20" />
<ellipse cx="139.5" cy="313.5" rx="1.8" ry="1.9" fill="#bb8b51" />
<ellipse cx="84.8" cy="294.7" rx="4.2" ry="2.4" fill="#ad7841" />
<ellipse cx="60.3" cy="255.5" rx="3.5" ry="1.8" fill="#603e20" />
<ellipse cx="128.7" cy="297.5" rx="2.8" ry="1.3" fill="#ad7841" />
<ellipse cx="66.4" cy="271.4" rx="3.0" ry="2.3" fill="#755229" />
<ellipse cx="96.2" cy="304.5" rx="2.7" ry="2.5" fill="#ad7841" />
<ellipse cx="78.3" cy="273.3" rx="2.1" ry="2.2" fill="#755229" />
<circle cx="78.3" cy="273.3" r="2.5" fill="#6d813c" />
<ellipse cx="144.7" cy="305.2" rx="3.5" ry="1.6" fill="#936132" />
<ellipse cx="141.1" cy="290.6" rx="2.2" ry="2.7" fill="#ad7841" />
<ellipse cx="195.4" cy="276.3" rx="3.5" ry="2.3" fill="#755229" />
<rect x="195.4" y="276.3" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="142.1" cy="222.7" rx="4.0" ry="1.0" fill="#bb8b51" />
<ellipse cx="131.3" cy="270.8" rx="3.4" ry="2.8" fill="#603e20" />
<ellipse cx="93.4" cy="292.0" rx="2.1" ry="1.7" fill="#bb8b51" />
<ellipse cx="209.2" cy="288.7" rx="2.2" ry="2.4" fill="#936132" />
<ellipse cx="65.9" cy="251.2" rx="1.7" ry="1.3" fill="#936132" />
<circle cx="65.9" cy="251.2" r="2.5" fill="#6d813c" />
<ellipse cx="84.6" cy="231.6" rx="2.7" ry="1.7" fill="#936132" />
<ellipse cx="74.7" cy="244.5" rx="3.4" ry="1.0" fill="#603e20" />
<ellipse cx="44.6" cy="269.3" rx="2.4" ry="1.5" fill="#603e20" />
<ellipse cx="87.0" cy="248.6" rx="3.3" ry="2.1" fill="#ad7841" />
<ellipse cx="185.0" cy="301.9" rx="2.2" ry="2.6" fill="#603e20" />
<ellipse cx="172.1" cy="234.2" rx="3.9" ry="2.8" fill="#936132" />
<ellipse cx="199.0" cy="243.2" rx="2.6" ry="1.5" fill="#bb8b51" />
<ellipse cx="68.2" cy="238.8" rx="3.7" ry="1.8" fill="#603e20" />
<circle cx="68.2" cy="238.8" r="2.5" fill="#6d813c" />
<ellipse cx="77.8" cy="239.1" rx="2.5" ry="1.1" fill="#603e20" />
<ellipse cx="64.3" cy="254.2" rx="3.2" ry="2.0" fill="#ad7841" />
<ellipse cx="72.3" cy="265.7" rx="3.0" ry="2.7" fill="#936132" />
<ellipse cx="190.4" cy="236.4" rx="1.6" ry="1.4" fill="#bb8b51" />
<ellipse cx="88.7" cy="234.4" rx="3.6" ry="1.3" fill="#755229" />
<ellipse cx="187.6" cy="233.4" rx="2.5" ry="2.6" fill="#ad7841" />
<rect x="187.6" y="233.4" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="127.9" cy="249.4" rx="2.8" ry="2.1" fill="#ad7841" />
<ellipse cx="173.1" cy="250.5" rx="2.6" ry="2.0" fill="#936132" />
<circle cx="173.1" cy="250.5" r="2.5" fill="#6d813c" />
<ellipse cx="138.1" cy="244.4" rx="1.7" ry="2.7" fill="#755229" />
<ellipse cx="63.9" cy="279.6" rx="2.4" ry="1.9" fill="#936132" />
<ellipse cx="115.5" cy="235.3" rx="1.9" ry="2.5" fill="#755229" />
<ellipse cx="91.5" cy="248.3" rx="2.1" ry="1.8" fill="#bb8b51" />
<ellipse cx="143.0" cy="310.1" rx="1.5" ry="2.7" fill="#755229" />
<ellipse cx="160.9" cy="244.9" rx="2.1" ry="1.5" fill="#ad7841" />
<ellipse cx="202.7" cy="280.9" rx="2.7" ry="2.4" fill="#936132" />
<ellipse cx="143.4" cy="236.4" rx="3.1" ry="2.5" fill="#bb8b51" />
<circle cx="143.4" cy="236.4" r="2.5" fill="#6d813c" />
<ellipse cx="88.1" cy="307.3" rx="2.9" ry="2.7" fill="#603e20" />
<ellipse cx="61.8" cy="241.1" rx="3.5" ry="1.0" fill="#ad7841" />
<ellipse cx="75.6" cy="232.0" rx="2.7" ry="2.2" fill="#bb8b51" />
<ellipse cx="58.8" cy="283.1" rx="3.3" ry="2.0" fill="#ad7841" />
<ellipse cx="49.0" cy="253.0" rx="3.4" ry="1.5" fill="#ad7841" />
<ellipse cx="107.8" cy="308.1" rx="2.7" ry="2.1" fill="#755229" />
<ellipse cx="50.7" cy="278.9" rx="3.7" ry="2.4" fill="#bb8b51" />
<ellipse cx="111.8" cy="247.5" rx="3.5" ry="2.0" fill="#755229" />
<circle cx="111.8" cy="247.5" r="2.5" fill="#6d813c" />
<ellipse cx="76.1" cy="273.6" rx="4.2" ry="1.7" fill="#603e20" />
<rect x="76.1" y="273.6" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="59.0" cy="284.2" rx="3.3" ry="2.5" fill="#755229" />
<ellipse cx="125.3" cy="228.1" rx="4.1" ry="1.5" fill="#ad7841" />
<ellipse cx="128.0" cy="273.0" rx="2.1" ry="2.0" fill="#603e20" />
<ellipse cx="194.3" cy="235.9" rx="3.3" ry="1.8" fill="#603e20" />
<ellipse cx="144.0" cy="285.5" rx="2.0" ry="2.1" fill="#755229" />
<ellipse cx="71.1" cy="260.4" rx="4.0" ry="2.1" fill="#ad7841" />
<ellipse cx="186.8" cy="259.1" rx="1.9" ry="1.6" fill="#936132" />
<circle cx="186.8" cy="259.1" r="2.5" fill="#6d813c" />
<ellipse cx="213.3" cy="251.1" rx="2.1" ry="2.2" fill="#bb8b51" />
<ellipse cx="202.2" cy="276.2" rx="3.8" ry="1.6" fill="#755229" />
<ellipse cx="85.1" cy="280.2" rx="3.5" ry="1.3" fill="#603e20" />
<ellipse cx="171.1" cy="250.4" rx="3.1" ry="1.0" fill="#ad7841" />
<ellipse cx="211.1" cy="278.8" rx="1.8" ry="1.2" fill="#ad7841" />
<ellipse cx="79.0" cy="271.6" rx="1.7" ry="1.4" fill="#936132" />
<ellipse cx="68.3" cy="269.8" rx="3.0" ry="2.6" fill="#bb8b51" />
<ellipse cx="179.9" cy="258.8" rx="2.7" ry="1.1" fill="#755229" />
<circle cx="179.9" cy="258.8" r="2.5" fill="#6d813c" />
<ellipse cx="178.8" cy="258.9" rx="1.9" ry="1.7" fill="#603e20" />
<ellipse cx="124.0" cy="293.5" rx="2.9" ry="1.5" fill="#603e20" />
<ellipse cx="185.4" cy="302.7" rx="2.2" ry="2.3" fill="#936132" />
<ellipse cx="138.6" cy="261.7" rx="3.1" ry="2.6" fill="#936132" />
<rect x="138.6" y="261.7" width="4" height="3" rx="1" fill="#d5aa83" />
<ellipse cx="183.3" cy="280.8" rx="3.1" ry="2.2" fill="#bb8b51" />
<ellipse cx="110.4" cy="274.8" rx="2.0" ry="2.7" fill="#936132" />
<ellipse cx="141.6" cy="281.1" rx="2.4" ry="2.3" fill="#603e20" />
<ellipse cx="140.6" cy="279.1" rx="3.7" ry="2.0" fill="#bb8b51" />
<circle cx="140.6" cy="279.1" r="2.5" fill="#6d813c" />
<ellipse cx="132.7" cy="274.2" rx="3.8" ry="1.7" fill="#936132" />
<ellipse cx="201.2" cy="280.7" rx="1.8" ry="1.5" fill="#936132" />
<ellipse cx="65.7" cy="284.2" rx="2.6" ry="1.2" fill="#bb8b51" />
<ellipse cx="184.4" cy="283.0" rx="4.1" ry="1.8" fill="#755229" />
<ellipse cx="157.2" cy="276.3" rx="4.2" ry="1.1" fill="#755229" />
<ellipse cx="207.8" cy="257.8" rx="1.5" ry="1.5" fill="#755229" />
<ellipse cx="175.4" cy="263.8" rx="1.6" ry="1.3" fill="#bb8b51" />
</g>
<g transform="translate(218 207) rotate(10)">
<path d="M-35-28Q0-47 35-28L32 18Q0 38-32 18Z" fill="#aa692d" />
<path d="M-33-12Q0-1 33-12L30 9Q0 24-30 9Z" fill="#f7d68b" />
<path d="M-35-27Q-32-65 0-68Q32-65 35-27Q0-7-35-27Z" fill="url(#kitchen-bread)" />
<path d="M-23-41Q-15-56 1-56" stroke="#f6d38c" strokeWidth="4" fill="none" strokeLinecap="round" />
</g>
<g transform="translate(245 170) rotate(18) scale(.8)">
<path d="M-35-27Q-32-65 0-68Q32-65 35-27L30 9Q0 24-30 9L-35-27Z" fill="url(#kitchen-bread)" />
<path d="M-29-25Q0-8 29-25L25-8Q0 5-25-8Z" fill="#f5d68e" />
</g>
<path d="m143 245 26-16q16 28-11 36Z" fill="#c4d370" stroke="#f0e5a0" strokeWidth="3" />
<path d="m150 245 16 8" stroke="#eef0be" />
<g fill="#6f8d3b">
<path d="m91 253-12-9 4 15 13 4-4-12 12-5Z" />
<path d="m126 279-10-8 2 12 11 3 1-9 10-4Z" />
<path d="m162 283-8-9-1 12 11 3 3-11 10-2Z" />
</g>
</symbol>
<symbol id="kitchen-art-akuri" viewBox="0 0 320 400">
<use href="#kitchen-setting" />
<use href="#kitchen-chai" />
<use href="#kitchen-serving-plate" />
<ellipse cx="160" cy="267" rx="134" ry="75" fill="none" stroke="#354a63" strokeWidth="2" />
<g transform="translate(111 262) rotate(-12) scale(.85)">
<use href="#kitchen-toast" />
</g>
<g transform="translate(204 270) rotate(12) scale(.85)">
<use href="#kitchen-toast" />
</g>
<g className="kitchen-akuri-texture">
<ellipse cx="103.8" cy="270.5" rx="4.3" ry="3.4" fill="#efc97b" />
<rect x="103.8" y="270.5" width="4" height="4" rx="1" fill="#b96232" />
<path d="m103.8 270.5 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="219.4" cy="239.7" rx="5.9" ry="3.8" fill="#dbad63" />
<ellipse cx="130.9" cy="245.9" rx="4.3" ry="2.2" fill="#dbad63" />
<ellipse cx="172.8" cy="284.6" rx="5.5" ry="1.6" fill="#efc97b" />
<ellipse cx="187.1" cy="267.0" rx="4.9" ry="3.5" fill="#dbad63" />
<path d="m187.1 267.0 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="131.9" cy="262.0" rx="5.2" ry="1.5" fill="#f7d799" />
<ellipse cx="193.6" cy="280.4" rx="4.6" ry="3.2" fill="#efc97b" />
<rect x="193.6" y="280.4" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="234.6" cy="241.3" rx="4.3" ry="3.7" fill="#e7b85d" />
<ellipse cx="177.1" cy="252.2" rx="5.0" ry="3.6" fill="#efc97b" />
<path d="m177.1 252.2 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="211.4" cy="231.8" rx="5.7" ry="2.9" fill="#e7b85d" />
<ellipse cx="161.6" cy="241.7" rx="5.9" ry="2.4" fill="#d6a449" />
<ellipse cx="119.9" cy="289.8" rx="4.5" ry="3.0" fill="#d6a449" />
<ellipse cx="194.5" cy="222.0" rx="3.9" ry="1.9" fill="#f7d799" />
<rect x="194.5" y="222.0" width="4" height="4" rx="1" fill="#b96232" />
<path d="m194.5 222.0 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="130.9" cy="223.4" rx="5.1" ry="2.6" fill="#efc97b" />
<ellipse cx="191.6" cy="248.5" rx="3.2" ry="2.4" fill="#d6a449" />
<ellipse cx="201.2" cy="283.4" rx="2.9" ry="2.0" fill="#efc97b" />
<ellipse cx="217.4" cy="228.1" rx="2.5" ry="3.2" fill="#dbad63" />
<path d="m217.4 228.1 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="119.2" cy="238.7" rx="3.8" ry="1.6" fill="#d6a449" />
<ellipse cx="197.3" cy="243.3" rx="5.5" ry="2.3" fill="#efc97b" />
<rect x="197.3" y="243.3" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="115.4" cy="225.9" rx="4.6" ry="3.0" fill="#efc97b" />
<ellipse cx="176.1" cy="261.1" rx="3.7" ry="2.8" fill="#dbad63" />
<path d="m176.1 261.1 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="213.1" cy="238.3" rx="5.2" ry="2.7" fill="#d6a449" />
<ellipse cx="247.1" cy="260.4" rx="2.5" ry="2.6" fill="#e7b85d" />
<ellipse cx="230.8" cy="233.4" rx="4.5" ry="2.5" fill="#d6a449" />
<ellipse cx="144.0" cy="251.6" rx="4.8" ry="1.5" fill="#d6a449" />
<rect x="144.0" y="251.6" width="4" height="4" rx="1" fill="#b96232" />
<path d="m144.0 251.6 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="220.8" cy="252.9" rx="4.3" ry="2.4" fill="#e7b85d" />
<ellipse cx="82.7" cy="270.7" rx="5.3" ry="2.3" fill="#d6a449" />
<ellipse cx="144.0" cy="237.5" rx="2.8" ry="2.1" fill="#d6a449" />
<ellipse cx="136.6" cy="254.7" rx="4.1" ry="1.8" fill="#dbad63" />
<path d="m136.6 254.7 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="121.3" cy="225.4" rx="3.7" ry="2.0" fill="#e7b85d" />
<ellipse cx="223.4" cy="258.0" rx="5.0" ry="3.4" fill="#dbad63" />
<rect x="223.4" y="258.0" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="189.8" cy="282.5" rx="4.1" ry="2.1" fill="#efc97b" />
<ellipse cx="198.3" cy="288.8" rx="5.4" ry="2.0" fill="#f7d799" />
<path d="m198.3 288.8 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="217.1" cy="262.9" rx="2.5" ry="4.0" fill="#e7b85d" />
<ellipse cx="125.2" cy="261.2" rx="5.5" ry="3.9" fill="#efc97b" />
<ellipse cx="135.6" cy="242.9" rx="5.9" ry="2.3" fill="#f7d799" />
<ellipse cx="178.3" cy="234.9" rx="4.4" ry="4.0" fill="#e7b85d" />
<rect x="178.3" y="234.9" width="4" height="4" rx="1" fill="#b96232" />
<path d="m178.3 234.9 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="159.3" cy="219.9" rx="5.6" ry="1.6" fill="#dbad63" />
<ellipse cx="192.5" cy="255.1" rx="5.5" ry="3.2" fill="#d6a449" />
<ellipse cx="138.2" cy="263.1" rx="3.0" ry="2.2" fill="#f7d799" />
<ellipse cx="232.4" cy="265.4" rx="3.0" ry="3.7" fill="#efc97b" />
<path d="m232.4 265.4 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="152.3" cy="233.9" rx="3.7" ry="3.2" fill="#f7d799" />
<ellipse cx="154.2" cy="266.7" rx="4.2" ry="2.2" fill="#d6a449" />
<rect x="154.2" y="266.7" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="169.6" cy="227.6" rx="5.2" ry="1.8" fill="#d6a449" />
<ellipse cx="189.6" cy="263.4" rx="5.7" ry="2.5" fill="#efc97b" />
<path d="m189.6 263.4 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="181.8" cy="292.1" rx="5.2" ry="3.2" fill="#e7b85d" />
<ellipse cx="71.1" cy="254.5" rx="5.8" ry="3.4" fill="#e7b85d" />
<ellipse cx="90.0" cy="278.7" rx="2.9" ry="3.2" fill="#f7d799" />
<ellipse cx="88.2" cy="233.5" rx="2.7" ry="3.9" fill="#dbad63" />
<rect x="88.2" y="233.5" width="4" height="4" rx="1" fill="#b96232" />
<path d="m88.2 233.5 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="95.7" cy="253.9" rx="3.6" ry="3.2" fill="#f7d799" />
<ellipse cx="149.5" cy="286.2" rx="3.4" ry="3.1" fill="#d6a449" />
<ellipse cx="132.5" cy="252.3" rx="3.9" ry="2.0" fill="#e7b85d" />
<ellipse cx="245.3" cy="262.1" rx="4.6" ry="2.2" fill="#efc97b" />
<path d="m245.3 262.1 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="93.2" cy="235.1" rx="2.8" ry="2.8" fill="#dbad63" />
<ellipse cx="201.5" cy="279.4" rx="4.8" ry="3.6" fill="#d6a449" />
<rect x="201.5" y="279.4" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="170.9" cy="237.8" rx="4.4" ry="3.6" fill="#efc97b" />
<ellipse cx="84.0" cy="265.5" rx="4.4" ry="2.1" fill="#efc97b" />
<path d="m84.0 265.5 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="234.8" cy="270.9" rx="2.9" ry="2.8" fill="#dbad63" />
<ellipse cx="231.0" cy="267.0" rx="2.8" ry="1.5" fill="#e7b85d" />
<ellipse cx="187.6" cy="270.1" rx="5.5" ry="3.7" fill="#dbad63" />
<ellipse cx="178.0" cy="223.1" rx="5.7" ry="3.3" fill="#e7b85d" />
<rect x="178.0" y="223.1" width="4" height="4" rx="1" fill="#b96232" />
<path d="m178.0 223.1 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="163.9" cy="279.5" rx="2.7" ry="3.5" fill="#d6a449" />
<ellipse cx="141.0" cy="290.4" rx="5.2" ry="3.3" fill="#e7b85d" />
<ellipse cx="199.8" cy="227.5" rx="2.6" ry="3.6" fill="#e7b85d" />
<ellipse cx="145.4" cy="290.7" rx="5.3" ry="3.7" fill="#e7b85d" />
<path d="m145.4 290.7 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="94.3" cy="269.8" rx="4.9" ry="2.2" fill="#f7d799" />
<ellipse cx="179.0" cy="277.7" rx="2.6" ry="2.7" fill="#f7d799" />
<rect x="179.0" y="277.7" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="198.6" cy="255.0" rx="4.1" ry="3.2" fill="#dbad63" />
<ellipse cx="157.3" cy="241.8" rx="4.5" ry="3.9" fill="#efc97b" />
<path d="m157.3 241.8 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="104.5" cy="236.6" rx="4.0" ry="4.0" fill="#dbad63" />
<ellipse cx="112.4" cy="239.9" rx="4.9" ry="1.8" fill="#efc97b" />
<ellipse cx="195.4" cy="255.6" rx="2.9" ry="2.0" fill="#d6a449" />
<ellipse cx="140.0" cy="223.5" rx="5.1" ry="3.1" fill="#dbad63" />
<rect x="140.0" y="223.5" width="4" height="4" rx="1" fill="#b96232" />
<path d="m140.0 223.5 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="95.9" cy="250.1" rx="4.9" ry="4.0" fill="#efc97b" />
<ellipse cx="85.3" cy="270.4" rx="4.2" ry="3.5" fill="#e7b85d" />
<ellipse cx="213.5" cy="240.6" rx="5.7" ry="1.6" fill="#efc97b" />
<ellipse cx="89.6" cy="279.7" rx="3.6" ry="3.9" fill="#d6a449" />
<path d="m89.6 279.7 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="138.7" cy="277.0" rx="3.0" ry="2.6" fill="#dbad63" />
<ellipse cx="146.1" cy="281.5" rx="5.5" ry="3.2" fill="#d6a449" />
<rect x="146.1" y="281.5" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="89.8" cy="273.4" rx="3.6" ry="3.9" fill="#d6a449" />
<ellipse cx="154.5" cy="274.8" rx="5.5" ry="1.6" fill="#dbad63" />
<path d="m154.5 274.8 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="200.4" cy="278.9" rx="5.3" ry="2.5" fill="#efc97b" />
<ellipse cx="110.3" cy="232.7" rx="2.5" ry="2.9" fill="#d6a449" />
<ellipse cx="103.0" cy="246.1" rx="4.5" ry="2.1" fill="#e7b85d" />
<ellipse cx="94.0" cy="272.5" rx="3.8" ry="2.6" fill="#efc97b" />
<rect x="94.0" y="272.5" width="4" height="4" rx="1" fill="#b96232" />
<path d="m94.0 272.5 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="163.9" cy="227.1" rx="3.3" ry="2.9" fill="#efc97b" />
<ellipse cx="122.4" cy="235.4" rx="4.4" ry="3.0" fill="#dbad63" />
<ellipse cx="138.3" cy="290.7" rx="4.4" ry="3.7" fill="#dbad63" />
<ellipse cx="194.3" cy="241.6" rx="5.3" ry="1.9" fill="#dbad63" />
<path d="m194.3 241.6 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="194.7" cy="288.4" rx="5.2" ry="3.0" fill="#dbad63" />
<ellipse cx="163.9" cy="238.7" rx="5.2" ry="2.0" fill="#dbad63" />
<rect x="163.9" y="238.7" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="231.2" cy="255.1" rx="2.9" ry="2.6" fill="#f7d799" />
<ellipse cx="215.6" cy="277.2" rx="3.2" ry="1.8" fill="#dbad63" />
<path d="m215.6 277.2 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="168.0" cy="241.4" rx="4.6" ry="3.9" fill="#efc97b" />
<ellipse cx="79.5" cy="247.1" rx="3.4" ry="2.6" fill="#efc97b" />
<ellipse cx="177.1" cy="268.2" rx="3.7" ry="4.0" fill="#efc97b" />
<ellipse cx="174.9" cy="288.1" rx="3.3" ry="3.7" fill="#e7b85d" />
<rect x="174.9" y="288.1" width="4" height="4" rx="1" fill="#b96232" />
<path d="m174.9 288.1 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="90.4" cy="233.0" rx="4.1" ry="3.5" fill="#e7b85d" />
<ellipse cx="136.0" cy="244.3" rx="5.7" ry="2.0" fill="#f7d799" />
<ellipse cx="113.9" cy="277.7" rx="3.9" ry="2.7" fill="#e7b85d" />
<ellipse cx="93.4" cy="255.9" rx="4.4" ry="3.5" fill="#efc97b" />
<path d="m93.4 255.9 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="107.1" cy="280.2" rx="4.5" ry="2.4" fill="#d6a449" />
<ellipse cx="117.7" cy="266.4" rx="5.3" ry="3.3" fill="#e7b85d" />
<rect x="117.7" y="266.4" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="199.2" cy="234.4" rx="3.3" ry="1.7" fill="#d6a449" />
<ellipse cx="195.5" cy="225.8" rx="3.6" ry="3.6" fill="#f7d799" />
<path d="m195.5 225.8 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="167.8" cy="280.8" rx="5.3" ry="2.0" fill="#efc97b" />
<ellipse cx="196.1" cy="231.8" rx="2.9" ry="1.8" fill="#e7b85d" />
<ellipse cx="187.0" cy="220.1" rx="5.2" ry="2.6" fill="#f7d799" />
<ellipse cx="203.7" cy="273.4" rx="3.9" ry="3.2" fill="#d6a449" />
<rect x="203.7" y="273.4" width="4" height="4" rx="1" fill="#b96232" />
<path d="m203.7 273.4 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="208.2" cy="284.2" rx="3.8" ry="3.4" fill="#f7d799" />
<ellipse cx="168.2" cy="217.9" rx="3.1" ry="2.4" fill="#d6a449" />
<ellipse cx="89.0" cy="251.0" rx="3.1" ry="3.9" fill="#f7d799" />
<ellipse cx="158.7" cy="270.0" rx="3.1" ry="2.4" fill="#d6a449" />
<path d="m158.7 270.0 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="102.5" cy="248.1" rx="4.3" ry="3.8" fill="#f7d799" />
<ellipse cx="180.0" cy="239.6" rx="4.1" ry="3.6" fill="#d6a449" />
<rect x="180.0" y="239.6" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="193.0" cy="269.7" rx="4.8" ry="3.7" fill="#e7b85d" />
<ellipse cx="192.5" cy="290.6" rx="3.6" ry="1.6" fill="#dbad63" />
<path d="m192.5 290.6 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="180.8" cy="259.9" rx="5.5" ry="2.5" fill="#efc97b" />
<ellipse cx="89.8" cy="276.0" rx="2.8" ry="2.6" fill="#efc97b" />
<ellipse cx="205.2" cy="247.3" rx="4.0" ry="3.4" fill="#e7b85d" />
<ellipse cx="94.3" cy="230.0" rx="4.8" ry="3.9" fill="#f7d799" />
<rect x="94.3" y="230.0" width="4" height="4" rx="1" fill="#b96232" />
<path d="m94.3 230.0 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="203.9" cy="254.0" rx="5.6" ry="1.5" fill="#e7b85d" />
<ellipse cx="213.9" cy="239.2" rx="4.0" ry="1.6" fill="#dbad63" />
<ellipse cx="200.0" cy="269.3" rx="2.7" ry="3.6" fill="#f7d799" />
<ellipse cx="142.4" cy="220.3" rx="3.8" ry="2.2" fill="#f7d799" />
<path d="m142.4 220.3 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="167.9" cy="294.1" rx="5.1" ry="1.7" fill="#dbad63" />
<ellipse cx="191.6" cy="248.8" rx="5.6" ry="1.5" fill="#d6a449" />
<rect x="191.6" y="248.8" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="95.7" cy="260.8" rx="2.7" ry="1.8" fill="#efc97b" />
<ellipse cx="90.6" cy="243.5" rx="4.1" ry="2.0" fill="#e7b85d" />
<path d="m90.6 243.5 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="145.1" cy="252.8" rx="4.9" ry="1.8" fill="#dbad63" />
<ellipse cx="98.2" cy="233.9" rx="2.7" ry="3.1" fill="#f7d799" />
<ellipse cx="127.9" cy="262.3" rx="5.0" ry="2.8" fill="#e7b85d" />
<ellipse cx="137.8" cy="275.2" rx="5.2" ry="3.7" fill="#f7d799" />
<rect x="137.8" y="275.2" width="4" height="4" rx="1" fill="#b96232" />
<path d="m137.8 275.2 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="147.0" cy="277.6" rx="3.7" ry="1.9" fill="#dbad63" />
<ellipse cx="79.6" cy="268.2" rx="4.2" ry="2.5" fill="#e7b85d" />
<ellipse cx="182.3" cy="227.8" rx="4.7" ry="1.6" fill="#d6a449" />
<ellipse cx="233.2" cy="274.5" rx="5.6" ry="3.1" fill="#efc97b" />
<path d="m233.2 274.5 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="217.7" cy="227.6" rx="4.8" ry="3.2" fill="#efc97b" />
<ellipse cx="177.9" cy="261.4" rx="2.7" ry="2.9" fill="#d6a449" />
<rect x="177.9" y="261.4" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="176.9" cy="231.4" rx="4.9" ry="1.8" fill="#dbad63" />
<ellipse cx="198.6" cy="273.5" rx="3.5" ry="3.6" fill="#d6a449" />
<path d="m198.6 273.5 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="124.3" cy="264.2" rx="5.3" ry="1.7" fill="#f7d799" />
<ellipse cx="151.7" cy="233.1" rx="4.7" ry="3.5" fill="#d6a449" />
<ellipse cx="139.2" cy="259.3" rx="4.5" ry="3.3" fill="#d6a449" />
<ellipse cx="216.1" cy="239.9" rx="4.7" ry="3.6" fill="#e7b85d" />
<rect x="216.1" y="239.9" width="4" height="4" rx="1" fill="#b96232" />
<path d="m216.1 239.9 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="172.6" cy="270.6" rx="5.7" ry="1.8" fill="#efc97b" />
<ellipse cx="193.8" cy="289.3" rx="3.7" ry="1.5" fill="#e7b85d" />
<ellipse cx="187.1" cy="222.9" rx="5.6" ry="1.8" fill="#efc97b" />
<ellipse cx="115.9" cy="246.4" rx="4.5" ry="3.9" fill="#dbad63" />
<path d="m115.9 246.4 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="110.0" cy="244.4" rx="5.2" ry="1.6" fill="#dbad63" />
<ellipse cx="153.1" cy="254.1" rx="3.6" ry="2.9" fill="#d6a449" />
<rect x="153.1" y="254.1" width="4" height="4" rx="1" fill="#b96232" />
<ellipse cx="188.5" cy="269.6" rx="5.4" ry="2.6" fill="#d6a449" />
<ellipse cx="201.5" cy="288.5" rx="5.4" ry="3.7" fill="#d6a449" />
<path d="m201.5 288.5 5-2-1 5-4-1-3 2Z" fill="#567735" />
<ellipse cx="112.0" cy="255.1" rx="2.6" ry="2.9" fill="#dbad63" />
<ellipse cx="122.0" cy="245.8" rx="3.8" ry="3.2" fill="#efc97b" />
</g>
</symbol>
<symbol id="kitchen-art-cake" viewBox="0 0 320 400">
<use href="#kitchen-setting" />
<use href="#kitchen-chai" />
<use href="#kitchen-serving-plate" />
<g transform="translate(201 244) rotate(12)">
<use href="#kitchen-cake-slice" />
</g>
<g transform="translate(128 288) rotate(-14)">
<use href="#kitchen-cake-slice" />
</g>
</symbol>
<symbol id="kitchen-art-cold-coffee" viewBox="0 0 320 400">
<path d="M0 0H320V400H0Z" fill="#bba98c" />
<path d="M0 0H58V278H0Z" fill="url(#kitchen-window)" />
<g fill="none" stroke="#38291d" strokeWidth="12">
<path d="M58 345V135Q57 39 164 36Q275 37 279 141V345" />
<path d="M82 340V136Q82 64 164 62Q252 65 252 143V340" />
</g>
<path d="M0 319 320 210V400H0Z" fill="url(#kitchen-marble)" />
<path d="m0 376 61-24 43 8 59-31 42 4 55-27 60-2" fill="none" stroke="#b2a48c" strokeWidth="1" />
<ellipse cx="181" cy="345" rx="77" ry="14" fill="#624c32" opacity=".2" filter="url(#kitchen-soft-shadow)" />
<path d="M103 112 121 329Q163 346 205 329L221 112Z" fill="url(#kitchen-cold-coffee-fill)" stroke="#f8ecd1" strokeWidth="2" />
<g clipPath="url(#kitchen-coffee-clip)">
<path d="M109 156Q230 183 196 206T132 252Q119 265 209 281" stroke="#5b301c" strokeWidth="10" fill="none" />
<path d="M107 160Q224 184 191 207T130 251" stroke="#8a502d" strokeWidth="2" fill="none" />
<path d="M112 116 128 325M206 118 194 328" stroke="#fff7e1" strokeOpacity=".6" strokeWidth="4" />
</g>
<ellipse cx="162" cy="112" rx="59" ry="27" fill="url(#kitchen-foam)" stroke="#fff0d7" strokeWidth="2" />
<g className="kitchen-foam-bubbles">
<circle cx="208.8" cy="118.9" r="1.9" fill="#f8ebd1" />
<circle cx="115.2" cy="115.4" r="1.9" fill="#f8ebd1" />
<circle cx="164.6" cy="113.9" r="1.5" fill="#cfb38b" />
<circle cx="152.3" cy="125.5" r="2.3" fill="#cfb38b" />
<circle cx="176.0" cy="132.9" r="1.6" fill="#e2cca8" />
<circle cx="151.9" cy="112.3" r="1.6" fill="#e2cca8" />
<circle cx="132.6" cy="94.4" r="1.9" fill="#e2cca8" />
<circle cx="165.9" cy="111.4" r="2.7" fill="#f8ebd1" />
<circle cx="117.1" cy="117.4" r="2.4" fill="#cfb38b" />
<circle cx="189.6" cy="113.2" r="0.9" fill="#e2cca8" />
<circle cx="210.3" cy="115.1" r="1.9" fill="#e2cca8" />
<circle cx="148.6" cy="110.1" r="1.9" fill="#e2cca8" />
<circle cx="155.2" cy="98.8" r="1.2" fill="#f8ebd1" />
<circle cx="164.4" cy="91.9" r="2.6" fill="#e2cca8" />
<circle cx="169.7" cy="97.0" r="2.3" fill="#e2cca8" />
<circle cx="186.0" cy="114.4" r="1.1" fill="#cfb38b" />
<circle cx="129.8" cy="116.8" r="2.8" fill="#e2cca8" />
<circle cx="165.8" cy="95.9" r="2.5" fill="#e2cca8" />
<circle cx="163.0" cy="114.7" r="1.2" fill="#cfb38b" />
<circle cx="152.6" cy="91.8" r="2.7" fill="#e2cca8" />
<circle cx="196.1" cy="125.9" r="2.8" fill="#e2cca8" />
<circle cx="179.2" cy="119.0" r="0.9" fill="#e2cca8" />
<circle cx="168.6" cy="133.6" r="2.4" fill="#f8ebd1" />
<circle cx="189.0" cy="131.6" r="2.9" fill="#f8ebd1" />
<circle cx="154.1" cy="128.7" r="2.7" fill="#cfb38b" />
<circle cx="134.6" cy="120.1" r="2.0" fill="#cfb38b" />
<circle cx="202.9" cy="121.1" r="2.9" fill="#f8ebd1" />
<circle cx="146.2" cy="93.0" r="2.2" fill="#e2cca8" />
<circle cx="165.9" cy="103.6" r="2.9" fill="#e2cca8" />
<circle cx="114.5" cy="111.3" r="1.0" fill="#f8ebd1" />
<circle cx="172.8" cy="90.4" r="2.6" fill="#f8ebd1" />
<circle cx="173.7" cy="124.7" r="1.4" fill="#e2cca8" />
<circle cx="182.3" cy="92.9" r="1.2" fill="#cfb38b" />
<circle cx="146.9" cy="119.3" r="2.0" fill="#e2cca8" />
<circle cx="150.5" cy="131.9" r="1.4" fill="#f8ebd1" />
<circle cx="192.6" cy="118.7" r="1.0" fill="#cfb38b" />
<circle cx="134.0" cy="109.3" r="2.5" fill="#f8ebd1" />
<circle cx="199.4" cy="124.4" r="1.4" fill="#f8ebd1" />
<circle cx="137.2" cy="96.0" r="2.4" fill="#e2cca8" />
<circle cx="175.1" cy="99.7" r="1.4" fill="#f8ebd1" />
<circle cx="197.5" cy="126.4" r="1.5" fill="#f8ebd1" />
<circle cx="148.2" cy="117.5" r="1.3" fill="#cfb38b" />
<circle cx="177.2" cy="111.4" r="2.3" fill="#e2cca8" />
<circle cx="172.8" cy="99.0" r="1.0" fill="#cfb38b" />
<circle cx="158.3" cy="121.5" r="2.1" fill="#e2cca8" />
<circle cx="189.1" cy="115.7" r="1.0" fill="#cfb38b" />
<circle cx="186.7" cy="125.0" r="1.4" fill="#e2cca8" />
<circle cx="166.1" cy="95.2" r="2.5" fill="#f8ebd1" />
<circle cx="166.9" cy="96.9" r="0.9" fill="#f8ebd1" />
<circle cx="117.1" cy="101.4" r="1.1" fill="#e2cca8" />
<circle cx="156.1" cy="111.4" r="2.6" fill="#e2cca8" />
<circle cx="146.6" cy="108.6" r="1.3" fill="#e2cca8" />
<circle cx="168.6" cy="93.2" r="1.3" fill="#e2cca8" />
<circle cx="188.6" cy="129.5" r="2.5" fill="#cfb38b" />
<circle cx="138.5" cy="128.1" r="2.4" fill="#f8ebd1" />
<circle cx="171.7" cy="91.7" r="1.7" fill="#f8ebd1" />
<circle cx="196.5" cy="113.0" r="1.1" fill="#cfb38b" />
<circle cx="146.8" cy="108.4" r="2.3" fill="#f8ebd1" />
<circle cx="131.0" cy="107.5" r="2.7" fill="#e2cca8" />
<circle cx="140.6" cy="115.0" r="2.2" fill="#cfb38b" />
<circle cx="190.7" cy="128.0" r="1.1" fill="#e2cca8" />
<circle cx="165.2" cy="125.6" r="1.6" fill="#e2cca8" />
<circle cx="137.7" cy="116.8" r="1.8" fill="#cfb38b" />
<circle cx="121.3" cy="106.3" r="2.4" fill="#f8ebd1" />
<circle cx="177.2" cy="114.9" r="2.9" fill="#f8ebd1" />
<circle cx="140.3" cy="92.6" r="1.0" fill="#e2cca8" />
<circle cx="166.6" cy="102.5" r="1.2" fill="#cfb38b" />
<circle cx="165.5" cy="131.8" r="1.0" fill="#cfb38b" />
<circle cx="125.1" cy="119.9" r="2.5" fill="#e2cca8" />
<circle cx="211.6" cy="114.1" r="1.2" fill="#cfb38b" />
</g>
<path d="m188 115 46-91" stroke="#8e7654" strokeWidth="7" />
<path d="m187 114 45-91" stroke="#edddb8" strokeWidth="3" />
<path d="M121 329Q163 349 205 329" fill="none" stroke="#f8f0dc" strokeWidth="4" />
</symbol>
</defs>
</svg>
<header className="kitchen-heading">
<h2 id="kitchen-title">
{"From the kitchen, "}
<span>
{"till it runs out."}
</span>
</h2>
<p className="kitchen-hours">
{"HOT PLATES · 8 AM ONWARDS"}
</p>
</header>
<div className="kitchen-grid">
<article className="kitchen-card" id="kitchen-keema" data-product="keema" data-price="180" style={{"--kitchen-delay": "0ms"}}>
<div className="kitchen-picture">
<span className="kitchen-price">
{"₹180"}
</span>
<svg className="kitchen-art" viewBox="0 0 320 400" role="img" aria-label="Keema Pav, drawn in code">
<use href="#kitchen-art-keema" />
</svg>
</div>
<div className="kitchen-meta">
<h3>
{"Keema Pav"}
</h3>
<p className="kitchen-subtitle">
{"TILL 1 PM · OR TILL IT RUNS OUT"}
</p>
<AddToBag productId="keema" />
</div>
</article>
<article className="kitchen-card" id="kitchen-akuri" data-product="akuri" data-price="140" style={{"--kitchen-delay": "90ms"}}>
<div className="kitchen-picture">
<span className="kitchen-price">
{"₹140"}
</span>
<svg className="kitchen-art" viewBox="0 0 320 400" role="img" aria-label="Akuri on Toast, drawn in code">
<use href="#kitchen-art-akuri" />
</svg>
</div>
<div className="kitchen-meta">
<h3>
{"Akuri on Toast"}
</h3>
<p className="kitchen-subtitle">
{"PARSI SCRAMBLED EGGS"}
</p>
<AddToBag productId="akuri" />
</div>
</article>
<article className="kitchen-card" id="kitchen-cake" data-product="cake" data-price="90" style={{"--kitchen-delay": "180ms"}}>
<div className="kitchen-picture">
<span className="kitchen-price">
{"₹90"}
</span>
<svg className="kitchen-art" viewBox="0 0 320 400" role="img" aria-label="Mawa Cake, drawn in code">
<use href="#kitchen-art-cake" />
</svg>
</div>
<div className="kitchen-meta">
<h3>
{"Mawa Cake"}
</h3>
<p className="kitchen-subtitle">
{"CARDAMOM · CASHEW · ALMOND"}
</p>
<AddToBag productId="cake" />
</div>
</article>
<article className="kitchen-card" id="kitchen-cold-coffee" data-product="cold-coffee" data-price="130" style={{"--kitchen-delay": "270ms"}}>
<div className="kitchen-picture">
<span className="kitchen-price">
{"₹130"}
</span>
<svg className="kitchen-art" viewBox="0 0 320 400" role="img" aria-label="Cold Coffee, drawn in code">
<use href="#kitchen-art-cold-coffee" />
</svg>
</div>
<div className="kitchen-meta">
<h3>
{"Cold Coffee"}
</h3>
<p className="kitchen-subtitle">
{"THICK, WITH A CHOCOLATE SWIRL"}
</p>
<AddToBag productId="cold-coffee" />
</div>
</article>
</div>
</section>
  );
}
