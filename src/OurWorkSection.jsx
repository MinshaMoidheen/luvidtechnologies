import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './OurWorkSection.css';
import { FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    title: 'Delta Destinations',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=600&h=400&facepad=2',
    link: '#'
  },
  {
    title: 'Mistudiu',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=facearea&w=600&h=400&facepad=2',
    link: '#'
  },
  {
    title: 'Pasunooti Hospitals',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=600&h=400&facepad=2',
    link: '#'
  },
];

const OurWorkSection = () => (
  <section className="ourwork-root">
    <div className="ourwork-header-row">
      <h2 className="ourwork-title">Our Work</h2>
      <a className="ourwork-viewall" href="#">View all Work <FaArrowRight /></a>
    </div>
    <div className="ourwork-cards">
      {projects.map((project) => (
        <div className="ourwork-card" key={project.title}>
          <div className="ourwork-img-wrap">
            <img src={project.img} alt={project.title} className="ourwork-img" />
          </div>
          <div className="ourwork-card-bottom">
            <span className="ourwork-card-title">{project.title}</span>
            <a className="ourwork-card-arrow" href={project.link}>
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OurWorkSection; 