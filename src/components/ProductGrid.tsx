import type { Product } from '../types/product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductGrid = ({ products, onProductClick }: ProductGridProps) => {
  return (
    <div className="pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
