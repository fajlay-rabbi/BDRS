import styled from 'styled-components';
import { images } from 'public/resourses';

export default function Logo() {
  return (
    <LogoWrapper>
      <img src='/assets/logo.png' alt="logo" height={80} />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  width: 150px;
`;