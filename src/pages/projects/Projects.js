import React, { Component } from 'react';
import {
  Tabs,
   Tab,
   Grid,
   Cell
 } from 'react-mdl';
import Cardl from '../../components/Cardl';
import data from './data.json'




const reactUrl = "/images/React.png";
const vanillaUrl = "/images/js.png";
const python = "/images/Python.jpg";
const r = "/images/R.png";

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: 0,
    }
  }



  toggleCategories(){
    switch (this.state.activeTab) {
      case 0:
        const javascript = data.filter(project => project.type === 'react' || project.type === 'vanilla')
        return javascript.map( javascript => (
            <Cardl
              key={javascript.id}
              name={javascript.name}
              description={javascript.description}
              url={javascript.type === "react" ? reactUrl : vanillaUrl}
              gitHub={javascript.github}
              live={javascript.live}
              color={javascript.color}
            />
          )
        )

      case 1:
        const py = data.filter(project => project.type === 'python')
        return py.map( py => (
            <Cardl
              key={py.id}
              name={py.name}
              description={py.description}
              url={py.type === "python" ? python : null}
              gitHub={py.github}
              live={py.live}
              color={py.color}
            />
          )
        )
      case 2:
        const rpro = data.filter(project => project.type === 'r')
        return rpro.map( rpro => (
            <Cardl
              key={rpro.id}
              name={rpro.name}
              description={rpro.description}
              url={rpro.type === "r" ? r : null}
              gitHub={rpro.github}
              live={rpro.live}
              color={rpro.color}
            />
          )
        )
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
              <div style={{display:'flex', flexWrap: 'wrap'}} className="conten">{this.toggleCategories()}</div>
          </Cell>
        </Grid>

      </div>
    )
  }
}

export default Projects;
