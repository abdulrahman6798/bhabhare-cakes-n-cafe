import { useEffect, useState } from 'react'

// Generic matchMedia hook — SSR-safe-ish default of `false`, updates live.
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(query)
    setMatches(mq.matches)
    const onChange = (e) => setMatches(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])

  return matches
}

// True once the OS/browser "reduce motion" preference is on.
export function useReducedMotionSafe() {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}

// True at `lg` and above (1024px) — matches Tailwind's `lg` breakpoint.
// Used to gate horizontal/editorial entrance animations that shouldn't
// happen on narrow screens.
export function useIsDesktop() {
  return useMediaQuery('(min-width: 1024px)')
}
