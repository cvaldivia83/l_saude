"use client"

import React from "react";
import styled, {css} from "styled-components"

const StyledParagraph = styled.p<Omit<ParagraphProps, 'children'>>`
  ${({ theme, variant }) => {
    const style = theme.typography.text[variant];

    return css`
      font-size: ${style.fontSize};
      font-weight: ${style.fontWeight};
      line-height: ${style.lineHeight};
      color: ${theme.colors.semantic.text.body};
      margin-bottom: ${theme.spacing.s};
    `
  }}
`

interface ParagraphProps {
  children: React.ReactNode;
  variant: 'textXl' | 'textBase' | 'textSm' | 'textXs';
}

const Paragraph: React.FC<ParagraphProps> = ({ children, variant }) => {
  return (
    <StyledParagraph variant={variant}>{children}</StyledParagraph>
  )
};

export default Paragraph;