import React, { Component } from 'react';

class ProjectForm extends Component {
  state = {
    nombre: '',
    giturl: '',
    projecturl: '',
    type: '',
    description: ''
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state);
    this.setState({
      nombre: '',
      giturl: '',
      projecturl: '',
      type: '',
      description: ''
    })
  }

  render() {
    return (
      <div className="mdl-grid form">
        <div className="mdl-layout-spacer"></div>
        <div className="mdl-cell--middle mdl-cell--4-col">
          <form onSubmit={this.handleSubmit}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="nombre" onChange={this.handleChange} value={this.state.nombre}/>
              <label className="mdl-textfield__label" htmlFor="nombre">Nombre </label>
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="giturl" onChange={this.handleChange} value={this.state.giturl}/>
              <label className="mdl-textfield__label" htmlFor="giturl">Github Url </label>
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="projecturl" onChange={this.handleChange} value={this.state.projecturl}/>
              <label className="mdl-textfield__label" htmlFor="projecturl">Project Url </label>
            </div>
            <br/>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="type" onChange={this.handleChange} value={this.state.type}/>
              <label className="mdl-textfield__label" htmlFor="type">Project Type </label>
            </div>
            <br/>

            <div className="mdl-textfield mdl-js-textfield">
              <textarea className="mdl-textfield__input" type="text" rows= "3" id="description" onChange={this.handleChange} value={this.state.description}></textarea>
              <label className="mdl-textfield__label" htmlFor="description">Description.. </label>
            </div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
              Add
            </button>
          </form>
        </div>
        <div className="mdl-layout-spacer"></div>
      </div>

    );
  }

}

export default ProjectForm;
