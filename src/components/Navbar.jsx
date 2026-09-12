import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './ui/Logo.jsx'
import Button from './ui/Button.jsx'
import { navLinks } from '../data/cafeData.js'
import { useScrolled } from '../hooks/useScrolled.js'
import { useOrderModal } from '../hooks/OrderModalContext.jsx'

export default function Navbar() {
  const scrolled = useScrolled(16)
  const [open, setOpen] = useState(false)
  const { openOrderModal } = useOrderModal()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNavClick = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{
          paddingTop: scrolled ? 8 : 16,
          paddingBottom: scrolled ? 8 : 16,
        }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className={`transition-colors duration-300 ${
          scrolled ? 'bg-plum-950/85 shadow-soft backdrop-blur-md' : 'bg-cream/70 backdrop-blur-sm'
        }`}
      >
        <nav className="container flex items-center justify-between">
          <a href="#home" aria-label="Bhabhare Cakes & Cafe — Home" className="shrink-0">
            <Logo markSize={scrolled ? 34 : 38} dark={!scrolled} />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[13.5px] font-medium transition-colors hover:text-plum-700 ${
                    scrolled ? 'text-white/80 hover:!text-saffron-300' : 'text-ink/70'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button variant="primary" size="md" onClick={() => openOrderModal()}>
              Order Now
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`rounded-full border p-2.5 transition-colors lg:hidden ${
              scrolled ? 'border-white/15 text-white' : 'border-ink/15 text-ink'
            }`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-plum-950/97 backdrop-blur-md lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-xl px-3 py-3 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/5 hover:text-saffron-300"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.04 }}
                className="mt-2 px-3"
              >
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={() => {
                    openOrderModal()
                    setOpen(false)
                  }}
                >
                  Order Now
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
