import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Swaraah — Discover India, Your Way',
  description:
    "India's travel marketplace for hotels, activities, restaurants & transport. Book verified local experiences all in one place.",
  keywords:
    'India travel, hotels India, travel activities, local experiences, transport booking, travel marketplace',
  openGraph: {
    title: 'Swaraah — Discover India, Your Way',
    description:
      "India's travel marketplace for hotels, activities, restaurants & transport.",
    url: 'https://swaraah.in',
    siteName: 'Swaraah',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swaraah — Discover India, Your Way',
    description:
      "India's travel marketplace for hotels, activities, restaurants & transport.",
  },
  metadataBase: new URL('https://swaraah.in'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-[#F7F9FF] text-[#0F2D6B] antialiased`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-2GE0G31REL" />
    </html>
  )
}
