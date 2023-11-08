import './globals.css'
import { Lato, Poppins } from 'next/font/google'
import clsx from 'clsx'
import { Metadata } from 'next'
import Script from 'next/script'

const lato = Lato({
  variable: '--font-lato',
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '700', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Ogous Chan Ali',
  description:
    'Hi I am Ogous Chan, I am a full-stack software engineer focused to Typescript and Web3, using React, React Native and Node.js'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={clsx(lato.variable, poppins.variable, 'bg-layer text-text')}
      >
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env['NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID']}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env['NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID']}');
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            `}
        </Script>
      </body>
    </html>
  )
}
