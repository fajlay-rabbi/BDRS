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
        <Heading>
          Driving Business Growth Through Research, Strategy, and Innovation
        </Heading>
        <Description>
          At BDRS, we believe that success comes from understanding complexity
          and transforming it into opportunity. Our team blends creativity with
          data-driven insights to deliver public relations, custom research, CSR
          solutions, and strategic consulting. With every project, we empower
          organizations to make smarter decisions, inspire confidence, and build
          a stronger, more sustainable future.
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
  align-items: center;
  justify-content: space-between;
  padding-top: 5rem;
  gap: 4rem;

  ${media('<=desktop')} {
    padding-top: 3rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
  }

  ${media('<=tablet')} {
    padding-top: 2rem;
    gap: 2rem;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 90%;
  }

  ${media('<=tablet')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;

  ${media('<=tablet')} {
    margin-top: 2.5rem;
  }

  ${media('<=phone')} {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      width: 100%;
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg,
  img {
    max-width: 100%;
    height: auto;
  }

  ${media('<=desktop')} {
    justify-content: center;
    align-items: center;
  }

  ${media('<=tablet')} {
    svg,
    img {
      max-width: 80%;
    }
  }

  ${media('<=phone')} {
    svg,
    img {
      max-width: 90%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.6rem;
  }

  ${media('<=tablet')} {
    font-size: 1.5rem;
  }

  ${media('<=phone')} {
    font-size: 1.4rem;
    line-height: 1.5;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;

  ${media('<=tablet')} {
    margin-bottom: 1.5rem;
  }

  ${media('<=phone')} {
    margin-bottom: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=desktop')} {
    font-size: 4.6rem;
    margin-bottom: 3rem;
  }

  ${media('<=tablet')} {
    font-size: 3.8rem;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  ${media('<=phone')} {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }
`;
