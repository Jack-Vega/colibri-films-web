import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Colibri Films Mauritius — Film Production Services',
  description: 'Line production, location scouting, local crew and film rebate facilitation in Mauritius and the Indian Ocean region.',
  openGraph: {
    title: 'Colibri Films Mauritius',
    description: 'Local expertise. International standards.',
    url: 'https://www.colibrifilms.mu',
    siteName: 'Colibri Films Mauritius',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className}>{children}</body>
    </html>
  )
}
