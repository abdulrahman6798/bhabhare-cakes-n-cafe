import { Star } from 'lucide-react'
import Reveal from '../ui/Reveal.jsx'
import Photo from './Photo.jsx'
import { TextLink } from './parts.jsx'
import { productById } from './homeMedia.js'
import { testimonials } from '../../data/cafeData.js'

export default function CustomerMoment() {
  const quote = testimonials[0]
  const cake = productById('black-forest')

  return (
    <section className="overflow-x-clip bg-cream py-24 sm:py-28 lg:py-32">
      <div className="container grid gap-12 md:grid-cols-12 md:items-center md:gap-x-10 lg:gap-x-12">
        <Reveal y={20} className="md:col-span-4">
          <div className="relative w-[72%] sm:w-[52%] md:w-full">
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-full w-full border border-plum-800/30 sm:-bottom-4 sm:-left-4"
            />
            <Photo
              src={cake.image}
              alt={cake.name}
              widths={[400, 700, 900]}
              sizes="(min-width: 1024px) 30vw, 60vw"
              fade={false}
              className="relative aspect-[4/5]"
            />
          </div>
        </Reveal>

        <Reveal y={20} delay={0.1} className="md:col-span-8 lg:col-span-7 lg:col-start-6">
          <span aria-hidden="true" className="block font-editorial text-[6rem] leading-[0.6] text-saffron-500 sm:text-[8rem]">
            &ldquo;
          </span>
          <figure>
            <blockquote>
              <p className="font-editorial text-[1.7rem] font-medium leading-[1.3] tracking-tight text-ink sm:text-4xl lg:text-[2.7rem]">
                {quote.review}
              </p>
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-plum-900">
                {quote.name}
              </span>
              <span
                role="img"
                aria-label={`${quote.rating} out of 5 stars`}
                className="flex gap-0.5 text-saffron-500"
              >
                {Array.from({ length: quote.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </span>
            </figcaption>
          </figure>
          <TextLink to="/testimonials" className="mt-10">
            More stories
          </TextLink>
        </Reveal>
      </div>
    </section>
  )
}
