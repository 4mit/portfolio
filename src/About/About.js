import React from 'react';



const About = () =>{

    return(
      <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Amit
              <span className="text-primary">Kumar</span>
              <span className="text-primarys">SONI</span>
            </h1>
            <div className="subheading mb-5">
              Whitefield Banglore ·
              <a href="mailto:name@email.com">amitamora@email.com</a>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging UI frameworks to provide a robust
              synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/amit-amora/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="https://github.com/4mit">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" href="https://twitter.com/Amit_amora">
                <i className="fab fa-twitter"></i>
              </a>
              {/* <a className="social-icon" href="#">
                <i className="fab fa-facebook-f"></i>
              </a> */}
            </div>
          </div>
        </section>
    )

}

export default About;