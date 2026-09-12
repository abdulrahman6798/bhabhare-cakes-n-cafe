import { Star } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { testimonials } from '../data/cafeData.js'

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our Customers Say"
          description="A few honest words from people who've stopped by."
        />

        <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={(i % 3) * 0.08}
              className="flex flex-col rounded-2xl border border-ink/[0.06] bg-white p-5 sm:p-6"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s < t.rating ? 'fill-saffron-500 text-saffron-500' : 'text-ink/15'}
                  />
                ))}
              </div>
              <p className="mt-3.5 flex-1 text-[14px] leading-relaxed text-ink/75">&ldquo;{t.review}&rdquo;</p>
              <p className="mt-4 text-[13px] font-semibold text-ink">{t.name}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
