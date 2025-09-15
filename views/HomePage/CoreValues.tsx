// components/CoreValues.tsx
import Image from 'next/image';
import styled from 'styled-components';
import { images } from 'public/resourses';

const coreValuesData = [
  {
    title: 'Integrity',
    description: 'Always do what’s right by honoring our commitments.',
    image: images.Integrity,
  },
  {
    title: 'Ideas',
    description: 'Develop innovative solutions to business challenges.',
    image: images.Ideas,
  },
  {
    title: 'Relationships',
    description: 'Build and leverage mutually beneficial relationships.',
    image: images.Relationships,
  },
  {
    title: 'Results',
    description: 'Ambitiously drive desired, measurable results.',
    image: images.Results,
  },
  {
    title: 'Improvement',
    description: "Get 1% better every day, and you'll be 37 times better annually.",
    image: images.Improvement,
  },
];

export default function CoreValues() {
  return (
    <Wrapper>
      <Header>
        <Title>Our Core Values</Title>
        <Description>
          We uphold a set of core values to which we adhere when we select our clients and
          deliver service and when we hire, reward, and promote our employees.
        </Description>
      </Header>

      <CardWrapper>
        {coreValuesData?.map((item) => (
          <Card key={item.title}>
            <ImageWrapper>
              <Image src={item.image} alt={item.title} width={35} height={35} />
            </ImageWrapper>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </CardWrapper>
    </Wrapper>
  );
}

/* Styled Components */

const Wrapper = styled.section.attrs({
  id: "ourCoreValues",
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

const Description = styled.p`
  font-size: 1.8rem;
  line-height: 1.6;
  color: #222;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background: rgb(var(--cardBackground));
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.08s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #222;
`;

const CardDescription = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: #222;
  line-height: 1.4;
`;
