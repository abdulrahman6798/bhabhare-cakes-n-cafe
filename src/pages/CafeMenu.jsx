import { Link } from 'react-router-dom'
import { Coffee, CupSoda, Sandwich, Pizza, Cookie, IceCreamCone } from 'lucide-react'
import CafeExperience from '../components/CafeExperience.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CTASection from '../components/CTASection.jsx'
import MenuItem from '../components/MenuItem.jsx'
import { products, cafeMenuHighlights } from '../data/cafeData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

const highlightIcons = { Coffee, CupSoda, Sandwich, Pizza, Cookie, IceCreamCone }

// Real, priced cafe items grouped by their actual data category — no
// invented menu items or prices for categories we don't stock yet.
const menuGroups = [
  { label: 'Coffee', category: 'Coffee' },
  { label: 'Desserts', category: 'Desserts' },
  { label: 'Pastries', category: 'Pastries' },
  { label: 'Snacks', category: 'Snacks' },
].map((group) => ({ ...group, items: products.filter((p) => p.category === group.category) }))
  .filter((group) => group.items.length > 0)

export default function CafeMenu() {
  usePageMeta('Cafe Menu', "Coffee, cold coffee, snacks and desserts at Cake's N Cafe — freshly made, every day.")

  return (
    <>
      <CafeExperience firstSection titleAs="h1" breadcrumbLabel="Cafe Menu" showButton={false} />

      <section className="bg-white py-20 sm:py-28">
        <div className="container max-w-3xl">
          {menuGroups.map((group, gi) => (
            <Reveal key={group.label} delay={gi * 0.05} className={gi > 0 ? 'mt-12' : ''}>
              <h2 className="font-display text-xl font-semibold text-ink">{group.label}</h2>
              <div className="mt-4 divide-y divide-ink/[0.06] rounded-2xl border border-ink/[0.06]">
                {group.items.map((item) => (
                  <MenuItem key={item.id} item={item} />
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.2} className="mt-14 rounded-2xl bg-plum-50 p-6 text-center sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-plum-600">Also On The Menu</p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {cafeMenuHighlights.map((item) => {
                const Icon = highlightIcons[item.icon]
                return (
                  <span key={item.label} className="flex items-center gap-2 text-[13.5px] font-medium text-ink/70">
                    <Icon size={15} className="text-plum-500" />
                    {item.label}
                  </span>
                )
              })}
            </div>
            <p className="mt-4 text-[12.5px] text-ink/45">
              Ask in-store for today&apos;s full selection — or{' '}
              <Link to="/contact" className="font-semibold text-plum-700 hover:underline">
                get in touch
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection heading="Looking For Something Sweet?" ctaLabel="Browse Cakes" to="/cakes" />
    </>
  )
}
