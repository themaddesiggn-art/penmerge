import type { Metadata } from 'next'
import { DEFAULT_METADATA } from '@/constants/metadata'
import '@/app/globals.css'

export const metadata: Metadata = DEFAULT_METADATA

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
