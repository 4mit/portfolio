import React, { useEffect, useState, useContext } from "react";
import ToggleTheme from "react-toggle-theme";
import ThemeContext from "../../Theme/ThemeContext";
import { Link } from "react-router-dom";

const Sidenav = () => {
  const update = (e) => {
    console.log(e);

    if (e == "dark") {
      updater("light");
      setCurrentTheme("light");
    } else {
      updater("dark");
      setCurrentTheme("dark");
    }
  };

  const { config, current, updater } = useContext(ThemeContext);
  let theme = config[current];
  let [currentTheme, setCurrentTheme] = useState(theme);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Amit Kumar Soni</span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="../assets/img/1568397890204.webp"
            alt="img"
            loading="lazy"
            height="167"
            width="167"
          />
        </span>
      </a>
      <div>
        {/* <ToggleTheme selectedTheme={currentTheme} onChange={e => updater(e == 'dark' ? 'light' : 'dark')} /> */}
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/portfolio/about" className="nav-link js-scroll-trigger">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio/experiance"
              className="nav-link js-scroll-trigger"
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio/education"
              className="nav-link js-scroll-trigger"
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio/skills" className="nav-link js-scroll-trigger">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio/interest"
              className="nav-link js-scroll-trigger"
            >
              Interest
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio/award" className="nav-link js-scroll-trigger">
              Award
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link js-scroll-trigger">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/color-pallete" className="nav-link js-scroll-trigger">
              Color palette
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidenav;
