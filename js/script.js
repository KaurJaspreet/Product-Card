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

// Import icons from assets
import { generateStars } from '../assets/icons.js';

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

async function loadProducts() {
  try {
    // Show loading state
    if (productRow) {
      productRow.innerHTML = '<div class="col-span-2 text-center py-8">Loading products...</div>';
    }
    
    const response = await fetch('../data/products.json');
    
    products = await response.json();
    
    // Render products after successful load
    renderProducts();
    
  } catch (error) {
    console.error('Error loading product data:', error);
  }
}

// Create product card HTML
function createProductCard(product) {
  // Generate stars using imported function
  const starsHtml = generateStars(product.rating);

  return `
    <div class="bg-white rounded-lg overflow-hidden cursor-pointer
      min-w-[158px] md:min-w-[355px] md:mr-6"
    >
      <div class="relative overflow-hidden
        w-full h-[159px] md:h-[355px]
        border border-none rounded-[10px]"
      > 
        <img 
          src="${product.image}" 
          alt="${product.name}"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
          loading="lazy"
        >
        <img 
          src="${product.hoverImage}" 
          alt="${product.name}"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 
          ease-in-out opacity-0 hover:opacity-100"
          loading="lazy"
        >

        ${product.badge ? `
          <span class="absolute z-10 
            top-1 left-1 md:top-2 md:left-2
            bg-white text-[8px] md:text-[10px]
            uppercase px-2 py-1 leading-[1] tracking-[0.06em]
            border border-solid rounded-full"
          >
            ${product.badge}
          </span>` 
          : ''
        }

        ${product.savePercent ? `
          <span class="absolute z-10 
            top-1 right-1 md:top-2 md:right-6
            bg-sage text-white text-[8px] md:text-[10px] 
            uppercase px-2 py-1 leading-[1] tracking-[0.06em]
            border border-solid border-black rounded-full"
          >
            Save ${product.savePercent}
          </span>` 
          : ''
        }
      </div>
      
      <div class="text-gray py-3 px-2 md:py-4 md:px-3 flex flex-col gap-2">
        <h3 class="text-base md:text-lg m-0 uppercase leading-[1] tracking-[0.03em]">
          ${product.name}
        </h3>
        
        <div class="flex items-center gap-1">
          <span class="flex flex-row">${starsHtml}</span>
          <span class="text-xs text-gray-500 font-poppins">
            ${product.reviews.toLocaleString()} Reviews
          </span>
        </div>
        
        <p class="font-poppins font-medium text-dark-gray text-base">
          ${product.price}
        </p>
      </div>
    </div>
  `;
}

// Render all products with proper mobile hiding
function renderProducts() {
  // Clear existing content
  productRow.innerHTML = '';
  
  // Render ALL products using DocumentFragment for better performance
  const fragment = document.createDocumentFragment();

  products.forEach((product, index) => {
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
    showMoreBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
  } else {
    showMoreContainer.style.display = 'none';
  }
}

// Handle show more/less toggle functionality with smooth animations
function handleShowMore() {
  if (!isMobile()) return;

  const productContainer = document.getElementById('productRow');
  
  const hiddenProducts = document.querySelectorAll('.hidden-product');
  if (!isExpanded) {
    // Show More: Animate in hidden products
    hiddenProducts.forEach(product => {
      product.classList.remove(...MOBILE_HIDE_CLASSES);
      product.classList.add(...MOBILE_SHOW_CLASSES);
    });
    isExpanded = true;
    if (showMoreText && showLessText) {
      showMoreText.classList.add('hidden');
      showLessText.classList.remove('hidden');
    }
  } else {
    // Show Less: Animate out hidden products
    hiddenProducts.forEach(product => {
      product.classList.remove(...MOBILE_SHOW_CLASSES);
      product.classList.add(...MOBILE_HIDE_CLASSES);
    });
    isExpanded = false;
    if (showMoreText && showLessText) {
      showMoreText.classList.remove('hidden');
      showLessText.classList.add('hidden');
    }
  }
}

// Handle window resize
function handleResize() {
  const productContainer = document.getElementById('productRow');
  
  const hiddenProducts = document.querySelectorAll('.hidden-product');
  if (!isMobile()) {
    // Desktop: Remove mobile classes and show all products
    hiddenProducts.forEach(product => {
      product.classList.remove(...MOBILE_HIDE_CLASSES);
      product.classList.remove(...MOBILE_SHOW_CLASSES);
    });
    showMoreContainer.style.display = 'none';
    isExpanded = false;
    if (showMoreText && showLessText) {
      showMoreText.classList.remove('hidden');
      showLessText.classList.add('hidden');
    }
  } else {
    // Mobile: Apply mobile logic
    showMoreContainer.style.display = 'block';
    if (showMoreText && showLessText) {
      if (isExpanded) {
        showMoreText.classList.add('hidden');
        showLessText.classList.remove('hidden');
      } else {
        showMoreText.classList.remove('hidden');
        showLessText.classList.add('hidden');
      }
    }
    if (!isExpanded) {
      hiddenProducts.forEach(product => {
        product.classList.remove(...MOBILE_SHOW_CLASSES);
        product.classList.add(...MOBILE_HIDE_CLASSES);
      });
    }
  }
}

// Initialize the application
function init() {
  loadProducts();
  
  if (showMoreBtn) showMoreBtn.addEventListener('click', handleShowMore);
  window.addEventListener('resize', handleResize);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);