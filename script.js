// Base de datos completa: 40 productos (10 por temporada) con rutas locales en assets/
const products = [
    // ==================== VERANO (1 - 10) ====================
    {
        id: 1,
        name: "Vestido Milkmaid Estampado de Cerezas",
        category: "verano",
        description: "Escote corazón, mangas abullonadas diminutas y una caída coqueta muy fresca.",
        price: 48.00,
        oldPrice: 62.00,
        image: "assets/producto1.jpg",
        isSale: true
    },
    {
        id: 2,
        name: "Set de Crochet Calado Tono Crema",
        category: "verano",
        description: "Bralette + falda midi con abertura; deja ver la piel con sutileza con vibra costera.",
        price: 64.00,
        oldPrice: null,
        image: "assets/producto2.jpg",
        isSale: false
    },
    {
        id: 3,
        name: "Top Tipo Pañuelo de Satén Estampado",
        category: "verano",
        description: "Bandeau triangular que se amarra a la espalda, luce los hombros y eleva unos shorts.",
        price: 26.00,
        oldPrice: 34.00,
        image: "assets/producto3.jpg",
        isSale: true
    },
    {
        id: 4,
        name: "Minifalda con Olanes Escalonados Blanca",
        category: "verano",
        description: "Confeccionada en algodón blanco ligero, con mucho movimiento y un aire femenino.",
        price: 35.00,
        oldPrice: null,
        image: "assets/producto4.jpg",
        isSale: false
    },
    {
        id: 5,
        name: "Sandalias de Plataforma Tiras Acolchadas",
        category: "verano",
        description: "En tono pastel; cómodas, modernas y con ese toque divertido tipo Y2K elegante.",
        price: 42.00,
        oldPrice: 55.00,
        image: "assets/producto5.jpg",
        isSale: true
    },
    {
        id: 6,
        name: "Vestido Lencero Midi Champán",
        category: "verano",
        description: "Slip dress con brillo sutil, tirantes ultra finos y espalda baja que favorece la silueta.",
        price: 58.00,
        oldPrice: null,
        image: "assets/producto6.jpg",
        isSale: false
    },
    {
        id: 7,
        name: "Shorts Tipo Bloomer de Lino con Encaje",
        category: "verano",
        description: "Detalle de encaje en el dobladillo; la tendencia más tierna y fresca con aire vintage.",
        price: 32.00,
        oldPrice: null,
        image: "assets/producto7.jpg",
        isSale: false
    },
    {
        id: 8,
        name: "Bolso Tejido Tipo Cesta con Pañuelo",
        category: "verano",
        description: "Con pañuelo floral amarrado en el asa; el accesorio protagonista para cualquier outfit.",
        price: 39.00,
        oldPrice: 49.00,
        image: "assets/producto8.jpg",
        isSale: true
    },
    {
        id: 9,
        name: "Bikini Textura Smock y Tirantes de Moño",
        category: "verano",
        description: "Acabado nido de abeja dulce y original que resalta el bronceado en la playa.",
        price: 36.00,
        oldPrice: null,
        image: "assets/producto9.jpg",
        isSale: false
    },
    {
        id: 10,
        name: "Kimono Corto de Gasa con Bordados Florales",
        category: "verano",
        description: "Gasa translúcida con flores silvestres para dar un toque bohemio y etéreo.",
        price: 44.00,
        oldPrice: null,
        image: "assets/producto10.jpg",
        isSale: false
    },

    // ==================== PRIMAVERA (11 - 20) ====================
    {
        id: 11,
        name: "Cárdigan Corto con Botones de Perlas",
        category: "primavera",
        description: "Bordados delicados en el pecho; romántico y perfecto para llevar cerrado como blusa.",
        price: 46.00,
        oldPrice: 58.00,
        image: "assets/producto11.jpg",
        isSale: true
    },
    {
        id: 12,
        name: "Vestido Midi de Tul Estampado Acuarela",
        category: "primavera",
        description: "Vaporoso, de ensueño y con mangas transparentes que se mueven con el viento.",
        price: 68.00,
        oldPrice: null,
        image: "assets/producto12.jpg",
        isSale: false
    },
    {
        id: 13,
        name: "Blusa Estilo Corsé Floral con Lazos",
        category: "primavera",
        description: "Lazos en los hombros; marca la cintura y combina increíble con jeans de tiro alto.",
        price: 38.00,
        oldPrice: 48.00,
        image: "assets/producto13.jpg",
        isSale: true
    },
    {
        id: 14,
        name: "Zapatos Mary Jane de Charol Crema",
        category: "primavera",
        description: "Clásicos, femeninos y en tendencia para darle un toque chic a cualquier look.",
        price: 52.00,
        oldPrice: null,
        image: "assets/producto14.jpg",
        isSale: false
    },
    {
        id: 15,
        name: "Falda Midi Satinada Verde Salvia",
        category: "primavera",
        description: "Fluida y luminosa, ideal para combinar con suéteres ligeros o camisetas ajustadas.",
        price: 41.00,
        oldPrice: null,
        image: "assets/producto15.jpg",
        isSale: false
    },
    {
        id: 16,
        name: "Chaqueta Cropped de Tweed Pastel",
        category: "primavera",
        description: "Elegante y coqueta, le da un aire parisino instantáneo a unos pantalones de mezclilla.",
        price: 74.00,
        oldPrice: 92.00,
        image: "assets/producto16.jpg",
        isSale: true
    },
    {
        id: 17,
        name: "Pantalón Ancho de Lino Rosa Empolvado",
        category: "primavera",
        description: "Fresco, favorecedor y con una caída relajada pero muy pulida para el día.",
        price: 49.00,
        oldPrice: null,
        image: "assets/producto17.jpg",
        isSale: false
    },
    {
        id: 18,
        name: "Diadema Acolchada de Satén Fino",
        category: "primavera",
        description: "Accesorio sencillo que arregla el cabello en segundos y luce súper femenino.",
        price: 16.00,
        oldPrice: null,
        image: "assets/producto18.jpg",
        isSale: false
    },
    {
        id: 19,
        name: "Mono Largo Sin Mangas de Lunares",
        category: "primavera",
        description: "Jumpsuit retro, favorecedor y facilísimo de estilizar con alpargatas o tenis blancos.",
        price: 56.00,
        oldPrice: 70.00,
        image: "assets/producto19.jpg",
        isSale: true
    },
    {
        id: 20,
        name: "Blusa de Organza con Mangas Farol",
        category: "primavera",
        description: "Cuello de lazo, translúcida en las mangas y estructurada en el torso; pieza protagonista.",
        price: 45.00,
        oldPrice: null,
        image: "assets/producto20.jpg",
        isSale: false
    },

    // ==================== OTOÑO (21 - 30) ====================
    {
        id: 21,
        name: "Suéter Oversize de Punto Tono Avena",
        category: "otonio",
        description: "Punto suave con hombros caídos; súper acogedor para llevar metido por delante.",
        price: 54.00,
        oldPrice: 68.00,
        image: "assets/producto21.jpg",
        isSale: true
    },
    {
        id: 22,
        name: "Minifalda de Tablas Cuadros Cafés",
        category: "otonio",
        description: "Estilo preppy en cuadros cafés y crema; ideal con medias translúcidas y mocasines.",
        price: 39.00,
        oldPrice: null,
        image: "assets/producto22.jpg",
        isSale: false
    },
    {
        id: 23,
        name: "Abrigo Corto Tipo Capa Tono Camel",
        category: "otonio",
        description: "Cape coat con silueta única, elegante y muy fotogénica al caminar por la ciudad.",
        price: 95.00,
        oldPrice: 120.00,
        image: "assets/producto23.jpg",
        isSale: true
    },
    {
        id: 24,
        name: "Botines de Tacón Bloque Gamuza Miel",
        category: "otonio",
        description: "Estilizan muchísimo, cómodos todo el día y combinan con vestidos y pantalones.",
        price: 78.00,
        oldPrice: null,
        image: "assets/producto24.jpg",
        isSale: false
    },
    {
        id: 25,
        name: "Vestido Suéter Corto Cuello de Tortuga",
        category: "otonio",
        description: "Con mangas amplias; cómodo como pijama pero luce arregladísimo con botas altas.",
        price: 62.00,
        oldPrice: null,
        image: "assets/producto25.jpg",
        isSale: false
    },
    {
        id: 26,
        name: "Boina Francesa de Lana Tono Borgoña",
        category: "otonio",
        description: "Lana suave; el toque final perfecto para elevar cualquier abrigo o suéter liso.",
        price: 24.00,
        oldPrice: 30.00,
        image: "assets/producto26.jpg",
        isSale: true
    },
    {
        id: 27,
        name: "Chaleco Acolchado Floral Vintage",
        category: "otonio",
        description: "Quilted vest artesanal y calientito, súper lindo sobre camisas blancas de manga larga.",
        price: 49.00,
        oldPrice: null,
        image: "assets/producto27.jpg",
        isSale: false
    },
    {
        id: 28,
        name: "Pantalón de Vestir Acampanado Chocolate",
        category: "otonio",
        description: "Corte flare que alarga visualmente las piernas y luce increíble con botines.",
        price: 55.00,
        oldPrice: null,
        image: "assets/producto28.jpg",
        isSale: false
    },
    {
        id: 29,
        name: "Cárdigan Largo Estampado Argyle Tierra",
        category: "otonio",
        description: "Estampado de rombos clásico renovado que se ve súper cozy y con mucha onda.",
        price: 64.00,
        oldPrice: 80.00,
        image: "assets/producto29.jpg",
        isSale: true
    },
    {
        id: 30,
        name: "Bolso Baguette de Gamuza Tono Vino",
        category: "otonio",
        description: "Piel texturizada compacta y sofisticada en el color estrella de la temporada.",
        price: 52.00,
        oldPrice: null,
        image: "assets/producto30.jpg",
        isSale: false
    },

    // ==================== INVIERNO (31 - 40) ====================
    {
        id: 31,
        name: "Abrigo de Borreguito (Teddy Coat) Crema",
        category: "invierno",
        description: "Parece un abrazo gigante, ultra calientito y con un acabado súper tierno.",
        price: 115.00,
        oldPrice: 145.00,
        image: "assets/producto31.jpg",
        isSale: true
    },
    {
        id: 32,
        name: "Suéter Peludito con Escote en V Atrás",
        category: "invierno",
        description: "Tejido fuzzy suave al tacto, acogedor por delante y con detalle coqueto en la espalda.",
        price: 52.00,
        oldPrice: null,
        image: "assets/producto32.jpg",
        isSale: false
    },
    {
        id: 33,
        name: "Botas Altas Over-The-Knee Gamuza Negra",
        category: "invierno",
        description: "Por encima de la rodilla; estilizan al máximo y abrigan con vestidos cortos.",
        price: 98.00,
        oldPrice: 125.00,
        image: "assets/producto33.jpg",
        isSale: true
    },
    {
        id: 34,
        name: "Conjunto Punto Acanalado 3 Piezas",
        category: "invierno",
        description: "Top, pantalón ancho y cárdigan largo; el look más chic y cómodo para viajar o salir.",
        price: 89.00,
        oldPrice: null,
        image: "assets/producto34.jpg",
        isSale: false
    },
    {
        id: 35,
        name: "Orejeras de Pelo Sintético Blanco Invierno",
        category: "invierno",
        description: "Ultra suaves y prácticas para el frío; dan un aire invernal de película.",
        price: 22.00,
        oldPrice: null,
        image: "assets/producto35.jpg",
        isSale: false
    },
    {
        id: 36,
        name: "Vestido Midi de Terciopelo Verde Esmeralda",
        category: "invierno",
        description: "Lujoso, favorecedor y con un brillo sutil espectacular para las noches frías.",
        price: 76.00,
        oldPrice: 95.00,
        image: "assets/producto36.jpg",
        isSale: true
    },
    {
        id: 37,
        name: "Chaqueta Puffer Corta Tono Perla",
        category: "invierno",
        description: "Con cuello alto; abriga muchísimo sin perder la forma ni verse tosca.",
        price: 85.00,
        oldPrice: null,
        image: "assets/producto37.jpg",
        isSale: false
    },
    {
        id: 38,
        name: "Bufanda Gigante Tipo Manta Crema",
        category: "invierno",
        description: "En tonos pastel apagados y crema; súper envolvente y levanta cualquier abrigo oscuro.",
        price: 34.00,
        oldPrice: 44.00,
        image: "assets/producto38.jpg",
        isSale: true
    },
    {
        id: 39,
        name: "Guantes de Punto Sin Dedos Bordados",
        category: "invierno",
        description: "Con detalle de botones; permiten usar el celular mientras mantienen las manos calientes.",
        price: 19.00,
        oldPrice: null,
        image: "assets/producto39.jpg",
        isSale: false
    },
    {
        id: 40,
        name: "Gorro Beanie de Trenzas Punto Grueso",
        category: "invierno",
        description: "Doblez ancho que enmarca el rostro en tonos crema, lila apagado o café con leche.",
        price: 25.00,
        oldPrice: null,
        image: "assets/producto40.jpg",
        isSale: false
    }
];

let cart = [];
let currentFilter = 'todos';

// Inicializar la aplicación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartCount();
});

// Nombres bonitos para las etiquetas de categoría
function formatCategoryLabel(cat) {
    if (cat === 'otonio') return 'OTOÑO';
    return cat.toUpperCase();
}

// Renderizar productos en la cuadrícula
function renderProducts(items) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';

    if (items.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #777; padding: 2rem;">No se encontraron productos.</p>`;
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        let badgeHTML = product.isSale ? `<span class="product-badge">Rebaja</span>` : '';
        let oldPriceHTML = product.oldPrice ? `<span class="product-old-price">$${product.oldPrice.toFixed(2)}</span>` : '';

        card.innerHTML = `
            ${badgeHTML}
            <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
            <div class="product-info">
                <div>
                    <span class="product-category">${formatCategoryLabel(product.category)}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                </div>
                <div>
                    <div class="product-price-container">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        ${oldPriceHTML}
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">Agregar al Carrito</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Filtrar por categoría o rebajas
function filterCategory(category) {
    currentFilter = category;
    const titleEl = document.getElementById('category-title');
    const subtitleEl = document.getElementById('category-subtitle');
    const heroSection = document.getElementById('hero-section');

    if (category === 'todos') {
        heroSection.style.display = 'flex';
        titleEl.textContent = "Catálogo Completo";
        subtitleEl.textContent = "Explora nuestras 40 piezas seleccionadas para cada estación";
        renderProducts(products);
    } else if (category === 'rebajas') {
        heroSection.style.display = 'none';
        titleEl.textContent = "Sección de Rebajas";
        subtitleEl.textContent = "Aprovecha descuentos especiales por tiempo limitado";
        const saleItems = products.filter(p => p.isSale);
        renderProducts(saleItems);
    } else {
        heroSection.style.display = 'none';
        const displayName = category === 'otonio' ? 'Otoño' : category.charAt(0).toUpperCase() + category.slice(1);
        titleEl.textContent = `Colección de ${displayName}`;
        subtitleEl.textContent = `Ropa y accesorios ideales para la temporada de ${displayName.toLowerCase()}`;
        const filtered = products.filter(p => p.category === category);
        renderProducts(filtered);
    }

    document.querySelectorAll('.nav-links a').forEach(el => el.classList.remove('active'));
    if (category === 'todos') {
        document.getElementById('nav-inicio').classList.add('active');
    } else if (category === 'rebajas') {
        document.getElementById('nav-rebajas').classList.add('active');
    }
}

// Búsqueda en tiempo real
function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    let baseList = products;
    
    if (currentFilter === 'rebajas') {
        baseList = products.filter(p => p.isSale);
    } else if (currentFilter !== 'todos') {
        baseList = products.filter(p => p.category === currentFilter);
    }

    const filtered = baseList.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    );
    renderProducts(filtered);
}

// Agregar producto al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartCount();
    renderCartItems();
    alert(`¡"${product.name}" se agregó a tu bolsa!`);
}

// Actualizar contador del carrito
function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalCount;
}

// Abrir / Cerrar Modal del Carrito
function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';
    } else {
        renderCartItems();
        modal.style.display = 'flex';
    }
}

// Renderizar elementos dentro del modal del carrito
function renderCartItems() {
    const container = document.getElementById('cart-items-list');
    const totalPriceEl = document.getElementById('cart-total-price');
    container.innerHTML = '';

    if (cart.length === 0) {
        container.innerHTML = `<p style="color: #777; text-align: center; padding: 2rem;">Tu bolsa está vacía.</p>`;
        totalPriceEl.textContent = '0.00';
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} x ${item.quantity} = <strong>$${itemTotal.toFixed(2)}</strong></p>
            </div>
            <div class="cart-item-actions">
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
                <button class="btn-remove" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
            </div>
        `;
        container.appendChild(div);
    });

    totalPriceEl.textContent = total.toFixed(2);
}

// Cambiar cantidad de producto en el carrito
function changeQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            renderCartItems();
        }
    }
}

// Eliminar producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    updateCartCount();
    renderCartItems();
}

// Procesar Pago con Tarjeta
function processPayment(event) {
    event.preventDefault();

    if (cart.length === 0) {
        alert("Tu bolsa está vacía. Agrega productos antes de pagar.");
        return;
    }

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const cardNum = document.getElementById('card-num').value;

    if (!nombre || !direccion || !cardNum) {
        alert("Por favor completa todos los datos de envío y pago.");
        return;
    }

    document.getElementById('cart-modal').style.display = 'none';
    document.getElementById('success-modal').style.display = 'flex';

    cart = [];
    updateCartCount();
    document.getElementById('checkout-form').reset();
}

// Cerrar modal de éxito
function closeSuccessModal() {
    document.getElementById('success-modal').style.display = 'none';
    filterCategory('todos');
}