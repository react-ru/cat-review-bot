import mongoose from 'mongoose'
import { chat } from './schema/chat'

export const Chat = mongoose.model('chat', chat)
