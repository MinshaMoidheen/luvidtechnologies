import React, { useState } from 'react';
import './ContactPage.css';
import FooterSection from './FooterSection';
import { Link } from 'react-router-dom';
import luvidlogo from './assets/LUVID-LOGO.png'
import ul from './assets/hilite.avif'



const tabs = [
  { label: 'Get a Quote' },
  { label: 'Partnership' },
  { label: 'General Enquiry' },
];

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header/Navbar for Contact Page only */}
      <header className="hero-header">
         <Link to='/'><img src={luvidlogo} alt="luvid-logo" /></Link>
        <nav className="hero-nav">
          <a href="/">Home</a>
          <Link to="/aboutus"><a href="#about">About</a></Link>
          <Link to="/services"><a href="#services">Services</a></Link>
          <Link to='/works'><a>Products</a></Link>
          <Link to="/blog"><a href="#blogs">Blogs</a></Link>
          <a href="/testimonial">Testimonials</a>
          {/* <a href="#careers">Careers</a> */}
        </nav>
        <Link to="/contact"><button className="contact-btn">Contact</button></Link>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </header>

      {/* Mobile Side Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo">LUVID</div>
          <button className="close-menu-btn" onClick={closeMenu}>
            <span className="close-icon">×</span>
          </button>
        </div>
        <nav className="mobile-nav">
                  <a href="/" onClick={closeMenu}>Home</a>
                  <Link to="/aboutus" onClick={closeMenu}><a href="#about">About</a></Link>
                  <a href="/services" onClick={closeMenu}>Services</a>
                  <Link to='/works' onClick={closeMenu}><a>Products</a></Link>
                  <Link to="/blog" onClick={closeMenu}><a href="#blogs">Blogs</a></Link>
                  <a href="/testimonial" onClick={closeMenu}>Testimonials</a>
                  {/* <a href="#careers" onClick={closeMenu}>Careers</a> */}
                </nav>
        <div className="mobile-menu-footer">
          <Link to="/contact" onClick={closeMenu}>
            <button className="mobile-contact-btn">Contact</button>
          </Link>
        </div>
      </div>

      <section className="contact-root">
        <div className="contact-row">
          <div className="contact-left">
            <div className="breadcrumbcontact">Home / <b>Contact</b> </div>
            <button className="contact-badge-btn">Contact Us ?</button>
            <h1 className="contact-title">Have a project in mind?</h1>
            <p className="contact-desc">
              We'd love to hear about your digital project. Please get in touch with one of our Project Consultants.
            </p>
            <div className="contact-divider" />
            <div className="contact-info-blocks">
              <div className="contact-info-block">
                <div className="contact-info-label">General Enquiry</div>
                <div className="contact-info-value">+91 85907 01815</div>
              </div>
              <div className="contact-info-block">
                <div className="contact-info-label">Email</div>
                <div className="contact-info-value">luvidtechnologies@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-tabs">
              {tabs.map((tab, idx) => (
                <div
                  key={tab.label}
                  className={`contact-tab${activeTab === idx ? ' active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.label}
                </div>
              ))}
            </div>
            <form className="contact-form" autoComplete="off">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>First Name*</label>
                  <input type="text" placeholder="Enter First Name" />
                </div>
                <div className="contact-form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter Last Name" />
                </div>
              </div>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Email*</label>
                  <input type="email" placeholder="Enter Email*" />
                </div>
                <div className="contact-form-group">
                  <label>Phone Number*</label>
                  <input type="text" placeholder="Enter Phone Number*" />
                </div>
              </div>
              <div className="contact-form-group">
                <label>Tell Us More</label>
                <textarea
                  placeholder="Tell as your project"
                  maxLength={1000}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
                <div className="contact-form-count">{message.length} / 1000</div>
              </div>
            </form>
            <div className="contact-send-btn-row">
              <button type="button" className="contact-send-btn">
                Send Enquiry <span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="location-section">
        <div className="location-card">
          <div className="location-image">
            <img src={ul} alt="UL CyberPark" />
          </div>
          <div className="location-info">
            <h2 className="location-title">Our Locations</h2>
            <hr className="location-divider" />
            <div className="location-name">Hilite Business Park</div>
            <div className="location-address">HiLITE City National Highway 66,
Bypass, Thondayad,
Kozhikode, <br/>Kerala 673016</div>
            <a className="location-btn" href="https://maps.app.goo.gl/r6rtHaaDNwF48KCR6" target="_blank" rel="noopener noreferrer">
              Get Direction <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </section>
      <section>
        <FooterSection />
      </section>
    </>
  );
};

export default ContactPage; 