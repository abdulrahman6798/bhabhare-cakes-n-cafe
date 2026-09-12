import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'bg-saffron-500 text-plum-950 hover:bg-saffron-400 shadow-soft',
  secondary:
    'bg-white/10 text-white border border-white/25 hover:bg-white/15 backdrop-blur-sm',
  dark: 'bg-plum-900 text-white hover:bg-plum-800',
  outline: 'bg-transparent text-ink border border-ink/15 hover:border-ink/35 hover:bg-ink/[0.03]',
  berry: 'bg-berry-500 text-white hover:bg-berry-600',
}

const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-[15px]',
}

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  children,
  ...props
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className="inline-block"
    >
      <Tag
        className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
        {icon && (
          <ArrowRight
            size={16}
            strokeWidth={2.5}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        )}
      </Tag>
    </motion.div>
  )
}
