import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import backgroundImg from '../../assets/sea-dark.jpeg';

const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* background-color: ${props => props.theme.background.primary}; */
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center bottom; 
  background-size: cover;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2.75em;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  margin-top: 25vh;
  color: ${props => props.theme.text.primary};
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.25em;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.text.secondary};
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;

  & > div:last-child  {
    background-color: ${props => props.theme.primary};
  }
  & > div:first-child  {
    text-decoration: underline;
  }


  /* Mobile */
  @media (max-width: 768px) {
    margin-top: 0;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.secondary};
    & > div:first-child  {
      text-decoration: none;
    }
  }
`;

/* eslint-disable react/prop-types */
const __ButtonLink = ({
  className,
  to,
  text,
  ...rest
}) => (
  <div className={className} {...rest}>
    <Link to={to} >{text}</Link>
  </div>
);
/* eslint-enable react/prop-types */

const ButtonLink = styled(__ButtonLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  &:hover {
    filter: brightness(90%);
  }
  & > a {
    text-decoration: none;
    font-weight: bold;
    padding: 0.75rem 1rem;
    color: ${props => props.theme.text.primary};
  }

   /* Mobile */
  @media (max-width: 768px) {
    width: 50%;
    margin: 0;
  }
`;

export default class Landing extends React.Component {
  render() {
    return (
      <LandingWrapper>
        <Title>title</Title>
        <Subtitle>pwa productivity thingy</Subtitle>

        <ButtonsContainer>
          <ButtonLink to="/login" text="SIGN IN" />
          <ButtonLink to="/signup" text="SIGN UP" />
        </ButtonsContainer>

      </LandingWrapper>
    );
  }
}
