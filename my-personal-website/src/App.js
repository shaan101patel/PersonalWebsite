import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import ResearchProjects from './pages/ResearchProjects';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/research-projects" component={ResearchProjects} />
        <Route path="/activities" component={Activities} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;


