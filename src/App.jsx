import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & Common Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/layout/Preloader';
import ScrollProgress from './components/common/ScrollProgress';
import CustomCursor from './components/common/CustomCursor';
import BackToTop from './components/common/BackToTop';
import SmoothScroll from './components/common/SmoothScroll';
import BookingModal from './components/widgets/BookingModal';
import FloatingWhatsApp from './components/widgets/FloatingWhatsApp';
import MobileStickyCTA from './components/widgets/MobileStickyCTA';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';
import WellbeingGuide from './pages/WellbeingGuide';
import Concepts from './pages/Concepts';
import Course from './pages/Course';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/**
 * Scroll to top on every route change
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [showPreloader, setShowPreloader] = useState(true);
  const location = useLocation();

  const handleOpenBooking = (serviceName = '') => {
    setPreselectedService(serviceName || 'Emotional Wellbeing Counselling');
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  return (
    <SmoothScroll>
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />

      {/* Branded Preloader */}
      {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}

      <div className="flex min-h-screen flex-col bg-brand-canvas-light dark:bg-brand-canvas-dark text-brand-plum-950 dark:text-brand-plum-50 transition-colors duration-300">
        {/* Navigation Bar */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Main Content Router */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home onOpenBooking={handleOpenBooking} />} />
              <Route path="/about" element={<About onOpenBooking={handleOpenBooking} />} />
              <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost onOpenBooking={handleOpenBooking} />} />
              <Route path="/wellbeing-guide" element={<WellbeingGuide onOpenBooking={handleOpenBooking} />} />
              <Route path="/psychology-concepts" element={<Concepts onOpenBooking={handleOpenBooking} />} />
              <Route path="/course" element={<Course onOpenBooking={handleOpenBooking} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Global Interactive Accessories */}
        <FloatingWhatsApp />
        <MobileStickyCTA onOpenBooking={() => handleOpenBooking()} />
        <BackToTop />

        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingOpen}
          onClose={handleCloseBooking}
          preselectedService={preselectedService}
        />
      </div>
    </SmoothScroll>
  );
}
