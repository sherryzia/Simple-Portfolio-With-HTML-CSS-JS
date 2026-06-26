/**
 * Theme functionality for Shaheer Zia Qazi portfolio website
 * Handles light/dark theme toggling and persistence
 */

window.initTheme = function() {
  const themeButton = document.getElementById('theme-button');
  const themeIcon = themeButton ? themeButton.querySelector('i') : null;

  if (!themeButton || !themeIcon) return;

  let selectedTheme = localStorage.getItem('selected-theme');
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (!selectedTheme) {
    selectedTheme = userPrefersDark ? 'dark' : 'light';
  }

  const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';

  const setTheme = (theme) => {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-theme', isDark);
    themeIcon.classList.toggle('ri-moon-line', !isDark);
    themeIcon.classList.toggle('ri-sun-line', isDark);
    themeButton.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  };

  setTheme(selectedTheme);

  themeButton.addEventListener('click', () => {
    const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('selected-theme', nextTheme);
  });

  console.log('Theme system initialized');
};
