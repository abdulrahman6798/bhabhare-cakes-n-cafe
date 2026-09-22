import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import Photo from './Photo.jsx'
import { Eyebrow, TextLink } from './parts.jsx'
import { formatPrice, productById } from './homeMedia.js'

// Three different crops + offsets so the row reads as a composition, not a grid of cards.
const layout = [
  {
    id: 'red-velvet',
    wrap: 'md:col-span-5',
    aspect: 'aspect-[4/5]',
    sizes: '(min-width: 1024px) 42vw, 92vw',
    widths: [600, 900, 1200],
  },
  {
    id: 'pineapple-cake',
    wrap: 'ml-auto w-[68%] md:ml-0 md:col-span-3 md:mt-28 md:w-auto lg:mt-40',
    aspect: 'aspect-square',
    sizes: '(min-width: 1024px) 26vw, 64vw',
    widths: [400, 700, 900],
  },
  {
    id: 'butterscotch',
    wrap: 'w-[82%] md:col-span-4 md:mt-10 md:w-auto lg:mt-14',
    aspect: 'aspect-[3/4]',
    sizes: '(min-width: 1024px) 33vw, 78vw',
    widths: [500, 800, 1000],
  },
]

export default function SignatureCakes() {
  return (
    <section className="bg-cream pb-24 pt-6 sm:pb-32 lg:pt-14">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal y={20} className="md:col-span-7">
            <Eyebrow>The ones everyone notices</Eyebrow>
            <h2 className="mt-5 font-editorial text-[2.6rem] font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.5rem]">
              Made to be <em className="italic text-plum-700">remembered.</em>
            </h2>
          </Reveal>
          <Reveal y={20} delay={0.1} className="md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
            <p className="max-w-xs text-[15px] leading-relaxed text-ink/65">
              Made fresh for birthdays, celebrations and every sweet craving.
            </p>
            <TextLink to="/cakes" className="mt-5">
              All cakes
            </TextLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 sm:gap-14 md:mt-16 md:grid-cols-12 md:items-start md:gap-x-5 lg:mt-20 lg:gap-x-8">
          {layout.map((slot, i) => {
            const product = productById(slot.id)
            return (
              <Reveal key={slot.id} y={20} delay={i * 0.08} className={slot.wrap}>
                <Link to="/cakes" className="group block" aria-label={`${product.name}, ${formatPrice(product.price)} — see cakes`}>
                  <Photo
                    src={product.image}
                    alt={product.name}
                    widths={slot.widths}
                    sizes={slot.sizes}
                    width={900}
                    height={1125}
                    fade={false}
                    hover
                    className={slot.aspect}
                  />
                  <div className="mt-4 flex items-baseline justify-between gap-4 border-b border-ink/15 pb-3">
                    <div className="min-w-0">
                      <span className="font-editorial text-sm italic text-berry-600">No. 0{i + 1}</span>
                      <h3 className="mt-0.5 text-[15px] font-semibold leading-snug text-ink">{product.name}</h3>
                    </div>
                    <span className="shrink-0 text-[15px] font-semibold tabular-nums text-plum-800">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-plum-800 transition-colors group-hover:text-berry-600">
                    Order
                    <ArrowRight
                      size={14}
                      strokeWidth={2.2}
                      aria-hidden="true"
                      className="transition-transform duration-200 ease-out group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
