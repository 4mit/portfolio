import React, { useEffect } from 'react';
import './About.css';
import { useState } from 'react';

const About = () =>{

    let ref = null;
    let [quotes] = useState([
      "“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney",
      "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
      "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers",
      " “You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”",
      "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi",
      "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs"
    ])

    let [currentQuote, setCurrentQuote] = useState('Loading....');

    useEffect(()=>{    
      ref = setInterval(()=>{        
        let idx = Math.floor(Math.random()* quotes.length-1);
        if(idx<0) idx =0
        setCurrentQuote(quotes[idx]);
      },2000)
      return () =>{
        ref = null;
      }
    },[]);

    return(
      <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Amit
              <span className="text-primary">Kumar</span>
              <span className="text-primarys">Soni</span>
            </h1>
            <div className="subheading mb-5">
              Whitefield Banglore ·
              <a href="mailto:amitamora@gmail.com">amitamora@gmail.com</a>
            </div>
            <p className="lead mb-5">
              I am experienced in leveraging UI frameworks to provide a robust
              synopsis for high level overviews. Iterative approaches to
              corporate strategy foster collaborative thinking to further the
              overall value proposition.
            </p>
            <div className="quote mb-5">
              <quotes>
                {currentQuote}
              </quotes>
            </div> 
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