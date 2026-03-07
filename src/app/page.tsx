import type { Metadata } from 'next'
import Image from 'next/image'

import { AnimatedProductSection } from '@/components/animated-product-section'
import { FixedFooterLinks } from '@/components/fixed-footer-links'
import { Footer } from '@/components/footer'
import { ScrollIndicator } from '@/components/scroll-indicator'
import { Button } from '@/components/ui/button'


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
    'vscode extension',
    'cursor extension',
    'IDE extension',
    'package auto-complete',
    'dependency management',
    'outdated dependencies',
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
      '@type': 'SoftwareApplication',
      'name': 'Shortcut Assistant',
      'applicationCategory': 'BrowserApplication',
      'operatingSystem': 'Chrome',
      'description': 'Enhance your browsing experience with powerful keyboard shortcuts and productivity tools.',
      'url': 'https://chromewebstore.google.com/detail/shortcut-assistant/kmdlofehocppnlkpokdbiaalcelhedef',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
      },
    },
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
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Trawl',
      'applicationCategory': 'DeveloperApplication',
      'operatingSystem': 'Windows, macOS, Linux',
      'description': 'A VS Code and Cursor IDE extension that auto-completes packages and highlights out of date dependencies.',
      'url': 'https://marketplace.visualstudio.com/items?itemName=VoidWorks.trawl',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD',
      },
    },
  ]

  return (
    <main className="min-h-screen bg-black">
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

      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <Image
            src="/images/hero-background.jpg"
            alt="Abstract technology background with modern design elements"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority
          />
        </div>

        <div className="container mx-auto px-4 py-24 relative z-20">
          <div className="max-w-5xl space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1] text-balance">
              Solutions that matter, designed thoughtfully.
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Building innovative solutions across platforms and technologies. From browser extensions to mobile apps and web
              applications, we create tools that solve real-world problems.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                <a href="mailto:hello@voidworks.io">Get in touch</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto px-4 py-24 relative z-10">
        <AnimatedProductSection />
      </section>

      <Footer />
      <FixedFooterLinks />
    </main>
  )
}
