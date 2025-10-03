// script.js — robust theme toggle + auto-detect + reveal
(function(){
  const THEME_KEY = 'aurnil_theme';
  const body = document.body;
  const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');

  function safeRead() {
    try { return localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function safeWrite(v) {
    try { localStorage.setItem(THEME_KEY, v); } catch (e) {}
  }
  function systemPref() {
    return (mq && mq.matches) ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    body.classList.toggle('dark', theme === 'dark');
    updateToggles();
  }

  // 1) initial theme: stored -> system -> light
  const stored = safeRead();
  if (stored === 'dark' || stored === 'light') applyTheme(stored);
  else applyTheme(systemPref());

  // 2) respond to system changes only when user hasn't chosen
  if (mq) {
    if (mq.addEventListener) {
      mq.addEventListener('change', (e) => { if (!safeRead()) applyTheme(e.matches ? 'dark' : 'light'); });
    } else if (mq.addListener) { // older browsers
      mq.addListener((e) => { if (!safeRead()) applyTheme(e.matches ? 'dark' : 'light'); });
    }
  }

  // helpers to find toggle elements (supports multiple selector types)
  function getToggles() {
    return Array.from(document.querySelectorAll('[data-theme-toggle], #toggle-theme, .toggle, .theme-toggle'));
  }

  // update icons + aria state for toggles
  function updateToggles() {
    const isDark = body.classList.contains('dark');
    getToggles().forEach(btn => {
      // set icon for button-like elements (leave complex inner HTML alone)
      if (btn.tagName === 'BUTTON' || btn.tagName === 'A' || btn.getAttribute('role') === 'button') {
        btn.textContent = isDark ? '🌙' : '🌞';
      }
      btn.setAttribute('aria-pressed', String(isDark));
    });
  }

  // ensure toggles reflect the state once DOM is ready (and update now if possible)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateToggles);
  } else updateToggles();

  // delegated click listener for any toggle selector
  document.addEventListener('click', (evt) => {
    const t = evt.target.closest('[data-theme-toggle], #toggle-theme, .toggle, .theme-toggle');
    if (!t) return;
    const nowDark = body.classList.toggle('dark');
    safeWrite(nowDark ? 'dark' : 'light');
    updateToggles();
  });

  // Optional: small reveal animation (keeps your existing behavior)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        document.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), 180 + i * 100));
      }, 120);
    });
  } else {
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), 180 + i * 100));
    }, 120);
  }

  // small public API (optional)
  window.aurnilTheme = {
    set: (v) => { if (v === 'dark' || v === 'light') { safeWrite(v); applyTheme(v); } },
    clear: () => { try { localStorage.removeItem(THEME_KEY); } catch (e) {} applyTheme(systemPref()); }
  };
})();
