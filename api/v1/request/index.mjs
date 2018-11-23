import express from 'express'
import awaitjs from '@awaitjs/express'
import { create } from './create'

export const request = express.Router()

request.post('/', awaitjs.wrap(create))
