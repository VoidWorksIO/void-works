import { ArrowBigUpDash, Check, Chrome, LucideIcon, Smartphone, Vote } from 'lucide-react'


export interface Product {
  name: string
  icon: LucideIcon
  description: string
  color: string
  url: string
  linkText: string
}

export const products: Product[] = [
  {
    name: 'Checkmark',
    icon: Check,
    description: 'A to-do app built with keyboard power users in mind.',
    color: 'from-green-600/20 via-green-500/20 to-green-600/20',
    url: 'https://checkmark.day',
    linkText: 'Learn More',
  },
  {
    name: 'Spades',
    icon: Vote,
    description:
    'Improve your team\'s pointing poker sessions with our AI enhanced platform that integrates with Linear.',
    color: 'from-indigo-600/20 via-blue-500/20 to-purple-500/20',
    url: 'https://spades.poker',
    linkText: 'Learn More',
  },
  {
    name: 'GBx',
    icon: Smartphone,
    description: 'A harm reduction mobile application designed to promote safety and informed decision-making.',
    color: 'from-purple-600/20 via-violet-500/20 to-pink-500/20',
    url: 'https://apps.apple.com/us/app/gbx/id6749517571',
    linkText: 'Download on the App Store',
  },
  {
    name: 'Trawl',
    icon: ArrowBigUpDash,
    description: 'A VSCode/Cursor extension that auto-completes package names and versions, and highlights outdated dependencies.',
    color: 'from-green-600/20 via-lime-500/20 to-emerald-500/20',
    url: 'https://marketplace.visualstudio.com/items?itemName=VoidWorks.trawl',
    linkText: 'Learn More',
  },
  {
    name: 'Shortcut Assistant',
    icon: Chrome,
    description: 'Enhance your browsing experience with powerful keyboard shortcuts and productivity tools.',
    color: 'from-blue-600/20 via-blue-500/20 to-purple-600/20',
    url: 'https://chromewebstore.google.com/detail/shortcut-assistant/kmdlofehocppnlkpokdbiaalcelhedef',
    linkText: 'Install Extension',
  }
]
