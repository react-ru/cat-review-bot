import mongoose from 'mongoose'
import { request } from './schema/request'

export const Request = mongoose.model('request', request)
