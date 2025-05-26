import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Edouard Forgeau - Personal Website',
  description: 'My personal website showcasing my work, experience, and interests',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        {children}
      </body>
    </html>
  )
} 