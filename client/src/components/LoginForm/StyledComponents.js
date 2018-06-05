import React from 'react';
import styled from 'styled-components';

export const Form = styled(({ children, ...rest }) => <form {...rest}>{children}</form>)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Error = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.error};
  justify-content: flex-end;
`;

export const Input = styled((props => <input {...props}/>))`
  width: 100%;
`;

export const Button = styled(({ children, ...rest }) => <button {...rest}>{children}</button>)`
`;
