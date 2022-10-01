import blog from 'models/blog'
import connectDb from 'configs/db'

const handler = async (req, res) => {
  try {
    const blogs = await blog.create(req.body)
    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(500).json({ error, message: error.message })
  }
}

export default connectDb(handler)
