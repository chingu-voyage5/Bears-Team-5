import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LoginForm from '../../components/LoginForm';


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.5rem;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20vh;
  margin-left: 40vw;
  margin-right: 40vw;
  
  @media only screen and (max-width : 1024px) {
    margin-left: 35vw;
    margin-right: 35vw;
  }
  @media only screen and (max-width : 768px) {
    margin-left: 30vw;
    margin-right: 30vw;
  }
  @media only screen and (max-width : 320px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;

export default function Login(props) {
  const { login } = props;
  return (
    <LoginContainer>
      <LoginFormContainer>
        <Title>login</Title>
        <LoginForm login={login} />
      </LoginFormContainer>
    </LoginContainer>
  );
}


Login.propTypes = {
  login: PropTypes.func,
};

Login.defaultProps = {
  login: data => console.log('LOGIN!!', data),
};

// export default connect()(Login);
