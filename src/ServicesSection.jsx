import React from "react";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaBookOpen,
  FaMobileAlt,
  FaRocket,
  FaSearch,
  FaCloudUploadAlt,
  FaCloud,
  FaServer,
  FaRobot,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./ServicesSection.css";

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Custom Web Solutions",
    desc: "Our custom business offering tailored software and technology-driven strategies to enhance efficiency and drive growth.",
  },
  {
    icon: <FaProjectDiagram size={28} />,
    title: "ERP",
    desc: "Enterprise Resource Planning (ERP) service provides a comprehensive solution that integrates various business processes into a unified system.",
  },
  {
    icon: <FaBookOpen size={28} />,
    title: "LMS",
    desc: "Empower your organization with our state-of-the-art Learning Management System (LMS), designed to streamline training and education.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Mobile App Development",
    desc: "Building and maintaining Mobile App Development",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Startup MVP Development & Ideation Support",
    desc: "Enterprise Resource Planning (ERP) service provides a comprehensive solution that integrates various business processes into a unified system.",
  },
  {
    icon: <FaSearch size={28} />,
    title: "SEO Optimization & Performance Enhancement",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
  },
  {
    icon: <FaCloud size={28} />,
    title: "Cloud Migration & Infrastructure Management",
    desc: "We offer secure and flexible cloud solutions that enable businesses to store, manage, and access data from anywhere, anytime.",
  },
  {
    icon: <FaServer size={28} />,
    title: "On-Premise Private Cloud Setup",
    desc: "Our On-Premise Private Cloud solutions provide the perfect balance between flexibility and data sovereignty.",
  },
  {
    icon: <FaRobot size={28} />,
    title: "AI & ML Model Development and Integration",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.",
  },
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1 + 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="service-card"
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="service-icon-circle"
        variants={iconVariants}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.2 },
        }}
      >
        {service.icon}
      </motion.div>
      <div className="service-card-title">{service.title}</div>
      <div className="service-card-desc">{service.desc}</div>
      <motion.a
        className="service-more"
        href="#"
        whileHover={{
          x: 5,
          color: "#f2c744",
          transition: { duration: 0.2 },
        }}
      >
        Know More <span className="service-arrow">→</span>
      </motion.a>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="services-root"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div
        className="services-badge"
        variants={headerVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Innovative solutions, Measurable results
      </motion.div>

      <motion.h2 className="services-title" variants={headerVariants}>
        We specialize in the following services
      </motion.h2>

      <motion.div className="services-cards" variants={containerVariants}>
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ServicesSection;
