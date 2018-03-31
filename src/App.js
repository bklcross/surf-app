import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Apps from './App.js'
import NavMenu from './components/NavMenu'
import Home from './components/Home'
import GetStarted from './components/GetStarted'
import AboutUs from './components/AboutUs'

const renderHome = () => <Home/>
const renderGetStarted = () => <GetStarted/>
const renderAboutUs = () => <AboutUs/>

const App = () => (
  <Router>
    <NavMenu>
      <Switch>
        <Route exact path="/home" render={renderHome} />
        <Route exact path="/get-started" render={renderGetStarted} />
        <Route exact path="/about-us" render={renderAboutUs} />

        {/* <Redirect path="/" /> */}
      </Switch>
    </NavMenu>  
  </Router>
)

export default App
