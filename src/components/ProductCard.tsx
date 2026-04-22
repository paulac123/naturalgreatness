import type { Product } from '../types/product';

// Elimina símbolos de Markdown para mostrar texto plano en las tarjetas
const stripMarkdown = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Elimina **negritas**
    .replace(/\*(.*?)\*/g, '$1')      // Elimina *cursivas*
    .replace(/^[*\-]\s/gm, '')        // Elimina * o - al inicio de línea (listas)
    .replace(/\n/g, ' ')              // Reemplaza saltos de línea por espacio
    .trim();
};

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  const cleanDescription = stripMarkdown(product.description || '');

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="relative h-64 bg-gray-50 overflow-hidden p-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-earthy-orange-700 shadow-sm uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 h-10">{cleanDescription}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-2xl font-black text-earthy-orange-600">${product.price}</span>
          <button className="bg-earthy-orange-600 hover:bg-earthy-orange-700 text-white p-2 rounded-lg shadow-sm hover:shadow transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
