import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
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
  title: 'VoyageLocal — Discover India, Your Way',
  description:
    "India's travel marketplace for hotels, activities, restaurants & transport. Book verified local experiences all in one place.",
  keywords:
    'India travel, hotels India, travel activities, local experiences, transport booking, travel marketplace',
  openGraph: {
    title: 'VoyageLocal — Discover India, Your Way',
    description:
      "India's travel marketplace for hotels, activities, restaurants & transport.",
    url: 'https://swaraah.in',
    siteName: 'VoyageLocal',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VoyageLocal — Discover India, Your Way',
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
      <body className={`${inter.className} bg-[#0D1B2A] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
