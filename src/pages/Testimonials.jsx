import PageHero from '../components/PageHero.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { testimonials } from '../data/cafeData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

export default function Testimonials() {
  usePageMeta('Customer Reviews', "What customers say about Cake's N Cafe.")

  return (
    <>
      <PageHero
        breadcrumbLabel="Testimonials"
        eyebrow="Reviews"
        title="What Our Customers Say"
        description="A few honest words from people who've stopped by."
        align="center"
      />

      <section className="bg-cream pb-20 sm:pb-28">
        <div className="container">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready To Order?" ctaLabel="Start Your Order" to="/order" />
    </>
  )
}
