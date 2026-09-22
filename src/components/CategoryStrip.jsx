import { Link } from 'react-router-dom'
import { Cake, Croissant, IceCreamCone, Coffee, CupSoda, Sandwich, PartyPopper } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { categoryStrip } from '../data/cafeData.js'

const icons = { Cake, Croissant, IceCreamCone, Coffee, CupSoda, Sandwich, PartyPopper }

export default function CategoryStrip() {
  return (
    <section className="relative -mt-8 sm:-mt-10">
      <div className="container">
        <Reveal
          className="no-scrollbar flex gap-3.5 overflow-x-auto rounded-3xl bg-white p-3.5 shadow-soft sm:gap-4 sm:p-4 lg:grid lg:grid-cols-7 lg:overflow-visible"
        >
          {categoryStrip.map((cat) => {
            const Icon = icons[cat.icon]
            return (
              <Link
                key={cat.label}
                to={cat.to}
                className="group flex min-w-[104px] shrink-0 flex-col items-center gap-2.5 rounded-2xl px-3 py-3.5 transition-colors hover:bg-plum-50 lg:min-w-0"
              >
                <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full ring-1 ring-black/5 transition-transform duration-200 group-hover:scale-105">
                  <img src={cat.image} alt="" aria-hidden="true" className="h-full w-full object-cover" loading="lazy" />
                  <span className="absolute inset-0 bg-plum-950/35" />
                  <Icon size={20} className="relative text-white" strokeWidth={2} />
                </span>
                <span className="text-[13px] font-semibold text-ink/80">{cat.label}</span>
              </Link>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
