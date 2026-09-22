import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import Photo from './Photo.jsx'
import { Eyebrow, EditorialButton } from './parts.jsx'
import { customCategoryById } from './homeMedia.js'
import { customCakeCategories } from '../../data/cafeData.js'

export default function CustomCakeEditorial() {
  const hero = customCategoryById('custom')

  return (
    <section className="overflow-x-clip bg-cream py-24 sm:py-28 lg:py-36">
      <div className="container grid gap-16 md:grid-cols-12 md:items-center md:gap-x-8 lg:gap-x-10">
        <div className="order-2 md:order-1 md:col-span-7 lg:col-span-6">
          <Reveal y={20}>
            <Eyebrow>Custom cakes</Eyebrow>
            <h2 className="mt-6 font-editorial text-[3.1rem] font-medium leading-[0.98] tracking-[-0.02em] text-ink sm:text-[4.5rem] lg:text-[5.25rem]">
              Your idea.
              <br />
              <em className="italic text-berry-600">Our cake.</em>
            </h2>
            <p className="mt-6 max-w-md text-[1.0625rem] leading-relaxed text-ink/70">
              From simple to elaborate — we design around your vision. Tell us the occasion, the flavours and the
              idea, and we bring it to life.
            </p>
          </Reveal>

          <Reveal y={20} delay={0.08}>
            <ul className="mt-10 max-w-md divide-y divide-ink/15 border-y border-ink/15">
              {customCakeCategories.map((c) => (
                <li key={c.id}>
                  <Link to="/custom-cakes" className="group flex items-center justify-between gap-4 py-4">
                    <span>
                      <span className="block font-editorial text-xl text-ink">{c.label}</span>
                      <span className="mt-0.5 block text-[13px] leading-snug text-ink/55">{c.description}</span>
                    </span>
                    <ArrowRight
                      size={16}
                      strokeWidth={2.2}
                      aria-hidden="true"
                      className="shrink-0 text-plum-800 transition-transform duration-200 ease-out group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <EditorialButton to="/custom-cakes" variant="solid">
                Create your cake
              </EditorialButton>
            </div>
          </Reveal>
        </div>

        <Reveal y={20} delay={0.05} className="order-1 md:order-2 md:col-span-5 md:col-start-8">
          <div className="relative mr-3 sm:mr-5">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full border border-plum-800/30 sm:-right-5 sm:-top-5"
            />
            <Photo
              src={hero.image}
              alt="A white cake finished with dark chocolate drips, on a pedestal stand"
              widths={[600, 900, 1200]}
              sizes="(min-width: 1024px) 40vw, 90vw"
              fade={false}
              parallax={14}
              className="relative aspect-[4/5] lg:aspect-[3/4]"
            />
            <p className="absolute -bottom-5 -left-1 bg-cream px-4 py-2 font-editorial text-2xl italic text-plum-800 sm:-left-6 sm:text-3xl">
              Made for you
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
