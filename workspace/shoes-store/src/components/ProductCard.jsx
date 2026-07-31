import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor);
  };

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        {isHovered && (
          <div className="product-overlay">
            <button className="btn-primary" onClick={handleAddToCart}>
              Ajouter au panier
            </button>
          </div>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-options">
          <div className="size-selector">
            <label>Taille:</label>
            <select 
              value={selectedSize}
              onChange={(e) => setSelectedSize(Number(e.target.value))}
            >
              {product.sizes.map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>

          <div className="color-selector">
            <label>Couleur:</label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {product.colors.map(color => (
                <option key={color} value={color}>{color}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="product-footer">
          <span className="product-price">{product.price.toFixed(2)} €</span>
          <button 
            className="btn-secondary"
            onClick={handleAddToCart}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
