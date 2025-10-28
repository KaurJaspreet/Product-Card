# Platter Interview
# Product Card - Technical Challenge

A responsive product card layout built with HTML, TailwindCSS, and Vanilla JavaScript, featuring smooth animations and mobile-first design.


## Tech Stack

- **HTML5**: Semantic markup structure
- **TailwindCSS**: Utility-first CSS framework
- **Vanilla JavaScript**: Pure JS for functionality
- **Unsplash API**: Free stock images

### Setup
- Clone your repository to your local machine
  - `https://github.com/KaurJaspreet/Product-Card.git`

## Running the Project

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
├── index.html          # Main HTML structure
├── style.css           # Custom CSS and animations
├── script.js           # Vanilla JavaScript functionality
└── README.md           # Project documentation
```

## Customization

### Adding New Products
Add the `products` array in `script.js`:

```javascript
{
  id: 11,
  name: "Your Product Name",
  image: "https://images.unsplash.com/your-image",
  hoverImage: "https://images.unsplash.com/your-hover-image",
  price: "$XX.XX",
  rating: 5,
  reviews: 123,
  badge: "NEW"
}
```

### Styling Modifications
- Primary styles: TailwindCSS classes in HTML
- Custom animations: `style.css`
- Color scheme: Tailwind config in HTML head