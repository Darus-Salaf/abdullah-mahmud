import Link from 'next/link'

export default function blog({ blogs }) {
  return (
    <div className='my-5 max-w-lg mx-auto'>
      <h1 className='text-3xl'>Blogs</h1>
      <div className='my-4'>
        <div className='grid grid-cols-12 gap-8'>
          {blogs.blogs.map(item => (
            <div className='col-span-4' key={item._id}>
              <Link href={`/blog/${item._id}`}>{item.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/getBlogs`)
  const data = await response.json()
  return {
    props: {
      blogs: data
    },
    revalidate: 3
  }
}
