import { Star } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <Reveal
      delay={(index % 3) * 0.08}
      hover
      className="flex flex-col rounded-2xl border border-ink/[0.06] bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-lift sm:p-6"
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} size={14} className={s < testimonial.rating ? 'fill-saffron-500 text-saffron-500' : 'text-ink/15'} />
        ))}
      </div>
      <p className="mt-3.5 flex-1 text-[14px] leading-relaxed text-ink/75">&ldquo;{testimonial.review}&rdquo;</p>
      <p className="mt-4 text-[13px] font-semibold text-ink">{testimonial.name}</p>
    </Reveal>
  )
}
