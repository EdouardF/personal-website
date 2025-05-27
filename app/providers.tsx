'use client'

import { ThemeProvider } from 'next-themes'
import { FloatingElements } from './components/FloatingElements'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <FloatingElements />
      {children}
    </ThemeProvider>
  )
} 