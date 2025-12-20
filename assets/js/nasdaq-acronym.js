document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".nasdaq-acronym");
  if (!box) return;

  const toggle = () => box.classList.toggle("is-open");

  box.addEventListener("click", toggle);
  box.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
});
