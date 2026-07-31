import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 101, name: 'Air Max Pro', category: 'running', price: 129.99, image: '/images/shoe-101.svg' },
  { id: 102, name: 'Urban Street', category: 'casual', price: 89.99, image: '/images/shoe-102.svg' },
  { id: 103, name: 'Trail Blazer', category: 'hiking', price: 149.99, image: '/images/shoe-103.svg' },
  { id: 104, name: 'Court Master', category: 'basketball', price: 159.99, image: '/images/shoe-104.svg' },
  { id: 105, name: 'Speed Racer', category: 'running', price: 119.99, image: '/images/shoe-105.svg' },
  { id: 106, name: 'Classic Leather', category: 'formal', price: 179.99, image: '/images/shoe-106.svg' },
  { id: 107, name: 'Comfort Walk', category: 'casual', price: 79.99, image: '/images/shoe-107.svg' },
  { id: 108, name: 'Mountain Peak', category: 'hiking', price: 169.99, image: '/images/shoe-108.svg' },
  { id: 109, name: 'Dunk Elite', category: 'basketball', price: 139.99, image: '/images/shoe-109.svg' },
  { id: 110, name: 'Marathon Plus', category: 'running', price: 134.99, image: '/images/shoe-110.svg' },
];

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/products" className="text-blue-600 hover:text-blue-800">← Retour aux produits</Link>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <img src="/images/featured-shoe.svg" alt="Chaussure détaillée" className="w-full h-auto" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Air Max Pro</h1>
            <p className="text-3xl text-blue-600 font-semibold mb-6">129.99 €</p>
            <p className="text-gray-600 mb-8">
              Découvrez la nouvelle génération de chaussures de running avec une technologie d'amorti révolutionnaire. 
              Conçues pour les coureurs exigeants, elles offrent un confort exceptionnel et une durabilité optimale.
            </p>
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Tailles disponibles:</h3>
              <div className="flex gap-2 flex-wrap">
                {[38, 39, 40, 41, 42, 43, 44, 45].map(size => (
                  <button key={size} className="px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Couleurs:</h3>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-black border-2 border-gray-300 hover:border-blue-600"></button>
                <button className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 hover:border-blue-600"></button>
                <button className="w-10 h-10 rounded-full bg-blue-600 border-2 border-gray-300 hover:border-blue-600"></button>
                <button className="w-10 h-10 rounded-full bg-red-600 border-2 border-gray-300 hover:border-blue-600"></button>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
              Ajouter au panier
            </button>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Livraison gratuite</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Retours gratuits sous 30 jours</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Garantie 2 ans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
