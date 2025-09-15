import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

export default function Director() {
  return (
    <FeaturesGalleryWrapper>
      <Content>
        <div>
          <h1 style={{ textAlign: 'left', marginTop: '20px' }}>Md. Jinarul Islam</h1>
          <p style={{ textAlign: 'left', fontSize: '1.3rem' }}>Managing Director, BDRS Ltd.</p>
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <img
              src="/assets/director.jpg"
              alt="Khairul Alam Suzan"
              width={350}
              height={400}
              style={{ float: 'left', marginRight: '20px', marginBottom: '10px' }}
            />
            <p style={{ textAlign: 'justify', fontSize: '1.6rem' }}>
              Jinarul Islam has a well decorated career in journalism that started in 2005 with Banglabazar Patrika. Since then he played
              significant role in a number of Newspaper including the business daily <b>Bonik Barta</b> where he served as a News Editor
              from 2014 to 2020. Prior to that he served as a senior sub-editor from the moment when the news outlet began its journey
            </p>
          </div>
          <p style={{ textAlign: 'justify', fontSize: '1.6rem' }}>
            He is heavily engaged in publishing the `Bandar Barta’, a flagship publication of Chattogram Port Authority. He is also engaged
            in publishing <b>Nodi Bangla</b>, a flagship Magazine of Bangladesh Inland Water Transport Authority (BIWTA) as one of the Editors.
            He has also experiences to work with Bangladesh Navy, Mongla Port Authority and Bangladesh Land Port Authority in research and
            publication. With these activities for so many years, he has built a strong network among various government department
            especially in Ministry of Shipping along with journalist community.
            <br />
            <br />
            With a long career in journalism, Jinarul Islam helps organizations engage critical audiences, particularly during times of crisis. Leveraging his journalistic expertise, he enables effective communication with employees, customers, community leaders, investors, vendors, and other stakeholders. He is highly skilled in crisis communications planning, message development, and media relations, applying a strategic mindset to address both immediate and long-term organizational needs. 
          </p>
          <h2 style={{textAlign: 'left'}}>He currently serves as the Managing Director of BDRS.</h2>
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
  font-size: 1.3rem;
  line-height: 1.8;
  color: #222;
  opacity: 0.9;

  ${media('<=tablet')} {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;
