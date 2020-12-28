import React, { useEffect, useState, useContext } from "react";
import "./Experience.css";
import ThemeContext from "../Theme/ThemeContext";

const Experience = () => {
  const { config, current, updater } = useContext(ThemeContext);
  let theme = config[current];

  return (
    <section
      className="resume-section"
      id="experience"
      style={{ background: theme?.background, color: theme?.foreground }}
    >
      <div className="resume-section-content">
        <h2 className="mb-5">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Application Services Engineer</h3>
            <div className="subheading mb-3">Maistering B.V. India</div>
            <div>
              <ul>
                <li>Working on Core feature development for product.</li>
                <li>
                  Migrated Angular app to React-based implementation from
                  scratch using React 16, redux
                </li>
                <li>
                  Architected modular front end (Custom Auth-guard, Lazy modules
                  , interceptors, Reusable modules and component , central
                  service to handle overall network request, reusable pipes, web
                  worker , rxjs , ngrx)
                </li>
                <li>
                  Optimizing multiple network call for smooth User Experience
                  created a central API system for product
                </li>
                <li>
                  Improved app performance and enhanced initial load from 2min
                  to 30sec.
                </li>
                <li>
                  {" "}
                  Worked on responsive design and developed a Mobile first
                  approach.
                </li>
                <li>Configuring JSON driven ui components</li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">May 2019 - Present</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">UI/UX Developer</h3>
            <div className="subheading mb-3">Numbertheory.ai</div>
            <div>
              <ul>
                <li>Designed and Implemented pipeline system using gojs</li>
                <li>Worked with 2 Single Page Application</li>
                <li>
                  API integration, and Core functionality Development for the
                  product.Worked with Material, Bootstrap, and Visualization UI
                  libraries i.e. plotly, d3, high-charts
                </li>
                <li>
                  Designing Mockups, Wireframes, and Icons as per the
                  requirements and Implementing new modules.
                </li>
                <li>
                  Day-to-day work includes fixing bug/issues, debugging, and
                  collaborating with the team and using GIT
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">July 2018 - April 2019</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Intern</h3>
            <div className="subheading mb-3">Numbertheory.ai</div>
            <div>
              <ul>
                <li>
                  Closely Worked with Data science team to Design and Implement
                  various Visualization i.e Confusion Matrix , Time series
                  Charts
                </li>
                <li>Developed services using node-express-mongodb</li>
              </ul>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">February 2018 - June 2018</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
