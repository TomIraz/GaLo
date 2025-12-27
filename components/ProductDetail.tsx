import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(product.images?.[0] || product.image);
  const [imageKey, setImageKey] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>(product.availableColors?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  const getCategoryPath = () => {
    if (product.category === 'Minis' || product.category === 'Cordón de Polipropileno') {
      return '/carteras';
    }
    return '/accesorios';
  };

  const handleWhatsAppContact = () => {
    const message = `Hola! Me interesa el producto:

📦 ${product.name}
🎨 Color: ${selectedColor}
📊 Cantidad: ${quantity}

¿Está disponible?`;

    // Obtener número de WhatsApp desde variables de ambiente
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5491112345678';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
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
          <div className="w-full rounded-sm border border-gray-200 overflow-hidden">
            <img
              key={imageKey}
              src={selectedImage}
              alt={product.name}
              className="w-full h-auto transition-all duration-500 ease-out"
              style={{
                animation: 'fadeInZoom 0.5s ease-out'
              }}
            />
          </div>

          {/* Thumbnail Grid */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-5 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedImage(img);
                    setImageKey(prev => prev + 1);
                  }}
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

          {/* Color Selector */}
          {product.availableColors && product.availableColors.length > 0 && (
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-widest text-gray-700">
                Color
              </label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-sm text-gray-700 font-medium focus:outline-none focus:border-[#7a8d4e] transition-colors cursor-pointer"
              >
                {product.availableColors.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="space-y-3">
            <label className="text-sm font-bold uppercase tracking-widest text-gray-700">
              Cantidad
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border-2 border-gray-200 rounded-sm flex items-center justify-center hover:border-[#7a8d4e] hover:text-[#7a8d4e] transition-colors font-bold text-lg"
                aria-label="Disminuir cantidad"
              >
                −
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 px-4 py-2 border-2 border-gray-200 rounded-sm text-center text-gray-700 font-medium focus:outline-none focus:border-[#7a8d4e] transition-colors"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border-2 border-gray-200 rounded-sm flex items-center justify-center hover:border-[#7a8d4e] hover:text-[#7a8d4e] transition-colors font-bold text-lg"
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>
          </div>

          {/* WhatsApp Contact Button */}
          <button
            onClick={handleWhatsAppContact}
            className="w-full bg-[#25D366] text-white py-4 px-6 rounded-sm font-bold uppercase tracking-widest text-sm hover:bg-[#20BA5A] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Consultar por WhatsApp
          </button>

          <div className="pt-6 border-t border-gray-100">
            <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">
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
