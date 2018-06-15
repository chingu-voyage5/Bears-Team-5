import styled from 'styled-components';

import { adjustHexOpacity } from '../../utils';

const googleBlue = '#4285F4';

export const GoogleLoginButton = styled.div`
  display: flex;
  flex-direction: row;

  height: 2.5rem;
  background-color: ${({ disabled }) => (disabled ? adjustHexOpacity(googleBlue, 0.7) : googleBlue)};
  
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const GoogleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  background-color: ${props => props.theme.text.primary};
`;

export const GoogleImg = styled.img`
  height: 1.25rem;
  width: 1.25rem;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;

export const Message = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${props => props.theme.text.primary};
`;
