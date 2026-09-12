import Reveal from './ui/Reveal.jsx'
import Button from './ui/Button.jsx'
import { cafeExperienceImages } from '../data/cafeData.js'

export default function CafeExperience() {
  return (
    <section className="bg-plum-950 py-20 sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <Reveal>
            <span className="mb-3 inline-block rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-300">
              The Cafe
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              More Than Just Cakes
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="balance mt-4 max-w-md text-[15px] leading-relaxed text-white/65">
              Drop in for a quick coffee, meet friends over a dessert, or
              celebrate something special with us.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="mt-8">
            <Button variant="primary" size="lg" as="a" href="#contact">
              Visit Our Cafe
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="grid grid-cols-2 gap-3.5 sm:gap-4">
          {cafeExperienceImages.map((item, i) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-2xl ${i === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'}`}
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-2.5 left-3 right-3 text-[12px] font-medium leading-snug text-white/90">
                {item.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
