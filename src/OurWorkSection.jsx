import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import "./OurWorkSection.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import mistu from "./assets/Mistudiu.png";
import pasunooti from "./assets/Pasunooti.png";
import oto from "./assets/OtoGadge.png";

const projects = [
  {
    title: "Oto Gadgets",
    img: oto,
    link: "https://otogadgets.com/",
  },
  {
    title: "Mistudiu",
    img: mistu,
    link: "https://mistudiu.com/",
  },
  {
    title: "Pasunooti Hospitals",
    img: pasunooti,
    link: "https://pasunootihospitals.com/",
  },
];

const OurWorkSection = () => (
  <section id="works" className="ourwork-root">
    <div className="ourwork-header-row">
      <h2 className="ourwork-title">Our Work</h2>
      <Link to="allworks">
        <a className="ourwork-viewall" href="#">
          View all Work <FaArrowRight />
        </a>
      </Link>
    </div>
    <div className="ourwork-cards">
      {projects.map((project) => (
        <div className="ourwork-card" key={project.title}>
          <div className="ourwork-img-wrap">
            <img
              src={project.img}
              alt={project.title}
              className="ourwork-img"
            />
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
