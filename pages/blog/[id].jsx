export default function detailsBlog({ blog: { blog } }) {
  return (
    <div className='my-5 max-w-lg mx-auto'>
      <h1 className='text-3xl'>Detail Blogs</h1>
      <div className='my-4'>
        <div className='text-center'>
          <h1 className='text-2xl'>{blog.title}</h1>
          <p className='text-xl'>{blog.body}</p>
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/getBlogs`)
  const data = await response.json()
  const paths = data.blogs.map(item => ({ params: { id: `${item._id}` } }))
  return { paths, fallback: 'blocking' }
}
export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/getBlogs/${params.id}`
  )
  const data = await response.json()
  return {
    props: {
      blog: data
    }
  }
}
