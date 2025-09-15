import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import { EnvVars } from 'env';
import { images } from 'public/resourses';
import CoreValues from 'views/HomePage/CoreValues';
import Cta from 'views/HomePage/Cta';
import Hero from 'views/HomePage/Hero';
import OurClient from 'views/HomePage/OurClient';
import OurLeaderShip from 'views/HomePage/OurLeaderShip';
import WhoWeAre from 'views/HomePage/WhoWeAre';
import WhyChooseUs from 'views/HomePage/WhyChooseUs';
import Director from '../views/HomePage/Director';
import OurService from '../views/HomePage/OurService';

export default function Homepage() {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          <WhoWeAre />
          <DarkerBackgroundContainer>
            <Cta />
          </DarkerBackgroundContainer>
          <BasicSection id="ourMission" imageUrl={images.about} title="Our Mission" overTitle="Passion Meets Precision">
            <p>
              <span style={{ fontWeight: 'bold' }}>BDRS</span> mission is to deliver a tangible contribution to the achievement of a goal.
              Be it the management of your media relations, the conduct of unique events, the conduct of extensive market research, provide
              with first hand data service and consultation, all we do is characterized by our infinite passion for our job and is based on
              synergy, transparency and credibility through expertise.
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
          <Director />
          <OurClient />
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
