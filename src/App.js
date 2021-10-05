import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.css";
import Portfolio from "./Portfolio/index";
import Blog from "./Blog/index";
import NotFound from "./Notfound";
import themes from "./Theme/ThemeConfig";
// import AutoComplete from "./AutoComplete/AutoComplete";
import ThemeContext from "./Theme/ThemeContext";
import ColorPallete from './ColorPallete/index'
export default function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <Router>
      <ThemeContext.Provider
        value={{
          config: themes,
          current: theme,
          updater: setTheme,
        }}
      >
        <div className="container-fluid p-0 main-content">
          <Switch>
          <Route path="/" exact>
              <Portfolio />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/color-pallete">
            <ColorPallete/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}
