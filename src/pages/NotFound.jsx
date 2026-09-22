import { Link } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta('Page Not Found', 'The page you were looking for could not be found.')

  return (
    <section className="flex min-h-[70vh] items-center bg-cream pt-28">
      <div className="container flex flex-col items-center text-center">
        <span className="font-display text-6xl font-semibold text-plum-900/15">404</span>
        <h1 className="balance mt-4 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-3 max-w-sm text-[14.5px] text-ink/60">
          The page you&apos;re looking for may have moved. Let&apos;s get you back to something sweet.
        </p>
        <Button as={Link} to="/" variant="dark" size="lg" className="mt-7">
          Back to Home
        </Button>
      </div>
    </section>
  )
}
