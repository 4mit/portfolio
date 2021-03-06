import React, { useEffect, useState, useContext } from "react";
import "./About.css";
import WelcomeMsg from "./WelcomeMsg/WelcomeMsg";
import ThemeContext from "../../Theme/ThemeContext";

const About = () => {
  const { config, current, updater } = useContext(ThemeContext);
  let theme = config[current];
  console.log("theme", theme);
  let ref = null;
  let [quotes] = useState([
    "“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney",
    "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
    "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers",
    " “You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”",
    "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi",
    "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs"
  ]);

  let [currentQuote, setCurrentQuote] = useState("Loading....");

  useEffect(() => {
    //ref =
    setInterval(() => {
      let idx = Math.floor(Math.random() * quotes.length - 1);
      if (idx < 0) idx = 0;
      setCurrentQuote(quotes[idx]);
    }, 5000);
    // return () => {
    //   ref = null;
    // };
  }, []);

  return (
    <section
      className="resume-section"
      id="about"
      style={{ background: theme?.background, color: theme?.foreground }}
    >
      <div className="resume-section-content">
        <h1 className="mb-0 main-title">
          Amit
          <span className="text-primary">Kumar</span>
          {/* <span className="text-primarys">Soni</span> */}
        </h1>
        <div className="subheading mb-5">
          Whitefield Banglore ·
          <a href="mailto:amitamora@gmail.com">amitamora@gmail.com</a>
        </div>
        <p className="lead mb-5">
          I am experienced in leveraging UI frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
        <div className="quote mb-5">
          <p>
            <WelcomeMsg></WelcomeMsg>
          </p>
          <quotes>{currentQuote}</quotes>
        </div>
        <div className="social-icons mt-5 justify-content-sm-center">
          <a
            className="social-icon"
            title="Visit My Linkedin profile"
            href="https://www.linkedin.com/in/amit-amora/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            className="social-icon"
            href="https://github.com/4mit"
            title="Visit My Github profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/Amit_amora"
            title="Visit My Twitter profile"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            className="social-icon"
            href="./assets/amit_react.pdf"
            title="Download my Resume"
            target="_blank"
          >
            <i class="fas fa-file-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
