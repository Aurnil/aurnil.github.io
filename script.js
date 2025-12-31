const toggle = document.getElementById("themeToggle");

toggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// TYPEWRITER
const text = "Technology Content Specialist";
let i = 0;
const target = document.querySelector(".typewriter");

function type() {
  if (!target) return;
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
type();
