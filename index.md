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

<!-- Logo Carousel Section with Christmas/New Year Effects -->
<div class="logo-carousel-section" id="logoCarousel">
  <canvas id="particleCanvas" class="particle-canvas"></canvas>
  <div class="snowflakes"></div>
  <div class="logo-carousel-container">
    <div class="logo-carousel-track" id="logoTrack">
      <div class="logo-item" data-company="NASDAQ">
        <div class="logo-text-white">NASDAQ</div>
      </div>
      <div class="logo-item" data-company="BlackRock">
        <div class="logo-text-white">BlackRock</div>
      </div>
      <div class="logo-item" data-company="Microsoft">
        <div class="logo-text-white">Microsoft</div>
      </div>
      <div class="logo-item" data-company="Apple">
        <div class="logo-text-white">Apple</div>
      </div>
      <div class="logo-item" data-company="Fidelity">
        <div class="logo-text-white">Fidelity</div>
      </div>
      <div class="logo-item" data-company="Vanguard">
        <div class="logo-text-white">Vanguard</div>
      </div>
      <div class="logo-item" data-company="Goldman Sachs">
        <div class="logo-text-white">Goldman Sachs</div>
      </div>
      <div class="logo-item" data-company="JPMorgan">
        <div class="logo-text-white">JPMorgan</div>
      </div>
      <div class="logo-item" data-company="Amazon">
        <div class="logo-text-white">Amazon</div>
      </div>
      <div class="logo-item" data-company="Google">
        <div class="logo-text-white">Google</div>
      </div>
      <div class="logo-item" data-company="Tesla">
        <div class="logo-text-white">Tesla</div>
      </div>
      <div class="logo-item" data-company="Meta">
        <div class="logo-text-white">Meta</div>
      </div>
      <!-- Duplicate for seamless loop -->
      <div class="logo-item" data-company="NASDAQ">
        <div class="logo-text-white">NASDAQ</div>
      </div>
      <div class="logo-item" data-company="BlackRock">
        <div class="logo-text-white">BlackRock</div>
      </div>
      <div class="logo-item" data-company="Microsoft">
        <div class="logo-text-white">Microsoft</div>
      </div>
      <div class="logo-item" data-company="Apple">
        <div class="logo-text-white">Apple</div>
      </div>
      <div class="logo-item" data-company="Fidelity">
        <div class="logo-text-white">Fidelity</div>
      </div>
      <div class="logo-item" data-company="Vanguard">
        <div class="logo-text-white">Vanguard</div>
      </div>
      <div class="logo-item" data-company="Goldman Sachs">
        <div class="logo-text-white">Goldman Sachs</div>
      </div>
      <div class="logo-item" data-company="JPMorgan">
        <div class="logo-text-white">JPMorgan</div>
      </div>
      <div class="logo-item" data-company="Amazon">
        <div class="logo-text-white">Amazon</div>
      </div>
      <div class="logo-item" data-company="Google">
        <div class="logo-text-white">Google</div>
      </div>
      <div class="logo-item" data-company="Tesla">
        <div class="logo-text-white">Tesla</div>
      </div>
      <div class="logo-item" data-company="Meta">
        <div class="logo-text-white">Meta</div>
      </div>
    </div>
  </div>
</div>

<script>
// Interactive Logo Carousel with Christmas/New Year Effects
(function() {
  const carousel = document.getElementById('logoCarousel');
  const canvas = document.getElementById('particleCanvas');
  const track = document.getElementById('logoTrack');
  
  if (!canvas || !track || !carousel) return;
  
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = carousel.offsetHeight;
  
  // Christmas/New Year particles (snowflakes and stars)
  const particles = [];
  const particleCount = 40;
  const colors = ['#ffffff', '#ffd700', '#ff6b9d', '#c9f0ff'];
  
  class Particle {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 4 + 2;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.speedY = Math.random() * 1 + 0.5;
      this.opacity = Math.random() * 0.6 + 0.4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.type = Math.random() > 0.7 ? 'star' : 'snow';
      this.rotation = Math.random() * Math.PI * 2;
      this.rotationSpeed = (Math.random() - 0.5) * 0.1;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.rotation += this.rotationSpeed;
      
      if (this.x < 0) this.x = canvas.width;
      if (this.x > canvas.width) this.x = 0;
      if (this.y > canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }
    }
    
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.globalAlpha = this.opacity;
      
      if (this.type === 'star') {
        // Draw star
        ctx.fillStyle = this.color;
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
          const x = Math.cos(angle) * this.size;
          const y = Math.sin(angle) * this.size;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      } else {
        // Draw snowflake
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1;
        for (let i = 0; i < 6; i++) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(0, this.size);
          ctx.stroke();
          ctx.rotate(Math.PI / 3);
        }
      }
      
      ctx.restore();
    }
  }
  
  // Initialize particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
  
  // Interactive hover effects with sparkles
  const logoItems = document.querySelectorAll('.logo-item');
  logoItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.25) translateY(-8px)';
      this.style.filter = 'drop-shadow(0 10px 20px rgba(255,215,0,0.6))';
      
      // Create sparkle burst effect
      const rect = this.getBoundingClientRect();
      const carouselRect = carousel.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - carouselRect.left;
      const y = rect.top + rect.height / 2 - carouselRect.top;
      
      // Add temporary sparkle particles
      for (let i = 0; i < 8; i++) {
        const p = new Particle();
        p.x = x;
        p.y = y;
        p.speedX = (Math.random() - 0.5) * 3;
        p.speedY = (Math.random() - 0.5) * 3;
        p.size = Math.random() * 3 + 2;
        p.opacity = 1;
        p.color = '#ffd700';
        p.type = 'star';
        particles.push(p);
        
        setTimeout(() => {
          const index = particles.indexOf(p);
          if (index > -1) particles.splice(index, 1);
        }, 1500);
      }
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1) translateY(0)';
      this.style.filter = 'drop-shadow(0 2px 4px rgba(255,255,255,0.2))';
    });
  });
  
  // Resize handler
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = carousel.offsetHeight;
  });
})();
</script>

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
