import Image from 'next/image';
import styled from 'styled-components';
import { images } from 'public/resourses';

export default function Logo() {
  return (
    <LogoWrapper>
      <Image src={images.logo} alt="logo" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  width: 150px;
`;
