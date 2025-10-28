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
Product-Card/
├── index.html              # Main HTML entry point
├── README.md               # Project documentation
├── css/
│   └── style.css           # Custom styles and animations
├── js/
│   ├── script.js           # All application logic and product data (self-contained)
│   └── tailwind.config.js  # Tailwind CSS configuration
```

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