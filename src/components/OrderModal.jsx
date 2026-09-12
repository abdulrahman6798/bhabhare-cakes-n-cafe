import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, CheckCircle2, MessageCircle } from 'lucide-react'
import { useOrderModal } from '../hooks/OrderModalContext.jsx'
import { business, occasionOptions, cakeTypeOptions } from '../data/cafeData.js'

const emptyOrderForm = { name: '', phone: '', item: '', notes: '' }
const emptyCustomForm = {
  name: '',
  phone: '',
  occasion: '',
  cakeType: '',
  date: '',
  message: '',
}

function FieldError({ children }) {
  if (!children) return null
  return <p className="mt-1 text-[12px] font-medium text-berry-600">{children}</p>
}

const inputClass =
  'w-full rounded-xl border border-ink/10 bg-white px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-plum-500 focus:ring-2 focus:ring-plum-500/15'

export default function OrderModal() {
  const { open, mode, product, close } = useOrderModal()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [orderForm, setOrderForm] = useState(emptyOrderForm)
  const [customForm, setCustomForm] = useState(emptyCustomForm)
  const firstFieldRef = useRef(null)

  const isCustom = mode === 'custom'
  const title = isCustom ? 'Design Your Cake' : 'Quick Order'
  const subtitle = isCustom
    ? 'Tell us what you have in mind and we will take it from there.'
    : 'Share a few details and we will confirm your order shortly.'

  useEffect(() => {
    if (!open) return
    setSubmitted(false)
    setErrors({})
    setOrderForm({ ...emptyOrderForm, item: product ?? '' })
    setCustomForm(emptyCustomForm)
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => firstFieldRef.current?.focus(), 60)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [open, product])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  if (!open) return null

  const form = isCustom ? customForm : orderForm
  const setForm = isCustom ? setCustomForm : setOrderForm

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    const phoneDigits = form.phone.replace(/\D/g, '')
    if (!phoneDigits) next.phone = 'Please enter a phone number.'
    else if (phoneDigits.length < 10) next.phone = 'Enter a valid phone number.'
    if (isCustom && !form.occasion) next.occasion = 'Please select an occasion.'
    if (isCustom && !form.cakeType) next.cakeType = 'Please select a cake type.'
    if (!isCustom && !form.item.trim()) next.item = 'Let us know what you would like to order.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const whatsappMessage = isCustom
    ? [
        `Hi Bhabhare Cakes & Cafe! I'd like to enquire about a custom cake.`,
        `Name: ${customForm.name}`,
        `Phone: ${customForm.phone}`,
        customForm.occasion && `Occasion: ${customForm.occasion}`,
        customForm.cakeType && `Cake Type: ${customForm.cakeType}`,
        customForm.date && `Preferred Date: ${customForm.date}`,
        customForm.message && `Message: ${customForm.message}`,
      ]
        .filter(Boolean)
        .join('\n')
    : [
        `Hi Bhabhare Cakes & Cafe! I'd like to place an order.`,
        `Name: ${orderForm.name}`,
        `Phone: ${orderForm.phone}`,
        orderForm.item && `Order: ${orderForm.item}`,
        orderForm.notes && `Notes: ${orderForm.notes}`,
      ]
        .filter(Boolean)
        .join('\n')

  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

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
          aria-label={title}
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

            {!submitted ? (
              <>
                <h3 className="pr-8 font-display text-xl font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-[13.5px] text-ink/55">{subtitle}</p>

                <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-[13px] font-semibold text-ink/70">
                      Name
                    </label>
                    <input
                      ref={firstFieldRef}
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={update('name')}
                      className={inputClass}
                      placeholder="Your name"
                    />
                    <FieldError>{errors.name}</FieldError>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-[13px] font-semibold text-ink/70">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={update('phone')}
                      className={inputClass}
                      placeholder="10-digit mobile number"
                    />
                    <FieldError>{errors.phone}</FieldError>
                  </div>

                  {isCustom ? (
                    <>
                      <div>
                        <label htmlFor="occasion" className="mb-1.5 block text-[13px] font-semibold text-ink/70">
                          Occasion
                        </label>
                        <select
                          id="occasion"
                          value={form.occasion}
                          onChange={update('occasion')}
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="">Select an occasion</option>
                          {occasionOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                        <FieldError>{errors.occasion}</FieldError>
                      </div>

                      <div>
                        <label htmlFor="cakeType" className="mb-1.5 block text-[13px] font-semibold text-ink/70">
                          Cake Type
                        </label>
                        <select
                          id="cakeType"
                          value={form.cakeType}
                          onChange={update('cakeType')}
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="">Select a cake type</option>
                          {cakeTypeOptions.map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                        <FieldError>{errors.cakeType}</FieldError>
                      </div>

                      <div>
                        <label htmlFor="date" className="mb-1.5 block text-[13px] font-semibold text-ink/70">
                          Preferred Date
                        </label>
                        <input
                          id="date"
                          type="date"
                          value={form.date}
                          onChange={update('date')}
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-[13px] font-semibold text-ink/70">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={3}
                          value={form.message}
                          onChange={update('message')}
                          className={`${inputClass} resize-none`}
                          placeholder="Flavours, size, design ideas..."
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label htmlFor="item" className="mb-1.5 block text-[13px] font-semibold text-ink/70">
                          What would you like to order?
                        </label>
                        <input
                          id="item"
                          type="text"
                          value={form.item}
                          onChange={update('item')}
                          className={inputClass}
                          placeholder="e.g. Chocolate Truffle Cake (1kg)"
                        />
                        <FieldError>{errors.item}</FieldError>
                      </div>

                      <div>
                        <label htmlFor="notes" className="mb-1.5 block text-[13px] font-semibold text-ink/70">
                          Notes <span className="font-normal text-ink/40">(optional)</span>
                        </label>
                        <textarea
                          id="notes"
                          rows={2}
                          value={form.notes}
                          onChange={update('notes')}
                          className={`${inputClass} resize-none`}
                          placeholder="Preferred time, quantity, etc."
                        />
                      </div>
                    </>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-full bg-plum-950 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-plum-800"
                  >
                    {isCustom ? 'Send Enquiry' : 'Place Order'}
                  </button>
                </form>
              </>
            ) : (
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
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {isCustom ? 'Enquiry received!' : 'Order received!'}
                </h3>
                <p className="mt-1.5 max-w-xs text-[13.5px] leading-relaxed text-ink/55">
                  Thank you{customForm.name || orderForm.name ? `, ${customForm.name || orderForm.name}` : ''}. For a
                  faster response, send us the same details on WhatsApp and we&apos;ll confirm right away.
                </p>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[14px] font-semibold text-white transition-colors hover:brightness-95"
                >
                  <MessageCircle size={18} />
                  Send Enquiry on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={close}
                  className="mt-3 text-[13px] font-medium text-ink/45 hover:text-ink/70"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
