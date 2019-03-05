import React, { Component} from 'react';
import { Grid, Cell } from 'react-mdl';

/**
 * ComponentName
 */
export class Education extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
          <h6 style={{marginTop:'0px'}}>{this.props.position}</h6>
        </Cell>
      </Grid>

    );
  }
}


export default Education;
