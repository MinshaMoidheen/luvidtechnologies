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
import bannerImage from "./assets/banner.jpg";
import appPageImage from "./assets/app_page.png";
import stockflowImage from "./assets/stockflow.png";
import hrmsImage from "./assets/hrms.png";
import deltadestinationImage from "./assets/deltadestination.png";
import pasunootiImage from "./assets/Pasunooti.png";
import otoGadgeImage from "./assets/OtoGadge.png";
import mistudiuImage from "./assets/Mistudiu.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
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
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <Link to="/">
            <img src={luvidlogo} alt="luvid-logo" />
          </Link>
        </motion.div>

        <nav className="hero-nav">
          {[
            "Home",
            "About",
            "Services",
            "Products",
            "Blogs",
            "Testimonials",
          ].map((item) => (
            <motion.a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              variants={navItemVariants}
              whileHover={{
                y: -2,
                color: "#000",
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.div variants={navItemVariants}>
          <Link to="/contact">
            <motion.button
              className="contact-btn"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#222",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </Link>
        </motion.div>

        <motion.button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          variants={navItemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
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
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mobile-menu-header">
                <div className="logo">LUVID</div>
                <button className="close-menu-btn" onClick={closeMenu}>
                  <span className="close-icon">×</span>
                </button>
              </div>
              <nav className="mobile-nav">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Products",
                  "Blogs",
                  "Testimonials",
                ].map((item, index) => (
                  <motion.a
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={closeMenu}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 10, color: "#000" }}
                  >
                    {item}
                  </motion.a>
                ))}
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
      src: bannerImage,
      alt: "Team collaboration in modern office",
      title: "Innovative Team Collaboration",
    },
    {
      src: appPageImage,
      alt: "Mobile app development showcase",
      title: "Mobile App Excellence",
    },
    {
      src: stockflowImage,
      alt: "Stock management system interface",
      title: "Advanced Stock Management",
    },
    {
      src: hrmsImage,
      alt: "HR management system dashboard",
      title: "HR Management Solutions",
    },
    {
      src: deltadestinationImage,
      alt: "Delta destination project",
      title: "Travel & Tourism Solutions",
    },
    {
      src: pasunootiImage,
      alt: "Pasunooti project showcase",
      title: "E-commerce Excellence",
    },
    {
      src: otoGadgeImage,
      alt: "OtoGadge project",
      title: "Automotive Solutions",
    },
    {
      src: mistudiuImage,
      alt: "Mistudiu project",
      title: "Educational Technology",
    },
  ];

  return (
    <div className="hero-carousel-container">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={800}
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
                <p className="hero-carousel-description">
                  Delivering cutting-edge solutions for modern businesses
                </p>
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
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const leftContentVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightContentVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
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
            whileHover={{ scale: 1.05 }}
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
                  scale: 1.05,
                  backgroundColor: "#222",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to Us
              </motion.button>
            </Link>
            <Link to="aboutus">
              <motion.button
                className="learn-btn"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f2f2f2",
                  color: "#000",
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
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
