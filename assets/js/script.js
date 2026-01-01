// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const onScroll = () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('active');
    }
  });
};
window.addEventListener('scroll', onScroll);
onScroll();

// Parallax
const bg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  if (bg) bg.style.setProperty('--parallax', `${window.scrollY * 0.2}px`);
});
