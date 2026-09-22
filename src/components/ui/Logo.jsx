const LOGO_SRC = '/images/logo_cakes_n_cafe.png'

export default function Logo({ size = 44, className = '' }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Cake's N Cafe"
      width={size}
      height={size}
      className={`block shrink-0 object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
