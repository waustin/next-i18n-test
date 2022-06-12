import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export default function Document() {
  return (
    <Html>
      <Head>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#317EFB"/>`

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}