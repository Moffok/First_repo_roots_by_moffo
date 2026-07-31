import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Créer un compte</h1>
          <p className="text-gray-600">Rejoignez notre communauté</p>
        </div>
        
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Nom complet</label>
            <input 
              type="text" 
              placeholder="Jean Dupont"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input 
              type="email" 
              placeholder="votre@email.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Mot de passe</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
            />
            <p className="text-xs text-gray-500 mt-1">Minimum 8 caractères</p>
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Confirmer le mot de passe</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
            />
          </div>
          
          <div className="flex items-start gap-3">
            <input type="checkbox" id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-sm text-gray-600">
              J'accepte les <a href="/terms" className="text-blue-600 hover:text-blue-800">conditions d'utilisation</a> et la <a href="/privacy" className="text-blue-600 hover:text-blue-800">politique de confidentialité</a>
            </label>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            S'inscrire
          </button>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Déjà un compte?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:text-blue-800">
              Se connecter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
