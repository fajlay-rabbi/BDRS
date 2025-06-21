import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function FeaturesGallery() {

  return (
    <FeaturesGalleryWrapper>
      <Content>
        <OverTitle>FEATURED INSIGHTS</OverTitle>
        <SubTitle>Latest perspectives and analysis from our experts</SubTitle>
      </Content>
    </FeaturesGalleryWrapper>
  );
}

const FeaturesGalleryWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const SubTitle = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;

  ${media('<=tablet')} {
    font-size: 1.6rem;
  }
`;

const Content = styled.div`
  & > *:not(:first-child) {
    margin-top: 1rem;
  }
  text-align: center;
`;
