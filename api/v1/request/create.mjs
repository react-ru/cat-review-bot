import Ajv from 'ajv'
import { Request } from '../../../model/Request.mjs'
import requestSchema from '../../../schema/request.json'
import { Chat } from '../../../model/Chat.mjs'
import { Message } from '../../../model/Message.mjs'

const ajv = new Ajv() 

export const create = async (req, res) => {
  const bot = req.app.get('bot')
  const valid = ajv.validate(requestSchema, req.body)
  if (!valid) {
    return res.status(400).json(ajv.errors)
  }
  const request = new Request(req.body)
  await request.save()
  res.json(request)
  // ---------------------------
  const chats = await Chat.find({})
  const message = new Message({
    text: [
      `<b>Пришла новая заявка на ревью!</b>`,
      `От: @${request.telegram}`,
      `Ссылка на код: <a href="${request.link}">${request.link}</a>`,
      `Комментарий:`,
      request.comment
    ].join('\n')
  })
  for (let chat of chats) {
    await chat.sendMessage(bot.telegram, message)
  }
  // ---------------------------
  await message.save()
  request.message = message._id
  await request.save()
}
