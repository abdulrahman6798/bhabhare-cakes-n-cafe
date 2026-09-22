import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import GalleryLightbox from './GalleryLightbox.jsx'

// Asymmetric editorial mosaic + lightbox, reused by both the full /gallery
// page (all images) and the homepage gallery preview (a curated subset).
export default function GalleryGrid({ images }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = () => setActiveIndex(null)
  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setActiveIndex((i) => (i + 1) % images.length)

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
    // prev/next use the functional setState form, so they're stable enough
    // to omit here — re-subscribing on every render isn't needed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  return (
    <>
      <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-4 sm:[grid-auto-flow:dense] sm:auto-rows-[160px] md:auto-rows-[190px] lg:auto-rows-[210px]">
        {images.map((item, i) => (
          <motion.button
            key={item.alt}
            type="button"
            onClick={() => setActiveIndex(i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative block w-full overflow-hidden rounded-2xl shadow-card transition-shadow duration-300 hover:shadow-lift ${
              i === 0
                ? 'col-span-2 aspect-[16/10] sm:row-span-2 sm:aspect-auto'
                : item.tall
                  ? 'aspect-[3/4] sm:row-span-2 sm:aspect-auto'
                  : 'aspect-square'
            }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-plum-950/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="absolute bottom-3 right-3 inline-flex translate-y-1 items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-plum-800 opacity-0 shadow-card transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <Eye size={12} strokeWidth={2.5} />
              View
            </span>
          </motion.button>
        ))}
      </div>

      <GalleryLightbox images={images} activeIndex={activeIndex} onClose={close} onPrev={prev} onNext={next} />
    </>
  )
}
