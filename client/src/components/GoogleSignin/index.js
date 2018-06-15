import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './StyledComponents';
import GoogleIcon from '../../assets/googleicon.png';


const GoogleSignin = props => (
  <SC.GoogleLoginButton disabled={props.disabled} onClick={props.onClick}>
    <SC.GoogleIcon>
      <SC.GoogleImg src={GoogleIcon} disabled={props.disabled}/>
    </SC.GoogleIcon>
    <SC.Message>
      Sign in with Google
    </SC.Message>
  </SC.GoogleLoginButton>
);


GoogleSignin.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

GoogleSignin.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default GoogleSignin;
