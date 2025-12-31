window.addEventListener("scroll", () => {
  document.querySelectorAll("[data-depth]").forEach(el => {
    el.style.transform =
      `translateY(${window.scrollY * el.dataset.depth}px)`;
  });
});
