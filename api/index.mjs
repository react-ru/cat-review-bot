import debug from 'debug'
import express from 'express'
import cors from 'express-cors'
import body from 'body-parser'
import { v1 } from './v1'

export const api = express()

api.set('port', process.env.PORT)
api.set('host', process.env.HOST)
api.set('debug', debug('api'))

api.use(cors())
api.use(body.json())
api.use('/api/v1', v1)
