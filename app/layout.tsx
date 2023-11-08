import '../styles/globals.css'
import { Lato, Poppins } from 'next/font/google'
import Header from './header'
import Footer from './footer'
import clsx from 'clsx'

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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
