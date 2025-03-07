/**
 * Projects functionality for Shaheer Zia Qazi portfolio website
 * Manages project cards, modal interactions, and dynamic content loading
 */

// Project data array - now with support for multiple images
const projectsData = [
  {
    title: "Interactive Speech Therapist",
    subtitle: "Android App",
    imageSrc: "image/feature_graphics/ist.jpg",
    description: "IST is a cutting-edge app for speech therapy, leveraging speech recognition to identify stuttering and offering tailored exercises like breathing techniques and yoga.",
    detailedDescription: "Interactive Speech Therapist (IST) is an Android app designed to assist individuals with speech therapy using speech recognition technology. It includes AI chatbot support, a community forum, and resources such as articles and videos. Users can find nearby therapists and provide feedback via Firebase for secure access.",
    githubLink: "",
    liveLink: "",
    images: [
      "image/feature_graphics/ist.jpg",
      "image/ist.jpg", // Replace with additional screenshots
      // "image/ist.jpg"  // Replace with additional screenshots
    ]
  },
{
  title: "Quran Companion",
  subtitle: "Android App",
  imageSrc: "image/feature_graphics/QuranApp.png",
  description: "Quran Companion is a beautifully designed Islamic app that provides a seamless Quran reading experience along with powerful features such as prayer times, Qibla direction, duas, and personalized bookmarks.",
  detailedDescription: "Quran Companion is a comprehensive Islamic application designed to enhance your Quranic journey. It offers a user-friendly interface for reading the Quran, along with features like audio recitation, translation, and tafsir. The app also includes daily prayer times, Qibla direction, a collection of essential duas, and a bookmark system for saving favorite verses. With a focus on simplicity and accessibility, Quran Companion is the perfect tool for anyone looking to stay connected with the Quran in their daily life.",
  githubLink: "",
  liveLink: "",
  images: [
    "image/feature_graphics/QuranApp.png",
    // "image/feature_graphics/QuranApp.png",
    // "image/feature_graphics/QuranApp.png",
    // "image/feature_graphics/QuranApp.png",
  ]
},

{
  title: "Grato App",
  subtitle: "Android/iOS App",
  imageSrc: "image/feature_graphics/GratoApp.png",
  description: "Grato is a modern recognition and appreciation platform designed to foster workplace culture by enabling employees to give and receive recognition seamlessly.",
  detailedDescription: "Grato is a comprehensive employee recognition app that empowers organizations to cultivate a positive work environment. It allows employees to appreciate peers, track recognitions, and redeem rewards. Featuring a structured points system, real-time notifications, and analytics, Grato enhances engagement and motivation within teams. The platform integrates with existing HR and communication tools, ensuring a seamless experience. With its intuitive design and social elements, Grato strengthens workplace connections and reinforces company values through meaningful recognition.",
  githubLink: "",
  liveLink: "",
  images: [
    "image/feature_graphics/GratoApp.png",
    // "image/feature_graphics/GratoApp.png",
    // "image/feature_graphics/GratoApp.png",
    // "image/feature_graphics/GratoApp.png",
  ]
},
  
  {
    title: "SwimStrive App",
    subtitle: "Android/iOS App",
    imageSrc: "image/feature_graphics/SwimStrive.png",
    description: "SwimStrive is a revolutionary swimming training and coaching app designed to enhance athlete performance through AI-driven analytics, real-time feedback, and personalized training plans.",
    detailedDescription: "SwimStrive is a state-of-the-art mobile application built for swimmers and coaches to track progress, analyze swim techniques, and optimize performance. The app features real-time stroke analysis, personalized workout plans, video feedback, and AI-powered performance insights. It enables athletes to refine their techniques, improve endurance, and set structured training goals. With cloud-based data storage and community-driven challenges, SwimStrive fosters a competitive yet collaborative environment to push athletes to their best potential.",
    githubLink: "",
    liveLink: "",
    images: [
      "image/feature_graphics/SwimStrive.png",
      // "image/feature_graphics/SwimStrive.png",
      // "image/feature_graphics/SwimStrive.png",
      // "image/feature_graphics/SwimStrive.png"
    ]
},

  {
    title: "FIR Management System",
    subtitle: "Website",
    imageSrc: "image/fir.png",
    description: "Our FIR Management System streamlines law enforcement operations by digitizing the process of registering and tracking First Information Reports (FIRs).",
    detailedDescription: "The FIR Management System is a web-based application that helps digitize FIR registration and tracking for law enforcement agencies. It includes role-specific panels for officers and facilitates transparency and accountability.",
    githubLink: "",
    liveLink: "",
    images: [
      "image/fir.png",
      // "image/fir.png", // Replace with additional screenshots
      // "image/fir.png"  // Replace with additional screenshots
    ]
  },
  {
    title: "Affirmation App",
    subtitle: "Flutter App",
    imageSrc: "image/feature_graphics/OcularVision.png",
    description: "A motivational tool that delivers personalized daily affirmations to uplift and inspire users, featuring reminders, favorite affirmations, and an AI chatbot.",
    detailedDescription: "The Affirmation App provides users with daily motivational affirmations, allowing them to save favorites, set reminders, and interact with an AI-powered chatbot for encouragement.",
    githubLink: "",
    liveLink: "",
    images: [
      "image/feature_graphics/OcularVision.png",
      "image/affirmation.jpg", // Replace with additional screenshots
      // "image/affirmation.jpg"  // Replace with additional screenshots
    ]
  },
  {
    title: "Music Academy Website",
    subtitle: "Next JS",
    imageSrc: "image/Music Website.png",
    description: "A platform offering various music courses for aspiring musicians, built with Next.js for a seamless and engaging user experience.",
    detailedDescription: "The Music Academy Website is a Next.js-based platform featuring a clean UI, dynamic navigation, and music courses like Guitar Fundamentals, Vocal Techniques, and Music Production.",
    githubLink: "https://github.com/sherryzia/MusicAcademyWebsiteUsingNextJs",
    liveLink: "https://sherrymusicacademy-next.vercel.app/",
    images: [
      "image/Music Website.png",
      // "image/Music Website.png", // Replace with additional screenshots
      // "image/Music Website.png"  // Replace with additional screenshots
    ]
  },
  {
    title: "Rock Paper Scissors Game",
    subtitle: "Website",
    imageSrc: "image/rps.png",
    description: "A fun online version of Rock Paper Scissors where users can challenge the computer with engaging animations and sound effects.",
    detailedDescription: "This web-based game allows users to play Rock Paper Scissors against a computer, featuring an intuitive UI, responsive design, and real-time score tracking.",
    githubLink: "https://github.com/sherryzia/rps.github.io",
    liveLink: "https://sherryzia.github.io/rps.github.io/",
    images: [
      "image/rps.png",
      // "image/rps.png", // Replace with additional screenshots
      // "image/rps.png"  // Replace with additional screenshots
    ]
  },
  {
    title: "Customizable Landing Page Project",
    subtitle: "Website",
    imageSrc: "image/landing.png",
    description: "A modern, user-friendly university website built with HTML5, CSS3, and JavaScript, incorporating responsive design principles.",
    detailedDescription: "A multi-page responsive university website built with HTML, CSS, and JavaScript. It features an interactive layout and optimal display across devices.",
    githubLink: "https://github.com/sherryzia/Landing-Page",
    liveLink: "",
    images: [
      "image/landing.png",
      // "image/landing.png", // Replace with additional screenshots
      // "image/landing.png"  // Replace with additional screenshots
    ]
  },
  {
    title: "Portfolio Website",
    subtitle: "Personal Website",
    imageSrc: "image/portfolio.png",
    description: "My professional portfolio showcasing my skills, experience, and projects, built with HTML, CSS, and JavaScript.",
    detailedDescription: "A modern portfolio website featuring sections like About, Skills, Projects, and Contact, designed to showcase my work and expertise in software development.",
    githubLink: "https://github.com/sherryzia/portfolio",
    liveLink: "https://shaheerziaportfolio.vercel.app/",
    images: [
      "image/portfolio.png",
      // "image/portfolio.png", // Replace with additional screenshots
      // "image/portfolio.png"  // Replace with additional screenshots
    ]
  },
  {
    title: "War Card Game App",
    subtitle: "iOS Application",
    imageSrc: "image/ios2.jpg",
    description: "An engaging War Card Game app where players compete against the CPU to reach 14 points, developed using SwiftUI and Xcode.",
    detailedDescription: "Developed an engaging War Card Game app using SwiftUI and Xcode, where players compete against the CPU in a battle to reach 14 points. This app showcases skills in game development, UI design, and SwiftUI animation.",
    githubLink: "https://github.com/sherryzia/War-Card-Game",
    liveLink: "",
    images: [
      "image/ios2.jpg",
      // "image/ios2.jpg", // Replace with additional screenshots
      // "image/ios2.jpg"  // Replace with additional screenshots
    ]
  },
  {
    title: "Phonebook App",
    subtitle: "iOS Application",
    imageSrc: "image/ios3.jpg",
    description: "A comprehensive iOS Phonebook app with contact management and chat functionality, developed using SwiftUI and Xcode.",
    detailedDescription: "Developed a comprehensive Phonebook app using SwiftUI and Xcode, enabling users to efficiently manage their contacts and initiate chats directly from the app. The app showcases smooth navigation, responsive design, and a robust data management system.",
    githubLink: "https://github.com/sherryzia/Phonebook-App",
    liveLink: "",
    images: [
      "image/ios3.jpg",
      // "image/ios3.jpg", // Replace with additional screenshots
      // "image/ios3.jpg"  // Replace with additional screenshots
    ]
  },
  {
    title: "To-Do List App",
    subtitle: "iOS Application",
    imageSrc: "image/ios4.jpg",
    description: "An iOS ToDo app with Firebase authentication and Firestore real-time synchronization for managing daily tasks.",
    detailedDescription: "Developed using SwiftUI and integrated with Firebase, this iOS ToDo app enhances user productivity by allowing secure management of daily tasks. Features include real-time synchronization of tasks across devices using Firestore, robust user authentication, and a clean, intuitive interface.",
    githubLink: "https://github.com/sherryzia/ToDoList",
    liveLink: "",
    images: [
      "image/ios4.jpg",
      // "image/ios4.jpg", // Replace with additional screenshots
      // "image/ios4.jpg"  // Replace with additional screenshots
    ]
  },
  {
    title: "SwiftUI Weather App",
    subtitle: "iOS Application",
    imageSrc: "image/ios5.jpg",
    description: "A weather app that fetches real-time weather data using OpenWeather and Open-Meteo APIs, dynamically updating weather conditions.",
    detailedDescription: "This SwiftUI Weather App provides real-time weather updates by integrating two APIs. It uses the OpenWeather Geocoding API to convert city names to geographical coordinates and the Open-Meteo API to fetch detailed weather conditions like temperature, humidity, and wind speed. The application enhances user engagement by dynamically displaying relevant weather images such as sunny, rainy, or cloudy conditions based on the current weather data.",
    githubLink: "https://github.com/sherryzia/Weather-App",
    liveLink: "",
    images: [
      "image/ios5.jpg",
      // "image/ios5.jpg", // Replace with additional screenshots
      // "image/ios5.jpg"  // Replace with additional screenshots
    ]
  },
  {
    title: "Welsh Heritage App",
    subtitle: "Android Application",
    imageSrc: "image/WelshHeritage.jpg",
    description: "An immersive Android app showcasing the rich history and culture of Wales, with interactive museum and heritage site details.",
    detailedDescription: "The Welsh Heritage App is an immersive Android application that celebrates the rich history and culture of Wales. Explore iconic museums and heritage sites with detailed descriptions, 360-degree virtual tours, and bilingual support. The app enhances user engagement with search functionality, dynamic content, and seamless navigation.",
    githubLink: "",
    liveLink: "",
    images: [
      "image/WelshHeritage.jpg",
      // "image/WelshHeritage.jpg", // Replace with additional screenshots
      // "image/WelshHeritage.jpg"  // Replace with additional screenshots
    ]
  }
];

// Make the projectsData array available globally
window.projectsData = projectsData;

window.initProjects = function() {
  // DOM Elements
  const projectsContainer = document.querySelector('.projects__container');
  const modal = document.getElementById('projectModal');
  const modalTitle = modal.querySelector('.modal-title');
  const modalDescription = modal.querySelector('.modal-description');
  const closeModal = modal.querySelector('.close');
  
  // Generate project cards
  function generateProjectCards() {
    projectsContainer.innerHTML = '';
    
    projectsData.forEach((project, index) => {
      const projectCard = document.createElement('article');
      projectCard.className = 'projects__card';
      projectCard.setAttribute('data-project-index', index);
      
      // Create card HTML with properly wrapped <a> tags
      projectCard.innerHTML = `
        <div class="projects__image">
          <img
            src="${project.imageSrc}"
            alt="${project.title}"
            class="projects__img"
            width="100%"
            height="100%"
            loading="lazy"
          />
          ${project.liveLink ? `
          <a href="${project.liveLink}" class="projects__button button" target="_blank" aria-label="${project.title} website link">
            <i class="fa-solid fa-square-arrow-up-right"></i>
          </a>` : ''}
        </div>

        <div class="projects__content">
          <h3 class="projects__subtitle">${project.subtitle}</h3>
          <h2 class="projects__title">${project.title}</h2>

          <p class="projects__description">
            ${project.description}
          </p>
        </div>

        ${project.githubLink ? `
        <div class="projects__buttons">
          <a href="${project.githubLink}" target="_blank" class="projects__link" aria-label="${project.title} github link">
            <i class="fa-brands fa-github"></i> View
          </a>
        </div>
        ` : ''}
      `;
      
      projectsContainer.appendChild(projectCard);
    });
    
    // Add click events to cards after they're all generated
    addCardClickEvents();
  }
  
  // Add click events to project cards
  function addCardClickEvents() {
    const projectCards = document.querySelectorAll('.projects__card');
    
    projectCards.forEach(card => {
      card.addEventListener('click', (e) => {
        // Don't open modal if clicking on links
        if (e.target.tagName === 'A' || e.target.closest('a')) {
          return;
        }
        
        const projectIndex = parseInt(card.getAttribute('data-project-index'));
        const project = projectsData[projectIndex];
        
        if (project) {
          // The actual modal content will be handled by the modal-carousel.js
          // We just trigger the display here
          modal.style.display = 'block';
          
          // Dispatch a custom event to notify modal-carousel.js
          const event = new CustomEvent('projectModalOpened', {
            detail: { projectIndex: projectIndex }
          });
          document.dispatchEvent(event);
        }
      });
    });
  }
  
  // Add close event for modal
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
  
  // Close modal if clicking outside of content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  
  // Generate project cards on page load
  generateProjectCards();
  
  console.log('Projects system initialized');
};