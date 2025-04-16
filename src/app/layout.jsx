import { Space_Grotesk } from 'next/font/google'
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry'
import ClientLayout from '../lib/ClientLayout'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-space-grotesk',
})

export const metadata = {
  title: 'Positivus',
  description: 'Challenge to recreate the Figma layout',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>
            {children}
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
