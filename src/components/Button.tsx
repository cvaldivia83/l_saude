'use client'

import styled, { css } from 'styled-components';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'default',
  disabled?: boolean,
  type: "button" | "reset" | "submit" | undefined,
  onClick?: () => void;
}

const modifier = {
  primary: css`
    background-color: #018762;
    color: #FFFFFF;
    &:hover {
      background-color: #007756;
    };
    &:active {
      background-color: #014C37;
    };
    &:focus {
      background-color: #018762;
      color: #FFFFFF;
      border-width: 2px;
      border-color: #FFFFFF;
    };
  `, 
    secondary: css`
    background-color: #FFFFFF;
    color: #018762;
    border-width: 2px;
    border-color: #018762;
    &:hover {
      background-color: #DFF2ED;
      color: #007756;
      border-color: #007756;
    };
    &:focus {
      border-width: 2px;
      border-color: #FFFFFF;
      outline-offset: 2px;
    };
    &:active {
      background-color: #80CAB1;
      color: #014C37;
      border-color: #014C37;
    }
  `
}

const StyledButton = styled.button<ButtonProps>`
  height: 48px;
  border-radius: 8px;
  outline: none;
  text-align: center;
  box-shadow: 0 5px 10px rgba(100, 100, 100, 0.3);
  transition-property: background-color;
  transition-duration: 150ms;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 150%;
  padding: 0 32px;
  &:hover {
    box-shadow: none;
  };
  &:active {
    box-shadow: none;
  };
  &:disabled {
    box-shadow: none;
    background-color: #CFCFCF;
    color: #737373;
  };
  &:focus {
    outline: 2px solid #4D8ACB;
    border-color: #007756;
    border-width: 2px;
  }

  ${({ variant }) => variant === 'primary' && modifier.primary}
  ${({ variant }) => variant === 'secondary' && modifier.secondary}
`

const Button: React.FC<ButtonProps> = ({variant = 'primary', disabled, children, type}) => {
  return (
    <StyledButton variant={variant} disabled={disabled} type={type}>{children}</StyledButton>
  )
}

export default Button;
export { StyledButton };