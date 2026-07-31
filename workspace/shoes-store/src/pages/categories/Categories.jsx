import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Running', description: 'Chaussures de course performantes', image: '/images/category-running.svg', count: 45 },
  { id: 2, name: 'Casual', description: 'Style décontracté pour tous les jours', image: '/images/category-casual.svg', count: 38 },
  { id: 3, name: 'Basketball', description: 'Pour dominer le terrain', image: '/images/category-basketball.svg', count: 27 },
  { id: 4, name: 'Hiking', description: 'Adventure en montagne', image: '/images/category-hiking.svg', count: 32 },
  { id: 5, name: 'Formal', description: 'Élégance et sophistication', image: '/images/category-formal.svg', count: 22 },
  { id: 6, name: 'Training', description: 'Entraînement intensif', image: '/images/category-training.svg', count: 35 },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Nos Catégories</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre large gamme de chaussures organisées par catégorie pour trouver facilement votre style idéal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id} 
              to={`/categories/${category.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <img src="/images/category-placeholder.svg" alt={category.name} className="w-48 h-48 object-contain" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count} produits</span>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    Voir →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Guide des Catégories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Comment choisir?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                  <span>Identifiez votre usage principal (sport, travail, loisirs)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                  <span>Considérez le niveau de confort requis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                  <span>Vérifiez les caractéristiques techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                  <span>Lisez les avis clients</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Nos Best-Sellers</h3>
              <div className="space-y-4">
                {[
                  { name: 'Air Max Pro', category: 'Running', price: '129.99€' },
                  { name: 'Urban Street', category: 'Casual', price: '89.99€' },
                  { name: 'Court Master', category: 'Basketball', price: '159.99€' },
                ].map((product, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-blue-600 font-bold">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
