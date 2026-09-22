import HomeHero from '../components/home/HomeHero.jsx'
import SignatureCakes from '../components/home/SignatureCakes.jsx'
import CakeCoffeeMoments from '../components/home/CakeCoffeeMoments.jsx'
import CustomCakeEditorial from '../components/home/CustomCakeEditorial.jsx'
import CafeMoment from '../components/home/CafeMoment.jsx'
import MenuStrip from '../components/home/MenuStrip.jsx'
import CustomerMoment from '../components/home/CustomerMoment.jsx'
import FinalVisit from '../components/home/FinalVisit.jsx'
import { usePageMeta } from '../hooks/usePageMeta.js'

export default function Home() {
  usePageMeta('Cakes, Desserts & Cafe', "Freshly baked cakes, custom cakes and cafe favourites at Cake's N Cafe.", {
    full: true,
  })

  return (
    <div className="font-dm">
      <HomeHero />
      <SignatureCakes />
      <CakeCoffeeMoments />
      <CustomCakeEditorial />
      <CafeMoment />
      <MenuStrip />
      <CustomerMoment />
      <FinalVisit />
    </div>
  )
}
