import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router'

import './App.css';

import NavMenu from './components/NavMenu';
import MainContainer from './components/MainContainer';



class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <NavMenu />
        
        {/* // TODO: Add react router as HW */}
      </div>
      <div>
        <MainContainer />
      </div>
      </div>
    )
  }
};

export default App;
