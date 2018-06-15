import React from 'react';

import * as SC from './StyledComponents';


const Landing = () => (
  <SC.LandingWrapper>
    <SC.Title>title</SC.Title>
    <SC.Subtitle>pwa productivity thingy</SC.Subtitle>

    <SC.ButtonsContainer>
      <SC.ButtonLink to="/signin" text="SIGN IN" />
      <SC.ButtonLink to="/signup" text="SIGN UP" />
    </SC.ButtonsContainer>

  </SC.LandingWrapper>
);


export default Landing;
