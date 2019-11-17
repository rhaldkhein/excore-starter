import { express } from 'excore'
import bodyParser from 'body-parser'

import DbContext from './models/context'

/**
 * Add and configure all your services here
 */
export function configureServices(services) {

  services.add(DbContext, 'db')

}

/**
 * Configure application (express)
 */
export function configureApplication(app) {

  app.set('view engine', 'pug')
  app.use(express.static('public'))

  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())

  //
  // Some excore's extension methods
  //

  // Enable controller endpoint routes
  app.useControllers()

  // Enable API endpoints (starting with "/api")
  app.useApiRoutes()

  // Enable routes defined in services
  // app.useServiceRoutes()

  // Custom 404 error page
  app.use((req, res) => res.render('404'))

}
