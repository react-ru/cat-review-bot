import express from 'express'
import awaitjs from '@awaitjs/express'
import { create } from './create'
import { list } from './list'

export const request = express.Router()

request.get('/', awaitjs.wrap(list))
request.post('/', awaitjs.wrap(create))
