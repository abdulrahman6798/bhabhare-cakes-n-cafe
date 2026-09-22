import { products, categoryStrip, customCakeCategories } from '../../data/cafeData.js'

// Existing photography is stored as Unsplash URLs with a `w=` param; these
// helpers re-size those same URLs (no new imagery) and build responsive srcsets.
export const resize = (url, w) => url.replace(/([?&])w=\d+/, `$1w=${w}`)

export const srcSetOf = (url, widths = [480, 800, 1200]) =>
  widths.map((w) => `${resize(url, w)} ${w}w`).join(', ')

export const productById = (id) => products.find((p) => p.id === id)
export const stripByLabel = (label) => categoryStrip.find((c) => c.label === label)
export const customCategoryById = (id) => customCakeCategories.find((c) => c.id === id)

export const formatPrice = (n) => `₹${Number(n).toLocaleString('en-IN')}`

export const whatsappUrl = (number, message) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`
