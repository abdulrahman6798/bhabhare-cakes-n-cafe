import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading.jsx'
import Button from './ui/Button.jsx'
import Breadcrumb from './Breadcrumb.jsx'
import { customCakeCategories } from '../data/cafeData.js'
import { useOrderModal } from '../hooks/OrderModalContext.jsx'

export default function CustomCakeSection({
  titleAs = 'h2',
  firstSection = false,
  breadcrumbLabel,
  showButton = true,
  openModalOnClick = true,
}) {
  const { openCustomCakeModal } = useOrderModal()

  const handleCardClick = () => {
    if (openModalOnClick) {
      openCustomCakeModal()
    } else {
      document.getElementById('custom-cake-form')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={`bg-white ${firstSection ? 'pb-20 pt-28 sm:pb-28 sm:pt-32' : 'py-20 sm:py-28'}`}>
      <div className="container">
        {breadcrumbLabel && (
          <div className="mb-5 flex justify-center">
            <Breadcrumb label={breadcrumbLabel} />
          </div>
        )}
        <SectionHeading
          as={titleAs}
          eyebrow="Custom Cakes"
          title="Your Cake. Your Idea."
          description="Tell us what you're imagining and we'll create a cake made especially for your celebration."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {customCakeCategories.map((cat, i) => (
            <motion.button
              key={cat.id}
              type="button"
              onClick={handleCardClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl text-left shadow-card"
            >
              <img
                src={cat.image}
                alt={cat.label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/20 to-transparent" />
              <div className="relative p-4 sm:p-5">
                <h3 className="font-display text-base font-semibold text-white sm:text-lg">{cat.label}</h3>
                <p className="mt-1 text-[12px] leading-snug text-white/70">{cat.description}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {showButton && (
          <div className="mt-11 flex justify-center">
            <Button variant="berry" size="lg" onClick={openCustomCakeModal}>
              Create Your Cake
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
