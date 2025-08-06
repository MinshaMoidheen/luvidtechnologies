import React, { useState } from 'react';
import Header from './HeroSection';
import HeroSection from './HeroSection';
import './ViewAllIndustries.css';
import { Link } from 'react-router-dom';
import luvidlogo from './assets/LUVID-LOGO-W.png'
import FooterSection from './FooterSection';
import { FaShoppingCart, FaGraduationCap, FaHospitalSymbol, FaHotel, FaGlobe, FaRecycle, FaUserTie, FaMoneyCheckAlt, FaRobot, FaBitcoin } from 'react-icons/fa';

const industries = [
  {
    icon: <FaShoppingCart size={38} />, title: 'Retail & E-commerce',
    desc: 'Empowering retail businesses and online stores with robust e-commerce solutions, seamless shopping experiences, and scalable platforms.'
  },
  {
    icon: <FaGraduationCap size={38} />, title: 'Education & EdTech',
    desc: 'Transforming learning with interactive platforms, virtual classrooms, and digital tools for schools, colleges, and edtech startups.'
  },
  {
    icon: <FaHospitalSymbol size={38} />, title: 'Healthcare & Hospitals',
    desc: 'Delivering digital transformation for hospitals and clinics with patient management, telemedicine, and healthcare analytics.'
  },
  {
    icon: <FaHotel size={38} />, title: 'Hospitality & Booking Systems',
    desc: 'Custom booking engines, property management, and guest experience solutions for hotels, resorts, and travel businesses.'
  },
  {
    icon: <FaGlobe size={38} />, title: 'Tourism & Travel Management',
    desc: 'Innovative travel management platforms for agencies, operators, and travelers, streamlining bookings and itineraries.'
  },
  {
    icon: <FaRecycle size={38} />, title: 'Scrap Management & Logistics',
    desc: 'Optimizing scrap collection, recycling, and logistics with digital tracking, inventory, and process automation.'
  },
  {
    icon: <FaUserTie size={38} />, title: 'Professional & Personal Services',
    desc: 'Digital solutions for consultants, agencies, and service providers to manage clients, appointments, and operations.'
  },
  {
    icon: <FaMoneyCheckAlt size={38} />, title: 'Fintech & Payroll Processing',
    desc: 'Secure, compliant platforms for financial services, payroll, and payment processing, tailored for modern businesses.'
  },
  {
    icon: <FaRobot size={38} />, title: 'AI/ML and SaaS Platforms',
    desc: 'Building intelligent SaaS products and AI/ML-powered solutions for automation, analytics, and business growth.'
  },
  {
    icon: <FaBitcoin size={38} />, title: 'Crypto & NFT Platforms',
    desc: 'Developing secure, scalable platforms for cryptocurrency trading, NFT marketplaces, and blockchain applications.'
  },
];

const ViewAllIndustries = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="hero-header">
        <Link to='/'><img src={luvidlogo} alt="luvid-logo" /></Link>
        <nav className="hero-nav">
          <a href="/">Home</a>
          <Link to="/about"><a href="#about">About</a></Link>
          <Link to="/services"><a href="#services">Services</a></Link>
          <Link to='/works'><a>Products</a></Link>
          <Link to="/blog"><a href="#blogs">Blogs</a></Link>
          <a href="/testimonial">Testimonials</a>
        </nav>
        <Link to="/contact"><button className="contact-btn">Contact</button></Link>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </header>
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo">LUVID</div>
          <button className="close-menu-btn" onClick={closeMenu}>
            <span className="close-icon">×</span>
          </button>
        </div>
       <nav className="mobile-nav">
                 <a href="/" onClick={closeMenu}>Home</a>
                 <Link to="/about" onClick={closeMenu}><a href="#about">About</a></Link>
                 <a href="/services" onClick={closeMenu}>Services</a>
                 <Link to='/works' onClick={closeMenu}><a>Products</a></Link>
                 <Link to="/blog" onClick={closeMenu}><a href="#blogs">Blogs</a></Link>
                 <a href="/testimonial" onClick={closeMenu}>Testimonials</a>
                 {/* <a href="#careers" onClick={closeMenu}>Careers</a> */}
               </nav>
        <div className="mobile-menu-footer">
          <Link to="/contact" onClick={closeMenu}>
            <button className="mobile-contact-btn">Contact</button>
          </Link>
        </div>
      </div>


      <section className="works-hero">
              <div className="allworks-breadcrumb">Home / <b>Industries</b> </div>      
             <div className="workimage">
               <div className="works-hero-content">
                <button className="works-badge-btn">Our Industries</button>
                <h1 className="works-title">Industries We Serve</h1>
                <p className="works-desc">
          At Luvid Technologies, we are passionate about building innovative digital solutions that drive business growth and enhance user experiences. With a strong foundation in cutting-edge technologies and a commitment to quality, we specialize in crafting web and mobile applications tailored to meet our clients' unique needs.
                  </p>
              </div>
      
              <div className="about-hero-logo-bg">
                        <img src={luvidlogo} alt="" />
                        {/* <span className="about-hero-logo-text">LUVID</span> */}
                      </div>
             </div>

      </section>
    
    <section className="all-industries1-section">
      <div className="all-industries1-container">
        <h2 className="all-industries1-title">All Industries</h2>
        <div className="all-industries1-list">
          {industries.map((ind) => (
            <div key={ind.title} className="industry-card1">
              <div className="industry-icon1">{ind.icon}</div>
              <div className="industry-title1">{ind.title}</div>
              <div className="industry-desc1">{ind.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <FooterSection/>
  </>

  )
}

export default ViewAllIndustries
