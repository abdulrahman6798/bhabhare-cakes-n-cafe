import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal.jsx'
import Photo from './Photo.jsx'
import { Eyebrow, EditorialButton } from './parts.jsx'
import { whatsappUrl } from './homeMedia.js'
import { business, heroSlides, promoStrip } from '../../data/cafeData.js'

const EASE = [0.22, 1, 0.36, 1]

export default function FinalVisit() {
  const image = heroSlides[heroSlides.length - 1].image
  const whatsappHref = whatsappUrl(business.whatsappNumber, "Hi Cake's N Cafe! I have something sweet in mind.")

  return (
    <section className="relative isolate overflow-hidden bg-plum-950 py-24 sm:py-32 lg:py-40">
      <Photo
        src={image}
        alt=""
        widths={[900, 1400, 1800]}
        sizes="100vw"
        width={1800}
        height={1200}
        fade={false}
        parallax={16}
        className="!absolute inset-0 -z-20 h-full w-full"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-plum-950/[0.62]" />

      <div className="container grid gap-14 lg:grid-cols-12 lg:items-end lg:gap-x-10">
        <div className="lg:col-span-7">
          <Reveal y={20}>
            <Eyebrow tone="light">Visit us</Eyebrow>
          </Reveal>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mt-6 font-editorial text-[3.2rem] font-medium leading-[0.98] tracking-[-0.02em] text-white sm:text-[5rem] lg:text-[6rem]"
          >
            Come hungry.
            <br />
            <em className="italic text-saffron-400">Leave happy.</em>
          </motion.h2>
        </div>

        <Reveal y={20} delay={0.1} className="lg:col-span-5">
          <div className="border-t border-white/25 pt-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-saffron-300">Visit us</h3>
            <address className="mt-3 not-italic text-[15px] leading-relaxed text-white/85">
              {business.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-3 text-[14px] text-white/65">
              {business.hoursLabel} &nbsp;·&nbsp; {business.hoursTime}
            </p>
            <a
              href={business.phoneHref}
              className="mt-1 inline-block text-[14px] font-medium text-white underline-offset-4 hover:text-saffron-300 hover:underline"
            >
              {business.phoneDisplay}
            </a>
          </div>

          <div className="mt-8 border-t border-white/25 pt-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-saffron-300">Order a cake</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/85">{promoStrip.subtext}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <EditorialButton href={business.mapsUrl} variant="accent">
              Get directions
            </EditorialButton>
            <EditorialButton href={whatsappHref} variant="outlineLight">
              Order on WhatsApp
            </EditorialButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
