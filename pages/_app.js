import { NextUIProvider } from '@nextui-org/react'
import Layout from 'components/shared/Layout'
import { darkTheme, lightTheme } from 'configs/theme'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AppWrapper } from 'utils/context'
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
        <AppWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppWrapper>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default MyApp
