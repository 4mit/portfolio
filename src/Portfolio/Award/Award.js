import React, { useEffect, useState, useContext } from "react";
import Slider from '../../Slider/Slider';
import ThemeContext from "../../Theme/ThemeContext";

let awards = [
  {
    index: 0,
    headline: "Responsive Web Design",
    button: "View",
    src: "../assets/img/award_bg.jpeg",
  },
  {
    index: 1,
    headline: "Javascript Algorithms and Data-structures",
    button: "View",
    src: "../assets/img/award_bg.jpeg",
  },
  {
    index: 2,
    headline: "Apis and Microservices",
    button: "View",
    src: "../assets/img/award_bg.jpeg",
  },
  {
    index: 3,
    headline: "React (Hackerrank)",
    button: "View",
    src: "../assets/img/award_bg.jpeg",
  },
  {
    index: 4,
    headline: "Python (Hackerrank)",
    button: "View",
    src: "../assets/img/award_bg.jpeg",
  },
];
const Award = () => {
  const { config, current, updater } = useContext(ThemeContext);
  let theme = config[current];
  return (
    <section
      className="resume-section"
      id="awards"
      style={{ background: theme?.background, color: theme?.foreground }}
    >
      <div className="resume-section-content">
        <h2 className="mb-5">Awards & Certifications</h2>

        <Slider title="Awards" slides={awards} />
        {/* <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            <a
              href="https://www.freecodecamp.org/certification/amitkumarsoni/responsive-web-design"
              target="_blank"
            >
              Responsive Web Design
            </a>
          </li>

          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            <a
              href="https://www.freecodecamp.org/certification/amitkumarsoni/javascript-algorithms-and-data-structures"
              target="_blank"
            >
              Javascript Algorithms and Data-structures
            </a>
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            <a
              href="https://www.freecodecamp.org/certification/amitkumarsoni/apis-and-microservices"
              target="_blank"
            >
              Apis and Microservices
            </a>
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            <a
              href="https://www.hackerrank.com/certificates/30d2d4a36818"
              target="_blank"
            >
              React (Hackerrank)
            </a>
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-trophy text-warning"></i>
            </span>
            <a
              href="https://www.hackerrank.com/certificates/8379abc5d679"
              target="_blank"
            >
              Python (Hackerrank)
            </a>
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default Award;
