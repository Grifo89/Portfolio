import React from 'react';
import {
   Card,
   CardTitle,
   CardText,
   CardActions,
   Button
 } from 'react-mdl';

const Cardl = ({description, url, name, gitHub, live, color})=>{
  return (
    <Card shadow={5} style={{Width: '450px', margin: 'auto'}}>
      <CardTitle style={{color:`${color}`, height: '176px', background: `url(${url}) center / cover`}}>{name}</CardTitle>
      <CardText>
        <p>{description}</p>
      </CardText>
      <CardActions border>
        <Button colored href={gitHub} target='_blank'>GitHub</Button>
        <Button colored href={live} target='_blank'>Live</Button>
      </CardActions>
      {/* <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
      </CardMenu> */}
    </Card>
  )
}

export default Cardl;
