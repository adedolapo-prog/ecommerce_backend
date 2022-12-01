import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'

export const app = express()

const appConfig = () => {
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(cors())
  app.use(helmet())
  app.use(compression())
}

export default appConfig
