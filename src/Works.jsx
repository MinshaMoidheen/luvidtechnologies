import React, { useState } from "react";
import "./Works.css";
import { Link } from "react-router-dom";
import FooterSection from "./FooterSection";
import luvidlogo from "./assets/LUVID-LOGO.png";
import face from "./assets/ai_attendance.png";
import stockflow from "./assets/stockflow.png";
import hrms from "./assets/hrms.png";
import tele from "./assets/TelalEcommerce.png";
import oneForm from "./assets/one-form.png";
import ocrModel from "./assets/ocr_model.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PRODUCTS_PER_PAGE = 3;

const Works = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Animation variants
  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const heroContentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 1, delay: 0.5, ease: "easeOut" },
    },
  };

  const productSections = [
    {
      image: stockflow,
      alt: "Stocksigo Product",
      title: "Stocksigo – Warehouse Inventory Management System",
      desc: "A scalable solution for managing warehouse inventory across multiple stores. Ideal for medium to large-scale in-house storage facilities.",
      features: [
        "Multi-store & multi-user support with role-based access",
        "Real-time stock and cost statistics per store/shop",
        "Supplier tracking with transaction and due management",
        "Invoice generation and detailed financial reporting",
        "Comprehensive dashboard for profit and monthly cash flow insights",
      ],
    },
    {
      image: hrms,
      alt: "Project 5",
      title: "HRMS System – Human Resource & Payroll Management",
      desc: "An advanced HR Management platform built for enterprises to handle employee life cycles and salary processing.",
      features: [
        "Bulk salary processing for large teams",
        "PF, ESI, TDS, and Appraisal management",
        "	Leave, attendance, and role-based employee management",
        "	Secure and scalable architecture for HR departments",
      ],
    },
    {
      image: face,
      alt: "AI-Powered Facial Recognition Attendance System - HRMS",
      title: "AI-Powered Facial Recognition Attendance System - HRMS",
      desc: "A smart facial recognition system for marking attendance with AI, offering seamless access from any device and location.",
      features: [
        "Face detection with AI – no physical contact required",
        "Cross-device, cross-location access",
        "Integration for offices, schools, hospitals, and more",
        "Real-time sync and secure attendance logs",
      ],
    },
    {
      image: tele,
      alt: "E-Commerce Platform - API Powered",
      title: "E-Commerce Platform (Web + Mobile – iOS/Android) - API Powered",
      desc: "A fully customizable e-commerce ecosystem with web and mobile apps, built to scale with your business.",
      features: [
        "Unique front-end development for each business",
        "Admin panel to manage orders, customers, and inventory",
        "Payment gateway integration & promotional tools",
        "Native iOS and Android apps for real-time shopping",
        "Comprehensive dashboard for profit and monthly cash flow insights",
      ],
    },
    {
      image: ocrModel,
      alt: "Project 4",
      title: "OCR AI Model – Optical Character Recognition",
      desc: "AI-based OCR engine that digitizes printed and handwritten content, streamlining data entry and document automation.",
      features: [
        "Converts scanned text/images to structured data",
        "Ideal for forms, handwritten notes, and physical documents",
        "AI-enhanced accuracy and language support",
        "Integrates into third-party platforms or ERPs",
      ],
    },

    {
      image: oneForm,
      alt: "Project 5",
      title: "OneForm – Embeddable Smart Form",
      desc: "A lightweight, customizable form module that can be embedded into any static or dynamic website, complete with admin panel.",
      features: [
        "Easy plug-in to static or WordPress/HTML websites",
        "Admin dashboard for submissions and response tracking",
        "Custom fields, validations, and exportable reports",
        "Ideal for bookings, contact forms, job applications, etc.",
      ],
    },
  ];

  const totalPages = Math.ceil(productSections.length / PRODUCTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = productSections.slice(
    startIdx,
    startIdx + PRODUCTS_PER_PAGE
  );

  return (
    <>
      {/* Header/Navbar for Works Page */}
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
            <span>About</span>
          </Link>
          <Link to="/services">
            <span>Services</span>
          </Link>
          <Link to="/allindustries">
            <span>Industries</span>
          </Link>
          <Link to="/works">
            <span>Products</span>
          </Link>
          <Link to="/blog">
            <span>Blogs</span>
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
            <span>About</span>
          </Link>
          <a href="/services" onClick={closeMenu}>
            Services
          </a>
          <Link to="/works" onClick={closeMenu}>
            <span>Products</span>
          </Link>
          <Link to="/blog" onClick={closeMenu}>
            <span>Blogs</span>
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

      {/* Hero Section - Matching Services and Industries page style */}
      <motion.section
        className="works-hero"
        ref={heroRef}
        variants={heroContentVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <motion.div className="allworks-breadcrumb" variants={heroItemVariants}>
          Home / <b>Portfolio</b>
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
              Our Portfolio
            </motion.button>
            <motion.h1
              className="works-title"
              variants={heroItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Company Solutions &
              <br />
              Product Portfolio
            </motion.h1>
            <motion.p
              className="works-desc"
              variants={heroItemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              Discover our innovations in analytics-driven applications and let
              it drive new utilities for your organisation workflow. Our
              portfolio showcases cutting-edge solutions that transform
              businesses and drive digital transformation.
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
          </motion.div>
        </div>
      </motion.section>

      {currentProducts.map((product, idx) => (
        <section
          className={`portfolio-product-section${
            idx % 2 === 1 ? " section2" : ""
          }`}
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
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span>{"<"}</span>
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => handlePageChange(i + 1)}
          >
            <span>{i + 1}</span>
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span>{">"}</span>
        </button>
      </div>

      <FooterSection />
    </>
  );
};

export default Works;
