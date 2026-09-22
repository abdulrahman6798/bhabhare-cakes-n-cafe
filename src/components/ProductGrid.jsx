import ProductCard from './ProductCard.jsx'

export default function ProductGrid({ products, className = 'mt-12' }) {
  return (
    <div className={`grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 ${className}`}>
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </div>
  )
}
