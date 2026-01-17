import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'IKASUM BATAM - Ikatan Keluarga Sumbawa Kota Batam',
  description: 'Website resmi Ikatan Keluarga Sumbawa Kota Batam (IKASUM BATAM). Organisasi yang menghimpun masyarakat Sumbawa yang berdomisili di Batam.',
  keywords: 'IKASUM, Sumbawa, Batam, Ikatan Keluarga, Organisasi, Komunitas',
  authors: [{ name: 'IKASUM BATAM' }],
  openGraph: {
    title: 'IKASUM BATAM - Ikatan Keluarga Sumbawa Kota Batam',
    description: 'Website resmi Ikatan Keluarga Sumbawa Kota Batam',
    url: 'https://ikasum-batam.org',
    siteName: 'IKASUM BATAM',
    images: [
      {
        url: '/images/ikasum-logo.png',
        width: 800,
        height: 600,
        alt: 'Logo IKASUM BATAM',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IKASUM BATAM - Ikatan Keluarga Sumbawa Kota Batam',
    description: 'Website resmi Ikatan Keluarga Sumbawa Kota Batam',
    images: ['/images/ikasum-logo.png'],
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <head>
        <link rel="canonical" href="https://ikasum-batam.org" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/ikasum-logo.png" />
      </head>
      <body className={`${inter.className} font-poppins`}>{children}</body>
    </html>
  )
}
