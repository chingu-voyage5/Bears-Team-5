import React from 'react';

import * as SC from './StyledComponents';

export default class Landing extends React.Component {
  render() {
    return (
      <SC.LandingWrapper>
        <SC.Title>title</SC.Title>
        <SC.Subtitle>pwa productivity thingy</SC.Subtitle>

        <SC.ButtonsContainer>
          <SC.ButtonLink to="/login" text="SIGN IN" />
          <SC.ButtonLink to="/signup" text="SIGN UP" />
        </SC.ButtonsContainer>

      </SC.LandingWrapper>
    );
  }
}
