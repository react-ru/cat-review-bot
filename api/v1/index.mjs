import express from 'express'
import { request } from './request'
import { chat } from './chat'

export const v1 = express.Router()

v1.use('/request', request)
v1.use('/chat', chat)
