// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
  themeToggle.style.transform = 'rotate(360deg)';
});

// Auto-detect theme
if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
  document.body.classList.add('dark');
} else {
  document.body.classList.add('light');
}

// Typewriter effect
const taglineText = "I write about PC hardware and AI.";
let i = 0;
const typewriter = document.getElementById('typewriter');
function type() {
  if(i < taglineText.length){
    typewriter.innerHTML += taglineText.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}
if(typewriter) type();

// Articles & blogs placeholders
const articles = [
  {title:"AI in 2026", img:"assets/images/article1.jpg", link:"#"},
  {title:"Best PC Hardware 2026", img:"assets/images/article2.jpg", link:"#"}
];
const blogs = [
  {title:"My Tech Journey", img:"assets/images/blog1.jpg", link:"#"}
];

function renderCards(containerId, items){
  const container = document.getElementById(containerId);
  if(!container) return;
  items.forEach(item=>{
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = `<img src="${item.img}" alt="${item.title}"><h3>${item.title}</h3><a href="${item.link}">Read More</a>`;
    container.appendChild(card);
  });
}

renderCards('articleCards', articles);
renderCards('blogCards', blogs);
renderCards('articleCardsPage', articles);
renderCards('blogCardsPage', blogs);
