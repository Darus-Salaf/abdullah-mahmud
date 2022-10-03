import { API } from 'configs/config'
import Link from 'next/link'
import c from 'styles/blog.module.css'

export default function blog({ blogs }) {
  const styles = image => {
    return {
      backgroundImage: `linear-gradient(0deg, #7828c870, #7828c8), url('${image}')`,
      width: '100%',
      height: '200px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center'
    }
  }

  return (
    <div className='my-10 max-w-3xl px-5 mx-auto'>
      <h1 className='text-3xl'>Blogs</h1>
      <div className='my-4'>
        <div className='grid grid-cols-12 gap-2 sm:gap-4'>
          {blogs.response.map(item => (
            <div
              className='col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-4'
              key={item._id}
            >
              <Link href={`/blog/${item._id}`}>
                <div
                  className='text-center py-8 px-3 text-lg font-semibold rounded-md hover:scale-105 duration-100 text-[white] cursor-pointer hover:shadow-xl'
                  style={styles(item.image)}
                >
                  {item.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await fetch(`${API}/get-blogs`)
  const data = await response.json()
  return {
    props: {
      blogs: data
    }
  }
}
