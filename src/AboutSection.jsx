import React from 'react';
import './AboutSection.css';

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
          <button className="about-hero-btn">
            Know More About Us <span className="about-hero-arrow">→</span>
          </button>
        </div>
        <div className="about-hero-logo-bg">
          <span className="about-hero-logo-text">LUVID</span>
        </div>
      </div>
      <div className="about-hero-stats">
        <div className="about-hero-stat"><span>1000+</span><br />Clients</div>
        <div className="about-hero-stat"><span>100+</span><br />Projects</div>
        <div className="about-hero-stat"><span>36+</span><br />Team Members</div>
        <div className="about-hero-stat"><span>12+</span><br />Years Experience</div>
      </div>
    </section>
  );
};

export default AboutSection; 