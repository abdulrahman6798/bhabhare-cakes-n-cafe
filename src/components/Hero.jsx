import { motion } from 'framer-motion'
import { Cake as CakeIcon, Star } from 'lucide-react'
import Button from './ui/Button.jsx'
import { heroBadge, heroImages } from '../data/cafeData.js'
import { useOrderModal } from '../hooks/OrderModalContext.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const { openCustomCakeModal } = useOrderModal()

  return (
    <section
      id="home"
      className="bg-grain relative overflow-hidden bg-cream pb-20 pt-32 sm:pb-24 sm:pt-40"
    >
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
        {/* Left column */}
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
            className="balance mt-6 font-display text-[2.6rem] font-semibold leading-[1.06] tracking-tight text-ink sm:text-6xl lg:text-[4rem]"
          >
            Sweet Moments
            <br />
            <span className="text-gradient-warm">Start Here.</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="balance mt-6 max-w-md text-[15.5px] leading-relaxed text-ink/65 sm:text-base"
          >
            Freshly baked cakes, delicious treats and cafe favourites made for
            everyday cravings and special celebrations.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-3.5"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Menu
            </Button>
            <Button variant="outline" size="lg" icon={false} onClick={openCustomCakeModal}>
              Order a Cake
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

        {/* Right column — editorial photo composition */}
        <div className="relative z-10 mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full"
          >
            {/* Main cake image — organic, asymmetric framing rather than a plain rounded box */}
            <div className="relative h-full w-full overflow-hidden rounded-tl-[3rem] rounded-tr-xl rounded-bl-xl rounded-br-[3rem] shadow-warm ring-1 ring-ink/5">
              <img
                src={heroImages.main}
                alt="Freshly baked chocolate drip cake, the signature centrepiece at Bhabhare Cakes & Cafe"
                className="h-full w-full object-cover"
                loading="eager"
              />

              {/* Freshly Baked sticker badge */}
              <div className="absolute left-4 top-4 flex -rotate-3 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-plum-800 shadow-card">
                <Star size={12} className="fill-saffron-500 text-saffron-500" />
                Freshly Baked
              </div>
            </div>

            {/* Small brand seal, like a wax stamp on bakery packaging */}
            <div className="absolute -right-4 -top-4 flex h-16 w-16 rotate-6 items-center justify-center rounded-full bg-saffron-500 shadow-card ring-4 ring-cream sm:-right-6 sm:-top-6 sm:h-20 sm:w-20">
              <span className="font-display text-xl font-bold text-plum-950 sm:text-2xl">B</span>
            </div>

            {/* Secondary dessert card — a single gentle reveal, no continuous float */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-7 -left-6 flex w-48 -rotate-2 items-center gap-3 rounded-2xl bg-white p-3 shadow-warm sm:-left-10 sm:w-56"
            >
              <img
                src={heroImages.floatingCard}
                alt="Mint chocolate cupcake"
                className="h-14 w-14 shrink-0 rounded-xl object-cover"
              />
              <div>
                <p className="text-[13px] font-semibold leading-tight text-ink">Today&apos;s Pick</p>
                <p className="text-[12px] leading-tight text-ink/50">Choco-Mint Cupcake</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
