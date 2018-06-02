import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Login from './containers/Login';
import Landing from './containers/Landing';

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route path="/logout" component={Logout} /> */}
        <Route path="/" exact component={Landing} />
        <Route
          path="/*"
          render={() => <Redirect to="/" />}
        />
      </Switch>
    </React.Fragment>
  );
}
