import React from 'react';
import { FaArrowRight, FaInstagram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './FooterSection.css';

const FooterSection = () => (
  <footer className="footer-root">
    <div className="footer-top">
      <div className="footer-heading">Have a project to<br />collaborate on?</div>
      <div className="footer-actions">
        <Link to="/contact" className="footer-btn footer-btn-white">Contact Us <FaArrowRight/></Link>
        <button className="footer-btn footer-btn-outline">Get a Quote <FaArrowRight/></button>
      </div>
    </div>
    <div className="footer-divider" />
    <div className="footer-bottom">
      <div className="footer-col">
        <div className="footer-col-title">Company</div>
        <Link to="/aboutus"><a href="#">About</a></Link>
        <Link to="/services"><a href="#">Services</a></Link>
        <Link to="/allworks"><a href="#">Works</a></Link>
        <Link to="/blog"><a href="#">Blogs</a></Link>
        <Link to="/testimonial"><a href="#">Testimonials</a></Link>
        <Link to="/careers"><a href="#">Careers</a></Link>
        <Link to="/contact"><a href="#">Contact</a></Link>
      </div>
      <div className="footer-col">
        <div className="footer-col-title">Services</div>
        <a href="#">ERP</a>
        <a href="#">LMS</a>
        <a href="#">Custom Web Solutions</a>
        <a href="#">Mobile App Development</a>
        <a href="#">Custom Web Solutions</a>
      </div>
      <div className="footer-col">
        <div className="footer-col-title">Products</div>
        <a href="#">Delta</a>
        <a href="#">Mistudiu</a>
        <a href="#">Pasunooti</a>
      </div>
      <div className="footer-col">
        <div className="footer-col-title">Connect</div>
        <div className="footer-connect-row"><span>General Enquiry</span> : <span>+91 85907 01815</span></div>
        <div className="footer-connect-row"><span>Email</span> : <span>luvidtechnologies@gmail.com</span></div>
      </div>
    </div>
    <div className="footer-divider" />
    <div className="footer-bar">
      <div className="footer-copyright">© 2024 Luvid. All rights reserved.</div>
      <div className="footer-socials">
        <a href="https://www.instagram.com/luvid_technologies?igsh=MXMwdmpoanc1N3gycw==" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><FaInstagram /></a>
        <a href="#" className="footer-social-icon"><FaXTwitter /></a>
        <a href="https://wa.me/918590701815" target="_blank" rel="noopener noreferrer" className="footer-social-icon"><FaWhatsapp /></a>
      </div>
    </div>
  </footer>
);

export default FooterSection; 