import '../styles/globals.css'
import { Lato, Poppins } from 'next/font/google'
import clsx from 'clsx'
import { Metadata } from 'next'

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
    'Hi I am Ogous Chan, I am a full-stack software engineer focused to Typescript and Web3, using React, React Native, Node.js'
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
      </body>
    </html>
  )
}
