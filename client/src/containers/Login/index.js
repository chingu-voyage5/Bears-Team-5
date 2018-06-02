import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import * as SC from './StyledComponents';

import * as actions from '../../actions/auth';


function Login(props) {
  const {
    login,
    errors,
    isFetching,
    isAuthorized,
  } = props;
  if (isAuthorized) return <Redirect to="/" />;
  return (
    <SC.LoginContainer>
      <SC.LoginFormContainer>
        <SC.Title>login</SC.Title>
        <LoginForm login={login} isFetching={isFetching} />
        { errors.request && <SC.Error>{ errors.request }</SC.Error>}
      </SC.LoginFormContainer>
    </SC.LoginContainer>
  );
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
