import { MessageCircle } from 'lucide-react'
import Reveal from '../components/ui/Reveal.jsx'
import CustomCakeSection from '../components/CustomCakeSection.jsx'
import CustomCakeForm from '../components/forms/CustomCakeForm.jsx'
import { business } from '../data/cafeData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

export default function CustomCakes() {
  usePageMeta('Custom Cakes', "Design a custom cake with Cake's N Cafe — birthdays, anniversaries, theme cakes and more.")

  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi Cake's N Cafe! I'd like to enquire about a custom cake.",
  )}`

  return (
    <>
      <CustomCakeSection
        firstSection
        titleAs="h1"
        breadcrumbLabel="Custom Cakes"
        showButton={false}
        openModalOnClick={false}
      />

      <section id="custom-cake-form" className="scroll-mt-24 bg-cream py-20 sm:py-28">
        <div className="container grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <div className="lg:pt-2">
            <span className="mb-3 inline-block rounded-full bg-plum-900/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-plum-600">
              Prefer WhatsApp?
            </span>
            <h2 className="balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Send us your requirements directly.
            </h2>
            <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-ink/60">
              Tell us the occasion, size and flavour over WhatsApp and we&apos;ll take it from there.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:brightness-95"
            >
              <MessageCircle size={18} />
              Send Enquiry on WhatsApp
            </a>
          </div>

          <Reveal delay={0.08} className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
            <CustomCakeForm
              title="Send Cake Enquiry"
              subtitle="Fill in a few details and we'll get back to you."
              submitLabel="Send Cake Enquiry"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
