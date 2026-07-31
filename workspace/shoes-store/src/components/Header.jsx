import { Link } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-icon">👟</span>
          <span className="logo-text">ShoeStore</span>
        </Link>

        <nav className="nav">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/products" className="nav-link">Produits</Link>
          <Link to="/about" className="nav-link">À propos</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="header-actions">
          <button className="icon-btn">
            <Search size={20} />
          </button>
          <button 
            className="icon-btn cart-btn"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
