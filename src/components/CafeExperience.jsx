import { Link } from 'react-router-dom'
import { Coffee, CupSoda, Sandwich, Pizza, Cookie, IceCreamCone } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import Button from './ui/Button.jsx'
import Breadcrumb from './Breadcrumb.jsx'
import EditorialImage from './ui/EditorialImage.jsx'
import { cafeSectionImage, cafeMenuHighlights } from '../data/cafeData.js'

const icons = { Coffee, CupSoda, Sandwich, Pizza, Cookie, IceCreamCone }

export default function CafeExperience({
  titleAs = 'h2',
  firstSection = false,
  breadcrumbLabel,
  showButton = true,
  maxHighlights = cafeMenuHighlights.length,
}) {
  const TitleTag = titleAs
  const highlights = cafeMenuHighlights.slice(0, maxHighlights)

  return (
    <section className={`bg-plum-950 ${firstSection ? 'pb-20 pt-28 sm:pb-28 sm:pt-32' : 'py-20 sm:py-28'}`}>
      <div className="container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <EditorialImage
          src={cafeSectionImage}
          alt="A cosy corner inside Cake's N Cafe"
          className="order-2 aspect-[4/5] overflow-hidden rounded-3xl shadow-lift lg:order-1"
        />

        <div className="order-1 lg:order-2">
          {breadcrumbLabel && <Breadcrumb label={breadcrumbLabel} light className="mb-5" />}
          <Reveal>
            <span className="mb-3 inline-block rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-saffron-300">
              The Cafe
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <TitleTag className="balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Stay For The Coffee.
            </TitleTag>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="balance mt-4 max-w-md text-[15px] leading-relaxed text-white/65">
              Good cakes deserve good coffee. Drop in for a quick bite, a
              coffee with friends, or a sweet celebration.
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3 sm:max-w-sm">
            {highlights.map((item) => {
              const Icon = icons[item.icon]
              return (
                <span key={item.label} className="flex items-center gap-2 text-[13.5px] font-medium text-white/75">
                  <Icon size={15} className="text-saffron-400" />
                  {item.label}
                </span>
              )
            })}
          </Reveal>

          {showButton && (
            <Reveal delay={0.2} className="mt-8">
              <Button as={Link} to="/cafe-menu" variant="primary" size="lg">
                View Cafe Menu
              </Button>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
