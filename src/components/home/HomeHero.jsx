import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Eyebrow, EditorialButton } from './parts.jsx'
import { resize, srcSetOf, stripByLabel, whatsappUrl } from './homeMedia.js'
import { business, heroImages } from '../../data/cafeData.js'

const EASE = [0.22, 1, 0.36, 1]
const HERO_SIZES = '(min-width: 1024px) 560px, 100vw'
const HERO_WIDTHS = [720, 1000, 1400]

const rise = (i) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: 0.06 + i * 0.08, ease: EASE },
})

export default function HomeHero() {
  const main = heroImages.main
  const cup = stripByLabel('Coffee').image
  const whatsappHref = whatsappUrl(business.whatsappNumber, "Hi Cake's N Cafe! I would like to place an order.")

  // Start fetching the hero photograph as early as React can, and only on this route.
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = resize(main, 1000)
    link.setAttribute('imagesrcset', srcSetOf(main, HERO_WIDTHS))
    link.setAttribute('imagesizes', HERO_SIZES)
    document.head.appendChild(link)
    return () => link.remove()
  }, [main])

  return (
    <section className="relative overflow-x-clip bg-cream pb-16 pt-28 sm:pt-32 lg:pb-28 lg:pt-36">
      <div className="container grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 xl:gap-16">
        <div className="relative z-10">
          <motion.div {...rise(0)}>
            <Eyebrow>Cake&apos;s N Cafe</Eyebrow>
          </motion.div>

          <h1 className="mt-6 font-editorial text-[2.9rem] font-medium leading-[0.96] tracking-[-0.02em] text-ink min-[390px]:text-[3.4rem] sm:text-[5rem] md:text-[8vw] lg:text-[clamp(4rem,7vw,6.1rem)]">
            <motion.span className="block" {...rise(1)}>
              Something
            </motion.span>
            <motion.span className="block" {...rise(2)}>
              <em className="italic text-plum-700">worth</em>
            </motion.span>
            <motion.span className="block" {...rise(3)}>
              celebrating.
            </motion.span>
          </h1>

          <motion.p
            {...rise(4)}
            className="mt-7 max-w-[26rem] text-[1.0625rem] leading-relaxed text-ink/70"
          >
            Fresh cakes, custom creations and cafe moments made for everyday happiness.
          </motion.p>

          <motion.div {...rise(5)} className="mt-9 flex flex-col gap-3 min-[520px]:flex-row">
            <EditorialButton to="/cakes" variant="solid" className="min-[520px]:justify-start">
              Explore Cakes
            </EditorialButton>
            <EditorialButton href={whatsappHref} variant="outline" className="min-[520px]:justify-start">
              Order on WhatsApp
            </EditorialButton>
          </motion.div>

          <motion.p
            {...rise(6)}
            className="mt-10 hidden max-w-[26rem] border-t border-ink/15 pt-5 text-[12px] tracking-wide text-ink/55 sm:block"
          >
            {business.hoursLabel} &nbsp;·&nbsp; {business.hoursTime}
          </motion.p>
        </div>

        <div className="relative -mx-5 pb-10 sm:mx-0 sm:ml-auto sm:w-full sm:max-w-[28rem] md:max-w-none lg:pb-12">
          <div className="relative aspect-[5/6] overflow-hidden bg-ink/[0.06] sm:aspect-[4/5]">
            <motion.img
              ref={(el) => el && el.setAttribute('fetchpriority', 'high')}
              src={resize(main, 1000)}
              srcSet={srcSetOf(main, HERO_WIDTHS)}
              sizes={HERO_SIZES}
              width={900}
              height={1125}
              alt="Chocolate truffle cake with piped ganache rosettes"
              decoding="async"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="h-full w-full object-cover object-[62%_50%]"
            />
            <div className="absolute right-0 top-0 bg-cream px-4 py-3 text-[10px] font-semibold uppercase leading-[1.55] tracking-[0.22em] text-plum-900">
              Freshly baked
              <br />
              <span className="text-berry-600">every day</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-5 w-[36%] sm:left-0 sm:w-[32%] sm:-translate-x-6 lg:-translate-x-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
              className="border-[6px] border-cream bg-cream"
            >
              <img
                src={resize(cup, 500)}
                srcSet={srcSetOf(cup, [320, 500])}
                sizes="(min-width: 1024px) 160px, 36vw"
                width={500}
                height={500}
                alt="Latte art in a cup of coffee, seen from above"
                decoding="async"
                className="aspect-square h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
