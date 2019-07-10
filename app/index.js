import core from 'excore'
import {
  configureServices,
  configureApplication
} from './startup'

// Create core application
const app = core()

// Configure and start application
app.configure(
  configureServices,
  configureApplication
).start()
