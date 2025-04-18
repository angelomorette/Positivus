'use client';

import React from 'react';
import styled from 'styled-components';

const DivHeading = styled.div`
  height: 51px;
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
`;

const H2 = styled.h2`
  font-size: 40px;
  font-weight: 500;
  line-height: 100%;
  margin: 0px;
  display: flex;
  height: 51px;
  border-radius: 7px;
  border-color: #b9ff66;
  background-color: #b9ff66;
  gap: 10px;
  padding: 0px 7px 0px 7px;
  align-items: center;
`;
const P = styled.p`
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  margin: 0px;
  width: 580px;
`;

export default function SubHeading({ title, description }) {
  return (
    <DivHeading>
      <H2>{title}</H2>
      <P>{description}</P>
    </DivHeading>
  );
}
