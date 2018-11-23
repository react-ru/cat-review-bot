import express from 'express'
import { request } from './request'

export const v1 = express.Router()

v1.use('/request', request)
