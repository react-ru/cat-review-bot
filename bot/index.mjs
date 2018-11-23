import Telegraf from 'telegraf'
import { start } from './start'
import { quit } from './quit'

export const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start(start)
bot.command('quit', quit)
