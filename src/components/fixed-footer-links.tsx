'use client'

import { useEffect, useState } from 'react'

import { footerLinks } from '@/config/links'


export function FixedFooterLinks(): React.ReactNode {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = (): void => {
      // eslint-disable-next-line no-magic-numbers
      setIsVisible(window.scrollY < 50) // Hide the footer links if user has scrolled more than 50px
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 transition-opacity duration-300">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-end gap-6">
          {footerLinks.map((link) => {
            const Icon = link.icon
            const isExternal = link.external || link.href.startsWith('http')

            return (
              <a
                key={link.href}
                href={link.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-sm text-white hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md px-2 py-1"
              >
                {Icon && <Icon className="w-4 h-4" />}
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
