import React, { useState } from "react";
import './ViewAllWorks.css';
import { Link } from 'react-router-dom';
import FooterSection from "./FooterSection";
import luvidlogo from './assets/LUVID-LOGO.png'
import mistu from "./assets/Mistudiu.png"
import pasunooti from './assets/Pasunooti.png'
import psycho from './assets/CompetentPsychologist.png'
import deltamoscots from './assets/DeltaMascots.png'
import scraps from './assets/HMScraps.png'
import innovect from './assets/Innovect.ae.png'
import lakkidi from './assets/LakkidiInn.png'
import oto from './assets/OtoGadge.png'
import tele from './assets/TelalEcommerce.png'
import hrms from './assets/hrms.png'
import deltadestination from './assets/deltadestination.png'


const ViewAllWorks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const worksData = [
    {
      image: deltadestination,
      alt: "Delta Destinations",
      title: "Delta Destinations",
      desc: "A comprehensive travel and tourism platform offering seamless booking experiences for destinations worldwide. Features include real-time availability, secure payments, and personalized travel recommendations."
    },
    {
      image: mistu,
      alt: "Mistudiu",
      title: "Mistudiu",
      desc: "An innovative interior design platform connecting clients with professional designers. Features include project management, 3D visualization tools, and secure payment processing for design services."
    },
    {
      image: pasunooti,
      alt: "Pasunooti Hospitals",
      title: "Pasunooti Hospitals",
      desc: "A comprehensive healthcare management system for hospitals and medical facilities. Includes patient management, appointment scheduling, medical records, and telemedicine capabilities."
    },
    {
      image: psycho,
      alt: "Competent Psychologist",
      title: "Competent Psychologist",
      desc: "A mental health platform connecting patients with licensed psychologists. Features include secure video consultations, appointment scheduling, and digital therapy resources."
    },
    {
      image: deltamoscots,
      alt: "Delta Moscots",
      title: "Delta Moscots",
      desc: "A creative design agency portfolio showcasing branding, web design, and digital marketing services. Features include project galleries, client testimonials, and service offerings."
    },
    {
      image: scraps,
      alt: "HM Scraps",
      title: "HM Scraps",
      desc: "A waste management and recycling platform for businesses and municipalities. Features include waste tracking, recycling analytics, and sustainability reporting tools."
    },
    {
      image: innovect,
      alt: "Innovect.ae",
      title: "Innovect.ae",
      desc: "A technology consulting and digital transformation platform. Offers services in cloud migration, AI implementation, and digital strategy for enterprise clients."
    },
    {
      image: lakkidi,
      alt: "Lakkidi Inn",
      title: "Lakkidi Inn",
      desc: "A boutique hotel booking and management system. Features include room reservations, guest services, and property management tools for hospitality businesses."
    },
    {
      image: oto,
      alt: "Oto Gadge",
      title: "Oto Gadge",
      desc: "An automotive parts and accessories e-commerce platform. Features include product catalog, inventory management, and secure payment processing for automotive businesses."
    },
    {
      image: tele,
      alt: "Tele Ecommerce",
      title: "Tele Ecommerce",
      desc: "A telecommunications equipment and services marketplace. Features include product listings, service packages, and customer support integration for telecom businesses."
    },
    {
      image: hrms,
      alt: "HRMS",
      title: "HRMS - Human Resource Management System",
      desc: "A comprehensive HR management platform for enterprises. Features include employee management, payroll processing, performance tracking, and recruitment tools."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Stock Flow Product",
      title: "Stock Flow – Warehouse Inventory Management System",
      desc: "A scalable solution for managing warehouse inventory across multiple stores. Features include real-time stock tracking, supplier management, invoice generation, and comprehensive financial reporting for medium to large-scale storage facilities."
    }
  ];

  const PROJECTS_PER_PAGE = 6;
  const totalPages = Math.ceil(worksData.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = worksData.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  return (
    <>
      {/* Header/Navbar */}
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
      <section className="works-hero">
        <div className="allworks-breadcrumb">Home / <b>Our Work</b> </div>      
       <div className="workimage">
         <div className="works-hero-content">
          <button className="works-badge-btn">Our Work</button>
          <h1 className="works-title">Real success stories & solutions</h1>
          <p className="works-desc">Discover our innovations in analytics-driven applications and let it drive new utilities for your organisation workflow.</p>
        </div>

        <div className="about-hero-logo-bg">
                  <img src={luvidlogo} alt="" />
                  {/* <span className="about-hero-logo-text">LUVID</span> */}
                </div>
       </div>
        
        {/* Statistics Section */}
        <div className="works-stats">
          <div className="works-stat-item">
            <div className="works-stat-number">1000+</div>
            <div className="works-stat-label">Websites Delivered</div>
          </div>
          <div className="works-stat-item">
            <div className="works-stat-number">100+</div>
            <div className="works-stat-label">Mobile Apps Delivered</div>
          </div>
          <div className="works-stat-item">
            <div className="works-stat-number">36+</div>
            <div className="works-stat-label">Countries served</div>
          </div>
          <div className="works-stat-item">
            <div className="works-stat-number">12+</div>
            <div className="works-stat-label">Years of experience</div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="our-work-section">
        <div className="our-work-container">
          <h2 className="our-work-title">Our Work</h2>
          <div className="project-cards">
            {currentProjects.map((project, idx) => (
              <div className="project-card" key={idx}>
                <div className="laptop-container">
                  <div className="laptop-screen">
                    <img src={project.image} alt={project.alt} />
                    
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="pagination">
            <button 
              onClick={() => handlePageChange(currentPage - 1)} 
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              ←
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button 
              onClick={() => handlePageChange(currentPage + 1)} 
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              →
            </button>
          </div>
        </div>
      </section>

      <FooterSection/>
    </>
  );
};

export default ViewAllWorks; 