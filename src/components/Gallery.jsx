import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import SectionHeading from './ui/SectionHeading.jsx'
import { galleryImages } from '../data/cafeData.js'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = () => setActiveIndex(null)
  const prev = (e) => {
    e?.stopPropagation()
    setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
  }
  const next = (e) => {
    e?.stopPropagation()
    setActiveIndex((i) => (i + 1) % galleryImages.length)
  }

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="A Peek Into Our Kitchen"
          description="Cakes, pastries, coffee and a few happy moments in between."
        />

        <div className="mt-12 columns-2 gap-3.5 sm:gap-4 md:columns-3 [column-fill:_balance]">
          {galleryImages.map((item, i) => (
            <motion.button
              key={item.alt}
              type="button"
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className={`group relative mb-3.5 block w-full overflow-hidden rounded-2xl sm:mb-4 ${
                item.tall ? 'aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-plum-950/0 transition-colors duration-300 group-hover:bg-plum-950/30">
                <ZoomIn
                  size={22}
                  className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close preview"
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-8 sm:top-8"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>

            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              src={galleryImages[activeIndex].image.replace('w=800', 'w=1400')}
              alt={galleryImages[activeIndex].alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
            />

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
