import { useEffect, useState } from 'react';
import type { Product } from './types/product';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import About from './components/About';
import ProductModal from './components/ProductModal';
import { fetchProducts } from './services/productService';
import { logger } from './utils/logger';

const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    logger.info('Componente App montado');
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        logger.error('Fallo en la carga inicial de productos', err);
        setError('No se pudo cargar el catálogo. Por favor, intenta de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleSearch = (term: string) => {
    logger.debug('Usuario buscando:', term);
    setSearchTerm(term);
  };

  const filteredProducts = products.filter((product) => {
    const term = normalizeText(searchTerm);
    const inName = normalizeText(product.name).includes(term);
    const inDescription = normalizeText(product.description).includes(term);
    const inKeywords = product.keywords?.some(k => normalizeText(k).includes(term)) ?? false;
    
    return inName || inDescription || inKeywords;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <About />

        <section id="catalogo" className="pt-24 pb-20 relative min-h-screen overflow-hidden bg-[#f4f7fc]">
          {/* Sombra Azul de Fondo */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Sombra Derecha */}
            <img
              src="/web page natural greatness TEXTURA.png"
              alt=""
              className="absolute top-0 right-0 w-[80%] max-w-[1000px] h-auto object-cover opacity-100 mix-blend-multiply"
            />
          </div>

          {/* Section Header */}
          <div className="container mx-auto px-8 lg:px-20 max-w-[1200px] mb-16 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-center pb-8 gap-8 text-center lg:text-left">
              {/* Left Logo - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-[#3b3585] flex items-center justify-center text-white shrink-0 shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.5C12 21.5 6 16 6 10C6 6.5 8.5 4 12 4C15.5 4 18 6.5 18 10C18 16 12 21.5 12 21.5Z" fill="#3b3585" stroke="white" strokeWidth="1.5" />
                    <path d="M12 21.5C12 21.5 7.5 16 7.5 10.5C7.5 7.5 9.5 5.5 12 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 21.5C12 21.5 16.5 16 16.5 10.5C16.5 7.5 14.5 5.5 12 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="flex flex-col leading-[1.05] text-[#3b3585] font-black text-4xl">
                  <span>Natural</span>
                  <span>Greatness</span>
                </div>
              </div>

              {/* Middle Title */}
              <div className="flex-1 flex justify-center">
                <h2 className="text-gray-500 font-medium text-lg tracking-widest mt-2">
                  PRODUCTS
                </h2>
              </div>

              {/* Right Quote */}
              <div className="text-center lg:text-left max-w-sm mx-auto lg:mx-0">
                <h3 className="text-[#3b3585] font-black text-2xl lg:text-3xl uppercase leading-tight tracking-tight">
                  "FIND THE PERFECT<br />SUPPLEMENT FOR<br />YOUR GOALS"
                </h3>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-8 lg:px-20 max-w-[1200px] relative z-10">
            {/* Scroll Down Sidebar */}
            <div className="hidden xl:flex flex-col items-center absolute left-4 top-0 h-full">
              <span className="text-[#3b3585] font-black tracking-[0.6em] text-xl rotate-180" style={{ writingMode: 'vertical-rl' }}>
                SCROLL DOWN
              </span>
              {/* Flecha sólida hacia abajo */}
              <svg className="mt-6 w-8 h-8 text-[#3b3585]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10l12 12z" />
              </svg>
            </div>

            <div className="mb-10 pl-0 xl:pl-20">
              <SearchBar onSearch={handleSearch} />
            </div>

            <div className="pl-0 xl:pl-20">
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3b3585]"></div>
                </div>
              ) : error ? (
                <div className="text-center py-20 px-4">
                  <p className="text-red-500 text-lg font-medium">{error}</p>
                </div>
              ) : (
                <>
                  {filteredProducts.length > 0 ? (
                    <ProductGrid
                      products={filteredProducts}
                      onProductClick={setSelectedProduct}
                    />
                  ) : (
                    <div className="text-center py-20 px-4 text-gray-500">
                      <p className="text-xl">No se encontraron productos que coincidan con tu búsqueda.</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Ventana Emergente */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}

export default App
