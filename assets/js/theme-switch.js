const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
} else {
  root.setAttribute("data-theme", prefersDark ? "dark" : "light");
}

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});
