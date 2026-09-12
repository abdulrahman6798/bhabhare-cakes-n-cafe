import { Instagram, Facebook, MessageCircle } from 'lucide-react'
import Logo from './ui/Logo.jsx'
import { business, navLinks } from '../data/cafeData.js'

export default function Footer() {
  const year = new Date().getFullYear()
  const whatsappHref = `https://wa.me/${business.whatsappNumber}`

  return (
    <footer className="bg-grain relative bg-char-950 pt-16 pb-8 text-white/60">
      <div className="container grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div>
          <Logo markSize={36} />
          <p className="mt-4 max-w-[220px] text-[13.5px] leading-relaxed">{business.tagline}</p>
          <div className="mt-5 flex gap-2.5">
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-saffron-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-saffron-300"
            >
              <Facebook size={16} />
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 hover:text-saffron-300"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/35">Explore</h4>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[13.5px] transition-colors hover:text-saffron-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/35">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-[13.5px]">
            <li>{business.phoneDisplay}</li>
            <li>{business.whatsappDisplay}</li>
            {business.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-white/35">Hours</h4>
          <p className="mt-4 text-[13.5px]">{business.hoursLabel}</p>
          <p className="text-[13.5px] text-white/40">{business.hoursTime}</p>
        </div>
      </div>

      <div className="container mt-12 border-t border-white/10 pt-6 text-center text-[12.5px] text-white/35">
        © {year} {business.name}. All rights reserved.
      </div>
    </footer>
  )
}
