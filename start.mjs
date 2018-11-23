#!/usr/local/bin/node

import 'dotenv/config'
import mongoose from 'mongoose'
import { bot } from './bot'
import { api } from './api'

mongoose.connect(process.env.MONGOOSE_URI)

bot.startPolling()

api.set('bot', bot)

api.listen(
  api.get('port'),
  api.get('host'),
  () => {
    api.get('debug')(`Server listening at ${api.get('host')}:${api.get('port')}`)
  })
