'use client';

import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';

const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #191A23;
    --darkGrey: #292A32;
    --white: #fff;
    --grey: #F3F3F3;
    --green: #B9FF66;
    --black: #000000;
    
    --background: var(--white);
    --foreground: var(--primary);
    --breakpoint: '768px';
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: var(--background);
    font-family: var(--font-space-grotesk);
    color: var(--foreground);
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }

  button,
  input,
  select,
  textarea,
  optgroup,
  option,
  label {
    font-family:  var(--font-space-grotesk);
  }
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100svh;
  padding: 60px 100px 0px 100px;
`;

export default function ClientLayout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Page>{children}</Page>
    </>
  );
}
