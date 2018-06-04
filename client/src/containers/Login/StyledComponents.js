import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
`;

export const LoginFormContainer = styled.div`
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

export const Error = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.error};
  text-align: center;
`;

export const SpinnerContainer = styled.div`
  color: ${({ theme }) => theme.error};
  text-align: center;
`;
