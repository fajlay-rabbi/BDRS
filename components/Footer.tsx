import NextLink from 'next/link';
import { CiGlobe, CiLocationOn } from 'react-icons/ci';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import styled from 'styled-components';
import Container from 'components/Container';
// import { NavItems } from 'types';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <FooterTitle>Get In Touch</FooterTitle>
        <FooterGrid>
          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <FooterItem>
              <Icon>{CiGlobe({})}</Icon>
              <span>Website: www.bdrsbd.com</span>
            </FooterItem>
            <FooterItem>
              <Icon>{FaRegEnvelope({})}</Icon>
              <span>Email: info@bdrsbd.com</span>
            </FooterItem>
          </div>

          <FooterItem>
            <Icon>{CiLocationOn({})}</Icon>
            <span style={{ textAlign: 'justify' }}>
              Address: Islam Chamber (2ND floor), 91, Agrabad C/A, Agrabad, Chattogram, Bangladesh & 50/A (Basement), Aziz Super Market,
              Shahbagh, Dhaka-1000
            </span>
          </FooterItem>

          <FooterItem>
            <Icon>{FiPhoneCall({})}</Icon>
            <span>Phone: +8802333310648</span>
          </FooterItem>
        </FooterGrid>
      </Container>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  margin-top: -10px;
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const FooterTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 25px;
  font-weight: 600;
  text-align: center;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  line-height: 1.5;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: #fff;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  flex-shrink: 0;
`;
