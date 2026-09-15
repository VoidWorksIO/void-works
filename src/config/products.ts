export interface Product {
  name: string
  tag: string
  description: string
  url: string
  linkText: string
}

export const products: Product[] = [
  {
    name: 'Checkmark',
    tag: 'Desktop & web',
    description: 'A to-do app built with keyboard power users in mind.',
    url: 'https://checkmark.day',
    linkText: 'Learn more',
  },
  {
    name: 'Spades',
    tag: 'Web',
    description:
    'Improve your team\'s pointing poker sessions with our AI enhanced platform that integrates with Linear.',
    url: 'https://spades.poker',
    linkText: 'Visit spades.poker',
  },
  {
    name: 'GBx',
    tag: 'iOS',
    description: 'A harm reduction mobile application designed to promote safety and informed decision-making.',
    url: 'https://apps.apple.com/us/app/gbx/id6749517571',
    linkText: 'View on the App Store',
  },
  {
    name: 'Trawl',
    tag: 'Editor extension',
    description: 'A VSCode/Cursor extension that auto-completes package names and versions, and highlights outdated dependencies.',
    url: 'https://marketplace.visualstudio.com/items?itemName=VoidWorks.trawl',
    linkText: 'Get it on the Marketplace',
  },
]
