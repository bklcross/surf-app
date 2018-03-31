import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import AboutUs from './components/AboutUs'
import GetStarted from './components/GetStarted'
import Home from './components/Home'
import NavMenu from './components/NavMenu'
import React from 'react'

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
        </Switch>
    </NavMenu>
  </Router>
)

export default App
