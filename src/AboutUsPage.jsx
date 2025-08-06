import React, { useState } from "react";
import "./AboutUsPage.css";
import { Link } from "react-router-dom";
import FooterSection from "./FooterSection";
import luvidlogo from "./assets/LUVID-LOGO.png";
import ul from "./assets/hilite.avif";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [contentRef, contentInView] = useInView({
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

  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Header/Navbar for About Us Page only */}
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
          <Link to="/allindustries" onClick={closeMenu}>
            <a>Industries</a>
          </Link>
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

      {/* Hero Section - Matching Industries page style */}
      <motion.section
        className="works-hero"
        ref={heroRef}
        variants={heroContentVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <motion.div className="allworks-breadcrumb" variants={heroItemVariants}>
          Home / <b>About Us</b>
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
              About Us
            </motion.button>
            <motion.h1
              className="works-title"
              variants={heroItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Transforming Ideas Into
              <br />
              Exceptional Digital Experiences
            </motion.h1>
            <motion.p
              className="works-desc"
              variants={heroItemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              At Luvid Technologies, we are passionate innovators dedicated to
              crafting cutting-edge digital solutions that drive business
              transformation. With over 5 years of expertise in web and mobile
              development, we specialize in creating scalable, user-centric
              applications that empower businesses to thrive in the digital age.
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

      {/* Who We Are Section */}
      <motion.section
        className="all-industries1-section"
        ref={contentRef}
        variants={contentContainerVariants}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
      >
        <motion.div className="all-industries1-container">
          <motion.h2
            className="all-industries1-title"
            variants={heroItemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Who We Are
          </motion.h2>

          <motion.div className="about-who-desc" variants={heroItemVariants}>
            <p>
              We are a team of passionate technologists, designers, and
              strategists committed to delivering exceptional digital
              experiences. Our mission is to empower businesses through
              innovative technology solutions that drive growth, efficiency, and
              competitive advantage.
            </p>
          </motion.div>

          <motion.div className="all-industries1-list">
            <motion.div
              className="industry-card1"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="industry-icon1"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 40L24 16L40 40H8Z" fill="#667eea" />
                  <path d="M24 16L32 28H16L24 16Z" fill="#222" />
                  <rect x="23" y="8" width="2" height="8" fill="#667eea" />
                  <rect x="25" y="8" width="8" height="4" fill="#667eea" />
                </svg>
              </motion.div>
              <motion.div
                className="industry-title1"
                whileHover={{ color: "#667eea" }}
                transition={{ duration: 0.3 }}
              >
                Our Mission
              </motion.div>
              <motion.div className="industry-desc1">
                To be the trusted technology partner for organizations
                worldwide, delivering innovative digital solutions that
                transform businesses and create lasting impact. We strive to
                exceed expectations through excellence, creativity, and
                unwavering commitment to client success.
              </motion.div>
            </motion.div>

            <motion.div
              className="industry-card1"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="industry-icon1"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="14" cy="34" r="8" fill="#667eea" />
                  <circle cx="34" cy="34" r="8" fill="#667eea" />
                  <rect x="10" y="10" width="8" height="18" fill="#667eea" />
                  <rect x="30" y="10" width="8" height="18" fill="#667eea" />
                  <rect x="22" y="10" width="4" height="18" fill="#667eea" />
                </svg>
              </motion.div>
              <motion.div
                className="industry-title1"
                whileHover={{ color: "#667eea" }}
                transition={{ duration: 0.3 }}
              >
                Our Vision
              </motion.div>
              <motion.div className="industry-desc1">
                To lead the digital transformation revolution by creating
                cutting-edge technology solutions that empower businesses to
                thrive in an ever-evolving digital landscape. We envision a
                future where technology seamlessly enhances human potential and
                drives sustainable growth.
              </motion.div>
            </motion.div>

            <motion.div
              className="industry-card1"
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="industry-icon1"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="24" r="20" fill="#667eea" />
                  <path d="M16 24L22 30L32 18" stroke="white" strokeWidth="3" />
                </svg>
              </motion.div>
              <motion.div
                className="industry-title1"
                whileHover={{ color: "#667eea" }}
                transition={{ duration: 0.3 }}
              >
                Our Values
              </motion.div>
              <motion.div className="industry-desc1">
                Innovation, integrity, and excellence form the foundation of
                everything we do. We believe in fostering collaborative
                partnerships, embracing diversity, and maintaining the highest
                standards of quality while delivering solutions that exceed
                expectations.
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Our Locations Section */}
      <section className="location-section">
        <div className="location-card">
          <div className="location-image">
            <img src={ul} alt="UL CyberPark" />
          </div>
          <div className="location-info">
            <h2 className="location-title">Our Locations</h2>
            <hr className="location-divider" />
            <div className="location-name">Hilite Business Park</div>
            <div className="location-address">
              Ground Floor, HiLITE City National Highway 66, Bypass, Thondayad,
              Kozhikode, <br />
              Kerala 673016
            </div>
            <a
              className="location-btn"
              href="https://www.google.com/maps/dir//HiLITE+Business+Park,+State+Highway+28,+Palazhi,+Kozhikode,+Kerala+673014/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3ba6597c304c1f3b:0xbb7abc23c1ea8a?sa=X&ved=1t:57443&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Direction <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default AboutUsPage;
