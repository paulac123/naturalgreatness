import ReactMarkdown from 'react-markdown';
import type { Product } from '../types/product';
import { logger } from '../utils/logger';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  if (!product) return null;

  logger.debug('Abriendo modal del producto', product);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 ml-0">
      {/* Overlay - El fondo desenfocado */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Contenido del Modal */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        {/* Botón Cerrar (X) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full text-gray-500 hover:text-[#3b3585] transition-colors shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Imagen a la izquierda */}
        <div className="md:w-1/2 h-64 md:h-auto bg-[#eaeaea] p-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Detalles a la derecha */}
        <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-[#f4f7fc] text-[#3b3585] rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              {product.category}
            </span>
            <h2 className="text-3xl font-black text-gray-900 leading-tight">{product.name}</h2>
          </div>

          <div className="mb-8 font-sans">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Descripción</h3>
            <div className="prose prose-slate max-w-none text-gray-600">
              <ReactMarkdown 
                components={{
                  p: ({ children }) => <p className="mb-4 leading-relaxed text-lg whitespace-pre-line">{children}</p>,
                  strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
                  ul: ({ children }) => <ul className="list-disc ml-5 space-y-1 mb-4 text-gray-600">{children}</ul>,
                  li: ({ children }) => <li className="text-lg">{children}</li>,
                }}
              >
                {product.description}
              </ReactMarkdown>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 font-medium">Precio</span>
              <span className="text-4xl font-black text-[#3b3585]">${product.price.toFixed(2)}</span>
            </div>
            
            <a 
              href={`https://wa.me/573184990091?text=${encodeURIComponent(`¡Hola! Me gustaría consultar la disponibilidad de: ${product.name}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:flex-1 py-4 bg-[#3b3585] hover:bg-[#2c2763] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all transform active:scale-95 text-center uppercase tracking-wide"
            >
              Consultar Disponibilidad
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
