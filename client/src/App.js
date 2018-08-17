import React, { Component } from 'react';

// #materialize components
import {Navbar, NavItem, Container, Icon} from 'react-materialize'


import './App.css';

// #custom components
import Navigation from './components/Common/Navigation'

class App extends Component {

  state = {
    lunch : {}
  }

  componentDidMount() {
   
  }
  

  

  render() {
    return (
      <div className="App">
        <Container>
          <Navbar brand='logo' right>
            <NavItem href='get-started.html'><Icon>account_circle</Icon></NavItem>
          </Navbar>
          <Navigation />
        </Container>
        
      </div>
    );
  }
}

export default App;
