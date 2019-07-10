const production = process.NODE_ENV === 'production'

export default {

  env: {
    production
  },

  server: {
    apiBaseUrl: '/api',
    port: 3000
  }

  // Add all your custom config here

}
