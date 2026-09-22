import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import SectionHeading from './ui/SectionHeading.jsx'
import Button from './ui/Button.jsx'
import Breadcrumb from './Breadcrumb.jsx'
import { business } from '../data/cafeData.js'

export default function ContactSection({ titleAs = 'h2', firstSection = false, breadcrumbLabel, description }) {
  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi Cake's N Cafe! I would like to know more about your cakes.",
  )}`

  return (
    <section className={`bg-cream ${firstSection ? 'pb-20 pt-28 sm:pb-28 sm:pt-32' : 'py-20 sm:py-28'}`}>
      <div className="container">
        {breadcrumbLabel && <Breadcrumb label={breadcrumbLabel} className="mb-5" />}
        <SectionHeading eyebrow="Visit Us" title="Visit Cake's N Cafe" description={description} as={titleAs} />

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <Reveal className="flex flex-col justify-between rounded-3xl bg-plum-950 p-7 text-white sm:p-9">
            <div>
              <h3 className="font-display text-xl font-semibold">{business.name}</h3>

              <div className="mt-6 space-y-5">
                <div className="flex gap-3.5">
                  <MapPin size={19} className="mt-0.5 shrink-0 text-saffron-400" />
                  <p className="text-[14.5px] leading-relaxed text-white/75">
                    {business.addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex gap-3.5">
                  <Phone size={19} className="mt-0.5 shrink-0 text-saffron-400" />
                  <p className="text-[14.5px] text-white/75">{business.phoneDisplay}</p>
                </div>
                <div className="flex gap-3.5">
                  <MessageCircle size={19} className="mt-0.5 shrink-0 text-saffron-400" />
                  <p className="text-[14.5px] text-white/75">{business.whatsappDisplay}</p>
                </div>
                <div className="flex gap-3.5">
                  <Clock size={19} className="mt-0.5 shrink-0 text-saffron-400" />
                  <p className="text-[14.5px] text-white/75">
                    {business.hoursLabel}
                    <span className="block text-white/50">{business.hoursTime}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button as="a" href={business.mapsUrl} target="_blank" rel="noopener noreferrer" variant="primary" icon={false}>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
                  Get Directions
                </span>
              </Button>
              <Button as="a" href={business.phoneHref} variant="secondary" icon={false}>
                <span className="inline-flex items-center gap-2">
                  <Phone size={15} className="transition-transform duration-200 group-hover:rotate-12" />
                  Call Now
                </span>
              </Button>
              <Button as="a" href={whatsappHref} target="_blank" rel="noopener noreferrer" variant="secondary" icon={false}>
                <span className="inline-flex items-center gap-2">
                  <MessageCircle size={15} className="transition-transform duration-200 group-hover:scale-110" />
                  WhatsApp
                </span>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative min-h-[280px] overflow-hidden rounded-3xl bg-plum-100 lg:min-h-0">
            {/* Map placeholder — swap for an embedded Google Map once the exact
                storefront location is confirmed with the owner. */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,#ecd9f7_0%,#f7ecd9_100%)] p-6 text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-card">
                <MapPin size={22} className="text-berry-500" />
              </span>
              <p className="max-w-[220px] text-[13.5px] font-medium leading-relaxed text-plum-800/70">
                Map preview coming soon — tap &ldquo;Get Directions&rdquo; for now.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
