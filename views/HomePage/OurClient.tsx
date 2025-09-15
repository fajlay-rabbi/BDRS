import React from 'react'
import styled from 'styled-components';

const OurClient = () => {
  return (
        <Wrapper>
          <Header>
            <Title>Our Client Portfolio</Title>
          </Header>
          <CardWrapper>
            <img src='/assets/client1.svg' alt='our client' />
            <img src='/assets/client2.svg' alt='our client' />
            <img src='/assets/client3.svg' alt='our client' />
            <img src='/assets/client4.svg' alt='our client' />
          </CardWrapper>
        </Wrapper>
  )
}

const Wrapper = styled.section.attrs({
  id: "ourClients",   // 👈 adds id directly
})`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  text-align: center;
  max-width: 800px;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: rgb(var(--text));
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;


export default OurClient