import Head from 'next/head'
import { useTheme as useNextTheme } from 'next-themes'
import { Button, Switch, useTheme } from '@nextui-org/react'

export default function Home() {
  const { setTheme } = useNextTheme()
  const { isDark, type, theme } = useTheme()

  return (
    <div>
      <Head>
        <title>Abdullah Mahmud</title>
        <meta
          name='description'
          content='Official website of Sheikh Abdullah Mahmud'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className='text-center text-3xl'>Abdullah Mahmud</h1>

        <div className='text-center text-5xl h-96'>
          The current theme is: {type}
          <Switch
            checked={isDark}
            onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </div>
        <div className='text-center text-5xl h-96'>
          The current theme is: {type}
          <Switch
            checked={isDark}
            onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </div>
        <div className='text-center text-5xl h-96'>
          The current theme is: {type}
          <Switch
            checked={isDark}
            onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </div>
        <div className='text-center text-5xl h-96'>
          The current theme is: {type}
          <Switch
            checked={isDark}
            onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
          />
        </div>
        <div className='text-center'>
          <Button
            style={{ backgroundColor: theme.colors.success, color: 'white' }}
          >
            colorfull button
          </Button>
        </div>
      </main>
    </div>
  )
}
