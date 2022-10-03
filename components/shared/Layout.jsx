import Siedebar from './Siedebar'
import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <>
      <Siedebar />
      <div className='ml-0 md:ml-52'>
        <header className='block md:hidden'>
          <Navbar />
        </header>
        {children}
        {/* <button
          onClick={() => {
            if (window !== undefined) {
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className='text-right py-6 text-white font-bold bg-primary'
        >
          got to top
        </button> */}
      </div>
      <footer className='text-center py-2 md:hidden bg-green-500'>
        <p>
          Made with 💖 by{' '}
          <a className=' underline' href='https://fb.com/rabibinsalam'>
            dev
          </a>
        </p>
      </footer>
    </>
  )
}
