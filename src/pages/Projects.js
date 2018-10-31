import React, { Component } from 'react';
import {
  Tabs,
   Tab,
   Grid,
   Cell
 } from 'react-mdl';
import Cardl from '../components/Cardl';



const reactUrl = require("../images/React.png");
// const vanillaUrl = require("../images/js.png");
const python = require("../images/Python.jpg");
const r = require("../images/R.png");

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0
    }
  }

  toggleCategories(){
    switch (this.state.activeTab) {
      case 0:
        return (
          <div className="projects-grid">
            <Cardl
              name="React Project #1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia..."
              url={reactUrl}
              gitHub="https://github.com/"
              live="https://google.com"
              color="white"
            />
            <Cardl
              name="React Project #2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia..."
              url={reactUrl}
              gitHub="https://github.com/"
              live="https://google.com"
              color="white"
            />
            <Cardl
              name="React Project #3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Mauris sagittis pellentesque lacus eleifend lacinia..."
              url={reactUrl}
              gitHub="https://github.com/"
              live="https://google.com"
              color="white"
            />
          </div>
              )
      case 1:
        return <div className="projects-grid">
          <Cardl
            name="Python Project"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            url={python}
            gitHub="https://github.com/"
            live="https://google.com"
          />
        </div>;
      case 2:
        return <div className="projects-grid">
          <Cardl
            name="R Project"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia..."
            url={r}
            gitHub="https://github.com/"
            live="https://google.com"
            color="black"
          />
        </div>;
      default:
        return <div><h1>Pick one</h1></div>

    }
  }

  render(){
    return(
      <div className="category-tabs">
      <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} style={{color:'white'}} ripple>
        <Tab>JavaScript</Tab>
        <Tab>Python</Tab>
        <Tab>R</Tab>
      </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="conten">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;
