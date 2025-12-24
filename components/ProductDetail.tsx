import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductDetail = ({ product, onAddToCart }: ProductDetailProps) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image);

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const getCategoryPath = () => {
    if (product.category === 'Minis' || product.category === 'Cordón de Polipropileno') {
      return '/carteras';
    }
    return '/accesorios';
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500 flex items-center gap-2">
        <Link to="/" className="hover:text-[#7a8d4e] transition-colors">
          Inicio
        </Link>
        <span>›</span>
        <Link to={getCategoryPath()} className="hover:text-[#7a8d4e] transition-colors">
          {product.category === 'Accesorios' ? 'Accesorios' : 'Carteras'}
        </Link>
        <span>›</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        {/* LEFT: Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>

          {/* Thumbnail Grid */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-square rounded-sm overflow-hidden border-2 transition-all hover:border-[#7a8d4e]/60 ${
                    selectedImage === img ? 'border-[#7a8d4e] ring-2 ring-[#7a8d4e]/20' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} vista ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product Info */}
        <div className="space-y-8 lg:sticky lg:top-24 lg:h-fit">
          <div className="space-y-3">
            <span className="text-[#7a8d4e] font-bold uppercase text-[10px] tracking-widest">
              {product.category}
            </span>
            {product.isNew && (
              <span className="ml-3 inline-block text-[9px] font-bold uppercase tracking-widest bg-[#7a8d4e] text-white px-2 py-0.5 rounded-sm">
                Nuevo
              </span>
            )}
            <h1 className="text-4xl md:text-5xl serif italic text-[#333]">{product.name}</h1>
            <p className="text-3xl font-light text-gray-900">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600 leading-relaxed font-light text-lg italic">
            "{product.description}"
          </p>

          <div className="pt-6 border-t border-gray-100">
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#7a8d4e] text-white py-5 rounded-sm font-bold uppercase text-[11px] tracking-[0.2em] shadow-lg hover:bg-[#6b7c43] transition-all transform hover:-translate-y-0.5"
            >
              Añadir a la bolsa
            </button>
            <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest mt-4">
              Pieza tejida manualmente • Envío a todo el país
            </p>
          </div>

          <button
            onClick={() => navigate(getCategoryPath())}
            className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#7a8d4e] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Volver a {product.category === 'Accesorios' ? 'Accesorios' : 'Carteras'}
          </button>
        </div>
      </div>

      {/* Characteristics Section */}
      {product.dimensions && (
        <div className="border-t pt-16 mb-16">
          <h2 className="text-3xl serif italic text-[#7a8d4e] mb-8">Medidas</h2>
          <div className="bg-gray-50/50 p-8 rounded-sm border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Alto</p>
                <p className="text-2xl font-light text-gray-900">{product.dimensions.height}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Ancho</p>
                <p className="text-2xl font-light text-gray-900">{product.dimensions.width}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Profundidad</p>
                <p className="text-2xl font-light text-gray-900">{product.dimensions.depth}</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Correa</p>
                <p className="text-base font-light text-gray-900">{product.dimensions.strap}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features Section */}
      {product.features && product.features.length > 0 && (
        <div className="mb-16">
          <h2 className="text-3xl serif italic text-[#7a8d4e] mb-8">Características</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-sm border border-gray-100">
                <svg className="w-5 h-5 text-[#7a8d4e] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700 font-light">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Material & Care Section */}
      {(product.material || product.careInstructions) && (
        <div className="border-t pt-16">
          <h2 className="text-3xl serif italic text-[#7a8d4e] mb-8">Material y Cuidado</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.material && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Material</h3>
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  {product.material}
                </p>
              </div>
            )}
            {product.careInstructions && (
              <div className="space-y-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Instrucciones de Cuidado</h3>
                <p className="text-gray-700 leading-relaxed font-light text-lg">
                  {product.careInstructions}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
