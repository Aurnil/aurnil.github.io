const layers=document.querySelectorAll('.bg-layer');
window.addEventListener('scroll',()=>{
const y=window.scrollY;
layers[0].style.transform=`translateY(${y*0.15}px)`;
layers[1].style.transform=`translateY(${y*0.3}px)`;
});
