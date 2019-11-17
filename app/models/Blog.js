import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

var blogSchema = new Schema({

  title: String,
  body: String,
  author: { type: ObjectId, ref: 'User' },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now }

})

export default model('Blog', blogSchema)