import React from "react";
import "./InsightsSection.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const blogs = [
  {
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    meta: "Blogs  9 min read",
    title:
      "Progressive Web Apps vs. Native Apps: Which is Right for Your Business?",
    date: "04 january 2025",
  },
  {
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    meta: "Blogs  8 min read",
    title:
      "Top 5 Reasons to Choose Noviindus Technologies for Your Mobile App Development Needs",
    date: "04 january 2025",
  },
];

const InsightsSection = () => {
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

  const insightCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="insights-root"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="insights-row">
        <motion.div className="insights-left" variants={leftContentVariants}>
          <motion.h2 className="insights-title" variants={titleVariants}>
            Latest Insights
          </motion.h2>
          <motion.p className="insights-desc" variants={descVariants}>
            At Luvid Technologies, we are passionate about building innovative
            digital solutions that drive business growth and enhance user
            experiences. With a strong foundation in cutting-edge technologies
            and a commitment to quality, we specialize in crafting web and
            mobile applications tailored to meet our clients' unique needs.
          </motion.p>
          <Link to="blog">
            <motion.button
              className="insights-btn"
              variants={buttonVariants}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#222",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              See all Insights <span className="insights-arrow">→</span>
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className="insights-right" variants={rightContentVariants}>
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.title}
              className="insight-card"
              variants={insightCardVariants}
              whileHover={{
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="insight-card-row">
                <motion.img
                  src={blog.img}
                  alt={blog.title}
                  className="insight-img"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                />
                <div className="insight-card-content">
                  <div className="insight-meta">{blog.meta}</div>
                  <div className="insight-card-title">{blog.title}</div>
                  <div className="insight-date">{blog.date}</div>
                </div>
              </div>
              {idx !== blogs.length - 1 && <div className="insight-divider" />}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InsightsSection;
