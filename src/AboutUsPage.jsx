import React, { useState } from 'react';
import './AboutUsPage.css';
import { Link } from 'react-router-dom';
import FooterSection from './FooterSection';
import luvidlogo from './assets/LUVID-LOGO.png'

const AboutUsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header/Navbar for About Us Page only */}
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

      {/* Hero Section */}

      <div className='about-dark'>
<section className="about-hero">
        <div className='breadcrumpabout'>Home / <b>About Us</b></div>
        <div className="about-hero-content">
          
          <button className="about-badge-btn">About Us</button>
          <h1 className="about-title">Transforming ideas into exceptional<br/>digital experiences through cutting-edge technology.</h1>
        </div>
      </section>


      {/* Image Section */}
      <section className="about-image-section">
        <div className="about-image-card">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80" alt="UL CyberPark" />
        </div>
      </section>
      </div>
      

      {/* Who We Are Section */}
      <section className="about-who-section">
        <h2 className="about-who-title">Who We Are</h2>
        <div className="about-who-desc">
          <div>We provide high-quality ensuring 100% client satisfaction.</div>
          <div>Our expertise enables informed decisions through tailored business analysis</div>
        </div>
        <div className="about-mission-vision-row">
          <div className="about-mission-card">
            <div className="about-card-icon">
              {/* Mountain flag SVG */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 40L24 16L40 40H8Z" fill="#fff"/><path d="M24 16L32 28H16L24 16Z" fill="#222"/><rect x="23" y="8" width="2" height="8" fill="#fff"/><rect x="25" y="8" width="8" height="4" fill="#fff"/></svg>
            </div>
            <h3 className="about-card-title">Our Mission</h3>
            <ul className="about-card-list">
              <li>We aim to be the trusted partner for organizations in their digital transformation journey.</li>
              <li>We aim to be the trusted partner for organizations in their digital transformation journey.</li>
              <li>We aim to be the trusted partner for organizations in their digital transformation journey.</li>
              <li>We believe in diversity and inclusivity in our workforce.</li>

            </ul>
          </div>
          <div className="about-vision-card">
            <div className="about-card-icon">
              {/* Binoculars SVG */}
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="34" r="8" fill="#222"/><circle cx="34" cy="34" r="8" fill="#222"/><rect x="10" y="10" width="8" height="18" fill="#222"/><rect x="30" y="10" width="8" height="18" fill="#222"/><rect x="22" y="10" width="4" height="18" fill="#222"/></svg>
            </div>
            <h3 className="about-card-title">Our Vision</h3>
            <ul className="about-card-list">
              <li>We aim to be the trusted partner for organizations in their digital transformation journey.</li>
              <li>We aim to be the trusted partner for organizations in their digital transformation journey.</li>
              <li>We aim to be the trusted partner for organizations in their digital transformation journey.</li>
               <li>We believe in diversity and inclusivity in our workforce.</li>

            </ul>
          </div>
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="about-leadership-section">
        <h2 className="about-leadership-title">Our Leadership</h2>
        <div className="about-leadership-row">
          <div className="about-leader-card">
            <div className="about-leader-img-wrap">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Gabrielle" />
            </div>
            <div className="about-leader-name">Gabrielle</div>
            <div className="about-leader-role">Co-founder & CEO</div>
          </div>
          <div className="about-leader-card">
            <div className="about-leader-img-wrap">
              <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="Hannah" />
            </div>
            <div className="about-leader-name">Hannah</div>
            <div className="about-leader-role">Co-founder & CEO</div>
          </div>
          <div className="about-leader-card">
            <div className="about-leader-img-wrap">
              <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="Heather" />
            </div>
            <div className="about-leader-name">Heather</div>
            <div className="about-leader-role">Co-founder & CEO</div>
          </div>
        </div>
        <h2 className="about-leadership-title">Our Team</h2>
        <div className="about-leadership-row">
          <div className="about-leader-card">
            <div className="about-leader-img-wrap">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Gabrielle" />
            </div>
            <div className="about-leader-name">Gabrielle</div>
            <div className="about-leader-role">Co-founder & CEO</div>
          </div>
          <div className="about-leader-card">
            <div className="about-leader-img-wrap">
              <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="Hannah" />
            </div>
            <div className="about-leader-name">Hannah</div>
            <div className="about-leader-role">Co-founder & CEO</div>
          </div>
          <div className="about-leader-card">
            <div className="about-leader-img-wrap">
              <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="Heather" />
            </div>
            <div className="about-leader-name">Heather</div>
            <div className="about-leader-role">Co-founder & CEO</div>
          </div>
        </div>
      </section>


       {/* Awards & Recognition Section */}
      <section className="about-awards-section">
        <div className="about-awards-badge">Awards & Recognition</div>
        <h1 className="about-awards-title">Celebrating Excellence<br/>& Recognition</h1>
        <div className="about-award-card">
          <div className="about-award-img-wrap">
            <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="Award" />
          </div>
          <div className="about-award-info">
            <div className="about-award-org">Eagle Bizcon</div>
            <div className="about-award-name"><b>The Golden Eagle Awards 2025</b></div>
            <div className="about-award-desc">Luvid Technologies proudly participated in a transformative event, gaining valuable insights, fostering meaningful connections, and securing The Golden Eagle Awards.</div>
            <div className="about-award-date">04 January 2025</div>
          </div>
        </div>
        <hr className="about-award-divider" />
         <div className="about-award-card">
          <div className="about-award-img-wrap">
            <img src="https://randomuser.me/api/portraits/men/31.jpg" alt="Award" />
          </div>
          <div className="about-award-info">
            <div className="about-award-org">Eagle Bizcon</div>
            <div className="about-award-name"><b>The Golden Eagle Awards 2025</b></div>
            <div className="about-award-desc">Luvid Technologies proudly participated in a transformative event, gaining valuable insights, fostering meaningful connections, and securing The Golden Eagle Awards.</div>
            <div className="about-award-date">04 January 2025</div>
          </div>
        </div>
      </section>

    <FooterSection/>

    </>
  );
};

export default AboutUsPage; 