import Reveal from './ui/Reveal.jsx'
import Breadcrumb from './Breadcrumb.jsx'

// Compact, consistent hero for every inner page (not the homepage, which
// keeps its own full Hero). Renders the page's single <h1>.
export default function PageHero({ breadcrumbLabel, eyebrow, title, description, align = 'left' }) {
  const centered = align === 'center'

  return (
    <section className="bg-cream pb-10 pt-28 sm:pb-14 sm:pt-32">
      <div className={`container flex flex-col ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
        {breadcrumbLabel && <Breadcrumb label={breadcrumbLabel} className="mb-5" />}

        {eyebrow && (
          <Reveal>
            <span className="mb-3 inline-block rounded-full bg-plum-900/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-plum-600">
              {eyebrow}
            </span>
          </Reveal>
        )}

        <Reveal delay={0.05}>
          <h1 className={`balance font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] ${centered ? 'mx-auto' : ''}`}>
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.1}>
            <p className={`balance mt-3.5 max-w-xl text-[15px] leading-relaxed text-ink/60 sm:text-base ${centered ? 'mx-auto' : ''}`}>
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
