// Générateur de produits pour créer des milliers de pages dynamiques
const brands = ["Nike", "Adidas", "Puma", "New Balance", "Jordan", "Reebok", "Asics", "Vans", "Converse", "Under Armour"];
const models = ["Air Max", "Ultraboost", "RS-X", "574", "Air 1", "Classic", "Gel-Kayano", "Old Skool", "Chuck Taylor", "HOVR"];
const variants = ["Pro", "Elite", "Plus", "Max", "Ultra", "Prime", "X", "S", "R", "V2"];
const colors = ["Noir", "Blanc", "Rouge", "Bleu", "Vert", "Gris", "Orange", "Violet", "Rose", "Jaune"];
const categoriesList = ["running", "lifestyle", "basketball", "skate", "training", "football", "tennis", "hiking"];

const generateProducts = () => {
  const products = [];
  let id = 1;
  
  // Générer 1000 produits uniques
  for (let i = 0; i < 1000; i++) {
    const brand = brands[Math.floor(i / 100) % brands.length];
    const model = models[Math.floor(i / 50) % models.length];
    const variant = variants[i % variants.length];
    const color = colors[i % colors.length];
    const category = categoriesList[i % categoriesList.length];
    
    const basePrice = 60 + (i % 200);
    const price = parseFloat((basePrice + Math.random() * 100).toFixed(2));
    
    products.push({
      id: id++,
      name: `${brand} ${model} ${variant} ${color}`,
      price: price,
      originalPrice: parseFloat((price * 1.2).toFixed(2)),
      category: category,
      brand: brand,
      model: model,
      image: `/images/shoe-${(i % 100) + 1}.svg`,
      images: [
        `/images/shoe-${(i % 100) + 1}.svg`,
        `/images/shoe-${((i + 10) % 100) + 1}.svg`,
        `/images/shoe-${((i + 20) % 100) + 1}.svg`
      ],
      description: `Découvrez la ${brand} ${model} ${variant} dans une finition ${color}. Conçue pour ${category === 'running' ? 'les coureurs exigeants' : category === 'basketball' ? 'les joueurs de basket' : category === 'skate' ? 'les skateurs professionnels' : 'un style urbain unique'}. Cette chaussure allie performance et confort grâce à ses technologies innovantes.`,
      sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
      colors: colors.slice(0, 3),
      rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1)),
      reviews: Math.floor(Math.random() * 500) + 10,
      stock: Math.floor(Math.random() * 100) + 5,
      isNew: i < 50,
      isSale: i % 7 === 0,
      tags: [category, brand.toLowerCase(), variant.toLowerCase(), "trending"]
    });
  }
  
  return products;
};

export const products = generateProducts();

export const categories = [
  { id: 'all', name: 'Toutes', icon: '👟', count: 1000 },
  { id: 'running', name: 'Running', icon: '🏃', count: 125 },
  { id: 'lifestyle', name: 'Lifestyle', icon: '😎', count: 125 },
  { id: 'basketball', name: 'Basketball', icon: '🏀', count: 125 },
  { id: 'skate', name: 'Skate', icon: '🛹', count: 125 },
  { id: 'training', name: 'Training', icon: '💪', count: 125 },
  { id: 'football', name: 'Football', icon: '⚽', count: 125 },
  { id: 'tennis', name: 'Tennis', icon: '🎾', count: 125 },
  { id: 'hiking', name: 'Randonnée', icon: '🥾', count: 125 }
];

export const brandsList = [
  { id: 'nike', name: 'Nike', logo: '✓' },
  { id: 'adidas', name: 'Adidas', logo: '△' },
  { id: 'puma', name: 'Puma', logo: '🐆' },
  { id: 'new-balance', name: 'New Balance', logo: 'NB' },
  { id: 'jordan', name: 'Jordan', logo: '🏀' },
  { id: 'reebok', name: 'Reebok', logo: 'Δ' },
  { id: 'asics', name: 'Asics', logo: 'A' },
  { id: 'vans', name: 'Vans', logo: 'V' },
  { id: 'converse', name: 'Converse', logo: '★' },
  { id: 'under-armour', name: 'Under Armour', logo: 'UA' }
];

export const collections = [
  { id: 'new-arrivals', name: 'Nouveautés', count: 50 },
  { id: 'best-sellers', name: 'Meilleures Ventes', count: 100 },
  { id: 'sale', name: 'Promotions', count: 143 },
  { id: 'limited-edition', name: 'Édition Limitée', count: 25 },
  { id: 'eco-friendly', name: 'Éco-responsable', count: 75 },
  { id: 'premium', name: 'Premium', count: 50 }
];

// Fonction utilitaire pour filtrer les produits
export const filterProducts = (products, filters) => {
  let filtered = [...products];
  
  if (filters.category && filters.category !== 'all') {
    filtered = filtered.filter(p => p.category === filters.category);
  }
  
  if (filters.brand) {
    filtered = filtered.filter(p => p.brand.toLowerCase().replace(' ', '-') === filters.brand);
  }
  
  if (filters.minPrice) {
    filtered = filtered.filter(p => p.price >= filters.minPrice);
  }
  
  if (filters.maxPrice) {
    filtered = filtered.filter(p => p.price <= filters.maxPrice);
  }
  
  if (filters.size) {
    filtered = filtered.filter(p => p.sizes.includes(parseInt(filters.size)));
  }
  
  if (filters.color) {
    filtered = filtered.filter(p => p.colors.includes(filters.color));
  }
  
  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower)
    );
  }
  
  return filtered;
};

// Fonction pour trier les produits
export const sortProducts = (products, sortBy) => {
  const sorted = [...products];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    default:
      return sorted;
  }
};
