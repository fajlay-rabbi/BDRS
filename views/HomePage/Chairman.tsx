import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

export default function Chairman() {
  return (
    <FeaturesGalleryWrapper>
      <Content>
        <SubTitle>Chairman</SubTitle>
        <Description>
          Mr. Khairul Alam (Suzan) is a big name in freight forwarding industry, and has played crucial role in the Bangladesh Freight
          Forwarders Association (BAFFA). He served as vice-president (CTG) in the board of directors for the term 2021-2023 and 2019-2021G.
          Prior to that, he was the director, Incharge-Port and Customs (CTG) of the association for the term 2017-2019, 2015- 2017, and
          director, public relations (CTG) for the term 2012-2015. In addition to his leadership roles, Mr. Alam regularly writes op-ed on
          various topics related to trade and commerce, ports and logistics and other contemporary issues. He now leads BDRS with the deep
          understanding and leadership excellence he has developed over his distinguished career.
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
