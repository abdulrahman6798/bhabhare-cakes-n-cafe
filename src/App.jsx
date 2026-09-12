import { OrderModalProvider } from './hooks/OrderModalContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import CategoryStrip from './components/CategoryStrip.jsx'
import MenuSection from './components/MenuSection.jsx'
import CustomCakeSection from './components/CustomCakeSection.jsx'
import WhyBhabhare from './components/WhyBhabhare.jsx'
import CafeExperience from './components/CafeExperience.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import InstagramSection from './components/InstagramSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import OrderModal from './components/OrderModal.jsx'

export default function App() {
  return (
    <OrderModalProvider>
      <Navbar />
      <main>
        <Hero />
        <CategoryStrip />
        <MenuSection />
        <CustomCakeSection />
        <WhyBhabhare />
        <CafeExperience />
        <Gallery />
        <Testimonials />
        <InstagramSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
      <BackToTop />
      <OrderModal />
    </OrderModalProvider>
  )
}
