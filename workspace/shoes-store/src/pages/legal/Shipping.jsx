import React from 'react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Livraison</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Zones de livraison</h2>
              <p className="mb-4">
                Nous livrons nos produits dans le monde entier. Voici les zones que nous couvrons:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="font-bold text-blue-900 mb-2">France Métropolitaine</h3>
                  <p className="text-sm text-blue-700">2-4 jours ouvrés</p>
                  <p className="text-sm text-blue-700 mt-2">Gratuit dès 100€</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-bold text-purple-900 mb-2">Europe</h3>
                  <p className="text-sm text-purple-700">5-7 jours ouvrés</p>
                  <p className="text-sm text-purple-700 mt-2">Gratuit dès 150€</p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <h3 className="font-bold text-green-900 mb-2">International</h3>
                  <p className="text-sm text-green-700">7-14 jours ouvrés</p>
                  <p className="text-sm text-green-700 mt-2">Gratuit dès 200€</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Options de livraison</h2>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Livraison Standard</h3>
                    <span className="text-2xl font-bold text-blue-600">Gratuite*</span>
                  </div>
                  <p className="text-gray-600 mb-2">Délai: 2-4 jours ouvrés (France)</p>
                  <p className="text-sm text-gray-500">*Offerte dès 100€ d'achat, sinon 5.99€</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Livraison Express</h3>
                    <span className="text-2xl font-bold text-blue-600">9.99€</span>
                  </div>
                  <p className="text-gray-600 mb-2">Délai: 1-2 jours ouvrés</p>
                  <p className="text-sm text-gray-500">Commandez avant 14h pour expédition le jour même</p>
                </div>
                
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Livraison en Point Relais</h3>
                    <span className="text-2xl font-bold text-blue-600">3.99€</span>
                  </div>
                  <p className="text-gray-600 mb-2">Délai: 3-5 jours ouvrés</p>
                  <p className="text-sm text-gray-500">Plus de 5000 points relais disponibles</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Suivi de commande</h2>
              <p className="mb-4">
                Dès l'expédition de votre commande, vous recevrez un email avec:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Votre numéro de suivi personnalisé</li>
                <li>Un lien vers l'espace de suivi du transporteur</li>
                <li>La date estimée de livraison</li>
                <li>Des notifications SMS optionnelles</li>
              </ul>
              <div className="mt-6 bg-blue-50 p-6 rounded-xl">
                <p className="font-semibold text-blue-900 mb-2">📦 Suivez votre commande en temps réel</p>
                <p className="text-sm text-blue-700">
                  Connectez-vous à votre compte pour accéder à l'historique complet de vos livraisons.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Problèmes de livraison</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-6 py-2">
                  <h3 className="font-bold text-gray-900">Colis retardé</h3>
                  <p className="text-gray-600">Contactez notre service client si votre colis n'est pas arrivé après le délai indiqué.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="font-bold text-gray-900">Colis endommagé</h3>
                  <p className="text-gray-600">Refusez le colis et contactez-nous immédiatement pour un remplacement gratuit.</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="font-bold text-gray-900">Erreur d'adresse</h3>
                  <p className="text-gray-600">Contactez-nous dans les 24h pour modifier l'adresse de livraison.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frais de douane</h2>
              <p className="mb-4">
                Pour les livraisons hors Union Européenne, des frais de douane peuvent s'appliquer. 
                Ces frais sont à la charge du client et varient selon le pays de destination.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="mb-4">
                Une question sur votre livraison? Notre équipe est là pour vous aider:
              </p>
              <div className="bg-gray-100 p-6 rounded-xl">
                <p><strong>Email:</strong> livraison@shoesstore.com</p>
                <p><strong>Téléphone:</strong> +33 1 23 45 67 88</p>
                <p><strong>Horaires:</strong> Lundi-Samedi, 9h-18h</p>
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

export default Shipping;
