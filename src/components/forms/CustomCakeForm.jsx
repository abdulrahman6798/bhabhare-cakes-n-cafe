import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../ui/Reveal.jsx'
import { business, occasionOptions, cakeTypeOptions } from '../../data/cafeData.js'
import { FieldError, SuccessPanel, inputClass } from './formShared.jsx'

const emptyForm = { name: '', phone: '', occasion: '', cakeType: '', date: '', message: '' }

/**
 * The custom-cake enquiry form — used both inside OrderModal (as the
 * "Design Your Cake" flow) and embedded directly on the /custom-cakes page.
 * Pass `onClose` only when rendering inside a modal.
 */
export default function CustomCakeForm({
  title = 'Design Your Cake',
  subtitle = 'Tell us what you have in mind and we will take it from there.',
  submitLabel = 'Send Enquiry',
  idPrefix = '',
  autoFocus = false,
  onClose,
  className = '',
}) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const firstFieldRef = useRef(null)

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
    if (!form.occasion) next.occasion = 'Please select an occasion.'
    if (!form.cakeType) next.cakeType = 'Please select a cake type.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const reset = () => {
    setForm(emptyForm)
    setErrors({})
    setSubmitted(false)
  }

  const whatsappMessage = [
    `Hi Cake's N Cafe! I'd like to enquire about a custom cake.`,
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    form.occasion && `Occasion: ${form.occasion}`,
    form.cakeType && `Cake Type: ${form.cakeType}`,
    form.date && `Preferred Date: ${form.date}`,
    form.message && `Message: ${form.message}`,
  ]
    .filter(Boolean)
    .join('\n')
  const whatsappHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  const id = (name) => `${idPrefix}${name}`

  if (submitted) {
    return (
      <div className={className}>
        <SuccessPanel
          heading="Enquiry received!"
          message={`Thank you${form.name ? `, ${form.name}` : ''}. For a faster response, send us the same details on WhatsApp and we'll confirm right away.`}
          whatsappHref={whatsappHref}
          whatsappLabel="Send Enquiry on WhatsApp"
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

        <Reveal y={8} duration={0.35} delay={0.04}>
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

        <Reveal y={8} duration={0.35} delay={0.08}>
          <label htmlFor={id('occasion')} className="mb-1.5 block text-[13px] font-semibold text-ink/70">
            Occasion
          </label>
          <select
            id={id('occasion')}
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
        </Reveal>

        <Reveal y={8} duration={0.35} delay={0.12}>
          <label htmlFor={id('cakeType')} className="mb-1.5 block text-[13px] font-semibold text-ink/70">
            Cake Type
          </label>
          <select
            id={id('cakeType')}
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
        </Reveal>

        <Reveal y={8} duration={0.35} delay={0.16}>
          <label htmlFor={id('date')} className="mb-1.5 block text-[13px] font-semibold text-ink/70">
            Preferred Date
          </label>
          <input id={id('date')} type="date" value={form.date} onChange={update('date')} className={inputClass} />
        </Reveal>

        <Reveal y={8} duration={0.35} delay={0.2}>
          <label htmlFor={id('message')} className="mb-1.5 block text-[13px] font-semibold text-ink/70">
            Message
          </label>
          <textarea
            id={id('message')}
            rows={3}
            value={form.message}
            onChange={update('message')}
            className={`${inputClass} resize-none`}
            placeholder="Flavours, size, design ideas..."
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
