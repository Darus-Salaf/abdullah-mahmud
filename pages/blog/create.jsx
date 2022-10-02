import { Button, Input, Textarea } from '@nextui-org/react'
import axios from 'axios'
import { API } from 'configs/config'
import { useState } from 'react'

export default function create() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    title: '',
    slug: '',
    image: '',
    body: '',
    tag: ''
  })

  const handleChange = e =>
    setData({ ...data, [e.target.name]: e.target.value })

  const handleFile = e => {
    setLoading(true)
    const image = new FormData()
    image.set('key', process.env.NEXT_PUBLIC_IMG)
    image.append('image', e.target.files[0])

    axios
      .post('https://api.imgbb.com/1/upload', image)
      .then(res => {
        setData({
          ...data,
          image: res.data.data.display_url.toString()
        })
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        console.log(err)
        alert('error occured, try again')
      })
  }

  const handlePost = () => {
    axios
      .post(`${API}/post-blog`, data)
      .then(res => {
        if (res.message === 'ok') {
          alert('Succeed!')
        }
      })
      .catch(err => alert(`error : ${err.message}`))
  }

  return (
    <div className=' max-w-2xl py-12 mx-auto'>
      <h1 className='text-3xl'>Create Blog</h1>
      <div className='my-8'>
        <Input
          onChange={handleChange}
          name='title'
          fullWidth
          labelPlaceholder='Title'
          status='success'
        />
      </div>
      <div className='my-8'>
        <Input
          onChange={handleChange}
          name='slug'
          fullWidth
          labelPlaceholder='Slug'
          status='success'
        />
      </div>
      <div className='my-8'>
        <input onChange={handleFile} type='file' />
        <div className='my-2 text-lg text-red-500'>
          {loading && 'loading...'}
        </div>
      </div>
      <div className='my-8'>
        <Textarea
          onChange={handleChange}
          name='body'
          fullWidth
          labelPlaceholder='Body'
          status='success'
        />
      </div>
      <div className='my-8'>
        <Input
          onChange={handleChange}
          name='tag'
          fullWidth
          labelPlaceholder='Tag'
          status='success'
        />
      </div>
      <div className='my-8'>
        <Button onClick={handlePost} color='success' shadow flat>
          Post
        </Button>
      </div>
    </div>
  )
}
