import React, { useState } from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import './PortfolioSection.css';
import { Link } from 'react-router-dom';

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=600&h=400&facepad=2',
    alt: 'Stock Flow – Warehouse Inventory Management System',
    title: 'Stock Flow – Warehouse Inventory Management System',
    desc: 'A scalable solution for managing warehouse inventory across multiple stores. Ideal for medium to large-scale in-house storage facilities.',
    features: [
      'Multi-store & multi-user support with role-based access',
      'Real-time stock and cost statistics per store/shop',
      'Supplier tracking with transaction and due management',
      'Invoice generation and detailed financial reporting',
      'Comprehensive dashboard for profit and monthly cash flow insights',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=600&h=400&facepad=2',
    alt: 'AI-Powered Facial Recognition Attendance System',
    title: 'AI-Powered Facial Recognition Attendance System',
    desc: 'A smart facial recognition system for marking attendance with AI, offering seamless access from any device and location.',
    features: [
      'Face detection with AI – no physical contact required',
      'Cross-device, cross-location access',
      'Integration for offices, schools, hospitals, and more',
      'Real-time sync and secure attendance logs',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=600&h=400&facepad=2',
    alt: 'E-Commerce Platform (Web + Mobile – iOS/Android)',
    title: 'E-Commerce Platform (Web + Mobile – iOS/Android)',
    desc: 'A fully customizable e-commerce ecosystem with web and mobile apps, built to scale with your business.',
    features: [
      'Unique front-end development for each business',
      'Admin panel to manage orders, customers, and inventory',
      'Payment gateway integration & promotional tools',
      'Native iOS and Android apps for real-time shopping',
    ],
  },
  // Add more projects for demo
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&h=400&facepad=2',
    alt: 'Project 4',
    title: 'Project 4',
    desc: 'Description for project 4.',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&h=400&facepad=2',
    alt: 'Project 5',
    title: 'Project 5',
    desc: 'Description for project 5.',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
  },
];

const CARDS_PER_PAGE = 3;
const totalPages = Math.ceil(projects.length / CARDS_PER_PAGE);

const PortfolioSection = () => {
  const [page, setPage] = useState(0);
  const startIdx = page * CARDS_PER_PAGE;
  const visibleProjects = projects.slice(startIdx, startIdx + CARDS_PER_PAGE);

  return (
    <section className="portfolio-root">
      <div className="portfolio-header-row">
        <div className="portfolio-header-left">
          <div className="portfolio-badge">Portfolio</div>
          <h2 className="portfolio-title">Company Solutions &<br />Product Portfolio</h2>
        </div>
        <Link to="works"><a className="portfolio-btn" href="#">Portfolio <FaArrowRight /></a></Link>
      </div>
      <div className="portfolio-cards">
        {visibleProjects.map((project, idx) => (
          <div className="portfolio-card" key={startIdx + idx}>
            <img src={project.img} alt={project.alt} className="portfolio-img" />
            <div className="portfolio-card-content">
              <div className="portfolio-card-title">{project.title}</div>
              <div className="portfolio-card-desc">{project.desc}</div>
              <div className="portfolio-card-features">Key Features</div>
              <ul className="portfolio-features-list">
                {project.features.map((feature, i) => (
                  <li key={i}><FaCheckCircle className="portfolio-feature-icon" /> {feature}</li>
                ))}
              </ul>
            </div>
            <div className="portfolio-card-divider" />
            <button className="portfolio-card-btn">Portfolio <FaArrowRight /></button>
          </div>
        ))}
      </div>
      <div className="portfolio-pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot${i === page ? ' active' : ''}`}
            onClick={() => setPage(i)}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection; 