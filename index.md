---
layout: home
title: ""
subtitle: ""

---
<div class="hero-cinematic" id="hero">
  <!-- Background layer (sticky) -->
  <div class="hero-bg" aria-hidden="true">
    <img
      src="{{ '/assets/img/blue_hands.png' | relative_url }}"
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
      <!-- NASDAQ acronym -->
      <div class="nasdaq-reveal" id="nasdaqReveal" aria-label="NASDAQ acronym reveal">

  <div class="nasdaq-letters" role="list" aria-label="Reveal each letter">
    <button class="nasdaq-letter" type="button" data-word="Not" aria-label="N - Not">
      <span class="L">N</span>
      <span class="word">Not</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Always" aria-label="A - Always">
      <span class="L">A</span>
      <span class="word">Always</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Size" aria-label="S - Size">
      <span class="L">S</span>
      <span class="word">Size</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Driven" aria-label="D - Driven">
      <span class="L">D</span>
      <span class="word">Driven</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Across" aria-label="A - Across">
      <span class="L">A</span>
      <span class="word">Across</span>
    </button>

    <button class="nasdaq-letter" type="button" data-word="Quotes" aria-label="Q - Quotes">
      <span class="L">Q</span>
      <span class="word">Quotes</span>
    </button>
  </div>

  <div class="nasdaq-full" aria-live="polite">
    <span class="label">Decoded:</span>
    <span class="sentence" id="nasdaqSentence">
      Hover or tap each letter to discover our first intuition.
    </span>
  </div>

</div>

      <!-- end NASDAQ acronym -->

    </div>
  </div>
</div>

<script src="{{ '/assets/js/hero-fade.js' | relative_url }}"></script>
<script src="{{ '/assets/js/nasdaq-reveal.js' | relative_url }}"></script>

<!-- Logo Carousel Section -->
<div class="logo-carousel-section">
  <div class="logo-carousel-container">
    <div class="logo-carousel-track">
      <div class="logo-item">
        <div class="logo-text-white">NASDAQ</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">BlackRock</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Microsoft</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Apple</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Fidelity</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Vanguard</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Goldman Sachs</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">JPMorgan</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Amazon</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Google</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Tesla</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Meta</div>
      </div>
      <!-- Duplicate for seamless loop -->
      <div class="logo-item">
        <div class="logo-text-white">NASDAQ</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">BlackRock</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Microsoft</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Apple</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Fidelity</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Vanguard</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Goldman Sachs</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">JPMorgan</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Amazon</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Google</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Tesla</div>
      </div>
      <div class="logo-item">
        <div class="logo-text-white">Meta</div>
      </div>
    </div>
  </div>
</div>

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


<script>
  window.MathJax = {
    tex: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$']], [['\\[', '\\]']]
    }
  };
</script>
<script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" defer></script>

<!-- Flourish embed script for visualizations -->
<script src="https://public.flourish.studio/resources/embed.js"></script>
