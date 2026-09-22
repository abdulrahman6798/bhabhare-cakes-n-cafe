import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

// Minimal breadcrumb for inner pages only — never shown on the homepage.
// Pass `light` when placed on a dark section (e.g. the cafe page hero).
export default function Breadcrumb({ label, light = false, className = '' }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-[12.5px] ${light ? 'text-white/40' : 'text-ink/45'} ${className}`}
    >
      <Link to="/" className={`transition-colors ${light ? 'hover:text-saffron-300' : 'hover:text-plum-700'}`}>
        Home
      </Link>
      <ChevronRight size={12} />
      <span className={`font-medium ${light ? 'text-white/70' : 'text-ink/70'}`}>{label}</span>
    </nav>
  )
}
