import { motion } from 'framer-motion'

export default function Reveal({
  children,
  as = 'div',
  y = 18,
  delay = 0,
  duration = 0.5,
  className = '',
  once = true,
  amount = 0.25,
}) {
  const Tag = motion[as] ?? motion.div
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Tag>
  )
}
