// script.js — theme manager + reveal animations
(function(){
  const THEME_KEY = 'aurnil_theme';
  const root = document.documentElement;
  const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  function safeRead(){ try { return localStorage.getItem(THEME_KEY); } catch(e){ return null; } }
  function safeWrite(v){ try { localStorage.setItem(THEME_KEY, v); } catch(e){} }

  function systemPref(){ return (mq && mq.matches) ? 'dark' : 'light'; }

  function applyTheme(t){
    root.classList.toggle('dark', t === 'dark');
    updateToggles();
  }

  // initial: stored -> system -> light
  const stored = safeRead();
  if(stored === 'dark' || stored === 'light') applyTheme(stored);
  else applyTheme(systemPref());

  // if system changes and user hasn't chosen, follow system
  if(mq){
    if(mq.addEventListener) mq.addEventListener('change', (e) => { if(!safeRead()) applyTheme(e.matches ? 'dark' : 'light'); });
    else if(mq.addListener) mq.addListener((e) => { if(!safeRead()) applyTheme(e.matches ? 'dark' : 'light'); });
  }

  // find toggles anywhere
  function getToggles(){ return Array.from(document.querySelectorAll('[data-theme-toggle], #toggle-theme, .toggle, .theme-toggle')); }

  function updateToggles(){
    const isDark = root.classList.contains('dark');
    getToggles().forEach(btn => {
      if(btn.tagName === 'BUTTON' || btn.tagName === 'A' || btn.getAttribute('role') === 'button'){
        btn.textContent = isDark ? '🌙' : '🌞';
      }
      btn.setAttribute('aria-pressed', String(isDark));
    });
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', updateToggles);
  else updateToggles();

  // delegated click for toggles
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-theme-toggle], #toggle-theme, .toggle, .theme-toggle');
    if(!t) return;
    const nowDark = !root.classList.contains('dark');
    applyTheme(nowDark ? 'dark' : 'light');
    safeWrite(nowDark ? 'dark' : 'light');
  });

  // reveal on load (stagger)
  function revealOnLoad(){
    document.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(()=> el.classList.add('visible'), 160 + i*90);
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', revealOnLoad);
  else revealOnLoad();

  // tiny API
  window.aurnilTheme = {
    set: v => { if(v === 'dark' || v === 'light') { safeWrite(v); applyTheme(v); } },
    clear: () => { try { localStorage.removeItem(THEME_KEY); } catch(e){} applyTheme(systemPref()); }
  };
})();
