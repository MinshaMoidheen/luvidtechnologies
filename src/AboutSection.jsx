import React from 'react';
import './AboutSection.css';
import luvidlogo from './assets/LUVID-LOGO.png'
import { Link } from 'react-router-dom';


const AboutSection = () => {
  return (
    <section className="about-hero-root">
      <div className="about-hero-row">
        <div className="about-hero-content">
          <div className="about-hero-badge">About Us</div>
          <h2 className="about-hero-title">
            Ingenious designers and developers crazy about making great brands
          </h2>
          <p className="about-hero-desc">
            At Luvid Technologies, we are passionate about building innovative digital solutions that drive business growth and enhance user experiences. With a strong foundation in cutting-edge technologies and a commitment to quality, we specialize in crafting web and mobile applications tailored to meet our clients' unique needs.
          </p>
          <Link to='aboutus'>
          <button className="about-hero-btn">
            Know More About Us <span className="about-hero-arrow">→</span>
          </button>
          </Link>
          
        </div>
        <div className="about-hero-logo-bg">
          <img src={luvidlogo} alt="" />
        </div>
      </div>
      <div className="about-hero-stats">
        <div className="about-hero-stat"><span>100+</span><br />Clients</div>
        <div className="about-hero-stat"><span>50+</span><br />Projects</div>
        <div className="about-hero-stat"><span>20+</span><br />Team Members</div>
        <div className="about-hero-stat"><span>5+</span><br />Years Experience</div>
      </div>
    </section>
  );
};

export default AboutSection; 