import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Blog from '../pages/Blog';
import Form from './ProjectForm';

const Main =()=>(
  <Switch>
    <Route exact path="/" component={LandingPage}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/resume" component={Resume}/>
    <Route path="/add-project" component={Form}/>
    <Route path="/blog" component={Blog}/>
  </Switch>
)

export default Main;
