import React, { useState } from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import luvidlogo from "./assets/LUVID-LOGO.png";
import teamImg from "./assets/team-img.png";
import hrmsImg from "./assets/hrms-img.png";
import ecomImg from "./assets/ecom-img.png";
import mobileappImg from "./assets/mobileapp-img.png";
import wmsImg from "./assets/wms-img.png";
import travelImg from "./assets/travel-img.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
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
        <motion.div
          variants={navItemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/">
            <img src={luvidlogo} alt="luvid-logo" />
          </Link>
        </motion.div>

        <nav className="hero-nav">
          <motion.div variants={navItemVariants}>
            <Link to="/">
              <motion.span
                whileHover={{
                  y: -1,
                  color: "#000",
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
              >
                Home
              </motion.span>
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link to="/about">
              <motion.span
                whileHover={{
                  y: -1,
                  color: "#000",
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
              >
                About
              </motion.span>
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link to="/services">
              <motion.span
                whileHover={{
                  y: -1,
                  color: "#000",
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
              >
                Services
              </motion.span>
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link to="/allindustries">
              <motion.span
                whileHover={{
                  y: -1,
                  color: "#000",
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
              >
                Industries
              </motion.span>
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link to="/works">
              <motion.span
                whileHover={{
                  y: -1,
                  color: "#000",
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
              >
                Products
              </motion.span>
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link to="/blog">
              <motion.span
                whileHover={{
                  y: -1,
                  color: "#000",
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
              >
                Blogs
              </motion.span>
            </Link>
          </motion.div>
          <motion.div variants={navItemVariants}>
            <Link to="/testimonial">
              <motion.span
                whileHover={{
                  y: -1,
                  color: "#000",
                  transition: { duration: 0.2 },
                }}
                transition={{ duration: 0.2 }}
              >
                Testimonials
              </motion.span>
            </Link>
          </motion.div>
        </nav>

        <motion.div variants={navItemVariants}>
          <Link to="/contact">
            <motion.button
              className="contact-btn"
              whileHover={{
                scale: 1.02,
                backgroundColor: "#222",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              Contact
            </motion.button>
          </Link>
        </motion.div>

        <motion.button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          variants={navItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={`hamburger ${isMenuOpen ? "active" : ""}`}></span>
        </motion.button>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className={`mobile-menu ${isMenuOpen ? "active" : ""}`}
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className="mobile-menu-header">
                <div className="logo">LUVID</div>
                <button className="close-menu-btn" onClick={closeMenu}>
                  <span className="close-icon">×</span>
                </button>
              </div>
              <nav className="mobile-nav">
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0 * 0.05, duration: 0.2 }}
                >
                  <Link to="/" onClick={closeMenu}>
                    <motion.span whileHover={{ x: 5, color: "#000" }}>
                      Home
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1 * 0.05, duration: 0.2 }}
                >
                  <Link to="/about" onClick={closeMenu}>
                    <motion.span whileHover={{ x: 5, color: "#000" }}>
                      About
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2 * 0.05, duration: 0.2 }}
                >
                  <Link to="/services" onClick={closeMenu}>
                    <motion.span whileHover={{ x: 5, color: "#000" }}>
                      Services
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3 * 0.05, duration: 0.2 }}
                >
                  <Link to="/allindustries" onClick={closeMenu}>
                    <motion.span whileHover={{ x: 5, color: "#000" }}>
                      Industries
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 4 * 0.05, duration: 0.2 }}
                >
                  <Link to="/works" onClick={closeMenu}>
                    <motion.span whileHover={{ x: 5, color: "#000" }}>
                      Products
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 4 * 0.05, duration: 0.2 }}
                >
                  <Link to="/blog" onClick={closeMenu}>
                    <motion.span whileHover={{ x: 5, color: "#000" }}>
                      Blogs
                    </motion.span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 5 * 0.05, duration: 0.2 }}
                >
                  <Link to="/testimonial" onClick={closeMenu}>
                    <motion.span whileHover={{ x: 5, color: "#000" }}>
                      Testimonials
                    </motion.span>
                  </Link>
                </motion.div>
              </nav>
              <div className="mobile-menu-footer">
                <Link to="/contact" onClick={closeMenu}>
                  <motion.button
                    className="mobile-contact-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const HeroCarousel = () => {
  const carouselImages = [
    {
      src: teamImg,
      alt: "Team collaboration in modern office",
      title: "Innovative Team Collaboration",
      description:
        "Empowering teams with cutting-edge collaboration tools for enhanced productivity.",
    },
    {
      src: mobileappImg,
      alt: "Mobile app development showcase",
      title: "Mobile App Excellence",
      description:
        "Crafting intuitive mobile experiences that users love and businesses rely on.",
    },
    {
      src: wmsImg,
      alt: "Stock management system interface",
      title: "Advanced Stock Management",
      description:
        "Revolutionizing inventory control with advanced warehouse management systems.",
    },
    {
      src: hrmsImg,
      alt: "HR management system dashboard",
      title: "HR Management Solutions",
      description:
        "Streamlining human resources with comprehensive HRMS platforms.",
    },
    {
      src: travelImg,
      alt: "Delta destination project",
      title: "Travel & Tourism Solutions",
      description:
        "Transforming the travel industry with innovative booking platforms.",
    },
    {
      src: ecomImg,
      alt: "OtoGadge project",
      title: "E-commerce Excellence",
      description:
        "Building powerful e-commerce platforms that drive sales and scale growth.",
    },
  ];

  return (
    <div className="hero-carousel-container">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={600}
        className="hero-carousel-swiper"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index} className="hero-carousel-slide">
            <img
              src={image.src}
              alt={image.alt}
              className="hero-carousel-image"
            />
            <div className="hero-carousel-overlay">
              <div className="hero-carousel-content">
                <h3 className="hero-carousel-title">{image.title}</h3>
                <p className="hero-carousel-description">{image.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const leftContentVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightContentVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="hero-root"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="hero-main">
        <motion.div className="hero-left" variants={leftContentVariants}>
          <motion.div
            className="hero-badge"
            variants={badgeVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            LUVID TECHNOLOGIES LLP
          </motion.div>

          <motion.h1 className="hero-title" variants={titleVariants}>
            We Engineer Your Digital Products
          </motion.h1>

          <motion.p className="hero-subtitle" variants={subtitleVariants}>
            Transforming ideas into exceptional digital experiences
            <br />
            through cutting-edge technology and innovative solutions.
          </motion.p>

          <motion.div className="hero-buttons" variants={buttonVariants}>
            <Link to="contact">
              <motion.button
                className="talk-btn"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#222",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Talk to Us
              </motion.button>
            </Link>
            <Link to="about">
              <motion.button
                className="learn-btn"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#f2f2f2",
                  color: "#000",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className="hero-right" variants={rightContentVariants}>
          <HeroCarousel />
        </motion.div>
      </section>
    </motion.div>
  );
};

export { Header };
export default HeroSection;
