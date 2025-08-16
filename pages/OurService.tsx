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
  serviceContent: { itemTitle: string; points: { text: string; subpoint?: string[] }[] }[];
}) => {
  const isSelected =
    serviceContent.length > 0 && serviceContent[0].itemTitle === item?.items[0]?.itemTitle;

  return (
    <ServiceItemWrapper selected={isSelected}>
      <p onClick={onClick}>{item?.title} &rarr;</p>
    </ServiceItemWrapper>
  );
};

const OurService = ({ title, overTitle }: PropsWithChildren<BasicSectionProps>) => {
  const [serviceContent, setServiceContent] = useState<
    { itemTitle: string; points: { text: string; subpoint?: string[] }[] }[]
  >(OurServicesData[0]?.items || []);

  const serviceContentHandler = ({ item }: { item: OurServicesDataType }) => {
    setServiceContent(item?.items);
  };

  return (
    <BasicSectionWrapper>
      <ContentContainer id="services">
        <CustomOverTitle>{overTitle}</CustomOverTitle>
        <Title>{title}</Title>
        <DescriptionText>
          We proudly offer the following services to our valued clients:
        </DescriptionText>
        <ServiceTitleWrapper>
          <ServiceTitle>
            {OurServicesData?.map((item, index) => (
              <ServicItem
                item={item}
                key={index}
                onClick={() => serviceContentHandler({ item })}
                serviceContent={serviceContent}
              />
            ))}
          </ServiceTitle>
          <ServiceContentWrapper>
            {serviceContent?.map((item, index) => (
              <ServiceTextWrapper key={index}>
                <h2>{item.itemTitle}</h2>
                <ul>
                  {item.points?.map((point, idx) => (
                    <li key={idx} style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>
                      {point.text}
                      {point.subpoint && point.subpoint.length > 0 && (
                        <ul
                          style={{
                            marginTop: '0.5rem',
                            marginLeft: '1.5rem',
                            listStyleType: 'circle',
                          }}
                        >
                          {point.subpoint.map((sub, subIdx) => (
                            <li
                              key={subIdx}
                              style={{ fontSize: '1.2rem', marginBottom: '0.3rem' }}
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </ServiceTextWrapper>
            ))}
          </ServiceContentWrapper>
        </ServiceTitleWrapper>
      </ContentContainer>
    </BasicSectionWrapper>
  );
};

/* Styled Components */
const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
  color: #222;
  line-height: 1.5;
  opacity: 80%;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const DescriptionText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  opacity: 80%;
  color: #222;
  margin-bottom: 2.5rem;
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ServiceTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  ${media('<=tablet')} {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ServiceTitle = styled.div`
  width: 100%;
`;

const ServiceContentWrapper = styled.div`
  background: #273b8a;
  padding: 30px;
  border-radius: 5px;
  color: white;
  width: 100%;
  height: 100%;
  min-height: 250px;
  margin-top: 20px;
`;

const ServiceTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }
`;

const ServiceItemWrapper = styled.div<{ selected: boolean }>`
  & > p {
    cursor: pointer;
    font-size: 2rem;
    margin-top: 15px;
    user-select: none;
    width: fit-content;
    transition: all 0.3s ease-in-out;
    color: ${({ selected }) => (selected ? '#273b8a' : 'inherit')};

    &:active {
      transform: scale(0.85);
    }
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

  ${media('<=desktop')} {
    flex-direction: column;
  }
`;

export default OurService;
