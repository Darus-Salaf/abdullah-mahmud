import { API } from 'configs/config'
import Link from 'next/link'

export default function blog({ blogs }) {
  return (
    <div className='my-10 max-w-2xl px-5 mx-auto'>
      <h1 className='text-3xl'>Blogs</h1>
      <div className='my-4'>
        <div className='grid grid-cols-12 gap-8'>
          {blogs.response.map(item => (
            <div className='col-span-4' key={item._id}>
              <Link href={`/blog/${item._id}`}>{item.title}</Link>
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
