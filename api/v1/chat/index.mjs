import express from 'express'
import awaitjs from '@awaitjs/express'
import { list } from './list'
import { leave } from './leave'

export const chat = express.Router()

chat.get('/', awaitjs.wrap(list))
chat.post('/:id/leave', awaitjs.wrap(leave))
