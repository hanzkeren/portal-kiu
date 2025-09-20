import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Kiu Media - Digital Marketing Agency | Google Ads, TikTok Ads, Meta Ads & Web Development',
  description: 'Kiu Media is a leading digital marketing agency specializing in Google Ads, TikTok Ads, Meta (Facebook & Instagram) Ads, and modern website development. Boost your online presence with our expert services.',
  keywords: 'digital marketing, Google Ads, TikTok Ads, Meta Ads, Facebook Ads, Instagram Ads, website development, PPC, social media marketing',
  authors: [{ name: 'Kiu Media' }],
  creator: 'Kiu Media',
  publisher: 'Kiu Media',
  openGraph: {
    title: 'Kiu Media - Digital Marketing Agency',
    description: 'Leading digital marketing agency specializing in Google Ads, TikTok Ads, Meta Ads, and website development.',
    url: 'https://kiumedia.com',
    siteName: 'Kiu Media',
    images: [
      {
        url: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0092fb91-4b9b-4007-b8d6-bfdde1b0adee.png',
        width: 1200,
        height: 630,
        alt: 'Kiu Media - Digital Marketing Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kiu Media - Digital Marketing Agency',
    description: 'Leading digital marketing agency specializing in Google Ads, TikTok Ads, Meta Ads, and website development.',
    images: ['https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8560d2ef-001a-4c24-8037-ed24ae01d0e2.png'],
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
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.svg" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen`}>
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  )
}