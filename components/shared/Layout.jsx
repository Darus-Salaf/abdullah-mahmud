import { useTheme } from '@nextui-org/react'
import Navbar from './Navbar'
import Siedebar from './Siedebar'

export default function Layout({ children }) {
  const { theme } = useTheme()

  return (
    <>
      <header>
        <Navbar />
      </header>
      <Siedebar />
      <div className='ml-0 sm:ml-32'>{children}</div>
      <footer className='text-center py-2 bg-green-500'>this is footer</footer>
    </>
  )
}
