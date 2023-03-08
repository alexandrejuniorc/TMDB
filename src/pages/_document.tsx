import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '../../stitches.config'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />

      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />

      <body>
        <Header />

        <main>
          <Main />

          <NextScript />
        </main>

        <Footer />
      </body>
    </Html>
  )
}
