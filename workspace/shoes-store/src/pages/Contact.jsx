import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="page-header">
          <h1>Contactez-nous</h1>
          <p>Une question ? Notre équipe est là pour vous aider</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <Mail size={24} />
              <div>
                <h3>Email</h3>
                <p>contact@shoestore.com</p>
              </div>
            </div>
            <div className="info-card">
              <Phone size={24} />
              <div>
                <h3>Téléphone</h3>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>
            <div className="info-card">
              <MapPin size={24} />
              <div>
                <h3>Adresse</h3>
                <p>123 Rue de la Mode, 75001 Paris</p>
              </div>
            </div>
            <div className="info-card">
              <Clock size={24} />
              <div>
                <h3>Horaires</h3>
                <p>Lun - Sam: 9h00 - 19h00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Choisissez un sujet</option>
                <option value="commande">Commande</option>
                <option value="produit">Information produit</option>
                <option value="retour">Retour / Échange</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary btn-full">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
