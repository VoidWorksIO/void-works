import { Activity } from 'lucide-react'


export const CONTACT_EMAIL = 'hello@voidworks.io'
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`

export interface FooterLink {
  label: string
  href: string
  icon?: typeof Activity
  external?: boolean
}

export const footerLinks: FooterLink[] = [
  {
    label: 'Status',
    href: 'https://status.voidworks.io',
    icon: Activity,
    external: true,
  }
]
