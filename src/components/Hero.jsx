import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Cake as CakeIcon, MessageCircle } from 'lucide-react'
import Button from './ui/Button.jsx'
import HeroCarousel from './HeroCarousel.jsx'
import { heroBadge, heroSlides, business } from '../data/cafeData.js'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = heroSlides[activeIndex]

  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi Cake's N Cafe! I would like to place an order.",
  )}`

  return (
    <section className="bg-grain relative overflow-hidden bg-cream pb-20 pt-32 sm:pb-24 sm:pt-40">
      {/* A single quiet decorative line — no glow, no motion */}
      <svg
        className="pointer-events-none absolute -right-32 -top-32 hidden h-[560px] w-[560px] text-plum-300/30 lg:block"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeDasharray="1 11" strokeWidth="1.4" />
      </svg>

      <div className="container relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Left column — fixed brand headline; only the CTA syncs with the slide */}
        <div className="relative z-10">
          <motion.span
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-plum-900/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-plum-700"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-saffron-500" />
            {heroBadge}
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="balance mt-6 font-display text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]"
          >
            Freshly Baked.
            <br />
            <span className="text-gradient-warm">Made for Your Moments.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="balance mt-6 max-w-md text-[15.5px] leading-relaxed text-ink/65 sm:text-base"
          >
            From celebration cakes to cafe favourites, freshly baked treats
            made to make every moment a little sweeter.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button as={Link} to={activeSlide.route} variant="dark" size="lg">
              <motion.span
                key={activeSlide.cta}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {activeSlide.cta}
              </motion.span>
            </Button>
            <Button
              variant="primary"
              size="lg"
              icon={false}
              as="a"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={17} />
              Order on WhatsApp
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] font-medium text-ink/45"
          >
            <span className="inline-flex items-center gap-1.5">
              <CakeIcon size={14} className="text-plum-600" /> Freshly baked
            </span>
            <span className="h-1 w-1 rounded-full bg-ink/15" />
            <span>Custom cakes</span>
            <span className="h-1 w-1 rounded-full bg-ink/15" />
            <span>Cafe favourites</span>
          </motion.div>
        </div>

        {/* Right column — rotating image carousel, editorial framing preserved */}
        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none xl:-mr-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full"
          >
            <HeroCarousel
              slides={heroSlides}
              activeIndex={activeIndex}
              onChange={setActiveIndex}
              className="h-full w-full rounded-tl-[3rem] rounded-tr-xl rounded-bl-xl rounded-br-[3rem] shadow-warm ring-1 ring-ink/5"
            />

            {/* Small brand seal, like a wax stamp on bakery packaging */}
            <div className="pointer-events-none absolute -right-4 -top-4 z-20 flex h-16 w-16 rotate-6 items-center justify-center rounded-full bg-saffron-500 shadow-card ring-4 ring-cream sm:-right-6 sm:-top-6 sm:h-20 sm:w-20">
              <span className="font-display text-xl font-bold text-plum-950 sm:text-2xl">C</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
