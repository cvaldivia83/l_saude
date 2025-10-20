"use client"

import styled from "styled-components"
import Image from "next/image";
import dynamic from 'next/dynamic';
const Button = dynamic(()=> import('../components/Button'));
const Title = dynamic(() => import('../components/Title'));
const Paragraph = dynamic(() => import('../components/Paragraph'));


const StyledSection = styled.section`
  padding: 3.5rem 3.5rem 0 3.5rem; 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.l};

  .section-image {
    border-radius: ${({ theme }) => theme.borderRadius.xs };
  }

    @media (min-width: 375px) and (max-width: 900px) {
      .section-image {
        display: none;
      }
  }

`

const Section = () => {
  return (
    <StyledSection>
        
      <div className="description">
        <Title variant="Lg" as="h2">Atendimento qualificado, seguro e inclusivo</Title>

        <Paragraph variant='textBase'>Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.</Paragraph>

         <Paragraph variant='textBase'>Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o proprósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+. </Paragraph>

        <Paragraph variant='textBase'>Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.</Paragraph>

        <Paragraph variant='textBase'>A inclusão é um dos nossos valores fundamentais, por isso construímos a Lacrei Saúde para que seja acessível para o maior número de pessoas.</Paragraph>

        <Button type='button' variant='secondary'>Saiba Mais</Button>
      </div>

        <Image src='/care.jpg' alt="Bandeira LGBTQIAP+ com coração ao meio" width={560} height={640} className="section-image" />

    </StyledSection>
  
  )
}

export default Section;