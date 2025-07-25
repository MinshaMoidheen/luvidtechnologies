import React, { useState } from 'react';
import './BlogPage.css';
import { Link } from 'react-router-dom';
import FooterSection from './FooterSection';
import luvidlogo from './assets/LUVID-LOGO.png'
import heroImage from './assets/banner.jpg'



const filters = [
  { label: 'All' },
  { label: 'Blogs' },
  { label: 'News' },
  { label: 'Tips & Tricks' },
];

const blogs = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    category: 'Blogs',
    readTime: '9 min read',
    title: 'Progressive Web Apps vs. Native Apps: Which is Right for Your Business?',
    date: '04 January 2025',
    desc: '',
  },
  {
    id: 2,
    image: heroImage,
    category: 'Blogs',
    readTime: '8 min read',
    title: 'Top 5 Reasons to Choose Noviindus Technologies for Your Mobile App',
    date: '04 January 2025',
    desc: '',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    category: 'News',
    readTime: '7 min read',
    title: 'How to Build a Modern Web App in 2025',
    date: '05 January 2025',
    desc: '',
  },
];


const insightsData = [
  {
    id: 1,
    title: "Progressive Web Apps vs. Native Apps: Which is Right for Your Business?",
    date: "04 January 2025",
    readTime: "9 min read",
    type: "Blogs",
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: "Progressive Web Apps vs. Native Apps: Which is Right for Your Business?",
    date: "04 January 2025",
    readTime: "9 min read",
    type: "Blogs",
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: "Progressive Web Apps vs. Native Apps: Which is Right for Your Business?",
    date: "04 January 2025",
    readTime: "9 min read",
    type: "Blogs",
   image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: "Progressive Web Apps vs. Native Apps: Which is Right for Your Business?",
    date: "04 January 2025",
    readTime: "9 min read",
    type: "Blogs",
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: "Progressive Web Apps vs. Native Apps: Which is Right for Your Business?",
    date: "04 January 2025",
    readTime: "9 min read",
    type: "Blogs",
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: "Progressive Web Apps vs. Native Apps: Which is Right for Your Business?",
    date: "04 January 2025",
    readTime: "9 min read",
    type: "Blogs",
   image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  },
];

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header/Navbar for Blog Page only */}
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

      <section className="blog-root">
        <div className='breadcrumbblog'>Home / <b>Blog</b></div>
        <div className="blog-title-row">
          <h1 className="blog-title">Latest Insights</h1>
          <div className="blog-filters">
            {filters.map((f, idx) => (
              <button
                key={f.label}
                className={`blog-filter-btn${activeFilter === idx ? ' active' : ''}`}
                onClick={() => setActiveFilter(idx)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
        <div className="blog-list-flex">
          <div className="blog-list-col1">
            {/* First blog as block, 40% width */}
            <div className="blog-card-block">
              <div className="blog-card-img-wrap">
                <img src={blogs[0].image} alt={blogs[0].title} />
              </div>
              <div className="blog-card-info">
                <div className="blog-card-meta">
                  <span>{blogs[0].category}</span>
                  <span>{blogs[0].readTime}</span>
                </div>
                <div className="blog-card-title">{blogs[0].title}</div>
                <div className="blog-card-date">{blogs[0].date}</div>
              </div>
            </div>
          </div>
          <div className="blog-list-col2">
            {/* Other blogs as flex, 60% width */}
            {blogs.slice(1).map((blog, idx) => (
              <React.Fragment key={blog.id}>
                <div className="blog-card-flex">
                  <div className="blog-card-img-wrap-flex">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                  <div className="blog-card-info-flex">
                    <div className="blog-card-meta">
                      <span>{blog.category}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <div className="blog-card-title">{blog.title}</div>
                    <div className="blog-card-date">{blog.date}</div>
                  </div>
                </div>
                {idx === 0 && <hr className="blog-card-divider" />}
              </React.Fragment>
            ))}
          </div>
        </div>
<br />
        <hr className="blog-last-divider" />

          <section className="latest-insights-section">
            <h2 className="latest-insights-heading">Latest Insights</h2>
            <div className="latest-insights-grid">
              {insightsData.map((item) => (
                <div key={item.id} className="insight-card">
                  <img src={item.image} alt="Blog" className="insight-card-image" />
                  <div className="insight-card-content">
                    <p className="insight-card-meta">
                      {item.type} · {item.readTime}
                    </p>
                    <h3 className="insight-card-title">{item.title}</h3>
                    <p className="insight-card-date">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

         
      </section>

      <FooterSection/>
    </>
  );
};

export default BlogPage; 