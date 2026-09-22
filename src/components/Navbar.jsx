import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle } from 'lucide-react'
import Logo from './ui/Logo.jsx'
import Button from './ui/Button.jsx'
import { navLinks, business } from '../data/cafeData.js'
import { useScrolled } from '../hooks/useScrolled.js'
import { useOrderModal } from '../hooks/OrderModalContext.jsx'

export default function Navbar() {
  const scrolled = useScrolled(16)
  const [open, setOpen] = useState(false)
  const { openOrderModal } = useOrderModal()
  const location = useLocation()
  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    "Hi Cake's N Cafe! I would like to place an order.",
  )}`

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Belt-and-suspenders: close the mobile menu on any route change, even if
  // triggered from somewhere other than a link inside it.
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const desktopLinkClass = ({ isActive }) =>
    `relative shrink-0 pb-1 text-[12.5px] font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-current after:transition-transform after:duration-200 ${
      isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
    } ${scrolled ? (isActive ? 'text-saffron-300' : 'text-white/80 hover:text-saffron-300') : isActive ? 'text-plum-800' : 'text-ink/70 hover:text-plum-700'}`

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-xl px-3 py-3 text-[15px] font-medium transition-colors hover:bg-white/5 ${
      isActive ? 'text-saffron-300' : 'text-white/85 hover:text-saffron-300'
    }`

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
          <Link to="/" aria-label="Cake's N Cafe — Home" className="shrink-0">
            <Logo size={scrolled ? 40 : 46} />
          </Link>

          <ul className="hidden items-center gap-4 xl:flex xl:gap-5 2xl:gap-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={desktopLinkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden xl:block">
            <Button variant="primary" size="md" onClick={() => openOrderModal()}>
              Order Now
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`rounded-full border p-2.5 transition-colors xl:hidden ${
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
            className="max-h-[calc(100vh-4rem)] overflow-y-auto overflow-x-hidden bg-plum-950/95 backdrop-blur-md xl:hidden"
          >
            <ul aria-label="Mobile navigation" className="container-px flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <NavLink to={link.to} end={link.to === '/'} onClick={() => setOpen(false)} className={mobileLinkClass}>
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.04 }}
                className="mt-2 flex flex-col gap-2.5 px-3"
              >
                <Button
                  as="a"
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  icon={false}
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle size={17} />
                  Order on WhatsApp
                </Button>
                <Button
                  variant="outline"
                  icon={false}
                  className="w-full !border-white/20 !text-white hover:!bg-white/5"
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
