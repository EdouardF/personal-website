import { Metadata } from 'next'
import { siteConfig } from './site'

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  icons: {
    icon: '/favicon.ico',
  },
} 