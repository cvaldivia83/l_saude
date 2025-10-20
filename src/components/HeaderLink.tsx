"use client"
import { AnchorHTMLAttributes } from "react";
import styled from "styled-components";
import Link from "next/link";



const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primitives.emerald60 };
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.text.textXl.fontSize };
  &:disable {
    color: ${({ theme }) => theme.colors.semantic.text.disabled };
  };
  &:hover {
    color: ${({ theme }) => theme.colors.primitives.emerald70 };
  };
  &:active {
    color: ${({ theme }) => theme.colors.primitives.emerald80 };
  };
  &:focus {
    color: ${({ theme }) => theme.colors.primitives.emerald60 };
    outline: 2px solid ${({ theme }) => theme.colors.semantic.button.primary.focus.outline };
  }
`

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
};

const HeaderLink: React.FC<LinkProps> = ({ children, href }) => {
  return (
    <StyledLink href={href}>{children}</StyledLink>
  )
}

export default HeaderLink; 