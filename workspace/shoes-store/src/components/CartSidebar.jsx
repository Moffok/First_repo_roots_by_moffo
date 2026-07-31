import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartSidebar = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-sidebar" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Votre Panier</h2>
          <button 
            className="close-btn"
            onClick={() => setIsCartOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Votre panier est vide</p>
              <button 
                className="btn-primary"
                onClick={() => setIsCartOpen(false)}
              >
                Continuer vos achats
              </button>
            </div>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.size}-${item.color}-${index}`} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="item-meta">Taille: {item.size} | Couleur: {item.color}</p>
                    <p className="item-price">{item.price.toFixed(2)} €</p>
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn"
                        onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id, item.size, item.color)}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-amount">{cartTotal.toFixed(2)} €</span>
            </div>
            <button className="btn-primary btn-full">
              Passer la commande
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
