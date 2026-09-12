import SectionHeading from './ui/SectionHeading.jsx'
import ProductCard from './ProductCard.jsx'
import { products } from '../data/cafeData.js'

export default function MenuSection() {
  return (
    <section id="menu" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Our Menu"
          title="Our Favourites"
          description="Made fresh for every kind of craving."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
