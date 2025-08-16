import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

export default function Director() {
  return (
    <FeaturesGalleryWrapper>
      <Content>
        <SubTitle>Managing Director</SubTitle>
        <Description>
          With a long career in journalism, Jinarul Islam helps organizations engage critical audiences, particularly during times of
          crisis. Leveraging his journalistic expertise, he enables effective communication with employees, customers, community leaders,
          investors, vendors, and other stakeholders. He is highly skilled in crisis communications planning, message development, and media
          relations, applying a strategic mindset to address both immediate and long-term organizational needs. He currently serves as the
          Managing Director of BDRS.
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
