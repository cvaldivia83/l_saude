'use client'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import '@fortawesome/fontawesome-svg-core/styles.css';
import Logo from '../../public/logo.png'
import Divider from './Divider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faSquareInstagram, faSquareLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 0.5fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

   .footer-logo { 
    grid-area: 1 / 1 / 3 / 2;
  };

  .footer-btn { 
    grid-area: 1 / 5 / 3 / 6; 
    color: #007756;
    font-size: 14px;
  };

  .footer-links { 
    grid-area: 1 / 2 / 2 / 5;
    padding-top: 8px; 
  };

  .footer-social { 
    grid-area: 2 / 2 / 3 / 5; 
    padding-top: 8px;
  };

  @media (min-width: 375px) and (max-width: 900px) {
    display: block;

   .footer-btn, .footer-logo {
    display: none;
   };

   .footer-links nav {
    justify-content: initial;
   };

   .footer-nav {
    flex-direction: column;
    align-items: initial !important;
    gap: 16px;
   };

   .footer-social nav {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
   }
  }
`

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 1440px;
  margin-top: 64px;
  padding: 24px 40px;

  .footer-logo > img {
      height: 56px;
      width: auto;
  };

  .btn-icon {
    width: 42px;
    padding: 8px;
    border: 2px solid #007756;
    border-radius: 8px;
    text-align: center;
  };

  .footer-nav {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly; 
  };

  .footer-nav a {
    text-decoration: none;
    color: #2D2D2D;
    font-size: 14px;
    padding: 4px;
  };

  .container-social {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 4px;
    justify-content: space-evenly;
    li {
      padding: 4px;
    }
  };

  .social-link {
    text-decoration: none;
    color: #2D2D2D;
    font-size: 14px;
    padding: 4px;
  }

  nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
  };

  small {
    font-size: 12px;
  };

  };
`
interface SocialLink {
  href: string;
  icon: IconDefinition;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    href: 'https://www.facebook.com',
    icon: faFacebookF,
    label: 'siga a gente no facebook'
  },
  {
    href: 'https://www.instagram.com',
    icon: faSquareInstagram,
    label: 'siga a gente no instagram'
  },
  {
    href: 'https://www.linkedin.com',
    icon: faSquareLinkedin,
    label: 'siga a gente no linkedin'
  },
  {
    href: 'mailto:atendimento@lacrei-saude.com.br',
    icon: faEnvelope,
    label: 'mande um email pra gente'
  },
]

const Footer = () => {
  return (
    <StyledFooter>
      <Divider />
      <FooterGrid>
        <div className="footer-logo">
          <Image src={Logo} alt="Lacrei Saude Logo" placeholder="blur" />
        </div>
        <div className="footer-links">
          <nav aria-label='Navegacao links'>
            <ul className="footer-nav">
              <li><Link href="/">Lacrei Saúde</Link></li>
              <li><Link href="/">Pessoas Profissionais</Link></li>
              <li><Link href="/">Política de Privacidade</Link></li>
              <li><Link href="/">Termos de Uso</Link></li>
            </ul>
          </nav>
        </div>
        <div className="footer-social">
          <nav aria-label="Social Media links">
            <ul className='container-social'>
              { 
                socialLinks.map((item: SocialLink) => {
                  return (
                    <li key={`${item.href}`}>
                      <Link href={item.href} aria-label={item.label} target="_blank" className='social-link'>
                        <FontAwesomeIcon icon={item.icon} />
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
            <small>CNPJ: 51.265.351/0001-65</small>
          </nav>
        </div>
        <div className="footer-btn">
          <div className="btn-icon" aria-label="subir ao inicio">
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </div>
      </FooterGrid>
    </StyledFooter>
  )
}

export { StyledFooter };
export default Footer;

