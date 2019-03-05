import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render(){
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Christian Salazar</h2>
            <img
              src="/images/avatar2.png"
              alt="avatar"
              style={{height:'250px'}}
            />
            <blockquote style={{fontSize: '37px', fontFamily:'"Gothic A1", sans-serif', marginBottom: '4px'}}>
              <i>El mundo es de Dios y se lo alquila a los Valientes.</i>
            </blockquote>
            <span role="img" aria-label="">🦖🦖🦖🦖</span><span role="img" aria-label="">🔥🔥🔥</span>
            <h5>Refrán Beduino</h5>
          </Cell>
          <Cell col={6}>
            <h2>Contacto</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent className="list-items">
                    <i className="fab fa-github"/>
                    <a href="https://github.com/Grifo89" target="_blank" rel="noopener noreferrer" style={{color:"rgba(0,0,0, 0.87)"}}>
                      Grifo89
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="list-items">
                    <i className="fa fa-envelope"/>
                    calaca89@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent className="list-items">
                    <i className="fab fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/christian-salazar-mi%C3%B1o-573333134/" target="_blank" rel="noopener noreferrer" style={{color:"rgba(0,0,0, 0.87)"}}>Christian Salazar Miño</a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
