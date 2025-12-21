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
  </div>
</div>

<script src="{{ '/assets/js/hero-fade.js' | relative_url }}"></script>
<script src="{{ '/assets/js/nasdaq-reveal.js' | relative_url }}"></script>

<!-- Logo Carousel Section -->
<div class="logo-carousel-section">
  <div class="logo-carousel-container">
    <div class="logo-carousel-track">
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/nasdaq.png' | relative_url }}" alt="NASDAQ" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/blackrock.png' | relative_url }}" alt="BlackRock" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/microsoft.png' | relative_url }}" alt="Microsoft" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/apple.png' | relative_url }}" alt="Apple" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/fidelity.png' | relative_url }}" alt="Fidelity" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/vanguard.png' | relative_url }}" alt="Vanguard" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/goldman-sachs.png' | relative_url }}" alt="Goldman Sachs" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/jpmorgan.png' | relative_url }}" alt="JPMorgan" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/amazon.png' | relative_url }}" alt="Amazon" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/google.png' | relative_url }}" alt="Google" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/paypal.png' | relative_url }}" alt="PayPal" class="logo-img">
      </div>
      <!-- Duplicate for seamless loop -->
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/nasdaq.png' | relative_url }}" alt="NASDAQ" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/blackrock.png' | relative_url }}" alt="BlackRock" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/microsoft.png' | relative_url }}" alt="Microsoft" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/apple.png' | relative_url }}" alt="Apple" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/fidelity.png' | relative_url }}" alt="Fidelity" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/vanguard.png' | relative_url }}" alt="Vanguard" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/goldman-sachs.png' | relative_url }}" alt="Goldman Sachs" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/jpmorgan.png' | relative_url }}" alt="JPMorgan" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/amazon.png' | relative_url }}" alt="Amazon" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/google.png' | relative_url }}" alt="Google" class="logo-img">
      </div>
      <div class="logo-item">
        <img src="{{ '/assets/img/logos/paypal.png' | relative_url }}" alt="PayPal" class="logo-img">
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
