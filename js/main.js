/**
 * Main JavaScript file for Shaheer Zia Qazi portfolio website
 * This file coordinates the different JavaScript modules
 */

// Import all necessary modules
import { initNavigation } from './navigation.js';
import { initTheme } from './theme.js';
import { initProjects } from './projects.js';
import { initCarousel } from './carousel.js';
import { initContactForm } from './contact.js';
import { initScrollBehavior } from './scroll.js';

// Wait for the DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initNavigation();
  initTheme();
  initProjects();
  initCarousel();
  initContactForm();
  initScrollBehavior();
  
  console.log('Portfolio website initialized successfully');
});