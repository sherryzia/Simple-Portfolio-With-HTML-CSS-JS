/**
 * Scroll functionality for Shaheer Zia Qazi portfolio website
 * Handles smooth scrolling, scroll animations, and scroll-up button
 */

window.initScrollBehavior = function() {
    // DOM Element
    const scrollUp = document.getElementById('scroll-up');
    
    // Show scroll up button when scrolling down
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll');
      }
    });
    
    // Smooth scroll to sections functionality
    function setupSmoothScroll() {
      const sectionLinks = document.querySelectorAll('a[href^="#"]');
      
      sectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href');
          
          // Skip for links with no real target
          if (targetId === '#') return;
          
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            e.preventDefault();
            
            // Smooth scroll to target
            window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    }
    
    // Initialize ScrollReveal for scroll animations
    function initScrollReveal() {
      if (typeof ScrollReveal === 'undefined') {
        console.warn('ScrollReveal is not loaded');
        return;
      }
      
      const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400
      });
      
      // Reveal home elements
      sr.reveal('.home__perfil', { origin: 'right' });
      sr.reveal('.home__name', { origin: 'left' });
      sr.reveal('.home__info', { origin: 'bottom' });
      
      // Reveal about elements
      sr.reveal('.about__image', { origin: 'left' });
      sr.reveal('.about__info', { origin: 'right' });
      
      // Reveal services
      sr.reveal('.services__card', { interval: 100 });
      
      // Reveal projects
      sr.reveal('.projects__card', { interval: 100 });
      
      // Reveal contact elements
      sr.reveal('.contact__data', { origin: 'left' });
      sr.reveal('.contact__mail', { origin: 'right' });
      sr.reveal('.contact__social', { origin: 'bottom' });
    }
    
    // Setup smooth scrolling
    setupSmoothScroll();
    
    // Initialize scroll animations
    initScrollReveal();
    
    console.log('Scroll behavior initialized');
}