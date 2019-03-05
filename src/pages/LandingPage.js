import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'


class LandingPage extends Component {
  render(){
    return(
      <div style={{width: "100%", margin: "auto"}}>
        <div id="arrowAnim">
          <div className="arrowSliding">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay1">
            <div className="arrow"></div>
          </div>
          <div className="arrowSliding delay2">
            <div className="arrow"></div>
          </div>
        </div>
        <Grid className="landing-grid">
          <Cell col={12}>
            {/* <img
              src={require("../images/yo.jpg")}
              alt="avatar"
              className="avatar-img"
              style={{borderRadius:"50%", height:'auto', maxWidth: '15%'}}
            /> */}
            <div className="banner-text">
              <h1>Desarrollador y Científico de Datos</h1>

              <hr/>
              <p>JavaScript | Python | R | React | NodeJS | Express | D3 | MongoDB | SQL | Redis | Django</p>
              <div className="social-links">
                {/*LinkedIn*/}
                <a href="http://linkedin.com/in/christian-salazar-miño" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin " style={{color:'white'}} ></i>
                </a>
                {/*GitHub*/}
                <a href="https://github.com/Grifo89" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github-square " style={{color:'white'}} ></i>
                </a>
                {/*FreeCodeCamp*/}
                <a href="https://www.freecodecamp.org/christian-salazar-mi%C3%B1o" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-free-code-camp " style={{color:'white'}} ></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
