// assets/script.js
document.addEventListener('DOMContentLoaded', function () {
  const showMoreBtn = document.getElementById('showMoreBtn');
  const showMoreText = document.getElementById('showMoreText');
  const showLessText = document.getElementById('showLessText');
  const productRow = document.getElementById('productRow');
  const MOBILE_LIMIT = 4;
  let isExpanded = false;

  if (!productRow || !showMoreBtn) return;

  function initProducts() {
    const products = Array.from(productRow.children);

    if (window.innerWidth < 768) {
      products.forEach((product, index) => {
        product.style.transition = 'all 0.5s ease';
        if (index >= MOBILE_LIMIT) {
          product.style.maxHeight = '0';
          product.style.opacity = '0';
          product.style.overflow = 'hidden';
        } else {
          product.style.maxHeight = '';
          product.style.opacity = '1';
          product.style.overflow = '';
        }
      });

      showMoreBtn.style.display = products.length > MOBILE_LIMIT ? 'block' : 'none';
      isExpanded = false;
      showMoreText.classList.remove('hidden');
      showLessText.classList.add('hidden');
    } else {
      // Desktop: show all products
      products.forEach(product => {
        product.style.maxHeight = '';
        product.style.opacity = '1';
        product.style.overflow = '';
      });
      showMoreBtn.style.display = 'none';
    }
  }

  function toggleProducts() {
    const hiddenProducts = Array.from(productRow.children).slice(MOBILE_LIMIT);

    hiddenProducts.forEach(product => {
      if (!isExpanded) {
        const fullHeight = product.scrollHeight + 'px';
        product.style.maxHeight = fullHeight;
        product.style.opacity = '1';
        product.style.overflow = 'visible';
      } else {
        product.style.maxHeight = '0';
        product.style.opacity = '0';
        product.style.overflow = 'hidden';
      }
    });

    isExpanded = !isExpanded;
    showMoreText.classList.toggle('hidden', isExpanded);
    showLessText.classList.toggle('hidden', !isExpanded);
  }

  showMoreBtn.addEventListener('click', toggleProducts);
  window.addEventListener('resize', initProducts);
  initProducts();
});
