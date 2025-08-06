import React from "react";
import {
  FaArrowRight,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./FooterSection.css";

const FooterSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle navigation to sections or pages
  const handleNavigation = (path, sectionId = null) => {
    if (location.pathname === "/" && sectionId) {
      // If we're on the main page and have a section ID, scroll to that section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the page and scroll to section if specified
      navigate(path);
      if (sectionId) {
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <footer className="footer-root">
      <div className="footer-top">
        <div className="footer-heading">
          Have a project to
          <br />
          collaborate on?
        </div>
        <div className="footer-actions">
          <Link to="/contact" className="footer-btn footer-btn-white">
            Contact Us <FaArrowRight />
          </Link>
          <button
            className="footer-btn footer-btn-outline"
            onClick={() => handleNavigation("/contact?tab=quote")}
          >
            Get a Quote <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <button
            onClick={() => handleNavigation("/about")}
            className="footer-link"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation("/services")}
            className="footer-link"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigation("/allworks")}
            className="footer-link"
          >
            Works
          </button>
          <button
            onClick={() => handleNavigation("/blog")}
            className="footer-link"
          >
            Blogs
          </button>
          <button
            onClick={() => handleNavigation("/testimonial")}
            className="footer-link"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleNavigation("/contact")}
            className="footer-link"
          >
            Contact
          </button>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Services</div>
          <button
            onClick={() => handleNavigation("/services")}
            className="footer-link"
          >
            ERP
          </button>
          <button
            onClick={() => handleNavigation("/services")}
            className="footer-link"
          >
            LMS
          </button>
          <button
            onClick={() => handleNavigation("/services")}
            className="footer-link"
          >
            Custom Web Solutions
          </button>
          <button
            onClick={() => handleNavigation("/services")}
            className="footer-link"
          >
            Mobile App Development
          </button>
          <button
            onClick={() => handleNavigation("/services")}
            className="footer-link"
          >
            Cloud Migration
          </button>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Products</div>
          <button
            onClick={() => handleNavigation("/works")}
            className="footer-link"
          >
            Stocksigo
          </button>
          <button
            onClick={() => handleNavigation("/works")}
            className="footer-link"
          >
            HRMS System
          </button>
          <button
            onClick={() => handleNavigation("/works")}
            className="footer-link"
          >
            Facial Recognition
          </button>
          <button
            onClick={() => handleNavigation("/works")}
            className="footer-link"
          >
            E-Commerce Platform
          </button>
          <button
            onClick={() => handleNavigation("/works")}
            className="footer-link"
          >
            OCR AI Model
          </button>
          <button
            onClick={() => handleNavigation("/works")}
            className="footer-link"
          >
            OneForm
          </button>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Connect</div>
          <div className="footer-connect-row">
            <span>General Enquiry</span> : <span>+91 85907 01815</span>
          </div>
          <div className="footer-connect-row">
            <span>Email</span> : <span>luvidtechnologies@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bar">
        <div className="footer-copyright">
          © 2024 Luvid. All rights reserved.
        </div>
        <div className="footer-socials">
          <a
            href="https://www.instagram.com/luvid_technologies?igsh=MXMwdmpoanc1N3gycw=="
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <FaInstagram />
          </a>
          <a href="#" className="footer-social-icon">
            <FaXTwitter />
          </a>
          <a
            href="https://wa.me/918590701815"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-icon"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
