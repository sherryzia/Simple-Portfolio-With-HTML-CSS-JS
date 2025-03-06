/**
 * Theme functionality for Shaheer Zia Qazi portfolio website
 * Handles light/dark theme toggling and persistence
 */

window.initTheme = function() {
    // DOM Element
    const themeButton = document.getElementById('theme-button');
    
    // Check for saved theme preference
    let selectedTheme = localStorage.getItem('selected-theme');
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If no saved preference, use system preference
    if (!selectedTheme) {
      selectedTheme = userPrefersDark ? 'dark' : 'light';
    }
    
    // Functions to get current theme
    const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains('ri-moon-line') ? 'moon' : 'sun';
    
    // Apply saved theme on page load
    if (selectedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeButton.classList.replace('ri-moon-line', 'ri-sun-line');
    }
    
    // Add click handler to theme button
    if (themeButton) {
      themeButton.addEventListener('click', () => {
        // Toggle the dark / icon theme
        document.body.classList.toggle('dark-theme');
        themeButton.classList.toggle('ri-moon-line');
        themeButton.classList.toggle('ri-sun-line');
        
        // Save the current theme preference
        localStorage.setItem('selected-theme', getCurrentTheme());
      });
    }
    
    console.log('Theme system initialized');
}