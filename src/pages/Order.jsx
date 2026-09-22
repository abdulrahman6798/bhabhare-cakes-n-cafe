import { Link } from 'react-router-dom'
import { ArrowRight, Cake, PartyPopper, Coffee, MessageCircle, Phone } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import QuickOrderForm from '../components/forms/QuickOrderForm.jsx'
import { business } from '../data/cafeData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

export default function Order() {
  usePageMeta('Order', "Order cakes or enquire about a custom cake from Cake's N Cafe.")

  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi Cake's N Cafe! I would like to place an order.",
  )}`

  return (
    <>
      <PageHero
        breadcrumbLabel="Order"
        eyebrow="Order"
        title="Let's Make It Delicious."
        description="Pick a starting point, or fill in the quick order form below."
        align="center"
      />

      <section className="bg-cream pb-16 sm:pb-20">
        <div className="container grid gap-4 sm:gap-5 md:grid-cols-3">
          <Reveal>
            <Link
              to="/cakes"
              className="group flex h-full flex-col justify-between rounded-3xl bg-plum-950 p-7 text-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-saffron-400 transition-transform duration-300 group-hover:scale-110">
                <Cake size={20} />
              </span>
              <div className="mt-8">
                <h2 className="font-display text-xl font-semibold sm:text-2xl">Order A Cake</h2>
                <p className="mt-1.5 text-[14px] text-white/60">Browse our full range of signature cakes.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-saffron-300">
                  Browse Cakes
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <Link
              to="/custom-cakes"
              className="group flex h-full flex-col justify-between rounded-3xl bg-berry-500 p-7 text-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 transition-transform duration-300 group-hover:scale-110">
                <PartyPopper size={20} />
              </span>
              <div className="mt-8">
                <h2 className="font-display text-xl font-semibold sm:text-2xl">Custom Cake</h2>
                <p className="mt-1.5 text-[14px] text-white/75">Tell us the occasion and we&apos;ll design it with you.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-white">
                  Design Your Cake
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.16}>
            <Link
              to="/cafe-menu"
              className="group flex h-full flex-col justify-between rounded-3xl bg-white p-7 text-ink shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-plum-950 text-saffron-400 transition-transform duration-300 group-hover:scale-110">
                <Coffee size={20} />
              </span>
              <div className="mt-8">
                <h2 className="font-display text-xl font-semibold sm:text-2xl">Cafe Order</h2>
                <p className="mt-1.5 text-[14px] text-ink/60">Coffee, pastries and cafe favourites.</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-plum-700">
                  View Cafe Menu
                  <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
          <div>
            <span className="mb-3 inline-block rounded-full bg-plum-900/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-plum-600">
              Quick Order
            </span>
            <h2 className="balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Already know what you want?
            </h2>
            <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink/60">
              Fill in the form and we&apos;ll confirm your order shortly — or reach us directly on WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:brightness-95"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[14px] font-semibold text-ink transition-colors hover:border-ink/35"
              >
                <Phone size={18} />
                Call Us
              </a>
            </div>
            <p className="mt-6 text-[13px] text-ink/45">
              Need help deciding? <Link to="/contact" className="font-semibold text-plum-700 hover:underline">Contact us</Link>.
            </p>
          </div>

          <Reveal delay={0.08} className="rounded-3xl bg-cream p-6 shadow-card sm:p-8">
            <QuickOrderForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
