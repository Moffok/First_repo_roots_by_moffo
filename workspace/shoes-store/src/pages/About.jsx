const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1>À Propos de ShoeStore</h1>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Notre Histoire</h2>
            <p>
              Fondée en 2024, ShoeStore est née d'une passion pour les chaussures de qualité 
              et le style urbain. Notre mission est simple : proposer aux passionnés de sneakers 
              une sélection exclusive des meilleures marques mondiales.
            </p>
            <p>
              Nous croyons que chaque pas compte, et c'est pourquoi nous mettons un point d'honneur 
              à sélectionner des produits qui allient confort, durabilité et design innovant.
            </p>
          </section>

          <section className="about-section">
            <h2>Nos Valeurs</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>🎯 Qualité Premium</h3>
                <p>Nous ne proposons que des produits authentiques provenant directement des marques officielles.</p>
              </div>
              <div className="value-card">
                <h3>🌍 Durabilité</h3>
                <p>Nous privilégions les marques engagées dans des pratiques de production responsables.</p>
              </div>
              <div className="value-card">
                <h3>💡 Innovation</h3>
                <p>Nous suivons les dernières tendances et technologies du monde de la chaussure.</p>
              </div>
              <div className="value-card">
                <h3>🤝 Service Client</h3>
                <p>Une équipe passionnée à votre écoute pour vous conseiller au mieux.</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>Pourquoi Nous Choisir ?</h2>
            <ul className="why-us-list">
              <li>✓ Plus de 500 modèles disponibles en permanence</li>
              <li>✓ Expédition gratuite dès 100€ d'achat</li>
              <li>✓ Retours gratuits sous 30 jours</li>
              <li>✓ Service client disponible 7j/7</li>
              <li>✓ Paiement sécurisé et crypté</li>
              <li>✓ Programme de fidélité avec avantages exclusifs</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
