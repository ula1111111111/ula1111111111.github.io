---
layout: home
title: ""
subtitle: ""

---
<div class="hero-overlay">
  <div class="hero-overlay-inner">
    <h1 class="hero-overlay-title">The Pulse of the Market: Who Sets the Rhythm?</h1>

    <svg class="hero-overlay-graphic" viewBox="0 0 520 180" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.2">
        <line x1="20" y1="150" x2="500" y2="150" stroke="#ff4d88" stroke-width="2"/>
        <line x1="20" y1="105" x2="500" y2="105" stroke="#ff4d88" stroke-width="2"/>
        <line x1="20" y1="60"  x2="500" y2="60"  stroke="#ff4d88" stroke-width="2"/>
      </g>

      <polyline
        points="25,135 95,118 165,128 235,85 305,98 375,62 445,78 495,40"
        fill="none" stroke="#ff4d88" stroke-width="6"
        stroke-linecap="round" stroke-linejoin="round"
      />

      <polyline
        points="25,150 95,142 165,120 235,128 305,92 375,104 445,70 495,90"
        fill="none" stroke="#8ecae6" stroke-width="6"
        stroke-dasharray="8 8" stroke-linecap="round" stroke-linejoin="round"
      />

      <defs>
        <marker id="arrowhead-small" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#ff4d88"></polygon>
        </marker>
      </defs>

      <line x1="215" y1="118" x2="240" y2="108" stroke="#ff4d88" stroke-width="3" marker-end="url(#arrowhead-small)"/>
      <line x1="355" y1="90"  x2="380" y2="78"  stroke="#ff4d88" stroke-width="3" marker-end="url(#arrowhead-small)"/>
    </svg>
  </div>
</div>


<h2 id="content">Introduction</h2>


{% include_relative content.md %}

---

<h2 id="exploring">Exploring The Market</h2>

{% include_relative exploring.md %}

---

<h2 id="hierarchizing">Hierarchizing Market Participants</h2>

{% include_relative hierarchizing.md %}

---

<h2 id="analysis">Analysis of Stock Leadership</h2>

{% include_relative analysis.md %}


---

<h2 id="etfsvsequallyweighted">ETFs vs Equal Weighted Portfolios</h2>

{% include_relative etfsvsequallyweighted.md %}
