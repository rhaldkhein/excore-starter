const production = process.env.NODE_ENV === 'production'
const debug = !!process.env.DEBUG

export default {

  env: {
    production,
    debug
  },

  db: {
    url: 'mongodb://localhost:27017/myapp',
    option: {
      useNewUrlParser: true
    }
  }

  // Add all your configurations here

}
