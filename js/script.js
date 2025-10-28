// Product data embedded directly for offline/local use
const products = [
  {
    "id": 1,
    "name": "Outside Vibe T-Shirt Sunshine",
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1505751104546-4b63c93054b1?w=400&h=400&fit=crop",
    "price": "$104.95",
    "rating": 4.5,
    "reviews": 1234,
    "badge": "BEST SELLER",
    "savePercent": null
  },
  {
    "id": 2,
    "name": "Nine Bottle Outside Vibe Forest Green",
    "image": "https://images.unsplash.com/photo-1659506425360-f04a041e90df?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1697576239754-a6aef9751e51?w=400&h=400&fit=crop",
    "price": "$104.95",
    "rating": 5,
    "reviews": 892,
    "badge": "BEST SELLER",
    "savePercent": "16%"
  },
  {
    "id": 3,
    "name": "Rest In Nature T-Shirt Charcoal",
    "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1581987625444-878fa12fbf2a?w=400&h=400&fit=crop",
    "price": "$104.95",
    "rating": 4,
    "reviews": 567,
    "badge": "BEST SELLER",
    "savePercent": null
  },
  {
    "id": 4,
    "name": "Outside Vibe Cap Forest Green",
    "image": "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    "price": "$104.95",
    "rating": 5,
    "reviews": 2341,
    "badge": "BEST SELLER",
    "savePercent": "15%"
  },
  {
    "id": 5,
    "name": "Rest In Nature T-Shirt Charcoal",
    "image": "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1613520701290-480b81948f43?w=400&h=400&fit=crop",
    "price": "$104.95",
    "rating": 4,
    "reviews": 891,
    "badge": "BEST SELLER",
    "savePercent": null
  },
  {
    "id": 6,
    "name": "Vintage Denim Jacket",
    "image": "https://images.unsplash.com/photo-1601036559620-3a83dfdead09?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1601036572102-f8cd483c9518?w=400&h=400&fit=crop",
    "price": "$89.95",
    "rating": 5,
    "reviews": 445,
    "badge": "NEW",
    "savePercent": null
  },
  {
    "id": 7,
    "name": "Classic White Sneakers",
    "image": "https://images.unsplash.com/photo-1695552836001-e34239c9c9d4?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1695552839801-fd20f9ff020f?w=400&h=400&fit=crop",
    "price": "$124.95",
    "rating": 4,
    "reviews": 1567,
    "badge": "BEST SELLER",
    "savePercent": "12%"
  },
  {
    "id": 8,
    "name": "Leather Crossbody Bag",
    "image": "https://images.unsplash.com/photo-1575890318083-4d7c6ebcd60a?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1600857125164-499a823272b4?w=400&h=400&fit=crop",
    "price": "$79.95",
    "rating": 5,
    "reviews": 234,
    "badge": "LIMITED",
    "savePercent": null
  },
  {
    "id": 9,
    "name": "Wireless Bluetooth Headphones",
    "image": "https://images.unsplash.com/photo-1636093973985-4fe333d36de9?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1593442607435-e4e34991b210?w=400&h=400&fit=crop",
    "price": "$199.95",
    "rating": 5,
    "reviews": 1890,
    "badge": "BEST SELLER",
    "savePercent": "20%"
  },
  {
    "id": 10,
    "name": "Nike Running Shoes",
    "image": "https://images.unsplash.com/photo-1656944227480-98180d2a5155?w=400&h=400&fit=crop",
    "hoverImage": "https://images.unsplash.com/photo-1656944227421-d0e8de487d9d?w=400&h=400&fit=crop",
    "price": "$159.95",
    "rating": 4,
    "reviews": 678,
    "badge": "NEW",
    "savePercent": null
  }
];

// --- starReviews.js logic ---
const star = {
  full: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.32279 0.887954C6.11862 0.790604 5.88141 0.790604 5.67723 0.887954C5.50072 0.972112 5.4034 1.11823 5.35433 1.19839C5.30359 1.28126 5.25151 1.38682 5.20075 1.48972L4.12288 3.67336L1.71185 4.02577C1.59836 4.04233 1.48191 4.05933 1.38745 4.08204C1.29607 4.10402 1.12711 4.15154 0.992657 4.29346C0.837112 4.45765 0.76396 4.68325 0.793571 4.90747C0.819166 5.10129 0.928088 5.23891 0.989188 5.31033C1.05235 5.38415 1.13667 5.46625 1.21885 5.54626L2.96275 7.24481L2.55127 9.64395C2.53184 9.75707 2.51192 9.87312 2.50424 9.97001C2.49682 10.0637 2.48965 10.2392 2.583 10.411C2.69098 10.6098 2.88292 10.7492 3.10535 10.7905C3.29766 10.8261 3.4623 10.7651 3.54912 10.729C3.63889 10.6918 3.7431 10.637 3.84468 10.5835L6.00001 9.45005L8.15535 10.5835C8.25693 10.637 8.36114 10.6918 8.45091 10.729C8.53773 10.7651 8.70237 10.8261 8.89467 10.7905C9.11711 10.7492 9.30904 10.6098 9.41702 10.411C9.51037 10.2392 9.5032 10.0637 9.49578 9.97001C9.48811 9.87312 9.46818 9.75708 9.44876 9.64397L9.03727 7.24481L10.7812 5.54624C10.8634 5.46623 10.9477 5.38414 11.0108 5.31033C11.0719 5.23891 11.1809 5.10129 11.2065 4.90747C11.2361 4.68325 11.1629 4.45765 11.0074 4.29346C10.8729 4.15154 10.704 4.10402 10.6126 4.08204C10.5181 4.05933 10.4017 4.04233 10.2882 4.02577L7.87714 3.67336L6.7993 1.48976C6.74853 1.38686 6.69644 1.28127 6.6457 1.19839C6.59662 1.11823 6.4993 0.972112 6.32279 0.887954Z" fill="#231F20"/>
  </svg>`,
  half: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.887832 5.67721C0.790482 5.88138 0.790482 6.11859 0.887832 6.32277C0.97199 6.49928 1.11811 6.5966 1.19827 6.64567C1.28114 6.69641 1.3867 6.74849 1.4896 6.79925L3.67324 7.87712L4.02564 10.2881C4.04221 10.4016 4.05921 10.5181 4.08192 10.6126C4.10389 10.7039 4.15142 10.8729 4.29334 11.0073C4.45752 11.1629 4.68313 11.236 4.90735 11.2064C5.10117 11.1808 5.23879 11.0719 5.3102 11.0108C5.38402 10.9477 5.46612 10.8633 5.54614 10.7811L7.24469 9.03725L9.64383 9.44873C9.75694 9.46816 9.87299 9.48808 9.96988 9.49576C10.0636 9.50318 10.239 9.51035 10.4109 9.417C10.6097 9.30902 10.7491 9.11708 10.7904 8.89465C10.826 8.70234 10.7649 8.5377 10.7289 8.45088C10.6917 8.36111 10.6368 8.2569 10.5834 8.15532L9.44993 5.99999L10.5834 3.84465C10.6368 3.74307 10.6917 3.63886 10.7289 3.54909C10.7649 3.46227 10.826 3.29763 10.7904 3.10533C10.7491 2.88289 10.6097 2.69096 10.4109 2.58298C10.239 2.48963 10.0636 2.4968 9.96988 2.50422C9.873 2.51189 9.75696 2.53182 9.64385 2.55124L7.24469 2.96273L5.54612 1.21881C5.46611 1.13663 5.38402 1.05232 5.3102 0.989164C5.23879 0.928063 5.10117 0.819141 4.90735 0.793546C4.68313 0.763936 4.45752 0.837087 4.29334 0.992633C4.15142 1.12709 4.1039 1.29604 4.08192 1.38742C4.05921 1.48188 4.04221 1.59834 4.02564 1.71183L3.67324 4.12286L1.48963 5.2007C1.38673 5.25147 1.28114 5.30356 1.19827 5.3543C1.11811 5.40338 0.97199 5.5007 0.887832 5.67721Z" fill="url(#grad)"/>
    <defs>
      <linearGradient id="grad" x1="0" y1="6" x2="12" y2="6" gradientUnits="userSpaceOnUse">
        <stop stop-color="#231F20"/><stop offset="0.5" stop-color="#231F20"/><stop offset="0.5" stop-color="#CFCFCF"/>
      </linearGradient>
    </defs>
  </svg>`,
  empty: `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.32279 0.887954C6.11862 0.790604 5.88141 0.790604 5.67723 0.887954C5.50072 0.972112 5.4034 1.11823 5.35433 1.19839C5.30359 1.28126 5.25151 1.38682 5.20075 1.48972L4.12288 3.67336L1.71185 4.02577C1.59836 4.04233 1.48191 4.05933 1.38745 4.08204C1.29607 4.10402 1.12711 4.15154 0.992657 4.29346C0.837112 4.45765 0.76396 4.68325 0.793571 4.90747C0.819166 5.10129 0.928088 5.23891 0.989188 5.31033C1.05235 5.38415 1.13667 5.46625 1.21885 5.54626L2.96275 7.24481L2.55127 9.64395C2.53184 9.75707 2.51192 9.87312 2.50424 9.97001C2.49682 10.0637 2.48965 10.2392 2.583 10.411C2.69098 10.6098 2.88292 10.7492 3.10535 10.7905C3.29766 10.8261 3.4623 10.7651 3.54912 10.729C3.63889 10.6918 3.7431 10.637 3.84468 10.5835L6.00001 9.45005L8.15535 10.5835C8.25693 10.637 8.36114 10.6918 8.45091 10.729C8.53773 10.7651 8.70237 10.8261 8.89467 10.7905C9.11711 10.7492 9.30904 10.6098 9.41702 10.411C9.51037 10.2392 9.5032 10.0637 9.49578 9.97001C9.48811 9.87312 9.46818 9.75708 9.44876 9.64397L9.03727 7.24481L10.7812 5.54624C10.8634 5.46623 10.9477 5.38414 11.0108 5.31033C11.0719 5.23891 11.1809 5.10129 11.2065 4.90747C11.2361 4.68325 11.1629 4.45765 11.0074 4.29346C10.8729 4.15154 10.704 4.10402 10.6126 4.08204C10.5181 4.05933 10.4017 4.04233 10.2882 4.02577L7.87714 3.67336L6.7993 1.48976C6.74853 1.38686 6.69644 1.28127 6.6457 1.19839C6.59662 1.11823 6.4993 0.972112 6.32279 0.887954Z" fill="#CFCFCF"/>
  </svg>`
};

function generateStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    star.full.repeat(full) +
    (half ? star.half : '') +
    star.empty.repeat(empty)
  );
}

// --- productCard.js logic ---
function createProductCard(product) {
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
  renderProducts();
  if (showMoreBtn) showMoreBtn.addEventListener('click', () => handleShowMore());
  window.addEventListener('resize', () => handleResize());
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);