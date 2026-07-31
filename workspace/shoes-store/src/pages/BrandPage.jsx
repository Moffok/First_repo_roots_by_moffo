import { useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { products, brandsList, filterProducts } from '../data/products';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const BrandPage = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();
  
  const brand = brandsList.find(b => b.id === brandId);
  
  const brandProducts = useMemo(() => {
    return filterProducts(products, { brand: brandId });
  }, [brandId]);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Marque non trouvée</h1>
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
      {/* Brand Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => navigate('/products')}
            className="flex items-center gap-2 mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft size={20} />
            Retour
          </button>
          
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-blue-600">
              {brand.logo}
            </div>
            <div>
              <h1 className="text-5xl font-bold mb-2">{brand.name}</h1>
              <p className="text-blue-100 text-xl">{brandProducts.length} produits disponibles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {brandProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">Aucun produit trouvé pour cette marque</p>
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
              {brandProducts.slice(0, 48).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {brandProducts.length > 48 && (
              <div className="text-center mt-12">
                <p className="text-gray-600">
                  Affichage de 48 sur {brandProducts.length} produits
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Other Brands */}
      <div className="bg-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Autres marques</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {brandsList.filter(b => b.id !== brandId).map((otherBrand) => (
              <button
                key={otherBrand.id}
                onClick={() => navigate(`/brand/${otherBrand.id}`)}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-700 group-hover:text-blue-600 group-hover:scale-110 transition-all">
                  {otherBrand.logo}
                </div>
                <p className="text-center mt-4 font-semibold text-gray-900">{otherBrand.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
