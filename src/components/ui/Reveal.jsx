import { motion } from 'framer-motion'
import { useIsDesktop, useReducedMotionSafe } from '../../hooks/useMediaQuery.js'

const OFFSETS = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: -28 },
  right: { x: 28 },
}

/**
 * The site's scroll-reveal primitive — fades/slides content in the first
 * time it enters the viewport (never re-triggers on scroll-up).
 *
 * `direction` supports 'up' (default), 'left' or 'right' for editorial
 * alternating layouts; it's automatically forced back to 'up' below the
 * `lg` breakpoint and whenever the user prefers reduced motion, so content
 * never makes a big horizontal entrance on narrow screens.
 */
export default function Reveal({
  children,
  as = 'div',
  y,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
  amount = 0.15,
  hover = false,
}) {
  const Tag = motion[as] ?? motion.div
  const reducedMotion = useReducedMotionSafe()
  const isDesktop = useIsDesktop()
  const wantsHorizontal = direction === 'left' || direction === 'right'
  const effectiveDirection = reducedMotion || (wantsHorizontal && !isDesktop) ? 'up' : direction
  const offset = y !== undefined ? { y } : OFFSETS[effectiveDirection] ?? OFFSETS.up

  return (
    <Tag
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: reducedMotion ? Math.min(duration, 0.3) : duration, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -4 } : undefined}
      className={className}
    >
      {children}
    </Tag>
  )
}
