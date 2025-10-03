// Check system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Load saved preference if exists
let theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.body.classList.toggle('dark', theme === 'dark');

// Toggle button
const toggleBtn = document.getElementById('theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const newTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  });
}
