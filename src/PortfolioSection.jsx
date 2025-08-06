import React, { useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./PortfolioSection.css";
import { Link } from "react-router-dom";
import face from "./assets/ai_attendance.png";
import tele from "./assets/TelalEcommerce.png";
import hrms from "./assets/hrms.png";
import stockflow from "./assets/stockflow.png";
import oneForm from "./assets/one-form.png";
import ocrModel from "./assets/ocr_model.png";
const projects = [
  {
    img: stockflow,
    alt: "Stocksigo – Warehouse Inventory Management System",
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
    img: hrms,
    alt: "Project 5",
    title: "HRMS System – Human Resource & Payroll Management",
    desc: "An advanced HR Management platform built for enterprises to handle employee life cycles and salary processing.",
    features: [
      "Bulk salary processing for large teams",
      "PF, ESI, TDS, and Appraisal management",
      "Leave, attendance, and role-based employee management",
      "Secure and scalable architecture for HR departments",
    ],
  },
  {
    img: face,
    alt: "AI-Powered Facial Recognition Attendance System",
    title: "AI-Powered Facial Recognition Attendance System",
    desc: "A smart facial recognition system for marking attendance with AI, offering seamless access from any device and location.",
    features: [
      "Face detection with AI – no physical contact required",
      "Cross-device, cross-location access",
      "Integration for offices, schools, hospitals, and more",
      "Real-time sync and secure attendance logs",
    ],
  },
  {
    img: tele,
    alt: "E-Commerce Platform (Web + Mobile – iOS/Android)",
    title: "E-Commerce Platform (Web + Mobile – iOS/Android)",
    desc: "A fully customizable e-commerce ecosystem with web and mobile apps, built to scale with your business.",
    features: [
      "Unique front-end development for each business",
      "Admin panel to manage orders, customers, and inventory",
      "Payment gateway integration & promotional tools",
      "Native iOS and Android apps for real-time shopping",
    ],
  },
  // Add more projects for demo
  {
    img: ocrModel,
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
    img: oneForm,
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

const CARDS_PER_PAGE = 3;
const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);

const PortfolioCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="portfolio-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
    >
      <motion.img
        src={project.img}
        alt={project.alt}
        className="portfolio-img"
        variants={imageVariants}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      />
      <div className="portfolio-card-content">
        <div className="portfolio-card-title">{project.title}</div>
        <div className="portfolio-card-desc">{project.desc}</div>
        {/* <div className="portfolio-card-features">Key Features</div>
        <ul className="portfolio-features-list">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i}>
              <FaCheckCircle className="portfolio-feature-icon" /> {feature}
            </li>
          ))}
        </ul> */}
      </div>
      <div className="portfolio-card-divider" />
      <Link to="/works">
        <motion.button
          className="portfolio-card-btn"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 },
          }}
        >
          Portfolio <FaArrowRight />
        </motion.button>
      </Link>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const [page, setPage] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const startIdx = page * CARDS_PER_PAGE;
  const visibleProjects = projects.slice(startIdx, startIdx + CARDS_PER_PAGE);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const paginationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      className="portfolio-root"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className="portfolio-header-row" variants={headerVariants}>
        <div className="portfolio-header-left">
                  <motion.div
          className="portfolio-badge"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
            Portfolio
          </motion.div>
          <h2 className="portfolio-title">
            Company Solutions &<br />
            Product Portfolio
          </h2>
        </div>
        <Link to="works">
          <motion.a
            className="portfolio-btn"
            href="#"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            Portfolio <FaArrowRight />
          </motion.a>
        </Link>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          className="portfolio-cards"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {visibleProjects.map((project, idx) => (
            <PortfolioCard key={startIdx + idx} project={project} index={idx} />
          ))}
        </motion.div>
      </AnimatePresence>

      <motion.div
        className="portfolio-pagination"
        variants={paginationVariants}
      >
        {Array.from({ length: totalPages }).map((_, i) => (
          <motion.span
            key={i}
            className={`dot${i === page ? " active" : ""}`}
            onClick={() => setPage(i)}
            style={{ cursor: "pointer" }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
          >
            <span>{i + 1}</span>
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default PortfolioSection;
