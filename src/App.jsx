import HeroSection, { Header } from "./HeroSection";
import AboutSection from "./AboutSection";
import IndustriesSection from "./IndustriesSection";
import ServicesSection from "./ServicesSection";
import OurWorkSection from "./OurWorkSection";
import PortfolioSection from "./PortfolioSection";
import InsightsSection from "./InsightsSection";
import TestimonialsSection from "./TestimonialsSection";
import FooterSection from "./FooterSection";
import ContactPage from "./ContactPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import AboutUsPage from "./AboutUsPage";
import BlogPage from "./BlogPage";
import Works from "./Works";
import ViewAllWorks from "./ViewAllWorks";
import ServicePage from "./ServicePage";
import TestimonialPage from "./TestimonialPage";
import ViewAllIndustries from "./ViewAllIndustries";

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Modern Scroll to Top Button
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const toggleVisibility = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.pageYOffset > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{
            scale: 1.05,
            y: -2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <IndustriesSection />
      <ServicesSection />
      <OurWorkSection />
      <PortfolioSection />
      <InsightsSection />
      <TestimonialsSection />
      <FooterSection />
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/works" element={<Works />} />
        <Route path="/allworks" element={<ViewAllWorks />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/allindustries" element={<ViewAllIndustries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
