/** @type {import('tailwindcss').Config} */

// Builds a Tailwind color object from CSS variables holding "R G B" triples
// (defined in src/index.css), so opacity modifiers like bg-plum-950/80 work.
function withOpacity(name, shades) {
  return Object.fromEntries(
    shades.map((shade) => [shade, `rgb(var(--color-${name}-${shade}) / <alpha-value>)`]),
  )
}

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1120px',
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        plum: withOpacity('plum', [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]),
        saffron: withOpacity('saffron', [50, 100, 200, 300, 400, 500, 600, 700]),
        berry: withOpacity('berry', [50, 100, 200, 300, 400, 500, 600, 700]),
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        char: withOpacity('char', [900, 950]),
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        editorial: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        dm: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 10px -2px rgba(45, 12, 66, 0.10), 0 12px 32px -8px rgba(45, 12, 66, 0.12)',
        card: '0 1px 2px rgba(30,10,45,0.06), 0 8px 24px -6px rgba(30,10,45,0.10)',
        lift: '0 20px 40px -12px rgba(30,10,45,0.28)',
        // Warm, brown-toned shadow for photography on the cream hero —
        // deliberately not purple-tinted, so it reads as natural light/shadow.
        warm: '0 18px 38px -16px rgba(110,66,32,0.30), 0 6px 16px -8px rgba(110,66,32,0.16)',
      },
      borderRadius: {
        xl2: '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        floatSlower: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 6s ease-in-out infinite',
        floatSlower: 'floatSlower 8s ease-in-out infinite',
        spinSlow: 'spinSlow 18s linear infinite',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
}
