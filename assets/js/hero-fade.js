document.addEventListener("DOMContentLoaded", () => {
  const hero = document.getElementById("hero");
  const steps = document.getElementById("heroSteps");
  const bg = hero?.querySelector(".hero-bg");
  if (!hero || !steps || !bg) return;

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  const onScroll = () => {
    const heroRect = hero.getBoundingClientRect();
    const stepsRect = steps.getBoundingClientRect();

    // We fade while scrolling through the "steps" area
    const start = 0; // when hero top hits viewport top
    const end = -(stepsRect.height - window.innerHeight * 0.9); // near end of steps

    // heroRect.top goes from 0 to negative as you scroll down
    const t = (heroRect.top - start) / (end - start);
    const progress = clamp(t, 0, 1);

    // Opacity: 1 -> 0 across the narrative
    const opacity = 1 - progress;
    bg.style.opacity = opacity.toFixed(3);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
});
