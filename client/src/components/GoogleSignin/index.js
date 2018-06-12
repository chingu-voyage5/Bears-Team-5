import React from 'react';
import * as SC from './StyledComponents';
import GoogleIcon from '../../assets/googleicon.png';

class GoogleSignin extends React.Component {
  handleGoogleAuth() {
    // TODO: Add passport routing functionality
    // Temporarily disabled
  }

  render() {
    return (
      <div>
        <SC.GoogleLoginButton disabled onClick={() => this.handleGoogleAuth()}>
          <SC.GoogleIcon>
            <SC.GoogleImg src={GoogleIcon} />
          </SC.GoogleIcon>
        Sign in with Google
        </SC.GoogleLoginButton>
      </div>
    );
  }
}
export default GoogleSignin;
