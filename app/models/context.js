import debug from 'debug'
import mongoose from 'mongoose'
const log = debug('excore:database')

import User from './User'
import Blog from './Blog'

function DbContext(provider, config = {}) {
  return {

    User,
    Blog,
    // Add more models here

    async connect() {
      log('connecting')
      await mongoose.connect(
        config.url || 'mongodb://localhost:27017/myapp',
        config.options || { useNewUrlParser: true }
      )
      log('connected')
    }
  }
}

export default DbContext