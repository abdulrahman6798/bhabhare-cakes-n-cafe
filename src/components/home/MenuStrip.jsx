import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import Photo from './Photo.jsx'
import { Eyebrow } from './parts.jsx'
import { categoryStrip } from '../../data/cafeData.js'

const EDGE = 'max(1.25rem, calc((100% - 1200px) / 2 + 1.25rem))'

export default function MenuStrip() {
  const scroller = useRef(null)
  const nudge = (dir) => scroller.current?.scrollBy({ left: dir * 300, behavior: 'smooth' })

  return (
    <section className="bg-white pb-24 pt-8 sm:pb-28 sm:pt-12">
      <div className="container flex items-end justify-between gap-6">
        <Reveal y={20}>
          <Eyebrow>The counter</Eyebrow>
          <h2 className="mt-5 font-editorial text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl">
            From cake to cold coffee.
          </h2>
        </Reveal>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Scroll categories left"
            className="flex h-11 w-11 items-center justify-center border border-ink/25 text-ink transition-colors hover:border-ink hover:bg-ink/[0.04]"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Scroll categories right"
            className="flex h-11 w-11 items-center justify-center border border-ink/25 text-ink transition-colors hover:border-ink hover:bg-ink/[0.04]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <ul
        ref={scroller}
        aria-label="Browse the menu"
        className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:gap-5"
        style={{ paddingInline: EDGE, scrollPaddingInline: EDGE }}
      >
        {categoryStrip.map((c, i) => (
          <li key={c.label} className="w-[40vw] min-w-[8.5rem] shrink-0 snap-start sm:w-52 lg:w-56">
            <Link to={c.to} className="group block">
              <Photo
                src={c.image}
                alt={`${c.label}`}
                widths={[360, 560]}
                sizes="(min-width: 640px) 224px, 44vw"
                width={560}
                height={747}
                fade={false}
                hover
                className="aspect-[3/4]"
              />
              <div className="mt-3 flex items-start justify-between gap-2 border-b border-ink/15 pb-2.5">
                <span>
                  <span className="block font-editorial text-xs italic text-berry-600">0{i + 1}</span>
                  <span className="mt-0.5 block text-[11.5px] font-semibold uppercase leading-snug tracking-[0.16em] text-ink">
                    {c.label}
                  </span>
                </span>
                <ArrowRight
                  size={15}
                  strokeWidth={2.2}
                  aria-hidden="true"
                  className="mt-4 shrink-0 text-plum-800 transition-transform duration-200 ease-out group-hover:translate-x-1"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
