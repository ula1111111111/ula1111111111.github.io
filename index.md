---
layout: home
title: ""
subtitle: ""

---
<div class="hero-cinematic" id="hero">
  <!-- Background layer (sticky) -->
  <div class="hero-bg" aria-hidden="true">
    <img
      src="{{'/assets/img/final_hands.png' | relative_url }}"
      alt=""
      class="hero-bg-img"
      loading="eager"
    />
    <div class="hero-bg-tint"></div>
  </div>

  <!-- Foreground content (scrolls over) -->
  <div class="hero-steps" id="heroSteps">
    <div class="hero-step">
      <h1 class="hero-title">
        The Pulse of the Market
        <span>Who Sets the Rhythm?</span>
      </h1>
      <p class="hero-subtitle">
        Exploring leadership, influence, and information diffusion across NASDAQ sectors
      </p>
    </div>

    <div class="hero-step">
      <h2 class="intro-title">Who really moves the market?</h2>
      <p class="intro-text">
        Markets are not only driven by fundamentals, but by influence, leadership,
        and the diffusion of information across dominant players.
      </p>
      <blockquote class="hero-quote">
        “Prices are not only determined by information, but by the narratives that spread it.”
        <span>— Robert Shiller</span>
      </blockquote>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/hero-fade.js' | relative_url }}"></script>



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
