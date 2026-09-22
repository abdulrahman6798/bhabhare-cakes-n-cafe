import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Every route change should start the new page at the top, not wherever the
// user had scrolled to on the previous page.
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // The two-argument form always jumps instantly, ignoring the site's
    // CSS `scroll-behavior: smooth` (which is meant for same-page anchors).
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
