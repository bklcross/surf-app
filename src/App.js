import './App.css';

import React, { Component } from 'react';

import NavMenu from './NavMenu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavMenu />
        {/* // TODO: Add react router as HW */}
      </div>
    );
  }
}

export default App;
