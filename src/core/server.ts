import appConfig, { app } from './app'

const startServer = async () => {
  const PORT = process.env.PORT || 5000

  appConfig()

  app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
  })
}

export default startServer
