import React, { useEffect, useState, useContext } from "react";

import ThemeContext from "../Theme/ThemeContext";

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
        <ul className="fa-ul mb-0">
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
          {/* <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                Mobile Web Specialist - Google Certification
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2009
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Adobe Creative Jam 2008
                (UI Design Category)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                2<sup>nd</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2008
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - James Buchanan High School - Hackathon 2006
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-trophy text-warning"></i>
                </span>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005
              </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Award;
