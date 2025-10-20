import styled, {css} from "styled-components"

type HeaderStyle = 'Xl' | 'Lg' | 'Base' | 'Sm';

type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps {
  children: React.ReactNode;
  as?: TitleTag;
  variant: HeaderStyle;
};

const StyledTitle = styled.h1<Omit<TitleProps, 'children'>>`
  ${({ theme, variant }) => {
    const style = theme.typography.header[variant];

    return css`
      font-size: ${style.fontSize};
      font-weight: ${style.fontWeight};
      line-height: ${style.lineHeight};
      color: ${theme.colors.semantic.text.body};
      margin-bottom: ${theme.spacing.m};
    `;
  }};
  `

const Title: React.FC<TitleProps> = ({ children, variant, as = 'h2' }) => {
  return (
    <StyledTitle as={as} variant={variant}>{children}</StyledTitle>
  )
}

export default Title;