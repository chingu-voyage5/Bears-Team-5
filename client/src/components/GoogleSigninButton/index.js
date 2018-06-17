import React from 'react';
import PropTypes from 'prop-types';

import * as SC from './StyledComponents';
import GoogleIcon from '../../assets/googleicon.png';


const GoogleSigninButton = props => (
  <SC.GoogleLoginButton disabled={props.disabled} onClick={props.onClick}>
    <SC.GoogleIcon>
      <SC.GoogleImg src={GoogleIcon} disabled={props.disabled}/>
    </SC.GoogleIcon>
    <SC.Message>
      Sign in with Google
    </SC.Message>
  </SC.GoogleLoginButton>
);


GoogleSigninButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

GoogleSigninButton.defaultProps = {
  onClick: () => {},
  disabled: false,
};

export default GoogleSigninButton;
