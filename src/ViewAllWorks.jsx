import React, { useState } from "react";
import "./ViewAllWorks.css";
import { Link } from "react-router-dom";
import FooterSection from "./FooterSection";
import { motion } from "framer-motion";
import luvidlogo from "./assets/LUVID-LOGO-W.png";
import { useInView } from "react-intersection-observer";
import mistu from "./assets/Mistudiu.png";
import pasunooti from "./assets/Pasunooti.png";
import psycho from "./assets/CompetentPsychologist.png";
import deltamoscots from "./assets/DeltaMascots.png";
import scraps from "./assets/HMScraps.png";
import innovect from "./assets/Innovect.ae.png";
import lakkidi from "./assets/LakkidiInn.png";
import oto from "./assets/OtoGadge.png";
import tele from "./assets/TelalEcommerce.png";
import hrms from "./assets/hrms.png";
import deltadestination from "./assets/deltadestination.png";

const ViewAllWorks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const heroContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
      desc: "A comprehensive travel and tourism platform offering seamless booking experiences for destinations worldwide. Features include real-time availability, secure payments, and personalized travel recommendations.",
      link: "https://deltadestination.com/",
    },
    {
      image: oto,
      alt: "Oto Gadgets",
      title: "Oto Gadgets",
      desc: "An automotive parts and accessories e-commerce platform. Features include product catalog, inventory management, and secure payment processing for automotive businesses.",
      link: "https://otogadgets.com/",
    },
    {
      image: tele,
      alt: "Telal Ecommerce",
      title: "Telal Ecommerce",
      desc: "A telecommunications equipment and services marketplace. Features include product listings, service packages, and customer support integration for telecom businesses.",
      link: "https://altelal.com/",
    },
    {
      image: deltamoscots,
      alt: "Delta Moscots",
      title: "Delta Moscots",
      desc: "A creative design agency portfolio showcasing branding, web design, and digital marketing services. Features include project galleries, client testimonials, and service offerings.",
      link: "https://deltamascots.com/",
    },
    {
      image: mistu,
      alt: "Mistudiu",
      title: "Mistudiu",
      desc: "An innovative interior design platform connecting clients with professional designers. Features include project management, 3D visualization tools, and secure payment processing for design services.",
      link: "https://mistudiu.com/",
    },
    {
      image: pasunooti,
      alt: "Pasunooti Hospitals",
      title: "Pasunooti Hospitals",
      desc: "A comprehensive healthcare management system for hospitals and medical facilities. Includes patient management, appointment scheduling, medical records, and telemedicine capabilities.",
      link: "https://pasunootihospitals.com/",
    },
    {
      image: psycho,
      alt: "Competent Psychologist",
      title: "Competent Psychologist",
      desc: "A mental health platform connecting patients with licensed psychologists. Features include secure video consultations, appointment scheduling, and digital therapy resources.",
      link: "https://competentpsychologist.in/",
    },

    {
      image: scraps,
      alt: "HM Scraps",
      title: "HM Scraps",
      desc: "A waste management and recycling platform for businesses and municipalities. Features include waste tracking, recycling analytics, and sustainability reporting tools.",
      link: "https://hmscraps.com/",
    },
    {
      image: innovect,
      alt: "Innovect.ae",
      title: "Innovect.ae",
      desc: "A technology consulting and digital transformation platform. Offers services in cloud migration, AI implementation, and digital strategy for enterprise clients.",
      link: "https://innovect.ae/",
    },
    {
      image: lakkidi,
      alt: "Lakkidi Inn",
      title: "Lakkidi Inn",
      desc: "A boutique hotel booking and management system. Features include room reservations, guest services, and property management tools for hospitality businesses.",
      link: "https://lakkidiinn.com/",
    },
  ];

  const PROJECTS_PER_PAGE = 6;
  const totalPages = Math.ceil(worksData.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = worksData.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  return (
    <>
      {/* Header/Navbar */}
      <motion.header
        className="hero-header"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/">
          <img src={luvidlogo} alt="luvid-logo" />
        </Link>
        <nav className="hero-nav">
          <a href="/">Home</a>
          <Link to="/about">
            <a href="#about">About</a>
          </Link>
          <Link to="/services">
            <a href="#services">Services</a>
          </Link>
          <Link to="/allindustries">
            <a>Industries</a>
          </Link>
          <Link to="/works">
            <a>Products</a>
          </Link>
          <Link to="/blog">
            <a href="#blogs">Blogs</a>
          </Link>
          <a href="/testimonial">Testimonials</a>
          {/* <a href="#careers">Careers</a> */}
        </nav>
        <Link to="/contact">
          <button className="contact-btn">Contact</button>
        </Link>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </button>
      </motion.header>

      {/* Mobile Side Menu */}
      <div
        className={`mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <div className="logo">LUVID</div>
          <button className="close-menu-btn" onClick={closeMenu}>
            <span className="close-icon">×</span>
          </button>
        </div>
        <nav className="mobile-nav">
          <a href="/" onClick={closeMenu}>
            Home
          </a>
          <Link to="/about" onClick={closeMenu}>
            <a href="#about">About</a>
          </Link>
          <a href="/services" onClick={closeMenu}>
            Services
          </a>
          <Link to="/works" onClick={closeMenu}>
            <a>Products</a>
          </Link>
          <Link to="/blog" onClick={closeMenu}>
            <a href="#blogs">Blogs</a>
          </Link>
          <a href="/testimonial" onClick={closeMenu}>
            Testimonials
          </a>
          {/* <a href="#careers" onClick={closeMenu}>Careers</a> */}
        </nav>
        <div className="mobile-menu-footer">
          <Link to="/contact" onClick={closeMenu}>
            <button className="mobile-contact-btn">Contact</button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <motion.section
        className="works-hero"
        ref={heroRef}
        variants={heroContentVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <motion.div className="allworks-breadcrumb" variants={heroItemVariants}>
          Home / <b>Our Works</b>{" "}
        </motion.div>
        <div className="workimage">
          <motion.div
            className="works-hero-content"
            variants={heroItemVariants}
          >
            <motion.button
              className="works-badge-btn"
              variants={heroItemVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Our Works
            </motion.button>
            <motion.h1
              className="works-title"
              variants={heroItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Real Success Stories & Solutions
            </motion.h1>
            <motion.p
              className="works-desc"
              variants={heroItemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              Discover our innovations in analytics-driven applications and let
              it drive new utilities for your organisation workflow.
            </motion.p>
          </motion.div>

          <motion.div
            className="about-hero-logo-bg"
            variants={logoVariants}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
          >
            <img src={luvidlogo} alt="" />
            {/* <span className="about-hero-logo-text">LUVID</span> */}
          </motion.div>
        </div>

        {/* Statistics Section */}
        {/* <div className="works-stats">
          <div className="works-stat-item">
            <div className="works-stat-number">30+</div>
            <div className="works-stat-label">Websites Delivered</div>
          </div>
          <div className="works-stat-item">
            <div className="works-stat-number">20+</div>
            <div className="works-stat-label">Mobile Apps Delivered</div>
          </div>
          <div className="works-stat-item">
            <div className="works-stat-number">12+</div>
            <div className="works-stat-label">Countries served</div>
          </div>
          <div className="works-stat-item">
            <div className="works-stat-number">5+</div>
            <div className="works-stat-label">Years of experience</div>
          </div>
        </div> */}
      </motion.section>

      {/* Our Work Section */}
      <section className="our-work-section">
        <div className="our-work-container">
          <h2 className="our-work-title">Our Work</h2>
          <div className="project-cards">
            {currentProjects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="project-card">
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section className="pagination-section">
        <div className="pagination-container">
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              <span>←</span>
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={`pagination-btn ${
                  currentPage === i + 1 ? "active" : ""
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                <span>{i + 1}</span>
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default ViewAllWorks;
