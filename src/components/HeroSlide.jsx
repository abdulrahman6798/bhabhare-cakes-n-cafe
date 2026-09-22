import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

// A single hero slide — the whole image is a link to its destination route,
// with a small synchronized caption/CTA overlaid at the bottom. The image
// itself crossfades + scales in on entrance, then gets its own subtle
// hover-only scale on desktop, independent of that entrance animation.
export default function HeroSlide({ slide, reducedMotion }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.03 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reducedMotion ? 0.25 : 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="group absolute inset-0"
    >
      <Link
        to={slide.route}
        aria-label={`${slide.cta} — ${slide.title}`}
        className="block h-full w-full focus-visible:outline-none"
      >
        <img
          src={slide.image}
          alt={slide.description}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum-950/70 via-plum-950/5 to-transparent transition-opacity duration-300 group-hover:from-plum-950/80" />

        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0.2 : 0.5, delay: reducedMotion ? 0 : 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">{slide.title}</p>
          <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-4 py-2 text-[13px] font-semibold text-plum-800 shadow-card transition-transform duration-200 group-hover:translate-x-1">
            {slide.cta}
            <ArrowRight size={14} strokeWidth={2.5} />
          </span>
        </motion.div>
      </Link>
    </motion.div>
  )
}
