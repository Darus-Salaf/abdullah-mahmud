import { API } from 'configs/config'
import Image from 'next/image'
import { useAppContext } from 'utils/context'

export default function DetailsBlog({ blog: { response: blog } }) {
  const [size, setSize] = useAppContext()
  return (
    <div className='my-10 max-w-2xl px-5 mx-auto'>
      <div className='my-4'>
        <div className='w-full rounded-t-2xl overflow-hidden'>
          <Image
            src={blog.image}
            width='100%'
            height='100%'
            layout='responsive'
            alt={blog.title}
          />
        </div>
        <h1
          style={{ fontSize: `${size / 10}rem` }}
          className='text-primary bg-lite border-l-4 border-primary pl-3 py-3 font-bold rounded-b-md'
        >
          {blog.title}
        </h1>
        <p
          style={{ fontSize: `${size / 10}rem` }}
          className='text-start mt-4 prewrap'
        >
          {blog.body}
        </p>
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
