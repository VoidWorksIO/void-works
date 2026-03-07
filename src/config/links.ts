import { Activity, Mail } from 'lucide-react'


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
