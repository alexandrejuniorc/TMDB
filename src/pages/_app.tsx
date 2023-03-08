import { queryClient } from '@/services/queryClient'
import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Header />

          <main>
            <Component {...pageProps} />
          </main>

          <Footer />
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}
