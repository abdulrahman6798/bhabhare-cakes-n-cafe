export function LogoMark({ size = 40, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="14" fill="#2D0C42" />
      <path
        d="M13 30.5c0-2.2 1.8-4 4-4h14c2.2 0 4 1.8 4 4v2.2c0 2-1.6 3.6-3.6 3.6H16.6c-2 0-3.6-1.6-3.6-3.6v-2.2Z"
        fill="#FFC43D"
      />
      <path
        d="M14.5 24.8c0-4.7 4.3-8.6 9.5-8.6s9.5 3.9 9.5 8.6H14.5Z"
        fill="#FF4D6D"
      />
      <circle cx="24" cy="12.6" r="2.6" fill="#FFC43D" />
    </svg>
  )
}

export default function Logo({ className = '', markSize = 38, showText = true, dark = false }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark size={markSize} />
      {showText && (
        <span
          className={`font-display font-semibold leading-tight tracking-tight ${
            dark ? 'text-ink' : 'text-white'
          }`}
        >
          <span className="block text-[15px] sm:text-[17px]">Bhabhare</span>
          <span className="-mt-1 block text-[10px] font-sans font-medium uppercase tracking-[0.18em] opacity-70">
            Cakes &amp; Cafe
          </span>
        </span>
      )}
    </div>
  )
}
