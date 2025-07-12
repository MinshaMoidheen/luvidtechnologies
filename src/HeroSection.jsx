import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="hero-header">
    <div className="logo">LUVID</div>
    <nav className="hero-nav">
      <a href="/">Home</a>
                <Link to="/aboutus"><a href="#about">About</a></Link>
                <a href="#services">Services</a>
                <Link to='/works'><a>Products</a></Link>
                <Link to="/blog"><a href="#blogs">Blogs</a></Link>
                <a href="#testimonials">Testimonials</a>
                <a href="#careers">Careers</a>
    </nav>
    <Link to="/contact"><button className="contact-btn">Contact</button></Link>
  </header>
);

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
            <button className="talk-btn">Talk to Us</button>
            <button className="learn-btn">Learn More</button>
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