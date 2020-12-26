import React from "react";
import "./styles.css";
import Sidenav from "./Sidenav/Sidenav";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Interests from "./Interests/Interests";

import Award from "./Award/Award";
// import AutoComplete from "./AutoComplete/AutoComplete";
export default function App() {
  return (
    <>
      {/* <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Search...</h2>
        <AutoComplete />
      </div>
      <div className="content">Hello</div> */}
      <Sidenav />
      <div className="container-fluid p-0">
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
    </>
  );
}
