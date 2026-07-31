import { useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { products, collections, filterProducts } from '../data/products';
import { ArrowLeft, Tag } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const CollectionPage = () => {
  const { collectionId } = useParams();
  const navigate = useNavigate();
  
  const collection = collections.find(c => c.id === collectionId);
  
  const collectionProducts = useMemo(() => {
    let filtered = [...products];
    
    switch (collectionId) {
      case 'new-arrivals':
        filtered = filtered.filter(p => p.isNew);
        break;
      case 'best-sellers':
        filtered = filtered.filter(p => p.reviews > 100 && p.rating >= 4);
        break;
      case 'sale':
        filtered = filtered.filter(p => p.isSale);
        break;
      case 'limited-edition':
        filtered = filtered.filter(p => p.stock < 20);
        break;
      case 'eco-friendly':
        filtered = filtered.filter(p => p.tags.includes('eco-friendly'));
        break;
      case 'premium':
        filtered = filtered.filter(p => p.price > 150);
        break;
      default:
        filtered = [];
    }
    
    return filtered;
  }, [collectionId]);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Collection non trouvée</h1>
          <button 
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour aux produits
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Collection Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 mb-6 hover:text-purple-200 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour
          </button>
          
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Tag size={48} />
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{collection.name}</h1>
              <p className="text-purple-100 text-xl">{collectionProducts.length} produits dans cette collection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {collectionProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">Aucun produit trouvé dans cette collection</p>
            <button 
              onClick={() => navigate('/products')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Voir tous les produits
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {collectionProducts.slice(0, 48).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {collectionProducts.length > 48 && (
              <div className="text-center mt-12">
                <p className="text-gray-600">
                  Affichage de 48 sur {collectionProducts.length} produits
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Other Collections */}
      <div className="bg-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Autres collections</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {collections.filter(c => c.id !== collectionId).map((otherCollection) => (
              <button
                key={otherCollection.id}
                onClick={() => navigate(`/collection/${otherCollection.id}`)}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all group border border-gray-200"
              >
                <Tag className="w-10 h-10 mx-auto text-purple-600 group-hover:scale-110 transition-transform" />
                <p className="text-center mt-4 font-semibold text-gray-900 text-sm">{otherCollection.name}</p>
                <p className="text-center text-xs text-gray-500 mt-1">{otherCollection.count} produits</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
