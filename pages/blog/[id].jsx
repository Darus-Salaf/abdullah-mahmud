import { API } from 'configs/config'

export default function detailsBlog({ blog: { response: blog } }) {
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

// export async function getStaticPaths() {
//   const response = await fetch(`${API}/get-blogs`)
//   const data = await response.json()
//   const paths = data.response.map(item => ({ params: { id: `${item._id}` } }))
//   return { paths, fallback: 'blocking' }
// }
export async function getServerSideProps(context) {
  const { params } = context
  const response = await fetch(`${API}/get-blogs/${params.id}`)
  const data = await response.json()
  return {
    props: {
      blog: data
    }
  }
}
