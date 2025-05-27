import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { metadata } from './config/metadata'

const inter = Inter({ subsets: ['latin'] })

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
} 