import React , {Suspense }from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import Sidenav from "./Sidenav/Sidenav";
const  About = React.lazy(() => import('./About/About.js'));
//const  Sidenav = React.lazy(() => import("./Sidenav/Sidenav"));
const  Experience = React.lazy(() => import("./Experience/Experience"));
const  Education = React.lazy(() => import("./Education/Education"));
const  Skills = React.lazy(() => import("./Skills/Skills"));
const  Interests = React.lazy(() => import("./Interests/Interests"));
const  Award = React.lazy(() => import("./Award/Award"));
const  NotFound = React.lazy(() => import("./404"));



// import Experience from "./Experience/Experience";
// import Education from "./Education/Education";
// import Skills from "./Skills/Skills";
// import Interests from "./Interests/Interests";
// import Award from "./Award/Award";
// import NotFound from "./404";
const Portfolio = () => {
  let { path, url } = useRouteMatch();
  let location = useLocation();

  console.log("path, url>>>>", path, url);

  return (
    <div className="portfolioContainer">
      <Sidenav />
      
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>

        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Route path={`${path}/about`} exact>
              <About />
            </Route>

            <Route path={`${path}/experiance`} exact>
              <Experience />
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
    </div>
  );
};
export default Portfolio;
