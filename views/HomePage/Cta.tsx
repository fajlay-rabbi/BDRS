import React from 'react';
import styled from 'styled-components';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Cta() {
  return (
    <CtaWrapper id="ourVision">
      <Container>
        <Stack>
          <OverTitle>OUR VISION</OverTitle>
          <Description>
            At BDRS, our vision is to build client programs on a foundation of thoughtful, strategic counsel. We help clients achieve what
            they want, communicate what they have to say so it is heard, believed and leads to positive action. We are committed to
            delivering creative, strategic, and well-executed programs—on time, within budget, and beyond expectations—ensuring satisfaction
            at every level.
          </Description>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}


const Container = styled.div`
  position: relative;
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Description = styled.div`
  font-size: 2rem;
  text-align: justify;
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
  background: #273B8A;
`;
