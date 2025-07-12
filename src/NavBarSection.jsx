import React from 'react'
import './HeroSection.css';

const NavBarSection = () => {
  return (
        <div className="hero-root">
   
      <header className="hero-header">
        <div className="logo">LUVID</div>
        <nav className="hero-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#blogs">Blogs</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#careers">Careers</a>
        </nav>
        <button className="contact-btn">Contact</button>
      </header>
      
    </div>
  )
}

export default NavBarSection
