import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Instrument_Sans } from 'next/font/google'

import { Widget as ProductlaneWidget } from '@/components/productlane/widget'

import './globals.css'


const instrumentSans = Instrument_Sans({
  variable: '--font-instrument-sans',
  subsets: ['latin'],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Void Works',
  description: 'Developer tools for the modern era',
}

function RootLayout({children}: Readonly<{children: React.ReactNode}>): React.ReactNode {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        {children}
        <ProductlaneWidget />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
