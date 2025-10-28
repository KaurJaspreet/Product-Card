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

        <span class="absolute z-10 
          top-1 left-1 md:top-2 md:left-2
          bg-white text-[8px] md:text-[10px]
          uppercase px-2 py-1 leading-[1] tracking-[0.06em]
          border border-solid rounded-full"
        >
          ${product.badge}
        </span>
        ${product.savePercent ? `
          <span class="absolute z-10 
            top-1 right-1 md:top-2 md:right-6
            bg-[#5C7962] text-white text-[8px] md:text-[10px] 
            uppercase px-2 py-1 leading-[1] tracking-[0.06em]
            border border-solid border-black rounded-full"
          >
            Save ${product.savePercent}
          </span>` : 
          ''
        }
      </div>
      
      <div class="text-[#1C1D1D] py-3 px-2 md:py-4 md:px-3 flex flex-col gap-2">
        <h3 class="text-base md:text-lg m-0 uppercase leading-[1] tracking-[0.03em]">
          ${product.name}
        </h3>
        
        <div class="flex items-center gap-1">
          <span class="flex flex-row">${starsHtml}</span>
          <span class="text-xs text-gray-500 font-['Poppins']">
            ${product.reviews.toLocaleString()} Reviews
          </span>
        </div>
        
        <p class="font-['Poppins'] font-medium text-[#231F20] text-base">
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
  
  // Render products
  visibleProducts.forEach(product => {
    productRow.innerHTML += createProductCard(product);
  });
  
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
  if (isMobile()) {
    if (!isExpanded) {
      // Show more: Create smooth dropdown for additional products
      const hiddenProducts = products.slice(4);
      
      // Create dropdown container
      const dropdownContent = document.createElement('div');
      dropdownContent.className = 'dropdown-content grid grid-cols-2 gap-4 pb-4';
      dropdownContent.id = 'additionalProducts';
      
      // Add hidden products to dropdown
      hiddenProducts.forEach(product => {
        dropdownContent.innerHTML += createProductCard(product);
      });
      
      // Add dropdown after the main product row
      productRow.parentElement.appendChild(dropdownContent);
      
      // Trigger smooth animation
      setTimeout(() => {
        dropdownContent.classList.add('open');
      }, 50);
      
      isExpanded = true;
      showMoreBtn.textContent = 'Show Less';
    } else {
      // Show less: Remove dropdown with smooth animation
      const dropdownContent = document.getElementById('additionalProducts');
      if (dropdownContent) {
        dropdownContent.classList.remove('open');
        
        // Remove element after animation completes
        setTimeout(() => {
          dropdownContent.remove();
        }, 300); // Match the faster CSS transition duration
      }
      
      isExpanded = false;
      showMoreBtn.textContent = 'Show More';
    }
  }
}

// Handle window resize
function handleResize() {
  if (!isMobile() && isExpanded) {
    // Reset state when switching to desktop
    isExpanded = false;
    // Remove any dropdown content
    const dropdownContent = document.getElementById('additionalProducts');
    if (dropdownContent) {
      dropdownContent.remove();
    }
    renderProducts();
  } else if (isMobile() && !isExpanded) {
    // Ensure proper mobile state
    renderProducts();
  }
}

// Initialize the application
// Initialize the application
function init() {
  // Load products from JSON file
  loadProducts();
  
  // Add event listeners
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', handleShowMore);
  }
  
  window.addEventListener('resize', handleResize);
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);