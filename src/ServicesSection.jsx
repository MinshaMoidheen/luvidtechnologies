import React from 'react';
import { FaLaptopCode, FaProjectDiagram, FaBookOpen, FaMobileAlt, FaRocket, FaSearch, FaCloudUploadAlt, FaCloud, FaServer, FaRobot } from 'react-icons/fa';
import './ServicesSection.css';

const services = [
  {
    icon: <FaLaptopCode size={28} />, title: 'Custom Web Solutions',
    desc: 'Our custom business offering tailored software and technology-driven strategies to enhance efficiency and drive growth.'
  },
  {
    icon: <FaProjectDiagram size={28} />, title: 'ERP',
    desc: 'Enterprise Resource Planning (ERP) service provides a comprehensive solution that integrates various business processes into a unified system.'
  },
  {
    icon: <FaBookOpen size={28} />, title: 'LMS',
    desc: 'Empower your organization with our state-of-the-art Learning Management System (LMS), designed to streamline training and education.'
  },
  {
    icon: <FaMobileAlt size={28} />, title: 'Mobile App Development',
    desc: 'Building and maintaining Mobile App Development'
  },
  {
    icon: <FaRocket size={28} />, title: 'Startup MVP Development & Ideation Support',
    desc: 'Enterprise Resource Planning (ERP) service provides a comprehensive solution that integrates various business processes into a unified system.'
  },
  {
    icon: <FaSearch size={28} />, title: 'SEO Optimization & Performance Enhancement',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
  },
  {
    icon: <FaCloud size={28} />, title: 'Cloud Migration & Infrastructure Management',
    desc: 'We offer secure and flexible cloud solutions that enable businesses to store, manage, and access data from anywhere, anytime.'
  },
  {
    icon: <FaServer size={28} />, title: 'On-Premise Private Cloud Setup',
    desc: 'Our On-Premise Private Cloud solutions provide the perfect balance between flexibility and data sovereignty.'
  },
  {
    icon: <FaRobot size={28} />, title: 'AI & ML Model Development and Integration',
    desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.'
  },
];

const ServicesSection = () => (
  <section className="services-root">
    <div className="services-badge">Innovative solutions, Measurable results</div>
    <h2 className="services-title">We specialize in the following services</h2>
    <div className="services-cards">
      {services.map((service) => (
        <div className="service-card" key={service.title}>
          <div className="service-icon-circle">{service.icon}</div>
          <div className="service-card-title">{service.title}</div>
          <div className="service-card-desc">{service.desc}</div>
          <a className="service-more" href="#">Know More <span className="service-arrow">→</span></a>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection; 