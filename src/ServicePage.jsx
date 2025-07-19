import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterSection from './FooterSection';
import './ServicePage.css';
import { FaLaptopCode, FaProjectDiagram, FaBookOpen, FaMobileAlt, FaRocket, FaSearch, FaCloud, FaServer, FaRobot } from 'react-icons/fa';
import luvidlogo from './assets/LUVID-LOGO.png'

const ServicePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <FaLaptopCode size={28} />, 
      title: 'Custom Web Solutions',
      desc: 'Our custom business offering tailored software and technology-driven strategies to enhance efficiency and drive growth.'
    },
    {
      icon: <FaProjectDiagram size={28} />, 
      title: 'ERP',
      desc: 'Enterprise Resource Planning (ERP) service provides a comprehensive solution that integrates various business processes into a unified system.'
    },
    {
      icon: <FaBookOpen size={28} />, 
      title: 'LMS',
      desc: 'Empower your organization with our state-of-the-art Learning Management System (LMS), designed to streamline training and education.'
    },
    {
      icon: <FaMobileAlt size={28} />, 
      title: 'Mobile App Development',
      desc: 'Building and maintaining Mobile App Development'
    },
    {
      icon: <FaRocket size={28} />, 
      title: 'Startup MVP Development & Ideation Support',
      desc: 'Enterprise Resource Planning (ERP) service provides a comprehensive solution that integrates various business processes into a unified system.'
    },
    {
      icon: <FaSearch size={28} />, 
      title: 'SEO Optimization & Performance Enhancement',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    },
    {
      icon: <FaCloud size={28} />, 
      title: 'Cloud Migration & Infrastructure Management',
      desc: 'We offer secure and flexible cloud solutions that enable businesses to store, manage, and access data from anywhere, anytime.'
    },
    {
      icon: <FaServer size={28} />, 
      title: 'On-Premise Private Cloud Setup',
      desc: 'Our On-Premise Private Cloud solutions provide the perfect balance between flexibility and data sovereignty.'
    },
    {
      icon: <FaRobot size={28} />, 
      title: 'AI & ML Model Development and Integration',
      desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="hero-header">
         <Link to='/'><img src={luvidlogo} alt="luvid-logo" /></Link>
        <nav className="hero-nav">
          <a href="/">Home</a>
          <Link to="/aboutus"><a href="#about">About</a></Link>
          <Link to="/services"><a href="#services">Services</a></Link>
          <Link to='/works'><a>Products</a></Link>
          <Link to="/blog"><a href="#blogs">Blogs</a></Link>
          <a href="/testimonial">Testimonials</a>
          {/* <a href="#careers">Careers</a> */}
        </nav>
        <Link to="/contact"><button className="contact-btn">Contact</button></Link>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Side Menu */}
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
                  <Link to="/aboutus" onClick={closeMenu}><a href="#about">About</a></Link>
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

      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-breadcrumb">Home / Services</div>      
        <div className="service-hero-content">
          <button className="service-badge-btn">Our Services</button>
          <h1 className="service-title">Comprehensive Digital Solutions</h1>
          <p className="service-desc">We deliver cutting-edge technology solutions that transform businesses and drive innovation across industries.</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="service1-section">
        <div className="service1-container">
          <h2 className="service1-title">Our Services</h2>
          <div className="service1-grid">
            {services.map((service, index) => (
              <div className="service1-card" key={index}>
                <div className="service1-icon">
                  {service.icon}
                </div>
                <h3 className="service1-card-title">{service.title}</h3>
                <p className="service1-card-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection/>
    </>
  );
};

export default ServicePage; 