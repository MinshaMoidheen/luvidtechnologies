import React, { useState } from "react";
import './ViewAllWorks.css';
import { Link } from 'react-router-dom';
import FooterSection from "./FooterSection";
import luvidlogo from './assets/LUVID-LOGO.png'


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
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=600",
      alt: "Delta Destinations",
      title: "Delta Destinations",
      desc: "A scalable solution for managing warehouse inventory across multiple stores. Ideal for medium to large-scale in-house storage facilities."
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=600",
      alt: "Mistudiu",
      title: "Mistudiu",
      desc: "A scalable solution for managing warehouse inventory across multiple stores. Ideal for medium to large-scale in-house storage facilities."
    },
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=600",
      alt: "Pasunooti Hospitals",
      title: "Pasunooti Hospitals",
      desc: "A scalable solution for managing warehouse inventory across multiple stores. Ideal for medium to large-scale in-house storage facilities."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Stock Flow Product",
      title: "Stock Flow – Warehouse Inventory Management System",
      desc: "A scalable solution for managing warehouse inventory across multiple stores. Ideal for medium to large-scale in-house storage facilities."
    },
    {
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      alt: "AI-Powered Facial Recognition Attendance System",
      title: "AI-Powered Facial Recognition Attendance System",
      desc: "A smart facial recognition system for marking attendance with AI, offering seamless access from any device and location."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "E-Commerce Platform",
      title: "E-Commerce Platform (Web + Mobile – iOS/Android)",
      desc: "A fully customizable e-commerce ecosystem with web and mobile apps, built to scale with your business."
    },
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      alt: "Project 7",
      title: "Project 7",
      desc: "Description for project 7."
    },
    {
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
      alt: "Project 8",
      title: "Project 8",
      desc: "Description for project 8."
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Project 9",
      title: "Project 9",
      desc: "Description for project 9."
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=600",
      alt: "Project 10",
      title: "Project 10",
      desc: "Description for project 10."
    },
    {
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&h=600",
      alt: "Project 11",
      title: "Project 11",
      desc: "Description for project 11."
    },
    {
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&h=600",
      alt: "Project 12",
      title: "Project 12",
      desc: "Description for project 12."
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
          <a href="#testimonials">Testimonials</a>
          <a href="#careers">Careers</a>
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
          <a href="#services" onClick={closeMenu}>Services</a>
          <Link to='/works' onClick={closeMenu}><a>Products</a></Link>
          <Link to="/blog" onClick={closeMenu}><a href="#blogs">Blogs</a></Link>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#careers" onClick={closeMenu}>Careers</a>
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
        <div className="works-hero-content">
          <button className="works-badge-btn">Our Work</button>
          <h1 className="works-title">Real success stories & solutions</h1>
          <p className="works-desc">Discover our innovations in analytics-driven applications and let it drive new utilities for your organisation workflow.</p>
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
                    <div className="screen-overlay">
                      <h3>{project.title}</h3>
                    </div>
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