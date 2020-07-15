import React from 'react';

import './App.css';
import {Layout, Drawer, Navigation, Header, Content} from 'react-mdl';
import Main  from './components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
    <Layout>
        <Header  className="header-color bg-white" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>} scroll >
            <Navigation>
               <Link to="/resume" style={{color:'black'}} >Resume</Link>
                
                <Link to="/project" style={{color:'black'}}>Projects</Link>
                <Link to ="/contact" style={{color:'black'}}>Contact</Link>
                



            </Navigation>
        </Header>
        <Drawer  classname="drawer-color" title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
                      <Link to="/resume">Resume</Link>
                
                <Link to="/project">Projects</Link>
                <Link to ="/contact">Contact</Link>
                

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />

            <Main/>
        </Content>
    </Layout>
</div>
    </div>
  );
}

export default App;
