import { Link } from 'react-router-dom'
import Reveal from './ui/Reveal.jsx'
import Button from './ui/Button.jsx'

// A compact, reusable banner CTA used at the bottom of several pages
// ("Need Something Custom?", "Looking For Something Sweet?", etc).
// Pass `to` for an internal route or `onClick` to trigger something like the
// custom-cake modal.
export default function CTASection({ heading, subtext, ctaLabel, to, onClick, bg = 'bg-cream' }) {
  return (
    <section className={`${bg} py-6 sm:py-8`}>
      <div className="container">
        <Reveal className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-plum-900/10 bg-plum-50 px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{heading}</h3>
            {subtext && <p className="mt-1.5 text-[14px] text-ink/60">{subtext}</p>}
          </div>
          {to ? (
            <Button as={Link} to={to} variant="dark" size="lg" className="shrink-0">
              {ctaLabel}
            </Button>
          ) : (
            <Button variant="dark" size="lg" onClick={onClick} className="shrink-0">
              {ctaLabel}
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  )
}
