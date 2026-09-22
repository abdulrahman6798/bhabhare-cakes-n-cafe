import PageHero from '../components/PageHero.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { galleryImages } from '../data/cafeData.js'
import { usePageMeta } from '../hooks/usePageMeta.js'

export default function Gallery() {
  usePageMeta('Gallery', "Cakes, pastries, coffee and celebrations at Cake's N Cafe — a look at what we make.")

  return (
    <>
      <PageHero
        breadcrumbLabel="Gallery"
        eyebrow="Gallery"
        title="Sweet Moments at Cake's N Cafe"
        description="Cakes, pastries, coffee and a few happy moments in between."
      />

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  )
}
