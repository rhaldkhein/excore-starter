import core from 'excore'
import * as startup from './startup'

// Create core application
const app = core()

// Configure services and application
app.configure(
  startup.configureServices,
  startup.configureApplication
)

// Hook to start event and start required services
app.on('start', async provider => {
  await provider.get('db').connect()
  await provider.get('@server').listen()
})

// Fire it up!
app.start()
