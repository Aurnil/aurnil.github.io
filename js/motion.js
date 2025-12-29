window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  document.body.style.backgroundPosition = `center ${scrollY * 0.15}px`;
});
