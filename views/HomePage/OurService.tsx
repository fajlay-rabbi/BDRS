import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { images } from 'public/resourses';
import { media } from 'utils/media';

export interface BasicSectionProps {
  title: string;
  overTitle: string;
  reversed?: boolean;
}

const OurService = ({ title, overTitle }: PropsWithChildren<BasicSectionProps>) => {
  return (
    <>
      <BasicSectionWrapper>
        <Wrapper>
          <Left>
            <Image src={images.whatWeDo} alt="What We Do" width={500} height={350} priority />
          </Left>
          <Right>
            <ContentContainer id="services">
              <CustomOverTitle>{overTitle}</CustomOverTitle>
              <Title>{title}</Title>
              <DescriptionText>We proudly offer the following services to our valued clients:</DescriptionText>
              <ul
                style={{
                  listStyle: 'disc',
                  paddingLeft: '30px',
                  marginBottom: '2rem',
                  lineHeight: '1.8',
                  marginTop: '-15px',
                  fontSize: '1.6rem',
                }}
              >
                <li>Content Marketing/Public Relations</li>
                <li>Custom Research</li>
                <li>Analytics and Reporting</li>
                <li>Business Consulting</li>
              </ul>
            </ContentContainer>
          </Right>
        </Wrapper>
      </BasicSectionWrapper>
      <BasicSectionWrapper>
        <div style={{ marginTop: '-8rem' }}>
          <CardGrid>
            <Card>
              <Icon src="/assets/whatweDo_1.png" alt="Icon" />
              <Text>
                As a core service, we are here to help you identify the right media for your organization’s publicity, their current
                impressions and rank them accordingly. We also can provide contextual short, medium and long term strategic solutions
                according to your needs.
              </Text>
            </Card>
            <Card>
              <Icon src="/assets/whatweDo_2.png" alt="Icon" />
              <Text>
                As far as market research is concerned, we help businesses understand their target market, competitors, and overall industry
                landscape. This involves gathering and analyzing data to inform strategic decisions about product development, marketing,
                and sales. We conduct various types of research, such as surveys, focus groups, and competitor analysis, to provide
                actionable insights for our clients.
              </Text>
            </Card>
            <Card>
              <Icon src="/assets/whatweDo_3.png" alt="Icon" />
              <Text>
                Starting and running a business is challenging because of the sheer number of tasks it takes to succeed. To navigate this
                challenge we, as a consultant, offer a wide range of services, including providing expertise in a specific market,
                identifying problems, providing objectivity, influencing other people, such as lobbyists.
              </Text>
            </Card>
            <Card>
              <Icon src="/assets/whatweDo_4.png" alt="Icon" />
              <Text>
                We provide our clients with industry-specific data from primary sources often tailored to specific business needs and
                industries. These services enable clients to make informed decisions, optimize operations, and improve customer experiences
                through reliable and accessible data. We also offer data analytical services, allowing users to derive insights from the
                organization’s data they access.
              </Text>
            </Card>
            <Card>
              <Icon src="/assets/whatweDo_5.png" alt="Icon" />
              <Text>
                By analyzing industry data, we identify new business opportunities and uncover hidden patterns in trade, logistics, and port
                operations. These reports go beyond traditional reporting—they provide insights that can support investment decisions,
                policy discussions, and strategic planning.
              </Text>
            </Card>
          </CardGrid>
        </div>
      </BasicSectionWrapper>
    </>
  );
};

/* Styled Components */
const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  line-height: 1.5;
  opacity: 80%;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  opacity: 80%;
  margin-bottom: 2.5rem;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ContentContainer = styled.div`
  scroll-margin-top: 140px;
  flex: 1;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-items: center;
  align-items: center;
  padding: 0 4rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 3rem;
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-2px);
  }
`;

const Icon = styled.img`
  width: 60px;
  margin-bottom: 12px;
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-align: justify;
`;

type Props = Pick<BasicSectionProps, 'reversed'>;

const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

/* Styled Components */
const Wrapper = styled.section.attrs({
  id: "whatWeDo",
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

export default OurService;
