// Theme toggle + auto-detect + save preference
(function(){
  const root = document.body;

  // Load preference
  const stored = localStorage.getItem('aurnil_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (stored === 'dark') root.classList.add('dark');
  else if (stored === 'light') root.classList.remove('dark');
  else if (prefersDark) root.classList.add('dark');

  // Update button icons/text
  function updateButtons() {
    document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
      btn.textContent = root.classList.contains('dark') ? '🌙 Dark' : '🌞 Light';
    });
  }
  updateButtons();

  // Handle toggle clicks
  document.addEventListener('click', e=>{
    const btn = e.target.closest('[data-theme-toggle]');
    if (!btn) return;

    root.classList.toggle('dark');
    updateButtons();
    localStorage.setItem('aurnil_theme', root.classList.contains('dark') ? 'dark' : 'light');
  });
})();
