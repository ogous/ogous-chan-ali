import Script from 'next/script'

export default function Head() {
  return (
    <>
      <title>Ogous Chan Ali</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="name" content="Ogous Chan Ali" />
      <meta name="description" content="Welcome to my personal web site." />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env['NEXT_PUBLIC_GOOGLE_ANALYTICS']}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env['NEXT_PUBLIC_GOOGLE_ANALYTICS']}');
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            `}
      </Script>
    </>
  )
}
