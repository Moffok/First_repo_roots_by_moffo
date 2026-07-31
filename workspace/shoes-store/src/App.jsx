import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';

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
                  <li><a href="/about">À propos</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Service client</h4>
                <ul>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Livraison</a></li>
                  <li><a href="#">Retours</a></li>
                  <li><a href="#">Tailles</a></li>
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
