import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ProjectsSection } from '@/components/projects-section'


const APP_NAME = 'Void Works'
const APP_DESCRIPTION = 'Creating innovative solutions across platforms and technologies'
const DEFAULT_URL = 'https://voidworks.io'

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  applicationName: APP_NAME,
  metadataBase: new URL(DEFAULT_URL),
  authors: [{ name: 'Void Works' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: DEFAULT_URL,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    url: DEFAULT_URL,
    images: [
      {
        url: '/images/hero-background.jpg',
        width: 1920,
        height: 1080,
        alt: 'Void Works - Innovative technology solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: ['/images/hero-background.jpg'],
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  keywords: [
    'software solutions',
    'cross-platform development',
    'mobile applications',
    'web applications',
    'browser extensions',
    'technology consulting',
    'custom software',
    'digital solutions',
    'harm reduction',
    'GBx',
    'GHB',
    'GBL',
    'productivity tools',
    'innovation',
    'agile',
    'estimation',
    'linear',
    'planning poker',
    'project management',
    'team collaboration',
    'scrum',
    'sprint planning',
    'agile estimation',
    'remote planning',
  ],
}

export default function Home(): React.ReactNode {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': 'Void Works',
    'url': DEFAULT_URL,
    'logo': `${DEFAULT_URL}/favicon.ico`,
    'description': APP_DESCRIPTION,
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': 'hello@voidworks.io',
      'contactType': 'customer service',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': APP_NAME,
    'url': DEFAULT_URL,
    'description': APP_DESCRIPTION,
  }

  const productSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'MobileApplication',
      'name': 'GBx',
      'applicationCategory': 'HealthApplication',
      'operatingSystem': 'iOS',
      'description': 'A harm reduction mobile application designed to promote safety and informed decision-making.',
      'url': 'https://apps.apple.com/us/app/gbx/id6749517571',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Spades',
      'applicationCategory': 'BusinessApplication',
      'description': 'Improve your team\'s pointing poker sessions with our AI enhanced platform that integrates with Linear.',
      'url': 'https://spades.poker',
    },
  ]

  return (
    <div className="min-h-screen text-base">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="mx-auto max-w-[1080px] px-8">
        <Header />
        <main>
          <Hero />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
