import React from 'react';
import './InsightsSection.css';
import { Link } from 'react-router-dom';

const blogs = [
  {
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    meta: 'Blogs  9 min read',
    title: 'Progressive Web Apps vs. Native Apps: Which is Right for Your Business?',
    date: '04 january 2025',
  },
  {
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    meta: 'Blogs  8 min read',
    title: 'Top 5 Reasons to Choose Noviindus Technologies for Your Mobile App Development Needs',
    date: '04 january 2025',
  },
];

const InsightsSection = () => (
  <section className="insights-root">
    <div className="insights-row">
      <div className="insights-left">
        <h2 className="insights-title">Latest Insights</h2>
        <p className="insights-desc">
          At Luvid Technologies, we are passionate about building innovative digital solutions that drive business growth and enhance user experiences. With a strong foundation in cutting-edge technologies and a commitment to quality, we specialize in crafting web and mobile applications tailored to meet our clients' unique needs.
        </p>
       <Link to="blog">
       <button className="insights-btn">See all Insights <span className="insights-arrow">→</span></button></Link> 
      </div>
      <div className="insights-right">
        {blogs.map((blog, idx) => (
          <div key={blog.title} className="insight-card">
            <div className="insight-card-row">
              <img src={blog.img} alt={blog.title} className="insight-img" />
              <div className="insight-card-content">
                <div className="insight-meta">{blog.meta}</div>
                <div className="insight-card-title">{blog.title}</div>
                <div className="insight-date">{blog.date}</div>
              </div>
            </div>
            {idx !== blogs.length - 1 && <div className="insight-divider" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InsightsSection; 