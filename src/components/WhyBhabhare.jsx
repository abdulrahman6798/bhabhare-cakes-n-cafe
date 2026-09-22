import { Link } from 'react-router-dom'
import { Wheat, Flame, PenTool, PartyPopper } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import Button from './ui/Button.jsx'
import { whyBhabhare } from '../data/cafeData.js'

const icons = { Wheat, Flame, PenTool, PartyPopper }

export default function WhyBhabhare({ showButton = false, ctaLabel = 'Why Choose Us?', ctaTo = '/why-bhabhare' }) {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Cake's N Cafe?"
          description="A few simple things we never compromise on."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {whyBhabhare.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.07} className="rounded-2xl border border-ink/[0.06] bg-white p-5 sm:p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-plum-950 text-saffron-400">
                  <Icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink/55">{item.description}</p>
              </Reveal>
            )
          })}
        </div>

        {showButton && (
          <Reveal delay={0.2} className="mt-10 flex justify-center">
            <Button as={Link} to={ctaTo} variant="outline" size="lg">
              {ctaLabel}
            </Button>
          </Reveal>
        )}
      </div>
    </section>
  )
}
