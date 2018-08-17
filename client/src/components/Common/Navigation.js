import React, { Component } from 'react'
import {Switch, Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage'

export default class Routes extends Component {
  render() {
    return (
      <div>
         <Switch>
           <Route exact path='/' component={LandingPage}></Route>
           <Route path='*' exact={true} component={LandingPage} />
         </Switch>
      </div>
    )
  }
}
