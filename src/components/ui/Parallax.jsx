import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useIsDesktop, useReducedMotionSafe } from '../../hooks/useMediaQuery.js'

/**
 * A very restrained scroll-linked parallax — moves its child a maximum of
 * `range` pixels as the section scrolls through the viewport. Disabled on
 * mobile and when the user prefers reduced motion (renders children plainly).
 * Only meant for large, single editorial images — never for cards, text or
 * buttons.
 *
 * The inner layer is oversized by `range` on top/bottom so the shift never
 * reveals empty space at the edges of an `object-cover` image.
 */
export default function Parallax({ children, range = 16, className = '' }) {
  const ref = useRef(null)
  const isDesktop = useIsDesktop()
  const reducedMotion = useReducedMotionSafe()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-range, range])

  if (!isDesktop || reducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y, position: 'absolute', inset: `-${range}px 0` }}>{children}</motion.div>
    </div>
  )
}
