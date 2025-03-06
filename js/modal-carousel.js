/**
 * Project Modal Carousel functionality for Shaheer Zia Qazi portfolio website
 * Adds a carousel to the project modal for displaying multiple images per project
 */

window.initModalCarousel = function() {
    // Update the project data structure to include multiple images per project
    if (typeof window.projectsData !== 'undefined') {
      // Add multiple images to each project
      window.projectsData.forEach(project => {
        // Extract the base image that's already assigned
        const baseImage = project.imageSrc;
        
        // Create an array of images if not already present
        if (!project.images) {
          // For demonstration, create 3 variations of the same image
          // In a real implementation, you would have actual different images
          project.images = [
            baseImage,
            baseImage, // Replace with actual second image
            baseImage  // Replace with actual third image
          ];
        }
      });
    }
  
    // Modify the project modal HTML structure to include carousel
    const updateModalHTML = function() {
      const modal = document.getElementById('projectModal');
      if (!modal) return;
  
      const modalContent = modal.querySelector('.modal-content');
      if (!modalContent) return;
  
      // Get the existing image element
      const existingImg = modalContent.querySelector('.modal-img');
      const imgIndex = Array.from(modalContent.children).indexOf(existingImg);
  
      // Replace the single image with a carousel container
      if (existingImg) {
        // Create carousel container
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'modal-carousel-container';
        
        // Create carousel elements
        carouselContainer.innerHTML = `
          <div class="modal-carousel-wrapper">
            <div class="modal-carousel-slides"></div>
            <button class="modal-carousel-prev" aria-label="Previous image">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="modal-carousel-next" aria-label="Next image">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
          <div class="modal-carousel-indicators"></div>
        `;
        
        // Replace the image with the carousel
        modalContent.replaceChild(carouselContainer, existingImg);
      }
    };
  
    // Update the modal opening functionality to display the carousel
    const updateModalOpenFunction = function() {
      // Update the existing project cards click handlers
      const updateProjectCards = function() {
        const projectCards = document.querySelectorAll('.projects__card');
        const modal = document.getElementById('projectModal');
        
        if (!modal || !projectCards.length) return;
        
        const modalTitle = modal.querySelector('.modal-title');
        const modalDescription = modal.querySelector('.modal-description');
        const slidesContainer = modal.querySelector('.modal-carousel-slides');
        const indicatorsContainer = modal.querySelector('.modal-carousel-indicators');
        
        projectCards.forEach((card, index) => {
          // Remove any existing click handlers first
          const newCard = card.cloneNode(true);
          card.parentNode.replaceChild(newCard, card);
          
          newCard.addEventListener('click', (e) => {
            // Don't open modal if clicking on links
            if (e.target.tagName === 'A' || e.target.closest('a')) {
              return;
            }
            
            // Find the corresponding project data
            const project = window.projectsData[index];
            if (!project) return;
            
            // Update modal content
            modalTitle.innerText = project.title;
            modalDescription.innerText = project.detailedDescription;
            
            // Clear previous carousel slides and indicators
            slidesContainer.innerHTML = '';
            indicatorsContainer.innerHTML = '';
            
            // Add slides for each image
            project.images.forEach((imgSrc, imgIndex) => {
              // Create slide
              const slide = document.createElement('div');
              slide.className = `modal-carousel-slide${imgIndex === 0 ? ' active' : ''}`;
              
              const img = document.createElement('img');
              img.src = imgSrc;
              img.alt = `${project.title} - Image ${imgIndex + 1}`;
              img.className = 'modal-carousel-img';
              
              slide.appendChild(img);
              slidesContainer.appendChild(slide);
              
              // Create indicator
              const indicator = document.createElement('button');
              indicator.className = `modal-carousel-indicator${imgIndex === 0 ? ' active' : ''}`;
              indicator.setAttribute('data-slide-index', imgIndex);
              indicator.setAttribute('aria-label', `Go to image ${imgIndex + 1}`);
              
              indicator.addEventListener('click', () => {
                showSlide(imgIndex);
              });
              
              indicatorsContainer.appendChild(indicator);
            });
            
            // Show the modal
            modal.style.display = 'block';
            
            // Initialize the carousel controls
            initCarouselControls();
          });
        });
      };
      
      // Function to handle carousel navigation
      const initCarouselControls = function() {
        const modal = document.getElementById('projectModal');
        if (!modal) return;
        
        const prevBtn = modal.querySelector('.modal-carousel-prev');
        const nextBtn = modal.querySelector('.modal-carousel-next');
        const slides = modal.querySelectorAll('.modal-carousel-slide');
        
        if (!slides.length) return;
        
        let currentIndex = 0;
        
        // Function to show a specific slide
        window.showSlide = function(index) {
          if (index < 0) index = slides.length - 1;
          if (index >= slides.length) index = 0;
          
          // Update slides
          slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
          });
          
          // Update indicators
          const indicators = modal.querySelectorAll('.modal-carousel-indicator');
          indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
          });
          
          currentIndex = index;
        };
        
        // Add event listeners to buttons
        if (prevBtn) {
          prevBtn.addEventListener('click', () => {
            showSlide(currentIndex - 1);
          });
        }
        
        if (nextBtn) {
          nextBtn.addEventListener('click', () => {
            showSlide(currentIndex + 1);
          });
        }
        
        // Add keyboard navigation
        modal.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowLeft') {
            showSlide(currentIndex - 1);
          } else if (e.key === 'ArrowRight') {
            showSlide(currentIndex + 1);
          }
        });
        
        // Auto-advance the carousel every 5 seconds
        let autoplayTimer = setInterval(() => {
          if (modal.style.display === 'block') {
            showSlide(currentIndex + 1);
          }
        }, 5000);
        
        // Clear autoplay when modal is closed
        const closeBtn = modal.querySelector('.close');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            clearInterval(autoplayTimer);
          });
        }
        
        // Clear autoplay when clicking outside modal
        window.addEventListener('click', (event) => {
          if (event.target === modal) {
            clearInterval(autoplayTimer);
          }
        });
      };
      
      // Initialize the project cards
      updateProjectCards();
    };
  
    // Update the modal HTML structure
    updateModalHTML();
    
    // Update the modal opening functionality
    updateModalOpenFunction();
    
    console.log('Project modal carousel initialized');
  };
  
  // Add carousel CSS
  function addModalCarouselStyles() {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      /* Modal Carousel Styles */
      .modal-carousel-container {
        width: 100%;
        margin-bottom: 15px;
      }
      
      .modal-carousel-wrapper {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        margin-bottom: 10px;
      }
      
      .modal-carousel-slides {
        position: relative;
        height: 400px;
      }
      
      .modal-carousel-slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .modal-carousel-slide.active {
        opacity: 1;
        z-index: 1;
      }
      
      .modal-carousel-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
      
      .modal-carousel-prev,
      .modal-carousel-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        width: 40px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.7;
        transition: opacity 0.3s;
      }
      
      .modal-carousel-prev:hover,
      .modal-carousel-next:hover {
        opacity: 1;
      }
      
      .modal-carousel-prev {
        left: 10px;
      }
      
      .modal-carousel-next {
        right: 10px;
      }
      
      .modal-carousel-indicators {
        display: flex;
        justify-content: center;
        gap: 8px;
        margin-bottom: 10px;
      }
      
      .modal-carousel-indicator {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #ddd;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;
      }
      
      .modal-carousel-indicator.active {
        background-color: #3182ce;
      }
      
      /* Responsive adjustments */
      @media (max-width: 768px) {
        .modal-carousel-slides {
          height: 300px;
        }
      }
      
      @media (max-width: 480px) {
        .modal-carousel-slides {
          height: 200px;
        }
        
        .modal-carousel-prev,
        .modal-carousel-next {
          width: 30px;
          height: 30px;
        }
      }
    `;
    
    document.head.appendChild(styleEl);
  }
  
  // Initialize everything when DOM is loaded
  document.addEventListener('DOMContentLoaded', function() {
    addModalCarouselStyles();
    if (typeof window.initModalCarousel === 'function') {
      window.initModalCarousel();
    }
    
    console.log('Modal carousel system ready');
  });