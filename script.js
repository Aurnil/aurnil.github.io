const bg = document.querySelector(".hero-bg");
const toggle = document.getElementById("themeToggle");

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  if (bg) {
    bg.style.transform = `translateY(${y * 0.25}px)`;
  }
});

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
