import styled from 'styled-components';

import backgroundImg from '../../assets/sea-dark.jpeg';

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center bottom; 
  background-size: cover;
`;

export const ContentContainer = styled.div`
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
    margin-left: 20vw;
    margin-right: 20vw;
  }
  @media only screen and (max-width : 320px) {
    margin-left: 10vw;
    margin-right: 10vw;
  }
`;

export const Title = styled.div`
  font-size: 1.5rem;
  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.text.primary};
`;

export const FormContainer = styled.div`
  margin-top: 2rem;
`;

export const Error = styled.div`
  display: block;
  margin-top: 2px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.error};
  text-align: center;
`;

export const SpinnerContainer = styled.div`
  color: ${({ theme }) => theme.error};
  text-align: center;
`;
