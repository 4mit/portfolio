import React from 'react';


const Education = () =>{
  return (
    <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">
                  National Institute of Technology Calicut
                </h3>
                <div className="subheading mb-3">
                Master of computer Applications
                </div>
                <div>Computer Application </div>
                <ul>
                  <li>Data Structure</li>
                  <li>Algorithm</li>
                  <li>Web- Development</li>
                  <li>Computer Network</li>
                </ul>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2015 - 2018</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">
                  Pt. Ravishankar Shukla University Raipur
                </h3>
                <div className="subheading mb-3">Bachlore of Science (CS)</div>
                <div>Computer science - Mathematics - Physics</div>
                {/* <ul>
                  <li>Data Structure</li>
                  <li>Algorithm</li>
                  <li>Web- Development</li>
                  <li>Computer Network</li>
                </ul> */}
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">2011 - 2014</span>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Education;