import React, { Suspense } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import Sidenav from "./Sidenav/Sidenav";
import TopNav from "./Topnav";
const About = React.lazy(() => import("./About/About.js"));
//const  Sidenav = React.lazy(() => import("./Sidenav/Sidenav"));
const Experience = React.lazy(() => import("./Experience/Experience"));
const Education = React.lazy(() => import("./Education/Education"));
const Skills = React.lazy(() => import("./Skills/Skills"));
const Interests = React.lazy(() => import("./Interests/Interests"));
const Award = React.lazy(() => import("./Award/Award"));
const NotFound = React.lazy(() => import("./404"));

const Portfolio = () => {
  let { path, url } = useRouteMatch();
  let location = useLocation();
  return (
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact>
                <About />
              </Route>
              <Route path={`${path}/about`} exact>
                <About />
              </Route>

              <Route path={`${path}/education`}>
                <Education />
              </Route>

              <Route path={`${path}/skills`}>
                <Skills />
              </Route>

              <Route path={`${path}/interest`}>
                <Interests />
              </Route>

              <Route path={`${path}/award`}>
                <Award />
              </Route>

              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Suspense>
        </CSSTransition>
      </TransitionGroup>
  );
};
export default Portfolio;
