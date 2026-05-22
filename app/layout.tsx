// app/layout.tsx
import type { Metadata } from 'next'
export const dynamic = 'force-dynamic'
export const metadata: Metadata = {
  title: 'Javari Stamp Stack | CR AudioViz AI — EIN 39-3646201',
  description: 'AI-powered philately collection manager',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#07080f' }}>
        {children}
      </body>
    </html>
  )
}
