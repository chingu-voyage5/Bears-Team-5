import React from 'react';
import styled, { keyframes, css } from 'styled-components';

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
  display: block;
  margin-top: 2px;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.error};
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;

  & > div  {
    background-color: ${props => props.theme.primary};
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

const __Button = styled(({ children, ...rest }) => <button type="submit" {...rest}>{children}</button>)`
`;

export const Button = styled(__Button)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex: 1;

  text-decoration: none;
  font-weight: bold;
  padding: 0.75rem 1rem;
  color: ${props => props.theme.text.primary};

  background: ${props => props.theme.primary};
  cursor: pointer;
  border:none;

  &:hover {
    filter: brightness(90%);
  }

   /* Mobile */
  @media (max-width: 768px) {
    flex: 1;
    margin: 0;
    & > button {
      width: 100%;
      text-align: center;
    }
  }
`;

/* eslint-disable react/prop-types */
const __Input = ({
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
  ...rest
}) => (
  <div {...rest}>
    <div className="group">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
        autoComplete="off" // autocomplete box positioning needs fixing!
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label className="label">{placeholder}</label>
    </div>
  </div>
);
/* eslint-enable react/prop-types */


const inputHighlighter = props => keyframes`
  from {
    /* TODO: Fix to make it dependant onpropstheme*/
    /* background: ${() => props.theme.primary}; */
    background: #21BC6E;
  }
  to {
    width: 0;
    background: transparent;
  }
`;

export const Input = styled(__Input)`
  display: flex;
  flex-direction: column;

  & .group {
    position:relative; 
    margin-top:1.2rem; 
  }
  /* INPUT */
  & input {
    font-size:1rem;
    padding:0.6rem 0 0.6rem 0;
    display:block;
    width:100%;
    border:none;
    border-bottom:1px solid ${props => props.theme.primary};
    background-color: rgba(0,0,0,0);
    caret-color: ${props => props.theme.text.primary};
    color: ${props => props.theme.text.primary};
  }
  & input:focus {
    outline: none;
  }
  & input:-webkit-autofill {
    background: transparent !important;
  }

  /* LABEL */
  & .label {
    color: ${props => props.theme.text.secondary}; 
    font-size:1rem;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all;
  }
  & input:focus ~ label, & input:valid ~ label {
    top:-20px;
    font-size:0.9rem;
    color: ${props => props.theme.primary};
  }
  /* BAR */
  & .bar {
    position:relative;
    display:block;
    width: 100%;
  }
  & .bar:before, & .bar:after {
    content:'';
    height:2px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background: ${props => props.theme.primary}; 
    transition: 0.2s ease all;
  }
  & .bar:before {
    left:50%;
  }
  & .bar:after {
    right:50%; 
  }
  & input:focus ~ .bar:before, & input:focus ~ .bar:after {
    width:50%;
  }
  /* HIGHLIGHT */
  & .highlight {
    position:absolute;
    height:60%; 
    width:100%; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
  }
  & input:focus ~ .highlight {
    animation: ${props => css`
      ${inputHighlighter(props)} 0.6s ease;
    `};
  }
`;

