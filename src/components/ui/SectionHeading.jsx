import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <div className={`flex flex-col ${alignment} max-w-2xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`mb-3 inline-block rounded-full px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
              light ? 'bg-white/10 text-saffron-300' : 'bg-plum-900/5 text-plum-600'
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`balance font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`balance mt-3.5 text-[15px] leading-relaxed sm:text-base ${
              light ? 'text-white/70' : 'text-ink/60'
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
