import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal.jsx'
import { business } from '../../data/cafeData.js'
import { FieldError, SuccessPanel, inputClass } from './formShared.jsx'

const makeEmptyForm = (item = '') => ({ name: '', phone: '', item, notes: '' })

/**
 * The quick-order form — used both inside OrderModal ("Order Now" flow) and
 * embedded directly on the /order page. Pass `onClose` only in a modal.
 */
export default function QuickOrderForm({
  title = 'Quick Order',
  subtitle = 'Share a few details and we will confirm your order shortly.',
  submitLabel = 'Place Order',
  initialItem = '',
  idPrefix = '',
  autoFocus = false,
  onClose,
  className = '',
}) {
  const [form, setForm] = useState(() => makeEmptyForm(initialItem))
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const firstFieldRef = useRef(null)

  useEffect(() => {
    setForm(makeEmptyForm(initialItem))
  }, [initialItem])

  useEffect(() => {
    if (autoFocus) {
      const t = setTimeout(() => firstFieldRef.current?.focus(), 60)
      return () => clearTimeout(t)
    }
  }, [autoFocus])

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    const phoneDigits = form.phone.replace(/\D/g, '')
    if (!phoneDigits) next.phone = 'Please enter a phone number.'
    else if (phoneDigits.length < 10) next.phone = 'Enter a valid phone number.'
    if (!form.item.trim()) next.item = 'Let us know what you would like to order.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const reset = () => {
    setForm(makeEmptyForm(initialItem))
    setErrors({})
    setSubmitted(false)
  }

  const whatsappMessage = [
    `Hi Cake's N Cafe! I'd like to place an order.`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.item && `Order: ${form.item}`,
    form.notes && `Notes: ${form.notes}`,
  ]
    .filter(Boolean)
    .join('\n')
  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const id = (name) => `${idPrefix}${name}`

  if (submitted) {
    return (
      <div className={className}>
        <SuccessPanel
          heading="Order received!"
          message={`Thank you${form.name ? `, ${form.name}` : ''}. For a faster response, send us the same details on WhatsApp and we'll confirm right away.`}
          whatsappHref={whatsappHref}
          whatsappLabel="Send Order on WhatsApp"
          onClose={onClose}
          onReset={reset}
        />
      </div>
    )
  }

  return (
    <div className={className}>
      {title && <h3 className="pr-8 font-display text-xl font-semibold text-ink">{title}</h3>}
      {subtitle && <p className="mt-1 text-[13.5px] text-ink/55">{subtitle}</p>}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <Reveal y={8} duration={0.35} delay={0}>
          <label htmlFor={id('name')} className="mb-1.5 block text-[13px] font-semibold text-ink/70">
            Name
          </label>
          <input
            ref={firstFieldRef}
            id={id('name')}
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={update('name')}
            className={inputClass}
            placeholder="Your name"
          />
          <FieldError>{errors.name}</FieldError>
        </Reveal>

        <Reveal y={8} duration={0.35} delay={0.05}>
          <label htmlFor={id('phone')} className="mb-1.5 block text-[13px] font-semibold text-ink/70">
            Phone Number
          </label>
          <input
            id={id('phone')}
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={update('phone')}
            className={inputClass}
            placeholder="10-digit mobile number"
          />
          <FieldError>{errors.phone}</FieldError>
        </Reveal>

        <Reveal y={8} duration={0.35} delay={0.1}>
          <label htmlFor={id('item')} className="mb-1.5 block text-[13px] font-semibold text-ink/70">
            What would you like to order?
          </label>
          <input
            id={id('item')}
            type="text"
            value={form.item}
            onChange={update('item')}
            className={inputClass}
            placeholder="e.g. Chocolate Truffle Cake (1kg)"
          />
          <FieldError>{errors.item}</FieldError>
        </Reveal>

        <Reveal y={8} duration={0.35} delay={0.15}>
          <label htmlFor={id('notes')} className="mb-1.5 block text-[13px] font-semibold text-ink/70">
            Notes <span className="font-normal text-ink/40">(optional)</span>
          </label>
          <textarea
            id={id('notes')}
            rows={2}
            value={form.notes}
            onChange={update('notes')}
            className={`${inputClass} resize-none`}
            placeholder="Preferred time, quantity, etc."
          />
        </Reveal>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.18 }}
          type="submit"
          className="w-full rounded-full bg-plum-950 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-plum-800"
        >
          {submitLabel}
        </motion.button>
      </form>
    </div>
  )
}
