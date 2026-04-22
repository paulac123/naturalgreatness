import { useEffect, useState } from 'react';
import type { Product } from './types/product';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import ProductModal from './components/ProductModal';
import { fetchProducts } from './services/productService';
import { logger } from './utils/logger';

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

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <About />
        
        <section id="catalogo" className="pt-20 pb-10">
          <SearchBar onSearch={handleSearch} />
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-earthy-orange-600"></div>
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
        </section>

        <Contact />
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
