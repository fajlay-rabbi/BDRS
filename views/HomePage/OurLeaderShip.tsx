import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

export default function OurLeaderShip() {
  return (
    <FeaturesGalleryWrapper>
      <Content>
        <SubTitle>Our Leadership</SubTitle>
        <Description>
          BDRS pairs clients with the leaders who possess precisely the experience and expertise needed to pinpoint and understand the
          nature of the opportunities or challenges they face. They approach their assignments pragmatically and open-mindedly, and excel at
          engagements that require analytical rigor against tight timeframes.
        </Description>
      </Content>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 2rem;

  ${media('<=tablet')} {
    padding: 0rem 1rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: -0.03em;
  text-align: center;
  margin-bottom: 2rem;

  ${media('<=tablet')} {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 900px;
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.8;
  color: #222;
  opacity: 0.9;

  ${media('<=tablet')} {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;
