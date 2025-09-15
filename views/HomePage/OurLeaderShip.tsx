import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

export default function OurLeaderShip() {
  return (
    <FeaturesGalleryWrapper>
      <Content>
        <SubTitle>Meet the Leadership</SubTitle>
        <Description>
          BDRS pairs clients with the leaders who possess precisely the experience and expertise needed to pinpoint and understand the
          nature of the opportunities or challenges they face. They approach their assignments pragmatically and open-mindedly, and excel at
          engagements that require analytical rigor against tight timeframes.
        </Description>
        <div>
          <h1 style={{ textAlign: 'left', marginTop: '20px' }}>Khairul Alam (Suzan)</h1>
          <p style={{ textAlign: 'left', fontSize: '1.3rem' }}>Chairman, BDRS Ltd</p>
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <img
              src="/assets/leadership.jpg"
              alt="Khairul Alam Suzan"
              width={320}
              height={380}
              style={{ float: 'left', marginRight: '20px', marginBottom: '10px' }}
            />
            <p style={{ textAlign: 'justify', fontSize: '1.6rem' }}>
              Khairul Alam (Suzan) is a bold, visionary and energetic businessman, who has become one of the most recognizable and
              influential figures in the country&apos;s shipping and freight forwarding sector through his work ethic, skills and relentless
              efforts. Since 2001, he has been the Director of EAS Limited and the Maritime Transport Agency. He is the Chairman of BDRS
              Ltd. He is also the Vice President of Bangladesh Freight Forwarders Association (BAFFA) (2001-2025), Director of Bangladesh
              Shipping Agents Association (BSAA), Co-Chairman of Port and Shipping Standing Committee, FBCCI, and a Partner of Maritime
              Transport Agency.
            </p>
          </div>
          <p style={{ textAlign: 'justify', fontSize: '1.6rem' }}>
            His career journey began in 1992 as a shipping executive at Birds Bangladesh Shipping Agencies, where he gained valuable
            experience by working for international companies such as Mitsui OSK Line in Japan and Senator Line in Germany. Khairul Alam
            (Suzan) has been successfully working in the shipping, freight forwarding, clearing and forwarding (C & F) consultancy, public
            relations (PR), corporate social responsibility (CSR) and event management sectors. He is also known as an organizer. His
            activism in the leadership of business organizations is commendable. He was elected five-time general body member of FBCCI,
            two-time director of International Freight Forwarders Association, four-time director of Bangladesh Shipping Agents Association
            (BSAA) and six-time director of Bangladesh Freight Forwarders Association (Baffa). He is currently a former vice president and
            the current director of the BSAA. Khairul Alam (Suzan) has been at the forefront of finding solutions to the problems faced by
            traders in the import-export trade - especially the complexities related to customs, ports and private depots. He has been
            contributing to make the business environment easier and more efficient through regular interactions and meetings with senior
            officials of the port. The staff of the Chittagong port, the sirens of the ships and the crowd of containers seemed to have
            aroused his curiosity since childhood. One day, that interest turns into an interest in research. After completing his studies
            in economics and transport management at the university, he focused on port economics, logistics and international trade
            systems. 
            <br />
            <br />
            He believes - &quot;A country&apos;s port is the pulse of its economy. If the port is not strong, trade cannot be sustainable. &quot;
            Khairul Alam is a regular writer for national dailies and maritime magazines. 
            <br />
            <br />
            In his column: 
            <br />
            Modernization of Chittagong Port.
            <br />
            <br />
            Prospects and challenges of the Bay Terminal Project Opportunities for Regional Transshipment in Bangladesh Technology-based
            container handling Policy guidance on the Blue Economy. 
            <br />
            <br />
            Apart from being a business leader, he is also active in social and
            organizational activities. He is a former vice president of Chittagong University Students&apos; Club and a life member of Chittagong
            Diabetic Hospital. He is also an honorary member of the Chamber of Japan and Spain. 
            <br />
            <br />
            His contribution to the media is remarkable.
            He regularly writes columns on port and trade in different national dailies, including Daily Ittefaq, Samakal, Purbakon, Desh
            Parivartan, Daily Sun. He is a regular commentator and analyst on electronic and online media. He is known as one of the leading
            columnists in port-related writing. He has a very good relationship with the country&apos;s leading journalists specializing in
            ports, which has helped establish business transparency and the positive role of the media.
          </p>
        </div>
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
  font-size: 1.6rem;
  text-align: justify;
  line-height: 1.4;
  color: #222;
  opacity: 0.9;

  ${media('<=tablet')} {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;
