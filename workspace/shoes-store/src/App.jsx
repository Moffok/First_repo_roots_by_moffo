import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './pages/products/ProductDetail';
import Categories from './pages/categories/Categories';
import CategoryDetail from './pages/categories/CategoryDetail';
import Profile from './pages/account/Profile';
import Login from './pages/account/Login';
import Register from './pages/account/Register';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import Shipping from './pages/legal/Shipping';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <CartSidebar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:id" element={<CategoryDetail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <footer className="footer">
            <div className="container footer-content">
              <div className="footer-section">
                <h3>ShoeStore</h3>
                <p>Votre destination pour les meilleures chaussures de sport et lifestyle.</p>
              </div>
              <div className="footer-section">
                <h4>Liens rapides</h4>
                <ul>
                  <li><a href="/">Accueil</a></li>
                  <li><a href="/products">Produits</a></li>
                  <li><a href="/categories">Catégories</a></li>
                  <li><a href="/about">À propos</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Compte</h4>
                <ul>
                  <li><a href="/login">Connexion</a></li>
                  <li><a href="/register">Inscription</a></li>
                  <li><a href="/profile">Mon compte</a></li>
                  <li><a href="/shipping">Livraison</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Légal</h4>
                <ul>
                  <li><a href="/terms">Conditions d'utilisation</a></li>
                  <li><a href="/privacy">Politique de confidentialité</a></li>
                  <li><a href="/shipping">Politique de livraison</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Suivez-nous</h4>
                <div className="social-links">
                  <a href="#" aria-label="Facebook">📘</a>
                  <a href="#" aria-label="Instagram">📷</a>
                  <a href="#" aria-label="Twitter">🐦</a>
                  <a href="#" aria-label="YouTube">📺</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 ShoeStore. Tous droits réservés.</p>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
