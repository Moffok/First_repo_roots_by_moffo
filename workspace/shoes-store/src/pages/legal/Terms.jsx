import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptation des conditions</h2>
              <p className="mb-4">
                En accédant et en utilisant ce site web, vous acceptez pleinement et sans réserve les présentes conditions générales d'utilisation. 
                Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description du service</h2>
              <p className="mb-4">
                Shoes Store est une plateforme de commerce électronique spécialisée dans la vente de chaussures de toutes catégories: 
                running, casual, basketball, hiking, formal et training. Nous nous engageons à fournir des produits de qualité 
                et un service client exceptionnel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Commandes et paiements</h2>
              <p className="mb-4">
                Toutes les commandes sont soumises à disponibilité des produits. Les prix sont affichés en euros et incluent la TVA. 
                Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal, et les virements bancaires.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmation de commande par email</li>
                <li>Paiement sécurisé crypté SSL</li>
                <li>Facture fournie avec chaque commande</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Livraison</h2>
              <p className="mb-4">
                Nous livrons dans toute la France métropolitaine et dans de nombreux pays européens. Les délais de livraison varient 
                selon la destination:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>France métropolitaine: 2-4 jours ouvrés</li>
                <li>Europe: 5-7 jours ouvrés</li>
                <li>Livraison express disponible (1-2 jours)</li>
                <li>Livraison gratuite dès 100€ d'achat</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Retours et remboursements</h2>
              <p className="mb-4">
                Vous disposez d'un délai de 30 jours pour retourner tout produit acheté, dans son état d'origine et dans son emballage. 
                Les retours sont gratuits et le remboursement est effectué sous 14 jours après réception.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Propriété intellectuelle</h2>
              <p className="mb-4">
                Tous les contenus présents sur ce site (textes, images, logos, marques) sont protégés par le droit d'auteur et appartiennent 
                exclusivement à Shoes Store ou à ses partenaires. Toute reproduction est interdite sans autorisation préalable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Responsabilité</h2>
              <p className="mb-4">
                Shoes Store s'efforce de fournir des informations exactes mais ne peut garantir l'absence totale d'erreurs. 
                Notre responsabilité est limitée au montant de votre commande en cas de problème avéré.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Modification des conditions</h2>
              <p className="mb-4">
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les changements prendront effet immédiatement 
                après leur publication sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact</h2>
              <p className="mb-4">
                Pour toute question concernant ces conditions, contactez-nous à:
              </p>
              <div className="bg-gray-100 p-6 rounded-xl">
                <p><strong>Email:</strong> legal@shoesstore.com</p>
                <p><strong>Téléphone:</strong> +33 1 23 45 67 89</p>
                <p><strong>Adresse:</strong> 123 Avenue du Commerce, 75001 Paris, France</p>
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

export default Terms;
