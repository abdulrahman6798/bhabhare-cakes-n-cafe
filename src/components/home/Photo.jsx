import { motion } from 'framer-motion'
import Parallax from '../ui/Parallax.jsx'
import { useReducedMotionSafe } from '../../hooks/useMediaQuery.js'
import { resize, srcSetOf } from './homeMedia.js'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Editorial photograph: square-ish frame, scale reveal on scroll-in, optional
 * restrained parallax (desktop only — Parallax turns itself off on mobile and
 * under reduced motion), optional hover zoom (needs a `group` ancestor).
 */
export default function Photo({
  src,
  alt,
  width = 800,
  height = 1000,
  widths,
  sizes = '(min-width: 1024px) 40vw, 90vw',
  className = '',
  imgClassName = '',
  parallax = 0,
  hover = false,
  fade = true,
}) {
  const reduced = useReducedMotionSafe()

  const img = (
    <img
      src={resize(src, widths ? widths[Math.floor(widths.length / 2)] : 800)}
      srcSet={srcSetOf(src, widths)}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-full w-full object-cover ${
        hover ? 'transition-transform duration-700 ease-out group-hover:scale-[1.03]' : ''
      } ${imgClassName}`}
    />
  )

  return (
    <div className={`relative overflow-hidden bg-ink/[0.06] ${className}`}>
      <motion.div
        className="h-full w-full"
        initial={{ scale: reduced ? 1 : 1.06, opacity: fade ? 0 : 1 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: reduced ? 0.3 : 0.9, ease: EASE }}
      >
        {parallax ? (
          <Parallax range={parallax} className="h-full w-full">
            {img}
          </Parallax>
        ) : (
          img
        )}
      </motion.div>
    </div>
  )
}
