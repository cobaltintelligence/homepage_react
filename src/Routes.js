// Routes.js
// Yuan Wang

// ============== EXTERNAL DEPENDENCIES ==============

import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

// ============== CUSTOM MODULES ==============

import HomePage from './pages/HomePage.js'


class Routes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      error: null
    }
  }


  render() {


    return (
      <Router {...this.props}>
        <Switch>
          <Route path="/404" component={HomePage} />
          <Redirect exact from="/" to='/home' />
          <Route path="/home/"            component={HomePage} />

          <Redirect from="*" to='/404' />
        </Switch>
      </Router>
    )
  }
}


export default Routes;