import { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { products, filterProducts } from '../data/products';
import { Search, ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const [localSearch, setLocalSearch] = useState(query);

  const searchResults = useMemo(() => {
    if (!query) return [];
    return filterProducts(products, { search: query });
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      navigate(`/search?q=${encodeURIComponent(localSearch.trim())}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-6 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour
          </button>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Recherche</h1>
          
          <form onSubmit={handleSearch} className="max-w-3xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Rechercher des chaussures, marques, modèles..."
                className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Rechercher
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!query ? (
          <div className="text-center py-16">
            <Search className="w-24 h-24 mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">Commencez votre recherche</h2>
            <p className="text-gray-500">Entrez un terme pour rechercher des produits</p>
          </div>
        ) : searchResults.length === 0 ? (
          <div className="text-center py-16">
            <Search className="w-24 h-24 mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">Aucun résultat trouvé</h2>
            <p className="text-gray-500 mb-6">Essayez avec d'autres termes ou vérifiez l'orthographe</p>
            <button 
              onClick={() => navigate('/products')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir tous les produits
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Résultats pour "{query}"
              </h2>
              <p className="text-gray-600 mt-1">{searchResults.length} produit(s) trouvé(s)</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.slice(0, 48).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {searchResults.length > 48 && (
              <div className="text-center mt-12">
                <p className="text-gray-600">
                  Affichage de 48 sur {searchResults.length} résultats
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Popular Searches */}
      {!query && (
        <div className="bg-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Recherches populaires</h2>
            <div className="flex flex-wrap gap-3">
              {['Nike Air Max', 'Adidas Ultraboost', 'Running', 'Basketball', 'Nouveautés', 'Promotions'].map((term) => (
                <button
                  key={term}
                  onClick={() => navigate(`/search?q=${encodeURIComponent(term)}`)}
                  className="px-6 py-3 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-full transition-colors font-medium"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
