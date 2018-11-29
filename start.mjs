#!/usr/local/bin/node --experimental-modules

import 'dotenv/config'
import mongoose from 'mongoose'
import { bot } from './bot'
import { server as frontendServer } from './frontend/server.mjs'
import { api } from './api'

console.group('process.env =')
console.log(process.env)
console.groupEnd()

mongoose.connect(process.env.MONGOOSE_URI)

bot.startPolling()

api.set('bot', bot)

api.use(frontendServer)

api.listen(
  api.get('port'),
  api.get('host'),
  () => {
    api.get('debug')(`Server listening at ${api.get('host')}:${api.get('port')}`)
  })
