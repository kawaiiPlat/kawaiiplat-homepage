import '../styles/globals.css'
import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

// from https://chakra-ui.com/guides/getting-started/nextjs-guide
import { extendTheme } from '@chakra-ui/react'
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
    500: '#153e75'
  },
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
