import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'


const APP_NAME = 'Spades'
const APP_DESCRIPTION = 'Improve your team\'s pointing poker sessions with our AI enhanced platform that integrates with Linear.'
const DEFAULT_URL = 'https://voidworks.io/spades'

export const metadata: Metadata = {
  title: `${APP_NAME} | Void Works`,
  description: APP_DESCRIPTION,
  openGraph: {
    type: 'website',
    title: `${APP_NAME} | Void Works`,
    description: APP_DESCRIPTION,
    url: DEFAULT_URL,
    images: [
      {
        url: '/images/spades-screenshot.jpg',
        width: 1920,
        height: 1080,
        alt: 'Spades - AI-powered planning poker for agile teams',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${APP_NAME} | Void Works`,
    description: APP_DESCRIPTION,
    images: ['/images/spades-screenshot.jpg'],
  },
}

const technologies = [
  { name: 'Next.js', color: 'bg-white/10 text-white border-white/20' },
  { name: 'TypeScript', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { name: 'Vercel', color: 'bg-white/10 text-white border-white/20' },
  { name: 'PostgreSQL', color: 'bg-blue-600/10 text-blue-300 border-blue-600/20' },
  { name: 'Prisma', color: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' },
]

export default function SpadesPage(): React.ReactNode {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Title Section */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-balance">
              Spades
            </h1>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl text-pretty">
              Spades is a modern planning poker platform designed to streamline your team&apos;s estimation sessions. 
              With AI-powered insights and seamless Linear integration, Spades helps agile teams make more accurate 
              and consistent story point estimations. Whether you&apos;re running sprint planning or backlog refinement, 
              Spades provides real-time collaboration tools that keep your team aligned and productive.
            </p>
          </div>

          {/* Screenshot */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-blue-500/10 z-10 pointer-events-none" />
            <Image
              src="/images/spades-screenshot.jpg"
              alt="Spades application interface showing planning poker cards and team collaboration features"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium text-white/50 uppercase tracking-wider">
              Built With
            </h2>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech.name}
                  className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${tech.color} transition-colors hover:bg-white/5`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <a href="https://spades.poker" target="_blank" rel="noopener noreferrer">
                Visit Spades
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
