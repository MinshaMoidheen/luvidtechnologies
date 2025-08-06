import React, { useState } from "react";
import "./ViewAllIndustries.css";
import { Link } from "react-router-dom";
import luvidlogo from "./assets/LUVID-LOGO.png";
import FooterSection from "./FooterSection";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaShoppingCart,
  FaGraduationCap,
  FaHospitalSymbol,
  FaHotel,
  FaGlobe,
  FaRecycle,
  FaUserTie,
  FaMoneyCheckAlt,
  FaRobot,
  FaBitcoin,
} from "react-icons/fa";

const industries = [
  {
    icon: <FaShoppingCart size={38} />,
    title: "Retail & E-commerce",
    desc: "Empowering retail businesses and online stores with robust e-commerce solutions, seamless shopping experiences, and scalable platforms.",
  },
  {
    icon: <FaGraduationCap size={38} />,
    title: "Education & EdTech",
    desc: "Transforming learning with interactive platforms, virtual classrooms, and digital tools for schools, colleges, and edtech startups.",
  },
  {
    icon: <FaHospitalSymbol size={38} />,
    title: "Healthcare & Hospitals",
    desc: "Delivering digital transformation for hospitals and clinics with patient management, telemedicine, and healthcare analytics.",
  },
  {
    icon: <FaHotel size={38} />,
    title: "Hospitality & Booking Systems",
    desc: "Custom booking engines, property management, and guest experience solutions for hotels, resorts, and travel businesses.",
  },
  {
    icon: <FaGlobe size={38} />,
    title: "Tourism & Travel Management",
    desc: "Innovative travel management platforms for agencies, operators, and travelers, streamlining bookings and itineraries.",
  },
  {
    icon: <FaRecycle size={38} />,
    title: "Scrap Management & Logistics",
    desc: "Optimizing scrap collection, recycling, and logistics with digital tracking, inventory, and process automation.",
  },
  {
    icon: <FaUserTie size={38} />,
    title: "Professional & Personal Services",
    desc: "Digital solutions for consultants, agencies, and service providers to manage clients, appointments, and operations.",
  },
  {
    icon: <FaMoneyCheckAlt size={38} />,
    title: "Fintech & Payroll Processing",
    desc: "Secure, compliant platforms for financial services, payroll, and payment processing, tailored for modern businesses.",
  },
  {
    icon: <FaRobot size={38} />,
    title: "AI/ML and SaaS Platforms",
    desc: "Building intelligent SaaS products and AI/ML-powered solutions for automation, analytics, and business growth.",
  },
  {
    icon: <FaBitcoin size={38} />,
    title: "Crypto & NFT Platforms",
    desc: "Developing secure, scalable platforms for cryptocurrency trading, NFT marketplaces, and blockchain applications.",
  },
];

const ViewAllIndustries = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [industriesRef, industriesInView] = useInView({
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

  const industriesContainerVariants = {
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

  const industryCardVariants = {
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
          <Link to="/works">
            <a>Products</a>
          </Link>
          <Link to="/blog">
            <a href="#blogs">Blogs</a>
          </Link>
          <a href="/testimonial">Testimonials</a>
        </nav>
        <Link to="/contact">
          <button className="contact-btn">Contact</button>
        </Link>
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </button>
      </motion.header>
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

      <motion.section
        className="works-hero"
        ref={heroRef}
        variants={heroContentVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
      >
        <motion.div className="allworks-breadcrumb" variants={heroItemVariants}>
          Home / <b>Industries</b>{" "}
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
              Our Industries
            </motion.button>
            <motion.h1
              className="works-title"
              variants={heroItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Industries We Serve
            </motion.h1>
            <motion.p
              className="works-desc"
              variants={heroItemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              At Luvid Technologies, we are passionate about building innovative
              digital solutions that drive business growth and enhance user
              experiences. With a strong foundation in cutting-edge technologies
              and a commitment to quality, we specialize in crafting web and
              mobile applications tailored to meet our clients' unique needs.
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
      </motion.section>

      <motion.section
        className="all-industries1-section"
        ref={industriesRef}
        variants={industriesContainerVariants}
        initial="hidden"
        animate={industriesInView ? "visible" : "hidden"}
      >
        <motion.div className="all-industries1-container">
          <motion.h2
            className="all-industries1-title"
            variants={heroItemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            All Industries
          </motion.h2>
          <motion.div className="all-industries1-list">
            {industries.map((ind, index) => (
              <motion.div
                key={ind.title}
                className="industry-card1"
                variants={industryCardVariants}
                custom={index}
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
                  {ind.icon}
                </motion.div>
                <motion.div
                  className="industry-title1"
                  whileHover={{ color: "#667eea" }}
                  transition={{ duration: 0.3 }}
                >
                  {ind.title}
                </motion.div>
                <motion.div className="industry-desc1">{ind.desc}</motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <FooterSection />
    </>
  );
};

export default ViewAllIndustries;
