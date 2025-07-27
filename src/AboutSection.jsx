import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./AboutSection.css";
import luvidlogo from "./assets/LUVID-LOGO-W.png";
import { Link, useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    team: 0,
    years: 0,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setCounts({
          clients: 100,
          projects: 50,
          team: 20,
          years: 5,
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

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

  const descVariants = {
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

  const statsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
    },
  };

  const statItemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const stats = [
    {
      number: counts.clients,
      label: "Clients",
      icon: "👥",
      color: "linear-gradient(135deg, #2a2a2a 0%, #333333 100%)",
    },
    {
      number: counts.projects,
      label: "Projects",
      icon: "🚀",
      color: "linear-gradient(135deg, #333333 0%, #3a3a3a 100%)",
    },
    {
      number: counts.team,
      label: "Team Members",
      icon: "💼",
      color: "linear-gradient(135deg, #3a3a3a 0%, #444444 100%)",
    },
    {
      number: counts.years,
      label: "Years Experience",
      icon: "⭐",
      color: "linear-gradient(135deg, #444444 0%, #4a4a4a 100%)",
    },
  ];

  return (
    <motion.section
      className="about-hero-root"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="about-hero-row">
        <motion.div
          className="about-hero-content"
          variants={leftContentVariants}
        >
          <motion.div
            className="about-hero-badge"
            variants={badgeVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            About Us
          </motion.div>

          <motion.h2 className="about-hero-title" variants={titleVariants}>
            Ingenious designers and developers crazy about making great brands
          </motion.h2>

          <motion.p className="about-hero-desc" variants={descVariants}>
            At Luvid Technologies, we are passionate about building innovative
            digital solutions that drive business growth and enhance user
            experiences. With a strong foundation in cutting-edge technologies
            and a commitment to quality, we specialize in crafting web and
            mobile applications tailored to meet our clients' unique needs.
          </motion.p>

          <motion.button
            onClick={() => navigate("/aboutus")}
            className="about-hero-btn"
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              x: 5,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Know More About Us <span className="about-hero-arrow">→</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="about-hero-logo-bg"
          variants={rightContentVariants}
        >
          <motion.img
            src={luvidlogo}
            alt="Luvid Technologies Logo"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      <motion.div className="about-hero-stats" variants={statsVariants}>
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="about-hero-stat"
            custom={index}
            variants={statItemVariants}
            whileHover={{
              scale: 1.05,
              y: -8,
              transition: { duration: 0.3 },
            }}
            style={{
              background: stat.color,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              className="stat-icon"
              initial={{ scale: 0, rotate: -180 }}
              animate={
                inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
              }
              transition={{ delay: 0.8 + index * 0.1 + 0.3, duration: 0.5 }}
              style={{
                fontSize: "2rem",
                marginBottom: "0.5rem",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
              }}
            >
              {stat.icon}
            </motion.div>

            <motion.span
              className="stat-number"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
              }
              transition={{ delay: 0.8 + index * 0.1 + 0.5, duration: 0.4 }}
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                color: "#fff",
                display: "block",
                marginBottom: "0.5rem",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              {stat.number}+
            </motion.span>

            <motion.div
              className="stat-label"
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ delay: 0.8 + index * 0.1 + 0.7, duration: 0.4 }}
              style={{
                fontSize: "1rem",
                fontWeight: "500",
                color: "#fff",
                textAlign: "center",
                textShadow: "0 1px 2px rgba(0,0,0,0.3)",
              }}
            >
              {stat.label}
            </motion.div>

            {/* Subtle shimmer effect */}
            <motion.div
              className="stat-shimmer"
              initial={{ x: "-100%" }}
              animate={inView ? { x: "100%" } : { x: "-100%" }}
              transition={{
                delay: 1.2 + index * 0.1,
                duration: 2,
                repeat: Infinity,
                repeatDelay: 5,
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                pointerEvents: "none",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
