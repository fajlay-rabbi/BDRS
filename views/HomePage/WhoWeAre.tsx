// components/WhoWeAre.tsx
import Image from 'next/image';
import styled from 'styled-components';
import { images } from 'public/resourses';

export default function WhoWeAre() {
  return (
    <Wrapper>
      <Left>
        <Image src={images.WhoWeAre} alt="Who We Are" width={500} height={350} priority />
      </Left>

      <Right>
        <Title>Who We Are</Title>
        <Description>
          At BDRS, we specialize in delivering content marketing, public relations (PR), custom research, corporate social responsibility
          (CSR) solutions, data services, and business consultation—tailored to each client’s unique goals. Our mission is to create
          momentum by making sense of complexity, challenging boundaries, and inspiring the confidence that drives meaningful action.
          Blending creativity with data-driven insight, we ensure every project not only meets expectations but sets new benchmarks. Whether
          it’s amplifying your brand voice, uncovering actionable market intelligence, or guiding sustainable business practices, BDRS
          unites expertise, innovation, and dedication to help organizations make smarter decisions and achieve stronger performance. We
          empower our clients to build a better future—one informed decision at a time.
        </Description>

        <TextTitle>
          We empower our clients to build a better future—one informed decision at a time.
        </TextTitle>

        <CardWrapper>
          <Card>
            <IconWrapper>
              <Image src={images.OurFinger} alt="Idea" width={30} height={30} />
            </IconWrapper>
            <CardText>
              With our finger on the pulse of our clients’ industries, we have the context to spot emergent patterns.
            </CardText>
          </Card>

          <Card>
            <IconWrapper>
              <Image src={images.ByUncovering} alt="Rocket" width={30} height={30} />
            </IconWrapper>
            <CardText>
              By uncovering hidden sources of value, we design new ways to win, helping clients shape the future of the market.
            </CardText>
          </Card>

          <Card>
            <IconWrapper>
              <Image src={images.ByRallying} alt="Handshake" width={24} height={30} />
            </IconWrapper>
            <CardText>
              By rallying leaders around actionable opportunities and clear tradeoffs, we deliver solutions that are truly client-owned.
            </CardText>
          </Card>
        </CardWrapper>
      </Right>
    </Wrapper>
  );
}

/* Styled Components */
const Wrapper = styled.section.attrs({
  id: "whoWeAre", 
})`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    border-radius: 15px;
  }
`;

const Right = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    text-align: center;
  }
`;

const TextTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.6rem;
  text-align: justify;
  opacity: 0.8;
  line-height: 1.6;
  color: #444;
  margin-bottom: 2rem;
  width: 90%;

  @media (max-width: 768px) {
    text-align: center;
    width: 95%;
  }
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.2rem;
  width: 90%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Card = styled.div`
  background: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.08s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  }
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const CardText = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  text-align: center;
  color: #222;
  margin: 0;
  line-height: 1.4;
`;
