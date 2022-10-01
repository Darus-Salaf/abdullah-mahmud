import blog from 'models/blog'
import connectDb from 'configs/db'

const handler = async (req, res) => {
  try {
    const blogs = await blog.find()
    res.status(200).json({ blogs })
  } catch (error) {
    res.status(404).json({ error, message: error.message })
  }
}

export default connectDb(handler)
