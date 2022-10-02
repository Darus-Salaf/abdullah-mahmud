import { useTheme } from '@nextui-org/react'
import Navbar from './Navbar'
import Siedebar from './Siedebar'

export default function Layout({ children }) {
  const { theme } = useTheme()

  return (
    <>
      <Siedebar />
      <div className='ml-0 md:ml-40'>
        <header>
          <Navbar />
        </header>
        {children}
      </div>
      <footer className='text-center py-2 bg-green-500'>this is footer</footer>
    </>
  )
}
