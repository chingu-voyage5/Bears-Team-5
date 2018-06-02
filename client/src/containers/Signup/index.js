import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SignupForm from '../../components/SignupForm';
import * as SC from './StyledComponents';

import * as actions from '../../actions/auth';


function Signup(props) {
  const { signup, errors, isFetching } = props;
  return (
    <SC.SignupContainer>
      <SC.SignupFormContainer>
        <SC.Title>signup</SC.Title>
        <SignupForm signup={signup} isFetching={isFetching} />
        { errors.request && <SC.Error>{ errors.request }</SC.Error>}
      </SC.SignupFormContainer>
    </SC.SignupContainer>
  );
}


Signup.propTypes = {
  signup: PropTypes.func,
  isFetching: PropTypes.bool,
  errors: PropTypes.shape({}),
};

Signup.defaultProps = {
  signup: () => {},
  isFetching: false,
  errors: {},
};


const mapStateToProps = ({ signup }) => ({
  isFetching: signup.isFetching,
  errors: signup.errors,
});


const mapDispatchToProps = dispatch => ({
  signup: signupData => dispatch(actions.signup.request(signupData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
