import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import * as SC from './StyledComponents';

import * as actions from '../../actions/auth';


class Login extends React.Component {
  constructor() {
    super();
    this.checkFetching = this.checkFetching.bind(this);
  }

  checkFetching() {
    return this.props.isFetching;
  }

  render() {
    const {
      login,
      errors,
      isAuthorized,
    } = this.props;
    if (isAuthorized) return <Redirect to="/" />;
    return (
      <SC.LoginContainer>
        <SC.LoginFormContainer>
          <SC.Title>login</SC.Title>
          <LoginForm login={login} checkFetching={this.checkFetching} />
          { errors.request && <SC.Error>{ errors.request }</SC.Error>}
        </SC.LoginFormContainer>
      </SC.LoginContainer>
    );
  }
}


Login.propTypes = {
  login: PropTypes.func,
  isFetching: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  errors: PropTypes.shape({}),
};

Login.defaultProps = {
  login: () => {},
  isFetching: false,
  isAuthorized: false,
  errors: {},
};


const mapStateToProps = ({ login, user }) => ({
  isAuthorized: user.isAuthorized,
  isFetching: login.isFetching,
  errors: login.errors,
});


const mapDispatchToProps = dispatch => ({
  login: loginData => dispatch(actions.login.request(loginData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
