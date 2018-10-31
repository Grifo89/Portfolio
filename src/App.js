import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';


import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 120,
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

class App extends Component {

  render() {
    return (
      <div className="demo-big-content">
        <Particles className='Particles'
          params={particlesOptions}
        />
        <NavBar/>
    </div>

    );
  }
}

export default App;
