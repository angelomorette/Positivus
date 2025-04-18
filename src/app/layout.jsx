'use client';

import { Space_Grotesk } from 'next/font/google';
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import ClientLayout from '../lib/ClientLayout';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-space-grotesk',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        <title>Positivus</title>
        <meta name="description" content="Challenge to recreate the Figma layout" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
