import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useOrderModal } from '../hooks/OrderModalContext.jsx'
import CustomCakeForm from './forms/CustomCakeForm.jsx'
import QuickOrderForm from './forms/QuickOrderForm.jsx'

export default function OrderModal() {
  const { open, mode, product, close } = useOrderModal()
  const isCustom = mode === 'custom'

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={close}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-plum-950/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={isCustom ? 'Design Your Cake' : 'Quick Order'}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl bg-white p-6 shadow-lift sm:p-7"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-1.5 text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <X size={18} />
            </button>

            {isCustom ? (
              <CustomCakeForm idPrefix="modal-" autoFocus onClose={close} />
            ) : (
              <QuickOrderForm idPrefix="modal-" autoFocus initialItem={product ?? ''} onClose={close} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
