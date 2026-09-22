import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageHero from '../components/PageHero.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import CTASection from '../components/CTASection.jsx'
import { products } from '../data/cafeData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

const cakes = products.filter((p) => p.category === 'Cakes')
const filters = ['All', ...new Set(cakes.map((c) => c.tag).filter(Boolean))]

export default function Cakes() {
  usePageMeta('Cakes', "Freshly baked cakes at Cake's N Cafe — chocolate, classic and fusion flavours, made to order.")
  const [active, setActive] = useState('All')

  const visible = useMemo(
    () => (active === 'All' ? cakes : cakes.filter((c) => c.tag === active)),
    [active],
  )

  return (
    <>
      <PageHero
        breadcrumbLabel="Cakes"
        eyebrow="Our Menu"
        title="Cakes Made For Every Celebration"
        description="Freshly baked, finished by hand, and ready whenever you are."
      />

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="container">
          <div className="no-scrollbar flex gap-2.5 overflow-x-auto pb-1">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={`shrink-0 rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-200 active:scale-95 ${
                  active === f
                    ? 'border-plum-950 bg-plum-950 text-white'
                    : 'border-ink/10 bg-white text-ink/60 hover:border-ink/20'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductGrid products={visible} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTASection
        heading="Need Something Custom?"
        subtext="Birthdays, anniversaries, or a design of your own — we'll build it around you."
        ctaLabel="Design Your Cake"
        to="/custom-cakes"
      />
    </>
  )
}
