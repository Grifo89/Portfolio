import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './Main';



/**
 * NavBar
 */
class NavBar extends Component { // eslint-disable-line react/prefer-stateless-function

  handleClick = (e) => {
    var layout = document.querySelector('.mdl-layout');
    layout.MaterialLayout.toggleDrawer();
  }

  render() {
    return (
      <div className="navbar">
        <Layout >
            <Header className="header-color" title={<Link style={{textDecoration:"none", color:"white"}} to="/">Christian Salazar Miño</Link>} scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projectos</Link>
                    <Link to="/contact">Contacto</Link>
                    <Link to="/blog">Blog</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:"none", color:"black"}} to="/" onClick={this.handleClick}>Christian Salazar</Link>} >
                <Navigation onClick={this.handleClick}>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projectos</Link>
                  <Link to="/contact">Contacto</Link>
                  <Link to="/blog">Blog</Link>
                </Navigation>
            </Drawer>
            <Content>
                <Main/>
            </Content>
        </Layout>
      </div>
    );
  }
}

export default NavBar;
