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

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      input: {
        email: '',
        password: '',
      },
    };
  }

  handleLogin() {
    const { input } = this.state;
    const { login } = this.props;
    login(input);
  }

  render() {
    const { input } = this.state;
    return (
      <LoginContainer>
        <LoginFormContainer>
          <Title>login</Title>
          <LoginForm user={input}/>
        </LoginFormContainer>
      </LoginContainer>
    );
  }
}


Login.propTypes = {
  login: PropTypes.func,
};

Login.defaultProps = {
  login: () => {},
};

// export default connect()(Login);
