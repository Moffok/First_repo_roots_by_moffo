import { useState, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { products, categories, brandsList, collections, filterProducts, sortProducts } from '../data/products';
import { Filter, SlidersHorizontal, Grid3x3, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const navigate = useNavigate();
  const { categorySlug } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('default');
  const [filters, setFilters] = useState({
    category: categorySlug || 'all',
    brand: null,
    minPrice: null,
    maxPrice: null,
    size: null,
    color: null,
    search: ''
  });

  const filteredProducts = useMemo(() => {
    let result = filterProducts(products, filters);
    return sortProducts(result, sortBy);
  }, [filters, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'all',
      brand: null,
      minPrice: null,
      maxPrice: null,
      size: null,
      color: null,
      search: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Nos Produits</h1>
          <p className="text-gray-600">{filteredProducts.length} produits trouvés</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <SlidersHorizontal size={20} />
                  Filtres
                </h2>
                <button onClick={clearFilters} className="text-sm text-blue-600 hover:underline">
                  Réinitialiser
                </button>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Catégories</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat.id}
                        onChange={() => handleFilterChange('category', cat.id)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{cat.icon}</span>
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-xs text-gray-500 ml-auto">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Marques</h3>
                <div className="space-y-2">
                  {brandsList.map(brand => (
                    <label key={brand.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.brand === brand.id}
                        onChange={() => handleFilterChange('brand', filters.brand === brand.id ? null : brand.id)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <span className="text-sm">{brand.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Prix</h3>
                <div className="space-y-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice || ''}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value ? parseFloat(e.target.value) : null)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice || ''}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value ? parseFloat(e.target.value) : null)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Collections</h3>
                <div className="space-y-2">
                  {collections.map(collection => (
                    <button
                      key={collection.id}
                      onClick={() => navigate(`/collection/${collection.id}`)}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-50 text-sm transition-colors"
                    >
                      {collection.name}
                      <span className="text-xs text-gray-500 ml-2">({collection.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-md p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
              >
                <Filter size={20} />
                Filtres
              </button>

              <div className="flex items-center gap-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="default">Trier par</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="name-asc">Nom A-Z</option>
                  <option value="rating">Meilleures notes</option>
                  <option value="newest">Nouveautés</option>
                </select>

                <div className="flex items-center gap-2 border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-50'}`}
                  >
                    <Grid3x3 size={20} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-50'}`}
                  >
                    <List size={20} />
                  </button>
                </div>
              </div>
            </div>

            {(filters.brand || filters.minPrice || filters.maxPrice || filters.size || filters.color) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {filters.brand && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center gap-2">
                    {brandsList.find(b => b.id === filters.brand)?.name}
                    <button onClick={() => handleFilterChange('brand', null)} className="hover:text-blue-800">×</button>
                  </span>
                )}
                {filters.minPrice && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center gap-2">
                    Min: {filters.minPrice}€
                    <button onClick={() => handleFilterChange('minPrice', null)} className="hover:text-blue-800">×</button>
                  </span>
                )}
                {filters.maxPrice && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm flex items-center gap-2">
                    Max: {filters.maxPrice}€
                    <button onClick={() => handleFilterChange('maxPrice', null)} className="hover:text-blue-800">×</button>
                  </span>
                )}
              </div>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600 mb-4">Aucun produit trouvé</p>
                <button onClick={clearFilters} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.slice(0, 50).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {filteredProducts.length > 50 && (
              <div className="text-center mt-8">
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Charger plus de produits ({filteredProducts.length - 50} restants)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
