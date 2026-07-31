import React, { useState } from 'react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('orders');

  const orders = [
    { id: 'CMD-2024-001', date: '15 Jan 2024', total: 259.98, status: 'Livré', items: 2 },
    { id: 'CMD-2024-002', date: '22 Jan 2024', total: 129.99, status: 'En cours', items: 1 },
    { id: 'CMD-2024-003', date: '28 Jan 2024', total: 349.97, status: 'Expédié', items: 3 },
  ];

  const addresses = [
    { type: 'Domicile', street: '123 Rue de la Paix', city: 'Paris', zip: '75001', country: 'France', default: true },
    { type: 'Travail', street: '456 Avenue des Champs', city: 'Lyon', zip: '69001', country: 'France', default: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  JD
                </div>
                <h2 className="text-xl font-bold text-gray-900">Jean Dupont</h2>
                <p className="text-gray-600">jean.dupont@email.com</p>
              </div>
              <nav className="space-y-2">
                {[
                  { id: 'orders', label: 'Mes Commandes', icon: '📦' },
                  { id: 'addresses', label: 'Adresses', icon: '📍' },
                  { id: 'wishlist', label: 'Favoris', icon: '❤️' },
                  { id: 'settings', label: 'Paramètres', icon: '⚙️' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${
                      activeTab === item.id 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {activeTab === 'orders' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mes Commandes</h2>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="font-bold text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          order.status === 'Livré' ? 'bg-green-100 text-green-700' :
                          order.status === 'En cours' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-600">{order.items} articles</p>
                        <p className="text-2xl font-bold text-blue-600">{order.total.toFixed(2)} €</p>
                      </div>
                      <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                        Voir détails →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-gray-900">Mes Adresses</h2>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    + Nouvelle adresse
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {addresses.map((addr, idx) => (
                    <div key={idx} className={`border-2 rounded-xl p-6 ${addr.default ? 'border-blue-600' : 'border-gray-200'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{addr.type}</h3>
                        {addr.default && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                            Par défaut
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-2">{addr.street}</p>
                      <p className="text-gray-600 mb-2">{addr.zip} {addr.city}</p>
                      <p className="text-gray-600 mb-4">{addr.country}</p>
                      <div className="flex gap-3">
                        <button className="text-blue-600 font-semibold hover:text-blue-800">Modifier</button>
                        {!addr.default && (
                          <button className="text-red-600 font-semibold hover:text-red-800">Supprimer</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Mes Favoris</h2>
                <p className="text-gray-600">Vous n'avez pas encore de favoris.</p>
                <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Découvrir nos produits
                </button>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Paramètres du compte</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Nom complet</label>
                    <input type="text" defaultValue="Jean Dupont" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" defaultValue="jean.dupont@email.com" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mot de passe</label>
                    <input type="password" defaultValue="********" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600" />
                  </div>
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                    Enregistrer les modifications
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
