// productCard.js - Generate content for each product
// Exports a function to create a product card HTML string
import { generateStars } from './starReviews.js';

export function createProductCard(product) {
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
