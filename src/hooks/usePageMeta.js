import { useEffect } from 'react'

const SITE_NAME = "Cake's N Cafe"

/**
 * Sets the document title and meta description for the current route.
 * `title` is normally the page-specific fragment (e.g. "Cakes"), rendered
 * as "Cakes | Cake's N Cafe". Pass `{ full: true }` for the
 * homepage, where the site name leads: "Cake's N Cafe | <title>".
 */
export function usePageMeta(title, description, { full = false } = {}) {
  useEffect(() => {
    if (!title) {
      document.title = SITE_NAME
    } else if (full) {
      document.title = `${SITE_NAME} | ${title}`
    } else {
      document.title = `${title} | ${SITE_NAME}`
    }

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description, full])
}
