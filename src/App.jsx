import HeroSection, { Header } from './HeroSection';
import AboutSection from './AboutSection';
import IndustriesSection from './IndustriesSection';
import ServicesSection from './ServicesSection';
import OurWorkSection from './OurWorkSection';
import PortfolioSection from './PortfolioSection';
import InsightsSection from './InsightsSection';
import TestimonialsSection from './TestimonialsSection';
import FooterSection from './FooterSection';
import ContactPage from './ContactPage';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AboutUsPage from './AboutUsPage';
import BlogPage from './BlogPage';
import Works from './Works';
import ViewAllWorks from './ViewAllWorks';
import ServicePage from './ServicePage';
import TestimonialPage from './TestimonialPage';

// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

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
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/works" element={<Works/>} />
        <Route path="/allworks" element={<ViewAllWorks/>} />
        <Route path="/testimonial" element={<TestimonialPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
