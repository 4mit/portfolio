import React, { useEffect, useState, useContext } from "react";
import "./About.css";
import WelcomeMsg from "./WelcomeMsg/WelcomeMsg";
import ThemeContext from "../../Theme/ThemeContext";
import { PARTICLE_CONFIG } from "./prticleConfig";
import SocialBanner from "./SocialBanner";
import { ReactComponent as YourSvg } from "./moon.svg";
import DarkModeToggle from "react-dark-mode-toggle";

const About = () => {
  const { config, current, updater } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(() => true);

  let theme = config[current];
  console.log("theme", theme);
  let ref = null;
  let [quotes] = useState([
    "“The Best Way To Get Started Is To Quit Talking And Begin Doing.” – Walt Disney",
    "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill",
    "“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers",
    " “You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”",
    "“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi",
    "“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs",
  ]);

  let [currentQuote, setCurrentQuote] = useState("Loading....");

  useEffect(() => {
    particlesJS("about", PARTICLE_CONFIG);
  }, []);

  return (
    <section
      className="resume-section"
      id="about"
      style={{ background: theme?.background, color: theme?.foreground }}
    >
      <div
        className="absolute-center flex flex-column"
        style={{ alignItems: "center" }}
      >
        <p className="bio-title">Hi</p>
        <img
          src="../assets/img/1568397890204.webp"
          style={{
            height: 130,
            width: 130,
            verticalAlign: "middle",
            textAlign: "center",
            borderRadius: "50%",
          }}
        />
        <br />
        <p className="bio-title">I'm Amit Kumar soni</p>
        <p className="bio-subtitle">A frontend developer</p>

        <SocialBanner />
        <div>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={80}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
