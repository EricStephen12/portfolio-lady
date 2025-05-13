import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import ScrollProgress from '@/components/ScrollProgress'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Anny's Chin's - Premium Chin Chin Delights",
  description: "Experience 15+ years of authentic, crunchy Chin Chin. Vanilla, Milk, Coconut, and Cinnamon varieties available for events, gifts, and special occasions.",
  keywords: "Chin Chin, Nigerian snacks, premium Chin Chin, event catering, gift packages, vanilla Chin Chin, milk Chin Chin, coconut Chin Chin, cinnamon Chin Chin",
  openGraph: {
    title: "Anny's Chin's - Premium Chin Chin Delights",
    description: "Experience 15+ years of authentic, crunchy Chin Chin. Vanilla, Milk, Coconut, and Cinnamon varieties available for events, gifts, and special occasions.",
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: "Anny's Chin's Logo",
      },
    ],
  },
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://annyschins.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/logo.jpg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
