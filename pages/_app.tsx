import type { AppProps } from "next/app"
import "../styles/globals.css"
import "../styles/main.css"
import "tailwindcss/tailwind.css"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Big Boss Burgers</title>
        <link rel="shortcut icon" href="../favicon.svg" />
        <link rel="image_src" href="../link-preview.png" />
        <meta property="og:image" content="../link-preview.png" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
