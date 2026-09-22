import { Wheat, Flame, PenTool, PartyPopper } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CTASection from '../components/CTASection.jsx'
import { whyBhabhare } from '../data/cafeData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

const icons = { Wheat, Flame, PenTool, PartyPopper }

export default function WhyBhabharePage() {
  usePageMeta('Why Us', "What makes Cake's N Cafe different — freshly baked, quality ingredients, custom cakes.")

  return (
    <>
      <PageHero
        breadcrumbLabel="Why Us"
        eyebrow="Why Choose Us"
        title="Why Cake's N Cafe?"
        description="A few simple things we never compromise on."
      />

      <section className="overflow-x-hidden bg-white pb-20 sm:pb-28">
        <div className="container space-y-14 sm:space-y-20">
          {whyBhabhare.map((item, i) => {
            const Icon = icons[item.icon]
            const reversed = i % 2 === 1
            return (
              <div
                key={item.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}
              >
                <Reveal
                  direction={reversed ? 'right' : 'left'}
                  duration={0.7}
                  className="aspect-[4/3] overflow-hidden rounded-3xl shadow-card"
                >
                  <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
                </Reveal>
                <Reveal direction={reversed ? 'left' : 'right'} duration={0.7} delay={0.1}>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-950 text-saffron-400">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink/60">{item.description}</p>
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      <CTASection heading="Ready To Order?" ctaLabel="Start Your Order" to="/order" bg="bg-cream" />
    </>
  )
}
