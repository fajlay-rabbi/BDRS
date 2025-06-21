import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper id="clients">
      <Container>
        <Stack>
          <OverTitle>Trusted by Leading Organizations</OverTitle>
          <Description>
             We&#39;ve partnered with forward-thinking businesses, development agencies, and institutions to drive impact and innovation.
          </Description>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const CtaWrapper = styled.div`
  scroll-margin-top: 140px;
  background: rgb(var(--secondary));
`;
