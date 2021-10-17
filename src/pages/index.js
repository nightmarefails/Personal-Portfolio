import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import Contact from './Contact';

const Pages = ({ user }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/Personal-Portfolio/">
          <Me user={user} />
        </Route>
        <Route path="/Personal-Portfolio/projects">
          <Projects user={user} />
        </Route>
        <Route path="/Personal-Portfolio/work">
          <Work user={user} />
        </Route>
        <Route path="/Personal-Portfolio/education/">
          <Education user={user} />
        </Route>
        <Route path="/Personal-Portfolio/contact/">
          <Contact user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;