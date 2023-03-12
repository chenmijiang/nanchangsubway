/** @format */

import { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'

export default function Document() {
  return (
    <Html lang="zh">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="南昌地铁网站，展示内容信息，周边信息" />
        <meta name="keywords" content="南昌，南昌地铁，地铁，景点，地铁路线" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

// Document.getInitialProps = async (ctx: DocumentContext): Promise<any> => {
//   const sheet = new ServerStyleSheet()
//   const originalRenderPage = ctx.renderPage

//   try {
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
//       })

//     const initialProps = await Document.getInitialProps(ctx)

//     return {
//       ...initialProps,
//       styles: (
//         <>
//           {initialProps.styles}
//           {sheet.getStyleElement()}
//         </>
//       ),
//     }
//   } finally {
//     sheet.seal()
//   }
// }
