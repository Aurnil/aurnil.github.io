// Parallax
const layers=document.querySelectorAll('.bg-layer');
window.addEventListener('scroll',()=>{
const y=window.scrollY;
layers[0].style.transform=`translateY(${y*0.15}px)`;
layers[1].style.transform=`translateY(${y*0.3}px)`;
});

// Scroll reveal
const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting)e.target.classList.add('visible');
});
},{threshold:.15});
reveals.forEach(r=>observer.observe(r));

// Theme toggle animation (logic-ready)
const toggle=document.getElementById('themeToggle');
toggle.addEventListener('click',()=>{
toggle.classList.toggle('rotate');
});
