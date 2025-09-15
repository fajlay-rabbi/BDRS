import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

export default function WhyChooseUs() {
  return (
    <FeaturesGalleryWrapper>
      <Content>
        <SubTitle>Why Choose Us?</SubTitle>
        <Description>
          BDRS started its journey in 2025, and Communication is at the heart. A group of experienced journalists who have spent years
          covering the port and shipping sector is our driving force. Their knowledge and insight laid the foundation for something new.
        </Description>
        <Description>
          We believe press releases alone can’t tell the full story. That’s why BDRS looks beyond the press release. We focus on developing
          fresh ideas and creating original content that speaks to each media outlet in its own way. When a thoughtful special report
          reaches the right newspaper or online platform, it captures attention, generates wider coverage, and strengthens an organization’s
          image.
        </Description>
        <Description>
          At its heart, BDRS is about helping institutions communicate better—by turning experience into stories that matter. On top of
          that, we have a strong and large network consisting of government bodies, political leaders, corporate bodies, and media personnel
          that enables us to cater to your every communication needs. We value high quality, relentless pursuit of results, and high
          performance standards. That is what our clients can expect from us and that is what we deliver.
        </Description>
        <Description>
          As a consultant and market research organization, we focus on industries and the fact that we have a team that encompasses the most experienced market researchers, and strategy development consultants in the industry. We are not just researchers. We use the research insights we collect to help drive tactical and strategic action and provide insights in a commercial context.
        </Description>
        <Description>
          In fact, we are not solely interested in clients using BDRS once. We like to create long-term relationships where we work alongside our clients every step of the way. After all, every project we work on isn’t our project; it is your project.
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
  padding: 1.5rem 2rem;

  ${media('<=tablet')} {
    padding: 1rem 1rem;
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
  font-size: 1.6rem;
  text-align: justify;
  line-height: 1.8;
  color: #222;
  opacity: 0.9;
  margin-bottom: 1.2rem;

  ${media('<=tablet')} {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;
