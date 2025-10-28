// Import icons from assets
import { generateStars } from '../assets/icons.js';

// Product data will be loaded from JSON
let products = [];

// State management
let isExpanded = false;
const isMobile = () => window.innerWidth < 768;

// DOM Elements
const productRow = document.getElementById('productRow');
const showMoreBtn = document.getElementById('showMoreBtn');
const showMoreContainer = document.getElementById('showMoreContainer');

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

// Render products
function renderProducts() {
  // Clear existing content
  productRow.innerHTML = '';
  
  // Determine how many products to show initially
  const initialCount = isMobile() ? 4 : products.length;
  const visibleProducts = isExpanded ? products : products.slice(0, initialCount);
  
  // Render products using DocumentFragment for better performance
  const fragment = document.createDocumentFragment();

  visibleProducts.forEach(product => {
    const productHTML = createProductCard(product);
    const ProductCardEl = document.createElement('div');
    ProductCardEl.innerHTML = productHTML.trim(); // Remove whitespace
    
    // Get the actual product card element (skip any text nodes)
    const productElement = ProductCardEl.firstElementChild;
    if (productElement) {
      fragment.appendChild(productElement);
    }
  });

  productRow.appendChild(fragment);

  // Show/hide and update button text on mobile
  if (isMobile()) {
    showMoreContainer.style.display = 'block';
    showMoreBtn.textContent = isExpanded ? 'Show Less' : 'Show More';
  } else {
    showMoreContainer.style.display = 'none';
  }
}

// Handle show more/less toggle functionality
function handleShowMore() {
  if (!isMobile()) return;

  if (!isExpanded) {
    // Show more: Create smooth dropdown for additional products
    const hiddenProducts = products.slice(4);
    const dropdownContent = document.createElement('div');
    dropdownContent.id = 'additionalProducts';
    dropdownContent.className = `
      grid grid-cols-2 gap-4 pb-4
      max-h-0 
      overflow-hidden 
      opacity-0 
      -translate-y-5 
      transition-[max-height,opacity,transform] 
      duration-300 
      ease-out
    `;
    
    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment();

    hiddenProducts.forEach(product => {
      const productHTML = createProductCard(product);
      const tempContainer = document.createElement('div');
      tempContainer.innerHTML = productHTML.trim();
      
      // Get the actual product card element (skip any text nodes)
      const productElement = tempContainer.firstElementChild;
      if (productElement) {
        fragment.appendChild(productElement);
      }
    });

    dropdownContent.appendChild(fragment);
    productRow.parentElement.appendChild(dropdownContent);

    // Trigger animation with proper timing
    setTimeout(() => {
      dropdownContent.classList.remove('max-h-0', 'opacity-0', '-translate-y-5');
      dropdownContent.classList.add('max-h-[850px]', 'opacity-100', 'translate-y-0');
    }, 50);

    isExpanded = true;
    showMoreBtn.textContent = 'Show Less';
  } else {
    // Show less: Remove dropdown with smooth animation
    const dropdownContent = document.getElementById('additionalProducts');
    if (dropdownContent) {
      dropdownContent.classList.remove('max-h-[850px]', 'opacity-100', 'translate-y-0');
      dropdownContent.classList.add('max-h-0', 'opacity-0', '-translate-y-5');

      setTimeout(() => dropdownContent.remove(), 300);
    }

    isExpanded = false;
    showMoreBtn.textContent = 'Show More';
  }
}

// Handle window resize
function handleResize() {
  if (!isMobile()) {
    // When switching to desktop, always reset state and show all products
    if (isExpanded) {
      // Remove any dropdown content if it exists
      const dropdownContent = document.getElementById('additionalProducts');
      if (dropdownContent) {
        dropdownContent.remove();
      }
    }
    
    // Reset state and re-render to show all products on desktop
    isExpanded = false;
    renderProducts();
  } else if (isMobile() && !isExpanded) {
    // Ensure proper mobile state when switching back to mobile
    renderProducts();
  }
}

// Initialize the application
function init() {
  // Load products from JSON file
  loadProducts();
  
  if (showMoreBtn) showMoreBtn.addEventListener('click', handleShowMore);
  window.addEventListener('resize', handleResize);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);