// TYPEWRITER
const text = "Technology Content Specialist";
let i = 0;
const speed = 80;
const target = document.getElementById("typewriter");

function type() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
}
type();

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("active");
  });
});

// PARALLAX FLOAT WORDS
const words = document.querySelectorAll(".floating-words span");
window.addEventListener("scroll", () => {
  const y = window.scrollY;
  words.forEach((w, i) => {
    w.style.transform = `translateY(${-(y * 0.15 * (i+1))}px)`;
  });
});
