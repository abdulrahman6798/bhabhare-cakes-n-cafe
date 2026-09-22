import ContactSection from '../components/ContactSection.jsx'
import CTASection from '../components/CTASection.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'

export default function Contact() {
  usePageMeta('Contact', "Visit, call or WhatsApp Cake's N Cafe — address, phone and opening hours.")

  return (
    <>
      <ContactSection
        firstSection
        titleAs="h1"
        breadcrumbLabel="Contact"
        description="Drop by, call ahead, or send us a message — whichever's easiest."
      />

      <CTASection heading="Have a Cake Requirement?" ctaLabel="Design Your Cake" to="/custom-cakes" bg="bg-white" />
    </>
  )
}
