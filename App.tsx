
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import { Product, CartItem, View, MaterialFilter } from './types';
import { PRODUCTS } from './constants';
import { useContactForm } from './hooks/useContactForm';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [materialFilter, setMaterialFilter] = useState<MaterialFilter>('Todo');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    setSearchQuery('');
    setMaterialFilter('Todo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredProducts = useMemo(() => {
    let base = PRODUCTS;
    if (currentView === 'carteras') {
      base = PRODUCTS.filter(p => p.category !== 'Accesorios');
    } else if (currentView === 'accesorios') {
      base = PRODUCTS.filter(p => p.category === 'Accesorios');
    }
    if (materialFilter !== 'Todo') {
      base = base.filter(p => p.category.includes(materialFilter));
    }
    if (searchQuery) {
      base = base.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return base;
  }, [currentView, searchQuery, materialFilter]);

  const renderHome = () => (
    <>
      <Hero onExplore={() => handleNavigate('carteras')} />
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-4xl serif italic text-[#333]">Destacados</h2>
          <div className="w-12 h-0.5 bg-[#7a8d4e] mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {PRODUCTS.slice(0, 4).map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={() => handleNavigate('carteras')}
            className="text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-[#7a8d4e] pb-1 hover:text-[#7a8d4e] transition-colors"
          >
            Ver toda la colección
          </button>
        </div>
      </section>
    </>
  );

  const renderProductList = (title: string) => (
    <section className="py-20 max-w-7xl mx-auto px-4 min-h-[60vh]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <h2 className="text-5xl serif italic text-[#333]">{title}</h2>
          <div className="flex items-center gap-4">
            <input 
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-sm text-sm focus:outline-none focus:border-[#7a8d4e] w-full md:w-64"
            />
          </div>
        </div>

        <div className="flex items-center gap-6 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
          {(['Todo', 'Polipropileno'] as MaterialFilter[]).map(mat => (
            <button
              key={mat}
              onClick={() => setMaterialFilter(mat)}
              className={`text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all pb-1 border-b-2 ${
                materialFilter === mat ? 'text-[#7a8d4e] border-[#7a8d4e]' : 'text-gray-400 border-transparent hover:text-gray-700'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={addToCart}
              onSelect={setSelectedProduct}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4">
          <p className="text-gray-400 italic font-light">No encontramos productos que coincidan con tu búsqueda.</p>
          <button onClick={() => {setSearchQuery(''); setMaterialFilter('Todo');}} className="text-[#7a8d4e] font-bold text-xs uppercase tracking-widest">Ver todo</button>
        </div>
      )}
    </section>
  );

  const renderComoComprar = () => (
    <section className="py-20 max-w-3xl mx-auto px-4">
      <h2 className="text-5xl serif italic text-[#333] mb-12 text-center">Cómo Comprar</h2>
      <div className="space-y-12">
        {[
          { step: "01", title: "Elegí tus favoritos", desc: "Navegá por nuestras categorías de Carteras y Accesorios y sumá los productos que más te gusten al carrito." },
          { step: "02", title: "Revisá tu bolsa", desc: "Hacé click en el ícono de la bolsa para verificar tus productos. Podés sumar o quitar unidades si lo deseás." },
          { step: "03", title: "Finalizá la compra", desc: "Completá tus datos de envío y seleccioná el método de pago que prefieras. Usamos plataformas seguras." },
          { step: "04", title: "¡Listo!", desc: "Una vez confirmado el pago, prepararemos tu GaLo artesanal con mucho amor y te avisaremos cuando esté en camino." }
        ].map((item, idx) => (
          <div key={idx} className="flex gap-8 items-start border-l-2 border-gray-100 pl-8 relative">
             <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#7a8d4e]"></span>
             <div className="space-y-2">
                <span className="text-[#7a8d4e] font-bold text-xs tracking-widest uppercase">{item.step}</span>
                <h3 className="text-2xl serif font-medium">{item.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </section>
  );

  const renderDondeEstamos = () => (
    <section className="py-20 max-w-5xl mx-auto px-4 text-center">
      <h2 className="text-5xl serif italic text-[#333] mb-12">Dónde Estamos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-100 aspect-square rounded-sm overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center bg-[#7a8d4e]/10">
             <div className="text-center space-y-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-[#7a8d4e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#7a8d4e]">Buenos Aires, Argentina</p>
             </div>
          </div>
        </div>
        <div className="text-left space-y-8">
           <div className="space-y-4">
              <h3 className="text-2xl serif">Feria Parque Saavedra</h3>
              <p className="text-gray-500 font-light leading-relaxed">
                Vení a conocer la textura y colores de nuestras carteras y accesorios.
              </p>
           </div>
           <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-widest text-[#7a8d4e]">Dirección</p>
              <p className="text-gray-700">Parque Saavedra, CABA</p>
           </div>
           <div className="space-y-2">
              <p className="text-sm font-bold uppercase tracking-widest text-[#7a8d4e]">Horarios</p>
              <p className="text-gray-700">Sabados, Domingos y Feriados de 9:00 a 18:00</p>
           </div>
        </div>
      </div>
    </section>
  );

  const ContactoForm = () => {
    const { formData, errors, isSubmitting, submitStatus, handleChange, handleSubmit } = useContactForm();

    return (
      <section className="py-20 max-w-xl mx-auto px-4">
        <h2 className="text-5xl serif italic text-[#333] mb-8 text-center">Contacto</h2>
        <p className="text-center text-gray-500 font-light mb-12">¿Tenés alguna duda o querés un pedido personalizado? Escribinos.</p>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-green-700 text-sm text-center font-medium">¡Mensaje enviado con éxito! Te responderemos pronto.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm animate-in fade-in slide-in-from-top-2 duration-300">
            <p className="text-red-700 text-sm text-center font-medium">Error al enviar el mensaje. Por favor, intentá nuevamente.</p>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-label="Nombre"
                aria-invalid={!!errors.nombre}
                aria-describedby={errors.nombre ? "nombre-error" : undefined}
                className={`w-full px-4 py-3 border ${errors.nombre ? 'border-red-300 bg-red-50/50' : 'border-gray-100 bg-gray-50/50'} focus:border-[#7a8d4e] outline-none rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.nombre && <p id="nombre-error" className="mt-1 text-xs text-red-600">{errors.nombre}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                aria-label="Email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-300 bg-red-50/50' : 'border-gray-100 bg-gray-50/50'} focus:border-[#7a8d4e] outline-none rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              value={formData.asunto}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-label="Asunto"
              aria-invalid={!!errors.asunto}
              aria-describedby={errors.asunto ? "asunto-error" : undefined}
              className={`w-full px-4 py-3 border ${errors.asunto ? 'border-red-300 bg-red-50/50' : 'border-gray-100 bg-gray-50/50'} focus:border-[#7a8d4e] outline-none rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.asunto && <p id="asunto-error" className="mt-1 text-xs text-red-600">{errors.asunto}</p>}
          </div>
          <div>
            <textarea
              rows={5}
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              disabled={isSubmitting}
              aria-label="Mensaje"
              aria-invalid={!!errors.mensaje}
              aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
              className={`w-full px-4 py-3 border ${errors.mensaje ? 'border-red-300 bg-red-50/50' : 'border-gray-100 bg-gray-50/50'} focus:border-[#7a8d4e] outline-none rounded-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
            />
            {errors.mensaje && <p id="mensaje-error" className="mt-1 text-xs text-red-600">{errors.mensaje}</p>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#7a8d4e] text-white py-4 font-bold uppercase text-xs tracking-widest hover:bg-[#6b7c43] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#7a8d4e] flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </>
            ) : 'Enviar Mensaje'}
          </button>
        </form>
        <div className="mt-12 pt-12 border-t border-gray-100 flex justify-center gap-12">
           <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">WhatsApp</p>
              <p className="text-sm text-gray-800">+54 9 11 0000-0000</p>
           </div>
           <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
              <p className="text-sm text-gray-800">hola@galoartesanal.com</p>
           </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)} 
        onOpenCart={() => setIsCartOpen(true)}
        onNavigate={handleNavigate}
      />
      
      <main className="animate-in fade-in duration-500">
        {currentView === 'home' && renderHome()}
        {currentView === 'carteras' && renderProductList('Carteras')}
        {currentView === 'accesorios' && renderProductList('Accesorios')}
        {currentView === 'como-comprar' && renderComoComprar()}
        {currentView === 'donde-estamos' && renderDondeEstamos()}
        {currentView === 'contacto' && <ContactoForm />}
      </main>

      <footer className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-12">
          <div className="bg-[#7a8d4e] px-5 py-3 inline-flex items-center justify-center rounded-sm mx-auto shadow-md cursor-pointer" onClick={() => handleNavigate('home')}>
            <span className="text-white logo-font text-3xl font-medium leading-none flex items-center">GaL<span className="star-o">o</span></span>
          </div>
          <div className="space-y-4">
            <p className="text-gray-400 text-[11px] tracking-[0.4em] uppercase font-bold">GaLo Artesanal • Argentina</p>
            <div className="flex justify-center gap-10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <a href="https://www.instagram.com/galo_carteras/" target="_blank" rel="noopener noreferrer" className="hover:text-[#7a8d4e] transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                Instagram
              </a>
              <button onClick={() => handleNavigate('donde-estamos')} className="hover:text-[#7a8d4e] transition-colors">Feria</button>
              <button onClick={() => handleNavigate('contacto')} className="hover:text-[#7a8d4e] transition-colors">Contacto</button>
            </div>
          </div>
          <p className="text-[10px] text-gray-300 tracking-wider">© 2024 GaLo. Todos los derechos reservados.</p>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm grid grid-cols-1 md:grid-cols-2 shadow-2xl animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute right-6 top-6 z-10 p-2 bg-gray-100 rounded-full hover:bg-[#7a8d4e] hover:text-white transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="h-[350px] md:h-full bg-gray-50">
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-16 space-y-8 flex flex-col justify-center">
              <div className="space-y-3">
                <span className="text-[#7a8d4e] font-bold text-[10px] uppercase tracking-[0.3em]">{selectedProduct.category}</span>
                <h3 className="text-4xl serif italic">{selectedProduct.name}</h3>
                <p className="text-3xl font-light text-gray-900">${selectedProduct.price.toFixed(2)}</p>
              </div>
              <p className="text-gray-500 leading-relaxed font-light text-lg italic">
                "{selectedProduct.description}"
              </p>
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <button 
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-[#7a8d4e] text-white py-5 rounded-sm font-bold uppercase text-[11px] tracking-[0.2em] shadow-lg hover:bg-[#6b7c43] transition-all"
                >
                  Añadir a la bolsa
                </button>
                <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">
                  Pieza tejida manualmente • Envío a todo el país
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
