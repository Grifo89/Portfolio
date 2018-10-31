import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

/**
 * ComponentName
 */
export class Skills extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
        <Cell col={12}>
          <div style={{display:'flex'}}>
            {this.props.skill}
            <ProgressBar progress={this.props.progress} buffer={this.props.buffer} style={{margin:"auto", width: "75%"}}/>
          </div>

        </Cell>
      </Grid>
    );
  }
}


export default Skills;
