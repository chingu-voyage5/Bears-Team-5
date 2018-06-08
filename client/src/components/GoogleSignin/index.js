import React from 'react';
import * as SC from './StyledComponents';
import GoogleIcon from '../../assets/googleicon.png';

class GoogleSignin extends React.Component {
  // handleGoogleLogin = () => {
  //   window.location.href = '/api/auth/google';
  // }
  // onSuccess = (googleUser) => {
  //   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
  // }

  // onFailure = (error) => {
  //   console.log(error);
  // }
  render() {
    console.log('hello from google sign-in');
    return (
      <div>
        <SC.GoogleLoginButton>
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
