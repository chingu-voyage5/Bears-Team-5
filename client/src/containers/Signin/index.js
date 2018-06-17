import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import GoogleSigninButton from '../../components/GoogleSigninButton';
import SigninForm from '../../components/SigninForm';
import Spinner from '../../components/Spinner';
import * as SC from './StyledComponents';
import * as actions from '../../actions/auth';

class Signin extends React.Component {
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
      isFetching,
    } = this.props;
    if (isAuthorized) return <Redirect to="/" />;
    return (
      <SC.SigninContainer>
        <SC.ContentContainer>
          <SC.Title>sign in</SC.Title>
          <GoogleSigninButton />
          <SC.FormContainer>
            <SigninForm login={login} checkFetching={this.checkFetching} />
          </SC.FormContainer>
          { errors.request && <SC.Error>{ errors.request }</SC.Error>}
          { isFetching && <SC.SpinnerContainer><Spinner /></SC.SpinnerContainer>}
        </SC.ContentContainer>
      </SC.SigninContainer>
    );
  }
}


Signin.propTypes = {
  login: PropTypes.func,
  isFetching: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  errors: PropTypes.shape({}),
};

Signin.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
