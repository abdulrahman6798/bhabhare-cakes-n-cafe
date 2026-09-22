import { motion } from 'framer-motion'
import Parallax from './Parallax.jsx'
import { useReducedMotionSafe } from '../../hooks/useMediaQuery.js'

/**
 * The treatment for large, single "brand" photography (About/Cafe hero
 * images): a gentle scale+opacity reveal on scroll-in, plus a restrained
 * parallax drift. Used sparingly — this is not for product cards or grids.
 */
export default function EditorialImage({ src, alt, className = '', parallax = 14 }) {
  const reducedMotion = useReducedMotionSafe()

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0.3 : 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <Parallax range={parallax} className="h-full w-full">
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </Parallax>
    </motion.div>
  )
}
