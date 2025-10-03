// script.js - detect prefers-color-scheme and handle toggle + persist
(function(){
  const stored = (() => {
    try { return localStorage.getItem('aurnil_theme'); } catch(e){ return null; }
  })();

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const root = document.body;

  if(stored === 'dark') root.classList.add('dark');
  else if(stored === 'light') root.classList.remove('dark');
  else if(prefersDark) root.classList.add('dark');

  // Toggle buttons may appear multiple places; attach to all
  function setToggleIcons() {
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      btn.textContent = root.classList.contains('dark') ? '🌙' : '🌞';
    });
  }
  setToggleIcons();

  document.addEventListener('click', (e)=>{
    const t = e.target.closest('[data-theme-toggle]');
    if(!t) return;
    root.classList.toggle('dark');
    setToggleIcons();
    try { localStorage.setItem('aurnil_theme', root.classList.contains('dark') ? 'dark' : 'light'); } catch(e){}
  });

  // small reveal on load
  document.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
      document.querySelectorAll('.reveal').forEach((el,i)=> setTimeout(()=> el.classList.add('visible'), 180 + i*100));
    },120);
  });
})();
