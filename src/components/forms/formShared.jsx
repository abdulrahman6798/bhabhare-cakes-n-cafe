import { motion } from 'framer-motion'
import { CheckCircle2, MessageCircle } from 'lucide-react'

export const inputClass =
  'w-full rounded-xl border border-ink/10 bg-white px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink/35 outline-none transition-all duration-200 focus:border-plum-500 focus:ring-2 focus:ring-plum-500/15'

export function FieldError({ children }) {
  if (!children) return null
  return <p className="mt-1 text-[12px] font-medium text-berry-600">{children}</p>
}

// Shared "thank you" state for both the modal and page-embedded forms.
// Pass `onClose` when embedded in a modal (renders a Close link); omit it on
// a plain page and a "Send another enquiry" reset is shown instead.
export function SuccessPanel({ heading, message, whatsappHref, whatsappLabel, onClose, onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center py-4 text-center"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <CheckCircle2 size={52} className="text-plum-600" strokeWidth={1.5} />
      </motion.div>
      <h3 className="mt-4 font-display text-lg font-semibold text-ink">{heading}</h3>
      <p className="mt-1.5 max-w-xs text-[13.5px] leading-relaxed text-ink/55">{message}</p>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[14px] font-semibold text-white transition-colors hover:brightness-95"
      >
        <MessageCircle size={18} />
        {whatsappLabel}
      </a>

      {onClose && (
        <button type="button" onClick={onClose} className="mt-3 text-[13px] font-medium text-ink/45 hover:text-ink/70">
          Close
        </button>
      )}
      {!onClose && onReset && (
        <button type="button" onClick={onReset} className="mt-3 text-[13px] font-medium text-ink/45 hover:text-ink/70">
          Send another enquiry
        </button>
      )}
    </motion.div>
  )
}
