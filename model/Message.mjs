import mongoose from 'mongoose'
import { message } from './schema/message'

export const Message = mongoose.model('message', message)
