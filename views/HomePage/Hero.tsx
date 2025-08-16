import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Hero() {
  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>Shaping Tomorrow, Today</CustomOverTitle>
        <Heading>Driving Business Growth Through Research, Strategy, and Innovation</Heading>
        <Description>
          At BDRS, we believe that success comes from understanding complexity and transforming it into opportunity. Our team blends
          creativity with data-driven insights to deliver public relations, custom research, CSR solutions, and strategic consulting. With
          every project, we empower organizations to make smarter decisions, inspire confidence, and build a stronger, more sustainable
          future.
        </Description>
        <CustomButtonGroup>
          <Button>
            Explore Our Services <span>&rarr;</span>
          </Button>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  img {
    max-width: 5rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    img {
      max-width: 80%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
