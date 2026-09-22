import Reveal from './ui/Reveal.jsx'
import Button from './ui/Button.jsx'
import { business } from '../data/cafeData.js'
import { useOrderModal } from '../hooks/OrderModalContext.jsx'

export default function FinalCTA() {
  const { openOrderModal } = useOrderModal()
  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi Cake's N Cafe! I have something sweet in mind.",
  )}`

  return (
    <section className="bg-grain relative overflow-hidden bg-plum-950 py-20 sm:py-28">
      <div className="container relative flex flex-col items-center text-center">
        <Reveal>
          <h2 className="balance font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Have Something
            <br className="hidden sm:block" /> Sweet In Mind?
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <p className="mt-4 text-[15.5px] text-white/60">Let&apos;s make it delicious.</p>
        </Reveal>
        <Reveal delay={0.12} className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Button variant="primary" size="lg" onClick={() => openOrderModal()}>
            Order Now
          </Button>
          <Button variant="secondary" size="lg" icon={false} as="a" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
