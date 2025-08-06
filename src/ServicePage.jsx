import React, { useState } from "react";
import { Link } from "react-router-dom";
import FooterSection from "./FooterSection";
import "./ServicePage.css";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaBookOpen,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaCloud,
  FaServer,
  FaRobot,
} from "react-icons/fa";
import luvidlogo from "./assets/LUVID-LOGO.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServicePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [servicesRef, servicesInView] = useInView({
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

  const servicesContainerVariants = {
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

  const serviceCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <FaLaptopCode size={38} />,
      title: "Custom Web Solutions",
      desc: "Our custom business offering tailored software and technology-driven strategies to enhance efficiency and drive growth. We create scalable web applications that adapt to your business needs and provide seamless user experiences.",
    },
    {
      icon: <FaProjectDiagram size={38} />,
      title: "Enterprise Resource Planning (ERP)",
      desc: "Comprehensive ERP solutions that integrate various business processes into a unified system. Streamline operations, improve efficiency, and gain real-time insights across your entire organization.",
    },
    {
      icon: <FaBookOpen size={38} />,
      title: "Learning Management System (LMS)",
      desc: "Empower your organization with our state-of-the-art Learning Management System, designed to streamline training and education. Deliver engaging content, track progress, and enhance learning outcomes.",
    },
    {
      icon: <FaMobileAlt size={38} />,
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile applications that deliver exceptional user experiences. From concept to deployment, we build apps that engage users and drive business growth across iOS and Android platforms.",
    },
    {
      icon: <FaRocket size={38} />,
      title: "Startup MVP Development",
      desc: "Transform your innovative ideas into market-ready products with our MVP development services. We provide ideation support, rapid prototyping, and scalable solutions to help startups launch successfully.",
    },
    {
      icon: <FaSearch size={38} />,
      title: "SEO Optimization & Performance",
      desc: "Comprehensive SEO strategies and performance optimization to improve your digital presence. Enhance search rankings, increase organic traffic, and maximize your online visibility with data-driven approaches.",
    },
    {
      icon: <FaCloud size={38} />,
      title: "Cloud Migration & Infrastructure",
      desc: "Secure and flexible cloud solutions that enable businesses to store, manage, and access data from anywhere, anytime. We help organizations migrate to the cloud and optimize their infrastructure for scalability.",
    },
    {
      icon: <FaServer size={38} />,
      title: "On-Premise Private Cloud Setup",
      desc: "Our On-Premise Private Cloud solutions provide the perfect balance between flexibility and data sovereignty. Maintain control over your data while enjoying the benefits of cloud technology.",
    },
    {
      icon: <FaRobot size={38} />,
      title: "AI & ML Model Development",
      desc: "Cutting-edge artificial intelligence and machine learning solutions that drive innovation and automation. From predictive analytics to intelligent automation, we help businesses leverage AI for competitive advantage.",
    },
  ];

  return (
    <>
      {/* Header */}
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
          Home / <b>Services</b>
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
              Our Services
            </motion.button>
            <motion.h1
              className="works-title"
              variants={heroItemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Comprehensive Digital
              <br />
              Solutions
            </motion.h1>
            <motion.p
              className="works-desc"
              variants={heroItemVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              We deliver cutting-edge technology solutions that transform
              businesses and drive innovation across industries. Our expertise
              spans from custom web development to AI-powered solutions,
              ensuring your digital transformation journey is seamless and
              successful.
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

      {/* Services Section */}
      <motion.section
        className="all-industries1-section"
        ref={servicesRef}
        variants={servicesContainerVariants}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
      >
        <motion.div className="all-industries1-container">
          <motion.h2
            className="all-industries1-title"
            variants={heroItemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            Our Services
          </motion.h2>
          <motion.div className="all-industries1-list">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="industry-card1"
                variants={serviceCardVariants}
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
                  {service.icon}
                </motion.div>
                <motion.div
                  className="industry-title1"
                  whileHover={{ color: "#667eea" }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.div>
                <motion.div className="industry-desc1">
                  {service.desc}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      <FooterSection />
    </>
  );
};

export default ServicePage;
