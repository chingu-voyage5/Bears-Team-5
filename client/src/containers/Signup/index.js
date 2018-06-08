import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import SignupForm from '../../components/SignupForm';
import Spinner from '../../components/Spinner';
import * as SC from './StyledComponents';

import * as actions from '../../actions/auth';


class Signup extends React.Component {
  constructor() {
    super();
    this.checkFetching = this.checkFetching.bind(this);
  }

  checkFetching() {
    return this.props.isFetching;
  }

  render() {
    const {
      signup,
      errors,
      isAuthorized,
      isFetching,
    } = this.props;
    if (isAuthorized) return <Redirect to="/" />;
    return (
      <SC.SignupContainer>
        <SC.SignupFormContainer>
          <SC.Title>signup</SC.Title>
          <SignupForm signup={signup} checkFetching={this.checkFetching} />
          { errors.request && <SC.Error>{ errors.request }</SC.Error>}
          { isFetching && <SC.SpinnerContainer><Spinner /></SC.SpinnerContainer>}
        </SC.SignupFormContainer>
      </SC.SignupContainer>
    );
  }
}


Signup.propTypes = {
  signup: PropTypes.func,
  isFetching: PropTypes.bool,
  isAuthorized: PropTypes.bool,
  errors: PropTypes.shape({}),
};

Signup.defaultProps = {
  signup: () => {},
  isFetching: false,
  isAuthorized: false,
  errors: {},
};


const mapStateToProps = ({ signup, user }) => ({
  isAuthorized: user.isAuthorized,
  isFetching: signup.isFetching,
  errors: signup.errors,
});


const mapDispatchToProps = dispatch => ({
  signup: signupData => dispatch(actions.signup.request(signupData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
