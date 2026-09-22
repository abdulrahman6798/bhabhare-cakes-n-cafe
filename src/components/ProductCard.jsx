import { motion } from 'framer-motion'
import { useOrderModal } from '../hooks/OrderModalContext.jsx'

export default function ProductCard({ product, index = 0 }) {
  const { openOrderModal } = useOrderModal()

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-ink/[0.07] bg-white shadow-card transition-shadow duration-300 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-plum-700 shadow-sm backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-[17px] font-semibold leading-snug text-ink">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-[13px] leading-relaxed text-ink/55">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-display text-lg font-semibold text-plum-700">₹{product.price}</span>
          <button
            type="button"
            onClick={() => openOrderModal(product.name)}
            className="rounded-full bg-plum-950 px-4 py-2 text-[12.5px] font-semibold text-white transition-colors duration-200 hover:bg-berry-600"
          >
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}
