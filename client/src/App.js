import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import axios from 'axios'; // TEMP
import * as actions from './actions/user';
// Gotta remove this css file after implementing landing page
import './App.css';

import Logout from './containers/Logout';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import Landing from './containers/Landing';
import Goals from './containers/Goals';

class App extends React.Component {
  async componentDidMount() {
    // fetch user data on every app reload
    // TODO include user's goals
    this.props.getUser();
  }

  render() {
    console.log({
      user: this.props.user,
    });
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
}

App.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.shape({}),
  isFetching: PropTypes.bool,
  errors: PropTypes.shape({}),
};

App.defaultProps = {
  getUser: () => {},
  user: null,
  isFetching: false,
  errors: {},
};

const mapStateToProps = ({ user }) => ({
  user: user.profile,
  isFetching: user.isFetching,
  errors: user.errors,
});


const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actions.getUser.request()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
