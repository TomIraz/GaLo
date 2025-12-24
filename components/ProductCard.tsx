import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  onSelect: (p: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onSelect }: ProductCardProps) => {
  return (
    <div className="group flex flex-col gap-4">
      <button
        className="aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer relative w-full text-left"
        onClick={() => onSelect(product)}
        aria-label={`Ver detalles de ${product.name}`}
      >
        <img
          src={product.image}
          alt={`${product.name} - ${product.description}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="bg-white/90 backdrop-blur p-3 rounded-full shadow-md hover:bg-[#7a8d4e] hover:text-white transition-colors"
            aria-label={`Agregar ${product.name} al carrito`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </button>
      
      <div>
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-gray-800 hover:text-[#7a8d4e] transition-colors cursor-pointer" onClick={() => onSelect(product)}>
            {product.name}
          </h3>
          <span className="text-gray-900 font-bold">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-xs text-[#7a8d4e] font-bold uppercase tracking-wider">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
