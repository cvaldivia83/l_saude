"use client"

import Link from "next/link";
import Logo from '../../public/logo_simples.png'
import Image from "next/image";
import Avatar from "./Avatar";
import HeaderLink from "./HeaderLink";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.primitives.gray10 };
  box-shadow: ${({ theme }) => theme.shadow.shadowSm };
  padding: ${({ theme }) => theme.spacing.xs2 } ${({ theme }) => theme.spacing.m };
  position: sticky;
  top: 0;
  z-index: 100;

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-links {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .header-nav {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 8px;
  }

  .header-image {
    width: auto;
    height: 48px;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-container">
        <Link href="/" aria-label="Inicio">
          <Image src={Logo} alt="logo Lacrei Saúde" className="header-image" />
        </Link>

        <div className="header-links">
          <nav aria-label="navegacao principal">
            <ul className="header-nav">
              
              <li><HeaderLink href="/sobre">Sobre</HeaderLink></li>
              <li><HeaderLink href="/atendimento">Atendimento</HeaderLink></li>
            </ul>
          </nav>

          <Avatar firstName="Carla" />
        </div>

     </div>
    </StyledHeader>

  )
}

export default Header;