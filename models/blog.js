import mongoose, { Schema, model } from 'mongoose'

const blogSchema = new Schema(
  {
    title: {
      type: String
    },
    body: {
      type: String
    }
  },
  { timestamps: true }
)

mongoose.models = {}

export default model('blob', blogSchema)
