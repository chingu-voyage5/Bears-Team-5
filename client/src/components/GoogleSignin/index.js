import React from 'react';
// import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
// import * as SC from './StyledComponents';
// import GoogleIcon from '../../assets/googleicon.png';


const responseGoogle = (response) => {
  console.log(response);
};

// ReactDOM.render(
//   <GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//   />,
//   document.getElementById('googleButton')
// );
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
  // render() {
  //   console.log('hello from google sign-in');
  //   return (
  //     <div>
  //       <SC.GoogleLoginButton>
  //         <SC.GoogleIcon>
  //           <SC.GoogleImg src={GoogleIcon} />
  //         </SC.GoogleIcon>
  //       Sign in with Google
  //       </SC.GoogleLoginButton>
  //     </div>
  //   );
  // }
  render() {
    return (
      <GoogleLogin
          clientId="96534254128-fa200bvn95337cijfgtshc1d6ptl6p0a.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
      />
    );
  }
}
export default GoogleSignin;
