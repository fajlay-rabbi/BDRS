import Image from 'next/image';
import styled from 'styled-components';
import { images } from 'public/resourses';

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImage
        src={images.logo}
        alt="logo"
        width={40}
        height={35}
        priority
      />
      <LogoText>BDRS</LogoText>
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const LogoImage = styled(Image)`
  width: 30px;
  height: auto;

  @media (max-width: 768px) {
    width: 45px;
  }

  @media (max-width: 480px) {
    width: 35px;
  }
`;

const LogoText = styled.h2`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #222;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
