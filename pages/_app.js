import { NextUIProvider } from '@nextui-org/react'
import Layout from 'components/shared/Layout'
import { darkTheme, lightTheme } from 'configs/theme'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme,
        dark: darkTheme
      }}
    >
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
