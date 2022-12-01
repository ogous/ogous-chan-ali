import '../styles/globals.css'
import Header from './header'
import Footer from './footer'
import clsx from 'clsx'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={clsx('bg-red-500')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
