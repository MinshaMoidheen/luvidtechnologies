import React from "react";
import {
  FaGraduationCap,
  FaHospitalSymbol,
  FaHotel,
  FaGlobe,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "./IndustriesSection.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const industries = [
  {
    icon: <FaGraduationCap size={38} />,
    title: "Education & EdTech",
    desc: "Enhance your digital presence and dramatically escalate the search rankings for your website to effectively reach out to a much bigger crowd.",
  },
  {
    icon: <FaHospitalSymbol size={38} />,
    title: "Healthcare & Hospitals",
    desc: "Create/ give a trendy makeover to your brand through our designs and have promoted to reach the right audience.",
  },
  {
    icon: <FaHotel size={38} />,
    title: "Hospitality & Booking Systems",
    desc: "Custom-made software & E-commerce platforms precisely matching with your needs and serve the purpose.",
  },
  {
    icon: <FaGlobe size={38} />,
    title: "Tourism & Travel Management",
    desc: "Innovative solutions for travel agencies, tour operators, and travel management companies.",
  },
];

const IndustriesSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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

  const industryCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="industries-root"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="industries-row">
        <motion.div className="industries-left" variants={leftContentVariants}>
          <motion.div
            className="industries-badge"
            variants={badgeVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Industries We Serve
          </motion.div>
          <motion.h2 className="industries-title" variants={titleVariants}>
            We help business to evolve & grow.
          </motion.h2>
          <motion.p className="industries-desc" variants={descVariants}>
            At Luvid Technologies, we are passionate about building innovative
            digital solutions that drive business growth and enhance user
            experiences. With a strong foundation in cutting-edge technologies
            and a commitment to quality, we specialize in crafting web and
            mobile applications tailored to meet our clients' unique needs. Our
            team of creative thinkers and skilled developers works
            collaboratively to turn ideas into impactful digital products. At
            Luvid, we believe in delivering excellence, every time.
          </motion.p>
          <Link to="/allindustries">
            <motion.button
              className="industries-btn"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#222",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Know More <span className="industries-arrow">→</span>
            </motion.button>
          </Link>
        </motion.div>
        <motion.div
          className="industries-right"
          variants={rightContentVariants}
        >
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              className="industry-card"
              variants={industryCardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="industry-icon"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                {ind.icon}
              </motion.div>
              <div>
                <div className="industry-title">{ind.title}</div>
                <div className="industry-desc">{ind.desc}</div>
              </div>
              {idx !== industries.length - 1 && (
                <div className="industry-divider" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IndustriesSection;
