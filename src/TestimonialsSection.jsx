import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./TestimonialsSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
import userLogo from "./assets/user-logo.svg";

const testimonials = [
  {
    text: '"Luvid Technologies transformed our automotive e-commerce platform with their innovative development approach. The team delivered a seamless user experience that significantly increased our sales and customer satisfaction."',
    name: "Muhammed Ali Ambalathumkandi",
    title: "Founder, Oto Gadgets",
  },
  {
    text: '"The hospital management system developed by Luvid has streamlined our entire operations. Their attention to detail and understanding of healthcare workflows made the implementation smooth and efficient."',
    name: "Dr Abhilash",
    title: "Founder, Pasunooti Hospitals",
  },
  {
    text: '"Luvid\'s stock management solution has revolutionized how we handle inventory. The real-time tracking and automated alerts have saved us countless hours and reduced errors significantly."',
    name: "Nabeel",
    title: "Founder, Stocksigo",
  },
];

const MOBILE_BREAKPOINT = 600;

const TestimonialCard = ({ testimonial, index }) => {
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
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  const avatarVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2 + 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="testimonial-card"
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
      <div className="testimonial-header">
        <motion.img
          src={userLogo}
          alt="User"
          className="testimonial-avatar"
          variants={avatarVariants}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 },
          }}
        />
        <motion.div
          className="testimonial-info"
          initial={{ x: -20, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ delay: index * 0.2 + 0.4, duration: 0.5 }}
        >
          <div className="testimonial-name">{testimonial.name}</div>
          <div className="testimonial-role">{testimonial.title}</div>
          <div className="testimonial-rating">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">
                ★
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.div
        className="testimonial-text"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
      >
        {testimonial.text}
      </motion.div>
    </motion.div>
  );
};

const TestimonialsSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="testimonials"
      className="testimonials-root"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div
        className="testimonials-badge"
        variants={headerVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        Testimonials
      </motion.div>

      <motion.h2 className="testimonials-title" variants={headerVariants}>
        What they say
        <br />
        about us
      </motion.h2>

      {isMobile ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            speed={900}
          >
            {testimonials.slice(0, 3).map((t, idx) => (
              <SwiperSlide key={idx}>
                <TestimonialCard testimonial={t} index={idx} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      ) : (
        <motion.div className="testimonials-cards" variants={containerVariants}>
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} index={idx} />
          ))}
        </motion.div>
      )}

      <Link to="testimonial">
        <motion.button
          className="testimonials-btn"
          variants={buttonVariants}
          whileHover={{
            scale: 1.05,
            x: 5,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          View all Testimonials <span className="testimonials-arrow">→</span>
        </motion.button>
      </Link>
    </motion.section>
  );
};

export default TestimonialsSection;
