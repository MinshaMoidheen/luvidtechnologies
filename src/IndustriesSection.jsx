import React from 'react';
import { FaGraduationCap, FaHospitalSymbol, FaHotel, FaGlobe, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './IndustriesSection.css';

const industries = [
  {
    icon: <FaGraduationCap size={38} />, title: 'Education & EdTech',
    desc: 'Enhance your digital presence and dramatically escalate the search rankings for your website to effectively reach out to a much bigger crowd.'
  },
  {
    icon: <FaHospitalSymbol size={38} />, title: 'Healthcare & Hospitals',
    desc: 'Create/ give a trendy makeover to your brand through our designs and have promoted to reach the right audience.'
  },
  {
    icon: <FaHotel size={38} />, title: 'Hospitality & Booking Systems',
    desc: 'Custom-made software & E-commerce platforms precisely matching with your needs and serve the purpose.'
  },
  {
    icon: <FaGlobe size={38} />, title: 'Tourism & Travel Management',
    desc: 'Innovative solutions for travel agencies, tour operators, and travel management companies.'
  },
];

const IndustriesSection = () => (
  <section className="industries-root">
    <div className="industries-row">
      <div className="industries-left">
        <div className="industries-badge">Industries We Serve</div>
        <h2 className="industries-title">We help business to evolve & grow.</h2>
        <p className="industries-desc">
          At Luvid Technologies, we are passionate about building innovative digital solutions that drive business growth and enhance user experiences. With a strong foundation in cutting-edge technologies and a commitment to quality, we specialize in crafting web and mobile applications tailored to meet our clients' unique needs. Our team of creative thinkers and skilled developers works collaboratively to turn ideas into impactful digital products. At Luvid, we believe in delivering excellence, every time.
        </p>
        <button className="industries-btn">Know More <span className="industries-arrow">→</span></button>
      </div>
      <div className="industries-right">
        {/* <div className="industries-navigation">
          <button className="nav-arrow nav-arrow-left">
            <FaArrowLeft size={20} />
          </button>
          <button className="nav-arrow nav-arrow-right">
            <FaArrowRight size={20} />
          </button>
        </div> */}
        
        {industries.map((ind, idx) => (
          <div key={ind.title} className="industry-card">
            <div className="industry-icon">{ind.icon}</div>
            <div>
              <div className="industry-title">{ind.title}</div>
              <div className="industry-desc">{ind.desc}</div>
            </div>
            {idx !== industries.length - 1 && <div className="industry-divider" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection; 