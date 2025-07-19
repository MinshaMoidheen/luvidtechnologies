import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterSection from './FooterSection';
import './TestimonialPage.css';
import luvidlogo from './assets/LUVID-LOGO.png';

const TestimonialPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150",
      content: "Luvid Technologies transformed our business with their innovative web solutions. Their team delivered exactly what we needed, on time and within budget. Highly recommended!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, DigitalFlow",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
      content: "Working with Luvid was a game-changer for our startup. Their mobile app development expertise helped us scale rapidly and improve user engagement significantly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, GrowthCorp",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
      content: "The team at Luvid Technologies exceeded our expectations. Their attention to detail and commitment to quality is unmatched. Our new website has increased conversions by 40%.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "CTO, InnovateTech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
      content: "Luvid's cloud migration services were exceptional. They seamlessly transitioned our entire infrastructure with zero downtime. Professional, reliable, and highly skilled.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      role: "Product Manager, FutureApps",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150",
      content: "The ERP solution developed by Luvid has streamlined our operations completely. Their understanding of business processes and technical expertise is outstanding.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "Operations Director, GlobalTech",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
      content: "Luvid Technologies delivered a custom LMS that perfectly fits our training needs. Their innovative approach and dedication to client success is remarkable.",
      rating: 5
    }
  ];

  return (
    <>
      {/* Header */}
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

      {/* Hero Section */}
      <section className="testimonial-hero">
        <div className="testimonial-breadcrumb">Home / Testimonials</div>      
        <div className="testimonial-hero-content">
          <button className="testimonial-badge-btn">Client Testimonials</button>
          <h1 className="testimonial-title">What Our Clients Say</h1>
          <p className="testimonial-desc">Discover why leading businesses choose Luvid Technologies for their digital transformation journey.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <img src={testimonial.image} alt={testimonial.name} className="testimonial-avatar" />
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.role}</p>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection/>
    </>
  );
};

export default TestimonialPage; 