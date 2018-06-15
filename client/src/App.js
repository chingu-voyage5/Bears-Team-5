import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// Gotta remove this css file after implementing landing page
import './App.css';

import Logout from './containers/Logout';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Landing from './containers/Landing';
import Goals from './containers/Goals';

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/logout" component={Logout} />
        <Route path="/goals" component={Goals} />
        <Route path="/" exact component={Landing} />
        <Route
          path="/*"
          render={() => <Redirect to="/" />}
        />
      </Switch>
    </React.Fragment>
  );
}
