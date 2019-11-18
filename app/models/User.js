import { Schema, model } from 'mongoose'

const userSchema = new Schema({

  name: String
  // Add more fields

})

export default model('User', userSchema)