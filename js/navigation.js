/**
 * Navigation functionality for Shaheer Zia Qazi portfolio website
 * Handles mobile menu toggle, section navigation, and active link highlighting
 */

window.initNavigation = function() {
    // DOM Elements
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.getElementById('header');
    
    const compactNavigation = window.matchMedia('(max-width: 1279px)');

    function setMenuOpen(open, restoreFocus = false) {
      const isOpen = compactNavigation.matches && open;
      navMenu.classList.toggle('show-menu', isOpen);
      navMenu.inert = compactNavigation.matches && !isOpen;
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      if (restoreFocus) navToggle.focus();
    }

    navToggle.addEventListener('click', () => {
      setMenuOpen(!navMenu.classList.contains('show-menu'));
    });
    navClose.addEventListener('click', () => setMenuOpen(false, true));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        setMenuOpen(false, true);
      }
    });
    document.addEventListener('click', event => {
      if (!header.contains(event.target)) setMenuOpen(false);
    });
    compactNavigation.addEventListener('change', () => setMenuOpen(false));
    setMenuOpen(false);

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        setMenuOpen(false);
        setActiveLink(link);
      });
    });

    // Function to set the active link based on scroll position
    function setActiveLink(clickedLink = null) {
      // If a link was clicked, remove active class from all links and add to clicked link
      if (clickedLink) {
        navLinks.forEach(link => link.classList.remove('active-link'));
        clickedLink.classList.add('active-link');
        return;
      }
      
      // Otherwise determine active link based on scroll position
      const scrollY = window.pageYOffset;
      
      navLinks.forEach(link => {
        const sectionId = link.getAttribute('href');
        if (sectionId.startsWith('#')) {
          const section = document.querySelector(sectionId);
          if (section) {
            const sectionTop = section.offsetTop - header.getBoundingClientRect().bottom - 24;
            const sectionHeight = section.offsetHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              link.classList.add('active-link');
            } else {
              link.classList.remove('active-link');
            }
          }
        }
      });
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
      setActiveLink();
      
      // Add shadow to header when scrolling
      const scrollY = window.pageYOffset;
      if (scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    });
    
    // Set initial active link based on current position
    setActiveLink();
    
    console.log('Navigation initialized');
}