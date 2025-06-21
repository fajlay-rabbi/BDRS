'use client';

import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import { OurServicesData, OurServicesDataType } from 'utils/data';
import { media } from 'utils/media';

export interface BasicSectionProps {
  title: string;
  overTitle: string;
  reversed?: boolean;
}

const ServicItem = ({
  item,
  onClick,
  serviceContent,
}: {
  item: OurServicesDataType;
  onClick?: () => void;
  serviceContent: { itemTitle: string; points: string[] }[];
}) => {
  const isSelected = serviceContent.length > 0 && serviceContent[0].itemTitle === item?.title;

  return (
    <ServiceItemWrapper selected={isSelected}>
      <p onClick={onClick}>{item?.title} &rarr;</p>
    </ServiceItemWrapper>
  );
};


const OurService = ({ title, overTitle }: PropsWithChildren<BasicSectionProps>) => {
  const [serviceContent, setServiceContent] = useState<{ itemTitle: string; points: string[] }[]>(OurServicesData[0]?.items || []);

  const serviceContentHandler = ({ item }: { item: OurServicesDataType }) => {
    setServiceContent(item?.items);
  };

  return (
    <BasicSectionWrapper>
      <ContentContainer id="services">
        <CustomOverTitle>{overTitle}</CustomOverTitle>
        <Title>{title}</Title>

        <ServiceTitleWrapper>
          <ServiceTitle>
            {OurServicesData?.map((item, index) => {
              return <ServicItem item={item} key={index} onClick={() => serviceContentHandler({ item })} serviceContent={serviceContent} />;
            })}
          </ServiceTitle>
          <ServiceContentWrapper>
            {serviceContent?.map((item, index) => {
              return (
                <ServiceTextWrapper key={index}>
                  <h2>{item.itemTitle}</h2>
                  <ul>
                    {item?.points?.map((singleItem, index) => {
                      return (
                        <li style={{ fontSize: '1.4rem' }} key={index}>
                          {singleItem}
                        </li>
                      );
                    })}
                  </ul>
                </ServiceTextWrapper>
              );
            })}
          </ServiceContentWrapper>
        </ServiceTitleWrapper>
      </ContentContainer>
    </BasicSectionWrapper>
  );
};

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ServiceTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem; /* Optional: adds spacing between the left/right content */

  ${media('<=tablet')} {
    flex-direction: column;
    gap: 1.5rem; /* Optional: tighter gap on smaller screens */
  }
`;

const ServiceTitle = styled.div`
  width: 100%;
`;

const ServiceContentWrapper = styled.div`
  background: #1673ff;
  padding: 30px;
  border-radius: 5px;
  color: white;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const ServiceTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceItemWrapper = styled.div<{ selected: boolean }>`
  & > p {
    cursor: pointer;
    font-size: 2rem;
    margin-top: 15px;
    user-select: none;
    width: fit-content;
    transition: all 0.3s ease-in-out;
    color: ${({ selected }) => (selected ? '#1673FF' : 'inherit')};

    &:active {
      transform: scale(0.85);
    }
  }
`;

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  scroll-margin-top: 140px;
  flex: 1;
`;

type Props = Pick<BasicSectionProps, 'reversed'>;
const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;

export default OurService;
