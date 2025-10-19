'use client'

import styled, { css } from 'styled-components';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'default',
  disabled?: boolean,
  type?: "button" | "reset" | "submit" | undefined,
  onClick?: () => void;
}

const modifier = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.semantic.button.primary.default.background };
    color: ${({ theme }) => theme.colors.semantic.button.primary.default.textColor };
    &:hover {
      background-color: ${({ theme }) => theme.colors.semantic.button.primary.hover.background };
    };
    &:active {
      background-color: ${({ theme }) => theme.colors.semantic.button.primary.pressed.background };
    };
    &:focus {
      background-color: ${({ theme }) => theme.colors.semantic.button.primary.focus.background };
      color: ${({ theme }) => theme.colors.semantic.button.primary.focus.textColor };
      border-width: ${({ theme }) => theme.spacing.xs4 };
      border-color: #FFFFFF;
    };
  `, 
    secondary: css`
    background-color: ${({ theme }) => theme.colors.semantic.button.secondary.default.background };
    color: ${({ theme }) => theme.colors.semantic.button.secondary.default.textColor };
    border-width: ${({ theme }) => theme.spacing.xs4 };
    border-color: ${({ theme }) => theme.colors.semantic.button.secondary.default.borderColor };
    &:hover {
      background-color: ${({ theme }) => theme.colors.semantic.button.secondary.hover.background };
      color: ${({ theme }) => theme.colors.semantic.button.secondary.hover.textColor };
      border-color: ${({ theme }) => theme.colors.semantic.button.secondary.hover.borderColor };
    };
    &:focus {
      border-width: ${({ theme }) => theme.spacing.xs4 };
      border-color: ${({ theme }) => theme.colors.semantic.button.secondary.focus.borderColor };
      outline-offset: 2px;
    };
    &:active {
      background-color: ${({ theme }) => theme.colors.semantic.button.secondary.pressed.background };
      color: ${({ theme }) => theme.colors.semantic.button.secondary.pressed.textColor };
      border-color: ${({ theme }) => theme.colors.semantic.button.secondary.pressed.borderColor };
    }
  `
}

const StyledButton = styled.button<ButtonProps>`
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.sm };
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow.shadowMd };
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 150ms;
  font-size: ${({ theme }) => theme.typography.text.textBase.fontSize };
  line-height: ${({ theme }) => theme.typography.text.textBase.lineHeight };
  padding: 0 32px;
  &:hover {
    box-shadow: none;
  };
  &:active {
    box-shadow: none;
  };
  &:disabled {
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.semantic.button.primary.disabled.background };
    color: ${({ theme }) => theme.colors.semantic.button.primary.disabled.textColor };
  };
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.button.primary.focus.outline };
    border-color: ${({ theme }) => theme.colors.semantic.button.primary.focus.border };
    border-width: ${({ theme }) => theme.spacing.xs4 };
  }

  ${({ variant }) => variant === 'primary' && modifier.primary}
  ${({ variant }) => variant === 'secondary' && modifier.secondary}
`

const Button: React.FC<ButtonProps> = ({variant = 'primary', disabled, children, type = 'button', onClick }) => {
  return (
    <StyledButton variant={variant} disabled={disabled} type={type} onClick={onClick}>{children}</StyledButton>
  )
}

export default Button;
export { StyledButton };