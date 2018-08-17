import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import Registration from '../Registration/Registration';
import LogIn from '../Registration/LogIn';
import Profile from '../ProfilePage/Profile'

export default class Routes extends Component {
  render() {
    return (
      <div>
         <Switch>
           <Route exact path='/' component={LandingPage}></Route>
           <Route path='/signup' exact={true} component={Registration} />
           <Route path='/profile' exact={true} component={Profile} />
           <Route path='/login' exact={true} component={LogIn} />
           <Route path='*' exact={true} component={LandingPage} />
         </Switch>
      </div>
    )
  }
}
