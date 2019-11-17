import core from 'excore'
import * as startup from './startup'

// Create core application
const app = core()

// Configure services and application
app.configure(
  startup.configureServices,
  startup.configureApplication
)

// Hook to start event
app.on('start', provider => {
  return Promise.resolve()
    .then(() => provider.get('@server').listen())
})

// Fire it up!
app.start()
