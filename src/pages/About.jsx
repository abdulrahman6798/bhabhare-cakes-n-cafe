import { Link } from 'react-router-dom'
import { Cake, Coffee, PartyPopper } from 'lucide-react'
import BrandStory from '../components/BrandStory.jsx'
import WhyBhabhare from '../components/WhyBhabhare.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'

const whatWeMake = [
  { icon: Cake, title: 'Cakes', description: 'Chocolate, classic and fusion flavours, baked fresh to order.' },
  { icon: PartyPopper, title: 'Custom Cakes', description: 'Birthdays, anniversaries and theme cakes, designed around you.' },
  { icon: Coffee, title: 'Cafe Favourites', description: 'Coffee, pastries, snacks and desserts for everyday visits.' },
]

export default function About() {
  usePageMeta('About', "The story behind Cake's N Cafe — freshly baked cakes, desserts and cafe favourites.")

  return (
    <>
      <BrandStory firstSection titleAs="h1" breadcrumbLabel="About" />

      <section className="bg-cream py-20 sm:py-28">
        <div className="container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-block rounded-full bg-plum-900/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-plum-600">
              What We Make
            </span>
            <h2 className="balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Cakes, Custom Cakes &amp; Cafe Favourites
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:gap-5 md:grid-cols-3">
            {whatWeMake.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07} className="rounded-2xl border border-ink/[0.06] bg-white p-6 text-center">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-plum-950 text-saffron-400">
                  <item.icon size={20} strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink/55">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyBhabhare />

      <section className="bg-white py-16 sm:py-20">
        <div className="container text-center">
          <Reveal>
            <h2 className="balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Cakes + Cafe, Under One Roof
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-ink/60">
              Order a cake for your next celebration, or drop by for a coffee any day of the week.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3.5">
              <Link
                to="/cakes"
                className="rounded-full bg-plum-950 px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-plum-800"
              >
                Browse Cakes
              </Link>
              <Link
                to="/cafe-menu"
                className="rounded-full border border-ink/15 px-5 py-3 text-[14px] font-semibold text-ink transition-colors hover:border-ink/35"
              >
                Explore Cafe Menu
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
