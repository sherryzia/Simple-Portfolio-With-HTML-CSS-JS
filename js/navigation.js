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
    
    // Show the menu when the toggle button is clicked
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }
    
    // Hide the menu when the close button is clicked
    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
    
    // Add click handler to all navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Close the menu when a link is clicked (mobile view)
        navMenu.classList.remove('show-menu');
        
        // Set active link
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
            const sectionTop = section.offsetTop - 50;
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