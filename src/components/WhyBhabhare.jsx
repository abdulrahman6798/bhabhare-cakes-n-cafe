import { Wheat, Flame, PenTool, PartyPopper } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import { whyBhabhare } from '../data/cafeData.js'

const icons = { Wheat, Flame, PenTool, PartyPopper }

export default function WhyBhabhare() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Why Bhabhare"
          title="Baked With Care, Every Time"
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
      </div>
    </section>
  )
}
