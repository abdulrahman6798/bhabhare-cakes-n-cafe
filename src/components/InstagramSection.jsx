import { Instagram } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { instagramImages, business } from '../data/cafeData.js'

export default function InstagramSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container">
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="balance font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Sweet moments from Bhabhare
          </h2>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-plum-700 hover:text-berry-600"
          >
            <Instagram size={16} />
            Follow us on Instagram
          </a>
        </Reveal>

        <div className="mt-9 grid grid-cols-3 gap-2.5 sm:gap-3.5">
          {instagramImages.map((src) => (
            <a
              key={src}
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <img
                src={src}
                alt="Bhabhare Cakes and Cafe on Instagram"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-plum-950/0 transition-colors duration-300 group-hover:bg-plum-950/40">
                <Instagram
                  size={20}
                  className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
