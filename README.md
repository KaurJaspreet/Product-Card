# Product Card - Responsive E-commerce Layout

A responsive product card layout built with HTML, TailwindCSS, and Vanilla JavaScript, featuring smooth animations and mobile-first design.

## 🛠️ Tech Stack

- **HTML5**: Semantic markup structure
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **Vanilla JavaScript**: Pure JS for functionality
- **Unsplash API**: Free stock images
- **JSON**: External product data storage for easy content management

## 🚀 Quick Start

### Prerequisites
- Modern web browser
- Local development server (optional but recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/KaurJaspreet/Product-Card.git
   cd Product-Card
   ```

2. **Running the project**
  ### Method 1: Direct File Opening
  1. Open `index.html` directly in your browser
  2. All dependencies are loaded via CDN

  ### Method 2: Live Server (VS Code Extension)
  1. Install Live Server extension
  2. Right-click on `index.html`
  3. Select "Open with Live Server"


## File Structure

```
Product-Card/Local
├── index.html              # Main HTML entry point
├── README.md               # Project documentation
├── css/
│   └── style.css           # Custom styles and animations
├── js/
│   ├── script.js           # All application logic and product data (self-contained)
│   └── tailwind.config.js  # Tailwind CSS configuration
├── Shopify Mock/
│   └── sections/
│       └── product-card.liquid   # Shopify section (Liquid) mockup for theme integration
```

---

## 🛒 Shopify Section Mockup

This project includes a Shopify-ready section for easy integration into Shopify themes. The section is located in:

```
Shopify Mock/sections/product-card.liquid
```

**Features:**
- Fully responsive, mobile-first product card section using Shopify Liquid and schema inputs
- Merchants can add products, badges, ratings, and review counts via the Shopify Theme Editor
- "Show More/Less" mobile functionality and smooth animations
- Uses Tailwind utility classes (see `tailwind.config.js` for custom colors/fonts)

**Preview the theme in action:**

[Shopify Theme Preview (Sisters In Style)](https://sistersinstyle-mtl.myshopify.com/?_ab=0&_bt=eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaVZ6YVhOMFpYSnphVzV6ZEhsc1pTMXRkR3d1YlhsemFHOXdhV1o1TG1OdmJRWTZCa1ZVIiwiZXhwIjoiMjAyNS0xMC0yOFQyMDo0NjoxMS4wNDFaIiwicHVyIjoicGVybWFuZW50X3Bhc3N3b3JkX2J5cGFzcyJ9fQ%3D%3D--f01d0d5724519531ca0bf6f7d059648b4d6f09fb&_fd=0&_sc=1&key=8a2495938eea8cf84921457bcd6883f349b510d395bb742475dd129f0e3d2e37&preview_theme_id=153851461870)

To use in your own Shopify theme:
1. Copy `Shopify Mock/sections/product-card.liquid` into your theme's `sections/` directory
2. Add the section in the Shopify Theme Editor
3. Customize products, badges, and settings as desired

---

## 🎨 Customization


### Adding New Products

Edit the `products` array at the top of `js/script.js` to add new products:

```js
{
  id: 11,
  name: "New Product Name",
  image: "https://images.unsplash.com/main-image",
  hoverImage: "https://images.unsplash.com/hover-image",
  price: "$49.99",
  rating: 4.5,
  reviews: 127,
  badge: "NEW",
  savePercent: "15%"
}
```

## 🔧 Development

### Performance Optimizations

- **Lazy Loading**: Images load only when needed
- **CDN Dependencies**: Fast loading of external libraries