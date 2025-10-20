"use client"

import styled from "styled-components";
import dynamic from 'next/dynamic';
const Button = dynamic(() => import('../components/Button'));
const Title = dynamic(() => import('../components/Title'));
const Paragraph = dynamic(() => import('../components/Paragraph'));
import { useRouter } from 'next/navigation';


const StyledBanner = styled.div` 
  width: 100%;
  height: 400px;
  max-width: 1440px;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.3) 50%), url('/rainbow.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: ${({ theme }) => theme.spacing.m};
  min-height: 400px;
  background-color: ${({ theme }) => theme.colors.primitives.gray30 };
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

`

const Hero = () => {
  const router = useRouter();
  return (
    <StyledBanner>
      <Title as='h1' variant='Xl'>Junte-se à nossa comunidade</Title>
      <Paragraph variant='textXl'>Encontre atendimento clínico de qualidade</Paragraph>
      <Button variant='primary' type="button" onClick={() => router.push('/atendimento')}>Atendimento</Button>
    </StyledBanner>
  )
}

export default Hero;