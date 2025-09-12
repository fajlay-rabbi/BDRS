import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { images } from 'public/resourses';
import Chairman from 'views/HomePage/Chairman';
import CoreValues from 'views/HomePage/CoreValues';
import Cta from 'views/HomePage/Cta';
import Hero from 'views/HomePage/Hero';
import OurLeaderShip from 'views/HomePage/OurLeaderShip';
import WhoWeAre from 'views/HomePage/WhoWeAre';
import WhyChooseUs from 'views/HomePage/WhyChooseUs';
import Director from './Director';
import OurService from './OurService';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <WhoWeAre />
          <DarkerBackgroundContainer>
            <Cta />
          </DarkerBackgroundContainer>
          <BasicSection id="mission" imageUrl={images.about} title="Our Mission" overTitle="Passion Meets Precision">
            <p>
              <span style={{ fontWeight: 'bold' }}>BDRS</span> mission is to deliver a tangible contribution to the achievement of a goal.
              Be it the management of your media relations, the conduct of unique events, the conduct of extensive market research, provide
              with first hand data service and consultation, all we do is characterized by our infinite passion for our job and is based on
              synergy, transparency and credibility through expertise.
            </p>
            <p style={{ marginTop: '5px' }}>
              In brief: our mission is to grant you maximum serenity about the successful management of your public image and to enhance
              your business growth- wherever and however you choose us to support you.
            </p>
          </BasicSection>
          <CoreValues />
          <OurService
            overTitle="What We Do"
            title="We guide our clients through high-stakes decisions and transformative moments so they can
                  adapt, grow, and thrive. We are here to help you discover opportunities and achieve results that
                  bridge what is with what can be. Our edge is the power of perspective — driven by deep industry
                  insight, specialized expertise, and a spirit of true collaboration. We measure our success by the
                  success of our clients.
                  "
          />
        </WhiteBackgroundContainer>

        <DarkerBackgroundContainer>
          <WhyChooseUs />
          <OurLeaderShip />
          <Chairman />
          <Director />
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: rgb(var(--background));

  & > *:not(:first-child) {
    margin-top: 5rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: rgb(var(--secondBackground));

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;
