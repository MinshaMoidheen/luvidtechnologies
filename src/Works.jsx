import React, { useState } from "react";
import './Works.css';
import { Link } from 'react-router-dom';
import FooterSection from "./FooterSection";
import luvidlogo from './assets/LUVID-LOGO.png'
import face from './assets/app_page.png'

import tele from './assets/TelalEcommerce.png'

const PRODUCTS_PER_PAGE = 3;

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const productSections = [
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Stock Flow Product",
      title: "Stock Flow – Warehouse Inventory Management System",
      desc: "A scalable solution for managing warehouse inventory across multiple stores. Ideal for medium to large-scale in-house storage facilities.",
      features: [
        "Multi-store & multi-user support with role-based access",
        "Real-time stock and cost statistics per store/shop",
        "Supplier tracking with transaction and due management",
        "Invoice generation and detailed financial reporting",
        "Comprehensive dashboard for profit and monthly cash flow insights"
      ]
    },
    {
      image: face,
      alt: "AI-Powered Facial Recognition Attendance System",
      title: "AI-Powered Facial Recognition Attendance System",
      desc: "A smart facial recognition system for marking attendance with AI, offering seamless access from any device and location.",
      features: [
        "Face detection with AI – no physical contact required",
        "Cross-device, cross-location access",
        "Integration for offices, schools, hospitals, and more",
        "Real-time sync and secure attendance logs"
      ]
    },
    {
      image: tele,
      alt: "E-Commerce Platform",
      title: "E-Commerce Platform (Web + Mobile – iOS/Android)",
      desc: "A fully customizable e-commerce ecosystem with web and mobile apps, built to scale with your business.",
      features: [
        "Unique front-end development for each business",
        "Admin panel to manage orders, customers, and inventory",
        "Payment gateway integration & promotional tools",
        "Native iOS and Android apps for real-time shopping",
        "Comprehensive dashboard for profit and monthly cash flow insights"
      ]
    }
    // Add more products here as needed
  ];

  const totalPages = Math.ceil(productSections.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = productSections.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

  return (
    <>
      {/* Header/Navbar for Works Page */}
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
      <section className="about-hero">
        <div className="about-breadcrumb">Home / <b>Portfolio</b></div>
        <div className="about-hero-content">
          
          <button className="portfolio-badge-btn">Portfolio</button>
          <h1 className="portfolio-title">Company Solutions & Product <br /> Portfolio <br />
          
          <p className="portfolio-desc">Discover our innovations in analytics-driven applications and let it drive new utilities for your organisation workflow.</p>
          
          </h1>
        </div>
      </section>

      {currentProducts.map((product, idx) => (
        <section
          className={`portfolio-product-section${idx % 2 === 1 ? " section2" : ""}`}
          key={product.title}
        >
          <div className="portfolio-product-container">
            <div className="portfolio-product-image">
              <img src={product.image} alt={product.alt} />
            </div>
            <div className="portfolio-product-details">
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          {"<"}
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>

      <FooterSection/>
    </>
  );
};

export default Works; 