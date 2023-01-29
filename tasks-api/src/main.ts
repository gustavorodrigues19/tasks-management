/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()
import express, { Express } from 'express'
import bodyParser from 'body-parser'
import router from './routes'
import { logger } from './config/logger'

const PORT = process.env.PORT || 3333
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(PORT, () => logger.info('Server is running..'))
