import Reveal from './ui/Reveal.jsx'
import EditorialImage from './ui/EditorialImage.jsx'
import Breadcrumb from './Breadcrumb.jsx'
import { brandStory } from '../data/cafeData.js'

export default function BrandStory({ titleAs = 'h2', firstSection = false, breadcrumbLabel }) {
  const TitleTag = titleAs

  return (
    <section className={`bg-white ${firstSection ? 'pb-20 pt-28 sm:pb-28 sm:pt-32' : 'py-20 sm:py-28'}`}>
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <EditorialImage
          src={brandStory.image}
          alt="Hands shaping fresh dough at Cake's N Cafe"
          className="order-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-card lg:order-1"
        />

        <div className="order-1 lg:order-2">
          {breadcrumbLabel && <Breadcrumb label={breadcrumbLabel} className="mb-5" />}
          <Reveal>
            <span className="mb-3 inline-block rounded-full bg-plum-900/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-plum-600">
              {brandStory.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <TitleTag className="balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {brandStory.heading}
            </TitleTag>
          </Reveal>
          {brandStory.paragraphs.map((p, i) => (
            <Reveal key={p} delay={0.1 + i * 0.05}>
              <p className="balance mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
