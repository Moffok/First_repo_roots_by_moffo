import React from 'react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Chez Shoes Store, nous prenons la protection de vos données personnelles très au sérieux. 
                Cette politique explique comment nous collectons, utilisons et protégeons vos informations 
                lorsque vous utilisez notre site web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Données collectées</h2>
              <p className="mb-4">Nous pouvons collecter les types de données suivants:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Informations d'identification:</strong> nom, prénom, adresse email, téléphone</li>
                <li><strong>Informations de livraison:</strong> adresse postale, code postal, ville, pays</li>
                <li><strong>Informations de paiement:</strong> détails de carte de crédit (cryptés)</li>
                <li><strong>Données de navigation:</strong> historique de visite, pages consultées</li>
                <li><strong>Préférences:</strong> tailles, couleurs favorites, newsletter</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Utilisation des données</h2>
              <p className="mb-4">Vos données sont utilisées pour:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Traiter et livrer vos commandes</li>
                <li>Communiquer avec vous concernant vos achats</li>
                <li>Améliorer notre service client</li>
                <li>Personnaliser votre expérience sur le site</li>
                <li>Vous envoyer des offres promotionnelles (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Partage des données</h2>
              <p className="mb-4">
                Nous ne vendons jamais vos données personnelles. Nous pouvons partager vos informations uniquement avec:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Nos prestataires de livraison (Colissimo, Chronopost, DHL)</li>
                <li>Nos processeurs de paiement sécurisés (Stripe, PayPal)</li>
                <li>Nos prestataires techniques (hébergement, maintenance)</li>
                <li>Les autorités légales si requis par la loi</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Sécurité des données</h2>
              <p className="mb-4">
                Nous mettons en œuvre des mesures de sécurité avancées pour protéger vos données:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cryptage SSL/TLS pour toutes les transactions</li>
                <li>Serveurs sécurisés conformes aux standards PCI-DSS</li>
                <li>Authentification à deux facteurs disponible</li>
                <li>Surveillance continue contre les intrusions</li>
                <li>Formation régulière de notre équipe à la sécurité</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Vos droits</h2>
              <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Droit d'accès:</strong> consulter vos données personnelles</li>
                <li><strong>Droit de rectification:</strong> corriger des informations inexactes</li>
                <li><strong>Droit à l'effacement:</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation:</strong> restreindre le traitement de vos données</li>
                <li><strong>Droit à la portabilité:</strong> récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition:</strong> vous opposer au traitement de vos données</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <p className="mb-4">
                Notre site utilise des cookies pour améliorer votre expérience:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies essentiels:</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies de performance:</strong> analysent l'utilisation du site</li>
                <li><strong>Cookies fonctionnels:</strong> mémorisent vos préférences</li>
                <li><strong>Cookies publicitaires:</strong> affichent des contenus pertinents</li>
              </ul>
              <p className="mt-4">
                Vous pouvez gérer vos préférences de cookies à tout moment via les paramètres de votre navigateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Conservation des données</h2>
              <p className="mb-4">
                Nous conservons vos données personnelles uniquement aussi longtemps que nécessaire:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Données de compte: tant que votre compte est actif + 3 ans</li>
                <li>Données de commande: 10 ans (obligation légale comptable)</li>
                <li>Données de navigation: 13 mois maximum</li>
                <li>Cookies: 13 mois maximum</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact DPO</h2>
              <p className="mb-4">
                Pour exercer vos droits ou poser des questions sur la confidentialité:
              </p>
              <div className="bg-gray-100 p-6 rounded-xl">
                <p><strong>Délégué à la Protection des Données:</strong> Jane Martin</p>
                <p><strong>Email:</strong> dpo@shoesstore.com</p>
                <p><strong>Téléphone:</strong> +33 1 23 45 67 90</p>
                <p><strong>Adresse:</strong> 123 Avenue du Commerce, 75001 Paris, France</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Autorité de contrôle</h2>
              <p className="mb-4">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez déposer une réclamation auprès de:
              </p>
              <div className="bg-gray-100 p-6 rounded-xl">
                <p><strong>CNIL (Commission Nationale de l'Informatique et des Libertés)</strong></p>
                <p>3 Place de Fontenoy, 75007 Paris, France</p>
                <p>Site web: www.cnil.fr</p>
              </div>
            </section>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">Dernière mise à jour: Janvier 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
