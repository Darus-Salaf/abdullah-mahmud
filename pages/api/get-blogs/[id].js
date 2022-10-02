import blog from 'models/blog'
import connectDb from 'configs/db'

const handler = async (req, res) => {
  try {
    const response = await blog.findById(req.query.id)
    res.status(200).json({ response })
  } catch (error) {
    res.status(404).json({ error, message: error.message })
  }
}

export default connectDb(handler)
