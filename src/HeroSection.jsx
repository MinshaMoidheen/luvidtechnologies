import React, { useState } from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import luvidlogo from './assets/LUVID-LOGO.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="hero-header">
        <Link to='/'><img src={luvidlogo} alt="luvid-logo" /></Link>
        <nav className="hero-nav">
          <a href="/">Home</a>
          <Link to="/aboutus"><a href="#about">About</a></Link>
         <Link to="/services"><a href="#services">Services</a></Link>
          <Link to='/works'><a>Products</a></Link>
          <Link to="/blog"><a href="#blogs">Blogs</a></Link>
          <a href="#testimonials">Testimonials</a>
          <a href="#careers">Careers</a>
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
          <a href="#services" onClick={closeMenu}>Services</a>
          <Link to='/works' onClick={closeMenu}><a>Products</a></Link>
          <Link to="/blog" onClick={closeMenu}><a href="#blogs">Blogs</a></Link>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#careers" onClick={closeMenu}>Careers</a>
        </nav>
        <div className="mobile-menu-footer">
          <Link to="/contact" onClick={closeMenu}>
            <button className="mobile-contact-btn">Contact</button>
          </Link>
        </div>
      </div>
    </>
  );
};

const HeroSection = () => {
  return (
    <div className="hero-root">
      {/* Hero Section */}
      <section className="hero-main">
        <div className="hero-left">
          <div className="hero-badge">LUVID TECHNOLOGIES LLP</div>
          <h1 className="hero-title">We Engineer Your Digital Products</h1>
          <p className="hero-subtitle">
            Transforming ideas into exceptional digital experiences<br />
            through cutting-edge technology and innovative solutions.
          </p>
          <div className="hero-buttons">
           <Link to="contact"><button className="talk-btn">Talk to Us</button></Link> 
           <Link to="aboutus"><button className="learn-btn">Learn More</button></Link> 
          </div>
        </div>
        <div className="hero-right">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=500&h=500&facepad=2"
            alt="Hero"
            className="hero-image"
          />
        </div>
      </section>
    </div>
  );
};

export { Header };
export default HeroSection; 