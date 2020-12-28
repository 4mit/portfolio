import React, { useState } from "react";
import "./styles.css";
import Sidenav from "./Sidenav/Sidenav";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Interests from "./Interests/Interests";
import Award from "./Award/Award";
import themes from "./Theme/ThemeConfig";
// import AutoComplete from "./AutoComplete/AutoComplete";
import ThemeContext from "./Theme/ThemeContext";
export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeContext.Provider
        value={{
          config: themes,
          current: theme,
          updater: setTheme
        }}
      >
        <Sidenav />
        <div className="container-fluid p-0 main-content">
          <About />
          <hr className="m-0" />
          <Experience />
          <hr className="m-0" />
          <Education />
          <hr className="m-0" />
          <Skills />
          <hr className="m-0" />
          <Interests />
          <hr className="m-0" />
          <Award />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
