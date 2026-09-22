import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Fullscreen image preview with prev/next — used by GalleryGrid. Keyboard
// navigation (Escape/Arrow keys) is wired up by the parent, which owns
// `activeIndex` state.
export default function GalleryLightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  return (
    <AnimatePresence>
      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={onPrev}
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
            src={images[activeIndex].image.replace('w=800', 'w=1400')}
            alt={images[activeIndex].alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
          />

          <button
            type="button"
            onClick={onNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
