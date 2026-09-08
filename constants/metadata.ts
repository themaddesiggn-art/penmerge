import { Metadata } from 'next'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, TWITTER_HANDLE } from './config'

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} - ${SITE_DESCRIPTION}`,
  description: SITE_DESCRIPTION,
  keywords: [
    'author services',
    'book publishing',
    'editing',
    'book design',
    'author branding',
    'book marketing',
    'publishing services',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Everything Your Book Needs`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    handle: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: `${SITE_NAME} - Everything Your Book Needs`,
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
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
  alternates: {
    canonical: SITE_URL,
  },
}

export const createPageMetadata = (
  title: string,
  description: string,
  pathname: string,
  ogImage?: string
): Metadata => ({
  title: `${title} | ${SITE_NAME}`,
  description,
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${pathname}`,
    type: 'website',
    siteName: SITE_NAME,
    images: ogImage
      ? [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ]
      : [
          {
            url: '/og-image.png',
            width: 1200,
            height: 630,
            alt: SITE_NAME,
          },
        ],
  },
  twitter: {
    card: 'summary_large_image',
    handle: TWITTER_HANDLE,
    title: `${title} | ${SITE_NAME}`,
    description,
  },
  alternates: {
    canonical: `${SITE_URL}${pathname}`,
  },
})
