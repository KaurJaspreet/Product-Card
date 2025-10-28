// Import product card component
import { createProductCard } from './components/productCard.js';

// Tailwind class sets for show/hide animation
const MOBILE_HIDE_CLASSES = [
  'max-h-0',
  'opacity-0',
  'overflow-hidden',
  'scale-y-0',
  'transition-all',
  'duration-300',
  'ease-out',
  'transform',
  'origin-top',
];
const MOBILE_SHOW_CLASSES = [
  'max-h-[500px]',
  'opacity-100',
  'scale-y-100',
  'transition-all',
  'duration-300',
  'ease-out',
  'transform',
  'origin-top',
];

// Product data will be loaded from JSON (Products.json)
let products = [];

// State management
let isExpanded = false;
const isMobile = () => window.innerWidth < 768;

// DOM Elements
const productRow = document.getElementById('productRow');
const showMoreBtn = document.getElementById('showMoreBtn');
const showMoreContainer = document.getElementById('showMoreContainer');
const showMoreText = document.getElementById('showMoreText');
const showLessText = document.getElementById('showLessText');

// Accessibility: Add ARIA attributes
if (showMoreBtn && productRow) {
  showMoreBtn.setAttribute('aria-expanded', isExpanded);
  showMoreBtn.setAttribute('aria-controls', 'productRow');
}

async function loadProducts() {
  try {
    const response = await fetch('../data/products.json');
    products = await response.json();
    // Render products after successful load
    renderProducts();
  } catch (error) {
    console.error('Error loading product data:', error);
  }
}


// Render all products with proper mobile hiding
function renderProducts() {
  // Clear existing content
  productRow.innerHTML = '';
  
  // Render ALL products using DocumentFragment for better performance
  const fragment = document.createDocumentFragment();

  products.forEach((product, index) => {
    // Product card
    const productHTML = createProductCard(product);
    const productContainer = document.createElement('div');
    productContainer.innerHTML = productHTML.trim();
    // Get the actual product card element
    const productElement = productContainer.firstElementChild;
    if (productElement) {
      // Add special classes for products beyond the first 4 on mobile
      if (index >= 4) {
        productElement.classList.add('hidden-product');
        // Only hide on mobile initially
        if (isMobile()) {
          productElement.classList.add(...MOBILE_HIDE_CLASSES);
        }
      }
      fragment.appendChild(productElement);
    }
  });
  productRow.appendChild(fragment);

  // Show/hide button and update text on mobile
  if (isMobile()) {
    showMoreContainer.style.display = 'block';
  } else {
    showMoreContainer.style.display = 'none';
  }
  if (showMoreText && showLessText) {
    showMoreText.classList.toggle('hidden', isExpanded);
    showLessText.classList.toggle('hidden', !isExpanded);
  }
}

// Handle show more/less toggle functionality with smooth animations
function handleShowMore() {
  if (!isMobile()) return;
  const hiddenProducts = document.querySelectorAll('.hidden-product');
  if (!isExpanded) {
    // Show More: Animate in hidden products
    hiddenProducts.forEach(product => {
      product.classList.remove(...MOBILE_HIDE_CLASSES);
      product.classList.add(...MOBILE_SHOW_CLASSES);
    });
    isExpanded = true;
  } else {
    // Show Less: Animate out hidden products
    hiddenProducts.forEach(product => {
      product.classList.remove(...MOBILE_SHOW_CLASSES);
      product.classList.add(...MOBILE_HIDE_CLASSES);
    });
    isExpanded = false;
  }
  // Accessibility: update aria-expanded
  if (showMoreBtn) showMoreBtn.setAttribute('aria-expanded', isExpanded);
  if (showMoreText && showLessText) {
    showMoreText.classList.toggle('hidden', isExpanded);
    showLessText.classList.toggle('hidden', !isExpanded);
  }
}

// Handle window resize
function handleResize() {
  const hiddenProducts = document.querySelectorAll('.hidden-product');
  if (!isMobile()) {
    // Desktop: Remove mobile classes and show all products
    hiddenProducts.forEach(product => {
      product.classList.remove(...MOBILE_HIDE_CLASSES);
      product.classList.remove(...MOBILE_SHOW_CLASSES);
    });
    showMoreContainer.style.display = 'none';
    isExpanded = false;
  } else {
    // Mobile: Apply mobile logic
    showMoreContainer.style.display = 'block';
    if (!isExpanded) {
      hiddenProducts.forEach(product => {
        product.classList.remove(...MOBILE_SHOW_CLASSES);
        product.classList.add(...MOBILE_HIDE_CLASSES);
      });
    }
  }
  // Accessibility: update aria-expanded for accessibility
  if (showMoreBtn) showMoreBtn.setAttribute('aria-expanded', isExpanded);
  if (showMoreText && showLessText) {
    showMoreText.classList.toggle('hidden', isExpanded);
    showLessText.classList.toggle('hidden', !isExpanded);
  }
}

// Initialize the application
function init() {
  loadProducts();
  if (showMoreBtn) showMoreBtn.addEventListener('click', () => handleShowMore());
  window.addEventListener('resize', () => handleResize());
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);