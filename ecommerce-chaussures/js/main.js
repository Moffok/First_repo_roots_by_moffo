// Données des produits
const products = [
    {
        id: 1,
        name: "Nike Air Max",
        category: "sport",
        price: 129.99,
        rating: 5,
        badge: "Nouveau",
        description: "Les Nike Air Max offrent un confort exceptionnel et un style sportif. Parfaites pour la course et les activités quotidiennes.",
        sizes: [38, 39, 40, 41, 42, 43, 44]
    },
    {
        id: 2,
        name: "Adidas Ultraboost",
        category: "sport",
        price: 159.99,
        rating: 5,
        badge: "Populaire",
        description: "Technologie Boost pour un retour d'énergie incroyable. Confort optimal pour vos performances sportives.",
        sizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 3,
        name: "Converse Chuck Taylor",
        category: "casual",
        price: 69.99,
        rating: 4,
        badge: null,
        description: "Le classique intemporel. Style décontracté qui va avec tout. Parfait pour tous les jours.",
        sizes: [36, 37, 38, 39, 40, 41, 42]
    },
    {
        id: 4,
        name: "Vans Old Skool",
        category: "casual",
        price: 74.99,
        rating: 5,
        badge: null,
        description: "Icône du skate et de la culture streetwear. Design classique avec la bande latérale distinctive.",
        sizes: [37, 38, 39, 40, 41, 42, 43]
    },
    {
        id: 5,
        name: "Puma RS-X",
        category: "sport",
        price: 109.99,
        rating: 4,
        badge: "Promo",
        description: "Design audacieux et technologie de pointe. Un mélange parfait de style rétro et moderne.",
        sizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 6,
        name: "New Balance 574",
        category: "casual",
        price: 89.99,
        rating: 5,
        badge: null,
        description: "Confort légendaire et style polyvalent. Idéales pour un look décontracté chic.",
        sizes: [38, 39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 7,
        name: "Oxford Classic",
        category: "formal",
        price: 149.99,
        rating: 5,
        badge: "Premium",
        description: "Chaussures formelles élégantes en cuir véritable. Parfaites pour les occasions spéciales.",
        sizes: [39, 40, 41, 42, 43, 44]
    },
    {
        id: 8,
        name: "Derby Leather",
        category: "formal",
        price: 139.99,
        rating: 4,
        badge: null,
        description: "Style classique britannique. Cuir de haute qualité et finition soignée.",
        sizes: [40, 41, 42, 43, 44, 45]
    },
    {
        id: 9,
        name: "Reebok Classic",
        category: "casual",
        price: 79.99,
        rating: 4,
        badge: null,
        description: "Un retour aux sources avec ce modèle emblématique. Confort et style vintage.",
        sizes: [37, 38, 39, 40, 41, 42, 43]
    },
    {
        id: 10,
        name: "Asics Gel-Kayano",
        category: "sport",
        price: 169.99,
        rating: 5,
        badge: "Pro",
        description: "Stabilité et amorti exceptionnels. La référence pour les coureurs exigeants.",
        sizes: [39, 40, 41, 42, 43, 44, 45]
    },
    {
        id: 11,
        name: "Timberland Boots",
        category: "casual",
        price: 189.99,
        rating: 5,
        badge: "Bestseller",
        description: "La botte iconique. Résistante, confortable et intemporelle.",
        sizes: [40, 41, 42, 43, 44, 45]
    },
    {
        id: 12,
        name: "Loafers Premium",
        category: "formal",
        price: 119.99,
        rating: 4,
        badge: null,
        description: "Élégance décontractée. Parfaites pour un look business casual.",
        sizes: [39, 40, 41, 42, 43, 44]
    }
];

// Panier
let cart = [];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    loadProducts(products);
    setupEventListeners();
    loadCartFromStorage();
    updateCartCount();
});

// Charger les produits
function loadProducts(productsToDisplay) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    productsToDisplay.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Créer une carte produit
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card fade-in';
    card.dataset.category = product.category;

    const stars = getStars(product.rating);

    card.innerHTML = `
        <div class="product-image">
            <i class="fas fa-shoe-prints"></i>
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <span class="product-category">${capitalizeFirst(product.category)}</span>
            <h3 class="product-title">${product.name}</h3>
            <div class="product-rating">${stars}</div>
            <div class="product-price">${product.price.toFixed(2)}€</div>
            <div class="product-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Ajouter
                </button>
                <button class="view-details" onclick="openProductModal(${product.id})">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
    `;

    return card;
}

// Générer les étoiles
function getStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.floor(rating)) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Capitaliser la première lettre
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Filtres de produits
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            if (filter === 'all') {
                loadProducts(products);
            } else {
                const filtered = products.filter(p => p.category === filter);
                loadProducts(filtered);
            }
        });
    });

    // Navigation mobile
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Panier
    const cartIcon = document.getElementById('cartIcon');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.getElementById('closeCart');
    const overlay = createOverlay();

    cartIcon.addEventListener('click', () => {
        cartModal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeCart.addEventListener('click', () => {
        cartModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    overlay.addEventListener('click', () => {
        cartModal.classList.remove('active');
        document.getElementById('productModal').classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Modal produit
    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => {
        document.getElementById('productModal').classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Recherche
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.category.toLowerCase().includes(searchTerm)
        );
        loadProducts(filtered);
    });

    // Newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Merci pour votre inscription !', 'success');
        newsletterForm.reset();
    });

    // Contact
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Message envoyé avec succès !', 'success');
        contactForm.reset();
    });

    // Checkout
    const checkoutBtn = document.getElementById('checkoutBtn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Votre panier est vide !', 'error');
            return;
        }
        showToast('Commande passée avec succès !', 'success');
        cart = [];
        saveCartToStorage();
        updateCartCount();
        renderCart();
        cartModal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Scroll smooth
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navMenu.classList.remove('active');
            }
        });
    });

    // Animation au scroll
    setupScrollAnimation();
}

// Créer l'overlay
function createOverlay() {
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);
    }
    return overlay;
}

// Ouvrir la modal produit
function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('modalBody');
    const stars = getStars(product.rating);

    modalBody.innerHTML = `
        <div class="modal-image">
            <i class="fas fa-shoe-prints"></i>
        </div>
        <div class="modal-details">
            <span class="product-category">${capitalizeFirst(product.category)}</span>
            <h2>${product.name}</h2>
            <div class="product-rating">${stars}</div>
            <div class="product-price">${product.price.toFixed(2)}€</div>
            <p>${product.description}</p>
            <div class="size-selector">
                <h4>Taille:</h4>
                <div class="sizes">
                    ${product.sizes.map(size => `
                        <button class="size-btn" onclick="selectSize(this, ${size})">${size}</button>
                    `).join('')}
                </div>
            </div>
            <div class="modal-actions">
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Ajouter au panier
                </button>
            </div>
        </div>
    `;

    const modal = document.getElementById('productModal');
    const overlay = document.querySelector('.overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Sélectionner une taille
let selectedSize = null;
function selectSize(btn, size) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSize = size;
}

// Ajouter au panier
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1,
            selectedSize: selectedSize || product.sizes[0]
        });
    }

    selectedSize = null;
    saveCartToStorage();
    updateCartCount();
    renderCart();
    
    // Fermer la modal si ouverte
    const productModal = document.getElementById('productModal');
    if (productModal.classList.contains('active')) {
        productModal.classList.remove('active');
        document.querySelector('.overlay').classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    showToast(`${product.name} ajouté au panier !`, 'success');
}

// Afficher le panier
function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem;"></i><p>Votre panier est vide</p></div>';
        cartTotal.textContent = '0.00€';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <i class="fas fa-shoe-prints"></i>
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${item.price.toFixed(2)}€</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <small>Taille: ${item.selectedSize}</small>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total.toFixed(2)}€`;
}

// Mettre à jour la quantité
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }

    saveCartToStorage();
    updateCartCount();
    renderCart();
}

// Supprimer du panier
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartCount();
    renderCart();
    showToast('Produit retiré du panier', 'success');
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Sauvegarder le panier dans le localStorage
function saveCartToStorage() {
    localStorage.setItem('shoestore_cart', JSON.stringify(cart));
}

// Charger le panier depuis le localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('shoestore_cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Afficher un toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Animation au scroll
function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Navigation active state au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Navbar shadow on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
});
