import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RefreshCcw } from 'lucide-react';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Trouvez vos chaussures parfaites</h1>
            <p>Découvrez notre collection exclusive de chaussures pour tous les styles et toutes les occasions. Qualité premium, confort exceptionnel.</p>
            <Link to="/products" className="btn-primary btn-large">
              Voir la collection <ArrowRight size={20} />
            </Link>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop" 
              alt="Chaussures premium"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Truck size={40} className="feature-icon" />
              <h3>Livraison Gratuite</h3>
              <p>Livraison offerte dès 100€ d'achat. Expédition rapide et sécurisée.</p>
            </div>
            <div className="feature-card">
              <Shield size={40} className="feature-icon" />
              <h3>Paiement Sécurisé</h3>
              <p>Vos paiements sont protégés par un cryptage SSL de niveau bancaire.</p>
            </div>
            <div className="feature-card">
              <RefreshCcw size={40} className="feature-icon" />
              <h3>Retours Faciles</h3>
              <p>30 jours pour changer d'avis. Retours gratuits et sans complication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Nos Meilleures Ventes</h2>
            <Link to="/products" className="view-all">
              Voir tout <ArrowRight size={16} />
            </Link>
          </div>
          <div className="product-grid-preview">
            <div className="preview-card">
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop" 
                alt="Nike Air Max"
              />
              <h3>Nike Air Max 90</h3>
              <p className="price">129.99 €</p>
            </div>
            <div className="preview-card">
              <img 
                src="https://images.unsplash.com/photo-1587563871167-1ee797312e4e?w=400&h=400&fit=crop" 
                alt="Adidas Ultraboost"
              />
              <h3>Adidas Ultraboost</h3>
              <p className="price">179.99 €</p>
            </div>
            <div className="preview-card">
              <img 
                src="https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=400&h=400&fit=crop" 
                alt="Jordan Air 1"
              />
              <h3>Jordan Air 1 Mid</h3>
              <p className="price">149.99 €</p>
            </div>
            <div className="preview-card">
              <img 
                src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop" 
                alt="Asics Gel-Kayano"
              />
              <h3>Asics Gel-Kayano</h3>
              <p className="price">159.99 €</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container newsletter-content">
          <h2>Restez informé</h2>
          <p>Inscrivez-vous à notre newsletter pour recevoir nos dernières nouveautés et offres exclusives.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre adresse email" />
            <button type="submit" className="btn-primary">S'inscrire</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
