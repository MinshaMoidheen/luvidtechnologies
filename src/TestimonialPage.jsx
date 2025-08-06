import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import FooterSection from "./FooterSection";
import "./TestimonialPage.css";
import luvidlogo from "./assets/LUVID-LOGO.png";
import userLogo from "./assets/user-logo.svg";

const TestimonialPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, {
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const testimonials = [
    {
      name: "Muhammed Ali Ambalathumkandi",
      role: "Founder, Oto Gadgets",
      content:
        "Luvid Technologies transformed our automotive e-commerce platform with their innovative development approach. The team delivered a seamless user experience that significantly increased our sales and customer satisfaction. Their attention to detail and commitment to quality exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Dr Abhilash",
      role: "Founder, Pasunooti Hospitals",
      content:
        "The hospital management system developed by Luvid has streamlined our entire operations. Their attention to detail and understanding of healthcare workflows made the implementation smooth and efficient. The system has improved our patient care and operational efficiency significantly.",
      rating: 5,
    },
    {
      name: "Nabeel",
      role: "Founder, Stocksigo",
      content:
        "Luvid's stock management solution has revolutionized how we handle inventory. The real-time tracking and automated alerts have saved us countless hours and reduced errors significantly. Their technical expertise and innovative approach made all the difference.",
      rating: 5,
    },
    {
      name: "Hanna Ayyoob",
      role: "Clinical Psychologist",
      content:
        "Working with Luvid Technologies was exceptional. They created a professional platform that perfectly represents our clinical psychology practice and helps us connect with patients effectively. The user-friendly interface and secure patient portal exceeded our requirements.",
      rating: 5,
    },
    {
      name: "Muhammed",
      role: "Owner, Lakkidi Inn",
      content:
        "Luvid delivered an outstanding e-commerce solution for our business. Their technical expertise and commitment to quality exceeded our expectations. The platform has helped us reach more customers and increase our bookings significantly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Althaf",
      role: "Founder, HM Scraps",
      content:
        "The team at Luvid Technologies built us a robust scrap management system that perfectly fits our business needs. Their innovative approach and dedication to client success is remarkable. The system has improved our operational efficiency and helped us scale our business.",
      rating: 5,
    },
  ];

  return (
    <>
      {/* Header */}
      <header className="hero-header">
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
          <Link to="/works">
            <a>Products</a>
          </Link>
          <Link to="/blog">
            <a href="#blogs">Blogs</a>
          </Link>
          <Link to="/testimonial">Testimonials</Link>
          {/* <a href="#careers">Careers</a> */}
        </nav>
        <Link to="/contact">
          <button className="contact-btn">Contact</button>
        </Link>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </button>
      </header>

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
          <Link to="/testimonial" onClick={closeMenu}>
            Testimonials
          </Link>
          {/* <a href="#careers" onClick={closeMenu}>Careers</a> */}
        </nav>
        <div className="mobile-menu-footer">
          <Link to="/contact" onClick={closeMenu}>
            <button className="mobile-contact-btn">Contact</button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="testimonial-hero">
        <div className="testimonial-breadcrumb">Home / Testimonials</div>
        <div className="testimonial-hero-content">
          <button className="testimonial-badge-btn">Client Testimonials</button>
          <h1 className="testimonial-title">What Our Clients Say</h1>
          <p className="testimonial-desc">
            Discover why leading businesses choose Luvid Technologies for their
            digital transformation journey.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <motion.section
        className="testimonials-section"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="testimonials-container">
          <motion.div className="testimonials-grid" variants={containerVariants}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                className="testimonial-card"
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="testimonial-header">
                  <motion.img
                    src={userLogo}
                    alt="User"
                    className="testimonial-avatar"
                    variants={avatarVariants}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                  />
                  <motion.div
                    className="testimonial-info"
                    initial={{ x: -20, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
                  >
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">
                          ★
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
                <motion.p
                  className="testimonial-content"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                >
                  {testimonial.content}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <FooterSection />
    </>
  );
};

export default TestimonialPage;
