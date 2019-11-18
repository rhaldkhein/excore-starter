const production = process.env.NODE_ENV === 'production'
const debug = !!process.env.DEBUG

export default {

  env: {
    production,
    debug
  },

  db: {
    url: 'mongodb://localhost:27017/excore-app',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  }

  // Add more configurations here

}
