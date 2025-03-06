/**
 * Improved Carousel functionality for Shaheer Zia Qazi portfolio website
 * Manages the certificates carousel display with proper spacing
 */

// Certificate image paths
const certificateImages = [
    "image/Sherry Certificates/Sherry Certificates_1.jpg",
    "image/Sherry Certificates/Sherry Certificates_2.jpg",
    "image/Sherry Certificates/Sherry Certificates_3.jpg",
    "image/Sherry Certificates/Sherry Certificates_4.jpg",
    "image/Sherry Certificates/Sherry Certificates_5.jpg",
    "image/Sherry Certificates/Sherry Certificates_6.jpg",
    "image/Sherry Certificates/Sherry Certificates_7.jpg",
    "image/Sherry Certificates/Sherry Certificates_8.jpg",
    "image/Sherry Certificates/Sherry Certificates_9.jpg",
    "image/Sherry Certificates/Sherry Certificates_10.jpg",
    "image/Sherry Certificates/Sherry Certificates_11.jpg",
    "image/Sherry Certificates/Sherry Certificates_12.jpg",
    "image/Sherry Certificates/Sherry Certificates_13.jpg",
    "image/Sherry Certificates/Sherry Certificates_14.jpg",
    "image/Sherry Certificates/Sherry Certificates_15.jpg"
  ];
  
  window.initCarousel = function() {
    // DOM Element
    const carouselContainer = document.getElementById('carousel');
    
    if (!carouselContainer) return;
    
    // Clear existing content
    carouselContainer.innerHTML = '';
    
    // Add carousel structure
    carouselContainer.innerHTML = `
      <div class="carousel-container">
        <button class="carousel-nav carousel-prev" aria-label="Previous certificate">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        
        <div class="carousel-items-container"></div>
        
        <button class="carousel-nav carousel-next" aria-label="Next certificate">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
      <div class="carousel-indicators"></div>
    `;
    
    const itemsContainer = carouselContainer.querySelector('.carousel-items-container');
    const indicatorsContainer = carouselContainer.querySelector('.carousel-indicators');
    const prevButton = carouselContainer.querySelector('.carousel-prev');
    const nextButton = carouselContainer.querySelector('.carousel-next');
    
    // Generate carousel items
    function generateCarouselItems() {
      // Create carousel items
      certificateImages.forEach((imgPath, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.dataset.index = index;
        
        const img = document.createElement('img');
        img.src = imgPath;
        img.alt = `Shaheer Zia Qazi Certificate ${index + 1}`;
        img.loading = "lazy";
        
        carouselItem.appendChild(img);
        itemsContainer.appendChild(carouselItem);
        
        // Create indicator
        const indicator = document.createElement('button');
        indicator.className = 'carousel-indicator';
        indicator.setAttribute('aria-label', `Go to certificate ${index + 1}`);
        indicator.dataset.index = index;
        indicatorsContainer.appendChild(indicator);
      });
    }
    
    // Set up carousel functionality
    function setupCarousel() {
      let currentIndex = 0;
      const itemCount = certificateImages.length;
      const items = itemsContainer.querySelectorAll('.carousel-item');
      const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
      
      // Function to update carousel display
      function updateCarousel() {
        // Update carousel items
        items.forEach((item, idx) => {
          const itemIndex = parseInt(item.dataset.index);
          
          // Calculate position relative to current index
          // Values range from -2 to +2 for visible items
          const distanceFromCurrent = (itemIndex - currentIndex + itemCount) % itemCount;
          let position = distanceFromCurrent;
          if (position > itemCount / 2) position -= itemCount;
          
          // Only show 5 items at a time (-2, -1, 0, 1, 2)
          const visible = position >= -2 && position <= 2;
          
          if (visible) {
            item.classList.remove('hidden');
            
            // Calculate scale (center item is largest)
            const scale = position === 0 ? 1 : 0.8;
            
            // Calculate horizontal offset (makes a fan-like arrangement)
            // Increased spacing - each item moves 35% of container width from center
            const translateX = position * 35;
            
            // Calculate z-index (center item has highest z-index)
            const zIndex = 10 - Math.abs(position);
            
            // Calculate opacity (center item is most opaque)
            const opacity = position === 0 ? 1 : 0.7;
            
            // Apply transforms
            item.style.transform = `translateX(${translateX}%) scale(${scale})`;
            item.style.zIndex = zIndex;
            item.style.opacity = opacity;
          } else {
            item.classList.add('hidden');
          }
        });
        
        // Update indicators
        indicators.forEach((indicator, index) => {
          if (index === currentIndex) {
            indicator.classList.add('active');
          } else {
            indicator.classList.remove('active');
          }
        });
      }
      
      // Add navigation button handlers
      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateCarousel();
      });
      
      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();
      });
      
      // Add indicator click handlers
      indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
          currentIndex = parseInt(indicator.dataset.index);
          updateCarousel();
        });
      });
      
      // Add item click handlers
      items.forEach((item) => {
        item.addEventListener('click', () => {
          const itemIndex = parseInt(item.dataset.index);
          
          // Only change to clicked item if it's not already the center item
          if (itemIndex !== currentIndex) {
            currentIndex = itemIndex;
            updateCarousel();
          }
        });
      });
      
      // Add keyboard navigation
      document.addEventListener('keydown', (e) => {
        // Only respond to arrow keys if carousel is in viewport
        const rect = carouselContainer.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (inViewport) {
          if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + itemCount) % itemCount;
            updateCarousel();
          } else if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % itemCount;
            updateCarousel();
          }
        }
      });
      
      // Add touch swipe support
      let startX, moveX;
      carouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      }, { passive: true });
      
      carouselContainer.addEventListener('touchmove', (e) => {
        moveX = e.touches[0].clientX;
      }, { passive: true });
      
      carouselContainer.addEventListener('touchend', () => {
        if (startX && moveX) {
          const diff = startX - moveX;
          
          if (diff > 50) { // Swipe left
            currentIndex = (currentIndex + 1) % itemCount;
            updateCarousel();
          } else if (diff < -50) { // Swipe right
            currentIndex = (currentIndex - 1 + itemCount) % itemCount;
            updateCarousel();
          }
        }
        
        // Reset values
        startX = null;
        moveX = null;
      });
      
      // Auto-play carousel
      const autoplayInterval = setInterval(() => {
        // Only auto-advance if the carousel is visible in viewport
        const rect = carouselContainer.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (inViewport) {
          currentIndex = (currentIndex + 1) % itemCount;
          updateCarousel();
        }
      }, 5000);
      
      // Stop autoplay when user interacts with carousel
      const stopAutoplay = () => {
        clearInterval(autoplayInterval);
      };
      
      prevButton.addEventListener('click', stopAutoplay);
      nextButton.addEventListener('click', stopAutoplay);
      indicators.forEach(indicator => {
        indicator.addEventListener('click', stopAutoplay);
      });
      
      // Set initial display
      updateCarousel();
    }
    
    // Add CSS for the carousel
    function addCarouselStyles() {
      const styleEl = document.createElement('style');
      styleEl.textContent = `
        #carousel {
          position: relative;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 0;
        }
        
        .carousel-container {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        .carousel-items-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .carousel-item {
          position: absolute;
          transition: all 0.5s ease;
          cursor: pointer;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
          overflow: hidden;
          background-color: white;
        }
        
        .carousel-item img {
          display: block;
          max-height: 360px;
          width: auto;
          object-fit: contain;
        }
        
        .carousel-item.hidden {
          display: none;
        }
        
        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        
        .carousel-nav:hover {
          opacity: 1;
        }
        
        .carousel-prev {
          left: 10px;
        }
        
        .carousel-next {
          right: 10px;
        }
        
        .carousel-indicators {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 15px;
        }
        
        .carousel-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: white;
          border: 1px solid #ccc;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .carousel-indicator.active {
          background-color: #3182ce;
          border-color: #3182ce;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .carousel-container {
            height: 300px;
          }
          
          .carousel-item img {
            max-height: 260px;
          }
        }
        
        @media (max-width: 480px) {
          .carousel-container {
            height: 250px;
          }
          
          .carousel-item img {
            max-height: 210px;
          }
          
          .carousel-nav {
            width: 30px;
            height: 30px;
          }
        }
      `;
      
      document.head.appendChild(styleEl);
    }
    
    // Initialize everything
    addCarouselStyles();
    generateCarouselItems();
    setupCarousel();
    
    console.log('Improved certificates carousel initialized');
  };