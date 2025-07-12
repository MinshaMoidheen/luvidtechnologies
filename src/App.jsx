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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUsPage from './AboutUsPage';
import BlogPage from './BlogPage';
import Works from './Works';

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage/>} />
        <Route path="/works" element={<Works/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
