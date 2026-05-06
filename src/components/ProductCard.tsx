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
      className="bg-[#f2f2f2] rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden flex flex-col md:flex-row p-5 gap-4 items-center group cursor-pointer transition-all duration-300 hover:-translate-y-1 h-auto md:h-[280px]"
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="w-full md:w-[45%] h-48 md:h-full relative rounded-2xl overflow-hidden flex items-center justify-center shrink-0">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-contain mix-blend-darken transition-transform duration-500 group-hover:scale-110"
        />
        {product.category && (
          <div className="absolute top-2 left-2">
            <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[9px] font-bold text-[#3b3585] shadow-sm uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="w-full md:w-[55%] flex flex-col justify-between h-full py-1 text-center md:text-left">
        <div>
          <h3 className="text-xl md:text-[1.35rem] font-black text-gray-900 leading-tight mb-2 pr-1 tracking-tight">
            {product.name}
          </h3>
          <p className="text-[0.7rem] md:text-xs text-gray-600 line-clamp-3 md:line-clamp-4 leading-snug font-medium mb-3 pr-2">
            {cleanDescription}
          </p>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-end mt-auto gap-2">
          <span className="text-xl font-black text-[#3b3585]">${product.price.toFixed(2)}</span>
          <button className="bg-[#3b3585] hover:bg-[#2c2763] text-white text-[0.85rem] font-bold px-6 py-1.5 uppercase shadow-md transition-colors tracking-wide">
            MORE INFO
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
