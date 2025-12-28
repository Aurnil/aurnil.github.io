const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

const saved = localStorage.getItem("theme");
if (saved) {
  root.setAttribute("data-theme", saved);
}

toggle?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
