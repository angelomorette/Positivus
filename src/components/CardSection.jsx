'use client';

import React from 'react';
import styled from 'styled-components';
import LinkComponent from './LinkComponent';
import Ilustration1 from '../../public/tokyo-magnifier-web-search-with-elements-2.svg';
import Ilustration2 from '../../public/tokyo-selecting-a-value-in-the-browser-window-1.svg';
import Ilustration3 from '../../public/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.svg';
import Ilustrarion4 from '../../public/tokyo-sending-messages-from-one-place-to-another-1.svg';
import Ilustration5 from '../../public/tokyo-many-browser-windows-with-different-information-1.svg';
import Ilustration6 from '../../public/tokyo-volumetric-analytics-of-different-types-in-web-browsers-2.svg';
import Image from 'next/image';

const Card = styled.div`
  width: 600px;
  height: 310px;
  display: flex;
  justify-content: space-between;
  border-radius: 45px;
  border: 1px solid var(--dark);
  padding: 50px;
  box-shadow: 0px 5px 0px 0px var(--dark);
  background-color: ${props => props.$bg || '#fff'};
`;

const CardGrid = styled.div`
  display: grid;
  margin-top: 80px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 40px;
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  background-color: ${props => (props.$whiteBg ? '#FFFFFF' : '#B9FF66')};
  padding: 0px 7px;
  font-size: 24px;
  font-weight: 500;
  border-radius: 7px;
  margin: 0;
  width: fit-content;
  display: inline-block;
  gap: 10px;
`;

const cardData = [
  {
    bg: '#F3F3F3',
    title: ['Search engine', 'optimization'],
    variant: 'black',
    image: Ilustration1,
  },
  {
    bg: '#B9FF66',
    title: ['Pay-per-click', 'advertising'],
    variant: 'black',
    bgWhite: true,
    image: Ilustration2,
  },
  {
    bg: '#191A23',
    title: ['Social media', 'marketing'],
    variant: 'whiteSecondary',
    bgWhite: true,
    image: Ilustration3,
  },
  {
    bg: '#F3F3F3',
    title: ['Email', 'marketing'],
    variant: 'black',
    image: Ilustrarion4,
  },
  {
    bg: '#B9FF66',
    title: ['Content', 'marketing'],
    variant: 'black',
    bgWhite: true,
    image: Ilustration5,
  },
  {
    bg: '#191A23',
    title: ['Analytics &', 'reporting'],
    variant: 'whiteSecondary',
    bgWhite: true,
    image: Ilustration6,
  },
];

export default function CardSection() {
  return (
    <CardGrid>
      {cardData.map((card, index) => (
        <Card $bg={card.bg} key={index}>
          <LeftContent>
            <TitleContainer>
              {card.title.map((line, i) => (
                <Title key={i} $whiteBg={card.bgWhite}>
                  {line}
                </Title>
              ))}
            </TitleContainer>
            <LinkComponent label="Learn More" variant={card.variant} />
          </LeftContent>
          <Image src={card.image} />
        </Card>
      ))}
    </CardGrid>
  );
}
