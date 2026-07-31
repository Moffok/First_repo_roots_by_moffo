import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CategoryDetail = () => {
  const { id } = useParams();
  
  const categoryNames = {
    1: 'Running',
    2: 'Casual',
    3: 'Basketball',
    4: 'Hiking',
    5: 'Formal',
    6: 'Training'
  };

  const categoryName = categoryNames[id] || 'Catégorie';

  const products = [
    { id: 1, name: 'Air Max Pro', price: 129.99, image: '/images/shoe-1.svg' },
    { id: 2, name: 'Speed Racer', price: 119.99, image: '/images/shoe-2.svg' },
    { id: 3, name: 'Marathon Plus', price: 134.99, image: '/images/shoe-3.svg' },
    { id: 4, name: 'Ultra Boost', price: 144.99, image: '/images/shoe-4.svg' },
    { id: 5, name: 'Cloud Runner', price: 139.99, image: '/images/shoe-5.svg' },
    { id: 6, name: 'Swift Flow', price: 124.99, image: '/images/shoe-6.svg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/categories" className="text-blue-600 hover:text-blue-800">← Retour aux catégories</Link>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 mb-12 text-white">
          <h1 className="text-5xl font-bold mb-4">{categoryName}</h1>
          <p className="text-xl opacity-90">Découvrez notre collection complète de chaussures {categoryName.toLowerCase()}</p>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full whitespace-nowrap">Tous</button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:border-blue-600 whitespace-nowrap">Nouveautés</button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:border-blue-600 whitespace-nowrap">Best-sellers</button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:border-blue-600 whitespace-nowrap">Prix croissant</button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full border border-gray-300 hover:border-blue-600 whitespace-nowrap">Prix décroissant</button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img src="/images/product-placeholder.svg" alt={product.name} className="w-56 h-56 object-contain transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-2xl text-blue-600 font-semibold">{product.price.toFixed(2)} €</p>
                <button className="mt-4 w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors">
                  Voir détails
                </button>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Charger plus de produits
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
