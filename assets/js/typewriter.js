const text = [
  "Writing about PC hardware.",
  "Exploring artificial intelligence.",
  "Explaining technology clearly."
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  if (!isDeleting && j <= text[i].length) {
    current = text[i].slice(0, j++);
  } else if (isDeleting && j >= 0) {
    current = text[i].slice(0, j--);
  }

  el.textContent = current;

  if (j === text[i].length) isDeleting = true;
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();
