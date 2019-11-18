import { express } from 'excore'
import bodyParser from 'body-parser'

import DbContext from './models/context'
import UserService from './services/user'

/**
 * Add and configure all your services here
 */
export function configureServices(services) {

  // Add services
  services.add(DbContext, 'db')
  services.add(UserService, 'user')

  // Configure services
  services.configure('db', provider => {
    // We will get `db` object in config file which 
    // is managed by built-in `@config` service
    return provider.get('@config').get('db')
  })

}

/**
 * Configure application (express)
 */
export function configureApplication(app) {

  app.set('view engine', 'ejs')

  app.use(express.static('public'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  // Some excore's extension methods.
  // Enable controller endpoint routes
  app.useControllers()
  // Enable API endpoints (starting with "/api")
  app.useApiRoutes()

  // Custom 404 error page
  app.use((req, res) => res.render('404'))

}
