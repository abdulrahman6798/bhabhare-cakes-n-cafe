import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function Eyebrow({ children, tone = 'dark', className = '' }) {
  const color = tone === 'light' ? 'text-saffron-300' : 'text-berry-600'
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${color} ${className}`}
    >
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </span>
  )
}

function linkProps({ to, href }) {
  return to ? { as: Link, to } : { as: 'a', href, target: '_blank', rel: 'noopener noreferrer' }
}

export function TextLink({ to, href, tone = 'dark', children, className = '' }) {
  const { as: Tag, ...rest } = linkProps({ to, href })
  const color = tone === 'light' ? 'text-white hover:text-saffron-300' : 'text-plum-800 hover:text-berry-600'
  return (
    <Tag
      {...rest}
      className={`group inline-flex items-center gap-2 border-b border-current pb-1 text-[11.5px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200 ${color} ${className}`}
    >
      {children}
      <ArrowRight
        size={14}
        strokeWidth={2.2}
        aria-hidden="true"
        className="transition-transform duration-200 ease-out group-hover:translate-x-1"
      />
    </Tag>
  )
}

const buttonVariants = {
  solid: 'bg-plum-950 text-white hover:bg-plum-800 border border-plum-950 hover:border-plum-800',
  accent: 'bg-saffron-500 text-plum-950 hover:bg-saffron-400 border border-saffron-500 hover:border-saffron-400',
  outline: 'bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink/[0.04]',
  outlineLight: 'bg-transparent text-white border border-white/45 hover:border-white hover:bg-white/10',
}

export function EditorialButton({ to, href, variant = 'solid', children, className = '' }) {
  const { as: Tag, ...rest } = linkProps({ to, href })
  return (
    <Tag
      {...rest}
      className={`group inline-flex items-center justify-center gap-3 rounded-[3px] px-6 py-3.5 text-[11.5px] font-semibold uppercase tracking-[0.16em] transition-[background-color,border-color,transform] duration-200 active:scale-[0.98] ${buttonVariants[variant]} ${className}`}
    >
      {children}
      <ArrowRight
        size={15}
        strokeWidth={2.2}
        aria-hidden="true"
        className="transition-transform duration-200 ease-out group-hover:translate-x-1"
      />
    </Tag>
  )
}
