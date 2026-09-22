import { useEffect, useRef, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import HeroSlide from './HeroSlide.jsx'

const INTERVAL = 2000

// Controlled image carousel — the parent owns `activeIndex` so the rest of
// the hero (headline CTA) can stay in sync with whichever slide is showing.
export default function HeroCarousel({ slides, activeIndex, onChange, className = '' }) {
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const touchTimeout = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChangeMq = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', onChangeMq)
    return () => mq.removeEventListener('change', onChangeMq)
  }, [])

  // Auto-rotate.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      onChange((activeIndex + 1) % slides.length)
    }, INTERVAL)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, paused, slides.length])

  // Preload the next slide (and the one after) so the crossfade never shows
  // a blank/loading frame.
  useEffect(() => {
    for (const offset of [1, 2]) {
      const next = slides[(activeIndex + offset) % slides.length]
      if (next) {
        const img = new Image()
        img.src = next.image
      }
    }
  }, [activeIndex, slides])

  const goTo = (i) => onChange((i + slides.length) % slides.length)
  const prev = () => goTo(activeIndex - 1)
  const next = () => goTo(activeIndex + 1)

  const pauseForTouch = () => {
    setPaused(true)
    if (touchTimeout.current) clearTimeout(touchTimeout.current)
  }
  const resumeAfterTouch = () => {
    if (touchTimeout.current) clearTimeout(touchTimeout.current)
    touchTimeout.current = setTimeout(() => setPaused(false), 1200)
  }

  useEffect(() => () => touchTimeout.current && clearTimeout(touchTimeout.current), [])

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={pauseForTouch}
      onTouchEnd={resumeAfterTouch}
      role="region"
      aria-label="Featured cakes and cafe highlights"
      aria-roledescription="carousel"
    >
      <AnimatePresence mode="wait">
        <HeroSlide key={activeIndex} slide={slides[activeIndex]} reducedMotion={reducedMotion} />
      </AnimatePresence>

      {/* Prev / next — minimal, sit above the slide link without triggering it */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-plum-900 shadow-card transition-colors duration-200 hover:bg-white"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-plum-900 shadow-card transition-opacity duration-200 hover:bg-white"
      >
        <ChevronRight size={16} />
      </button>

      {/* Indicators */}
      <div className="absolute right-5 top-5 z-10 flex items-center gap-1.5 rounded-full bg-plum-950/40 px-2.5 py-1.5 backdrop-blur-sm sm:right-7 sm:top-7">
        {slides.map((s, i) => (
          <button
            key={s.route + i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1} of ${slides.length}: ${s.title}`}
            aria-current={i === activeIndex}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-5 bg-saffron-400' : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      <span className="absolute left-5 top-5 z-10 rounded-full bg-plum-950/40 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white/90 backdrop-blur-sm sm:left-7 sm:top-7">
        {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </span>
    </div>
  )
}
