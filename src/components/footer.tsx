import Link from 'next/link'

import { footerLinks } from '@/config/links'


export function Footer(): React.ReactNode {
  return (
    <footer className="mt-28 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6 pb-10 font-mono text-xs/normal text-muted-foreground">
      <span>
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        Void Works
      </span>
      <div className="flex items-center gap-6">
        {footerLinks.map((link) => {
          const Icon = link.icon
          const isExternal = link.external || link.href.startsWith('http')

          return (
            <Link
              key={link.href}
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {Icon && <Icon aria-hidden="true" className="size-3.5" />}
              {link.label}
            </Link>
          )
        })}
      </div>
    </footer>
  )
}
