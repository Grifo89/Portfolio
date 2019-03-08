import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import ReactGA from 'react-ga';


import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 900,
      }
    },
    size:{
      value: 3
    }
  },
  "interactivity":{
  "detect_on":"window",
    "events":{
      "onhover":{
        "enable":true,
        "mode":"repulse"},
      "onclick":{
        "enable":false,
        "mode":"bubble"}
    }
  }
}

function initializeReactGA() {
  ReactGA.initialize('UA-135915217-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

class App extends Component {

  render() {
    initializeReactGA();
    return (
      <div className="demo-big-content">
        <Particles className='Particles'
          params={particlesOptions}
        />
        <span className="circle"></span>
        <NavBar/>
    </div>
    );
  }
}

export default App;
