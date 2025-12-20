document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("nasdaqReveal");
  const sentenceEl = document.getElementById("nasdaqSentence");
  if (!root || !sentenceEl) return;

  const letters = Array.from(root.querySelectorAll(".nasdaq-letter"));

  const buildSentence = () => {
    const chosen = letters
      .filter(btn => btn.classList.contains("is-open"))
      .map(btn => btn.dataset.word);

    sentenceEl.textContent = chosen.length
      ? chosen.join(" ")
      : "Hover or tap each letter to reveal the phrase.";
  };

  letters.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("is-open");
      buildSentence();
    });
  });

  buildSentence();
});

