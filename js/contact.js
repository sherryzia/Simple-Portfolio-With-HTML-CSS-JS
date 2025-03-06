/**
 * Contact form functionality for Shaheer Zia Qazi portfolio website
 * Handles form validation, submission, and feedback
 */

window.initContactForm = function() {
    // DOM Elements
    const contactForm = document.getElementById('contact-form');
    const contactMessage = document.getElementById('contact-message');
    
    // Handle form submission
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
          showMessage('Please fill in all fields', 'error');
          return;
        }
        
        // Email validation
        if (!isValidEmail(email)) {
          showMessage('Please enter a valid email address', 'error');
          return;
        }
        
        // Show sending message
        showMessage('Sending message...', 'sending');
        
        // Prepare form data
        const formData = new FormData(contactForm);
        
        // Send form to Formspree (or other service)
        fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        })
        .then(response => {
          if (response.ok) {
            showMessage('Message sent successfully!', 'success');
            contactForm.reset();
          } else {
            response.json().then(data => {
              if (data.errors) {
                showMessage(data.errors.map(error => error.message).join(', '), 'error');
              } else {
                showMessage('Oops! There was a problem sending your message', 'error');
              }
            });
          }
        })
        .catch(() => {
          showMessage('Oops! There was a problem sending your message', 'error');
        });
      });
    }
    
    // Function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
    
    // Function to show message with status
    function showMessage(text, status) {
      if (!contactMessage) return;
      
      contactMessage.textContent = text;
      
      // Reset classes
      contactMessage.classList.remove('success-message', 'error-message', 'sending-message');
      
      // Add appropriate class based on status
      if (status === 'success') {
        contactMessage.classList.add('success-message');
      } else if (status === 'error') {
        contactMessage.classList.add('error-message');
      } else if (status === 'sending') {
        contactMessage.classList.add('sending-message');
      }
      
      // Clear message after 5 seconds if it's a success/error
      if (status === 'success' || status === 'error') {
        setTimeout(() => {
          contactMessage.textContent = '';
          contactMessage.classList.remove('success-message', 'error-message');
        }, 5000);
      }
    }
    
    // Add input focus behavior
    function setupInputLabels() {
      const inputs = document.querySelectorAll('.contact__input');
      
      inputs.forEach(input => {
        // Move label when input is focused
        input.addEventListener('focus', () => {
          const label = input.nextElementSibling;
          if (label && label.classList.contains('contact__label')) {
            label.classList.add('focused');
          }
        });
        
        // Keep label moved if input has value
        input.addEventListener('blur', () => {
          const label = input.nextElementSibling;
          if (label && label.classList.contains('contact__label')) {
            if (input.value.trim() !== '') {
              label.classList.add('focused');
            } else {
              label.classList.remove('focused');
            }
          }
        });
        
        // Check initial state (for browser autofill)
        if (input.value.trim() !== '') {
          const label = input.nextElementSibling;
          if (label && label.classList.contains('contact__label')) {
            label.classList.add('focused');
          }
        }
      });
    }
    
    // Setup input labels
    setupInputLabels();
    
    console.log('Contact form initialized');
}