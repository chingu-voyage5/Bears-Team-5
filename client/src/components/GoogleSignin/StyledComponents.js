import styled from 'styled-components';

import { adjustHexOpacity } from '../../utils';

const googleBlue = '#4285F4';

export const GoogleLoginButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  background-color: ${({ disabled }) => (disabled ? adjustHexOpacity(googleBlue, 0.7) : googleBlue)};
  color: white;
  font-size: 16px;
  padding: 2px;
  padding-right: 20%;
  margin-bottom: 2rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

export const GoogleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  background-color: white;
`;

export const GoogleImg = styled.img`
  height: 20px;
  width: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
`;
