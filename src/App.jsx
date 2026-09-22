import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { OrderModalProvider } from './hooks/OrderModalContext.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import OrderModal from './components/OrderModal.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import PageTransition from './components/PageTransition.jsx'
import Home from './pages/Home.jsx'
import Cakes from './pages/Cakes.jsx'
import CustomCakes from './pages/CustomCakes.jsx'
import CafeMenu from './pages/CafeMenu.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'
import WhyBhabharePage from './pages/WhyBhabhare.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'
import Order from './pages/Order.jsx'
import NotFound from './pages/NotFound.jsx'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/cakes" element={<PageTransition><Cakes /></PageTransition>} />
        <Route path="/custom-cakes" element={<PageTransition><CustomCakes /></PageTransition>} />
        <Route path="/cafe-menu" element={<PageTransition><CafeMenu /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/why-bhabhare" element={<PageTransition><WhyBhabharePage /></PageTransition>} />
        <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/order" element={<PageTransition><Order /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <OrderModalProvider>
        <ScrollToTop />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <BackToTop />
        <OrderModal />
      </OrderModalProvider>
    </MotionConfig>
  )
}
