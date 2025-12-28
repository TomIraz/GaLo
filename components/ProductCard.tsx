import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number): string => {
  return price.toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};

const ProductCard = ({ product }: ProductCardProps) => {
  console.log(`🎴 ProductCard rendering - ${product.name}: $${product.price}`);

  return (
    <div className="group flex flex-col gap-4">
      <Link
        to={`/producto/${product.id}`}
        className="aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer relative w-full block"
        aria-label={`Ver detalles de ${product.name}`}
      >
        <img
          src={product.image}
          alt={`${product.name} - ${product.description}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <div>
        <div className="flex justify-between items-start mb-1">
          <Link to={`/producto/${product.id}`}>
            <h3 className="font-medium text-gray-800 hover:text-[#7a8d4e] transition-colors cursor-pointer">
              {product.name}
            </h3>
          </Link>
          <span className="text-gray-900 font-bold">${formatPrice(product.price)}</span>
        </div>
        <p className="text-xs text-[#7a8d4e] font-bold uppercase tracking-wider">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;
