import Ajv from 'ajv'
import { Request } from '../../../model/Request.mjs'
import requestSchema from '../../../schema/request.json'
import { Chat } from '../../../model/Chat.mjs'
import { Message } from '../../../model/Message.mjs'
import axios from 'axios'
import Debug from 'debug'
import moment from 'moment'

const ajv = new Ajv() 
const debug = Debug('bot')

const createRequest = req => {
  const valid = ajv.validate(requestSchema, req.body)
  if (!valid) {
    return res.status(400).json(ajv.errors)
  }
  return new Request({
    ...req.body,
    pubdate: new Date()
  })
}

const createMessage = request => {
  return new Message({
    text: [
      `<b>Пришла новая заявка на ревью!</b>`,
      `От: @${request.telegram}`,
      `Ссылка на код: <a href="${request.link}">${request.link}</a>`,
      `Комментарий:`,
      request.comment
    ].join('\n')
  })
}

const sendMessageToChats = async (request, bot) => {
  const chats = await Chat.find({})
  const message = createMessage(request)
  await message.save()
  for (let chat of chats) {
    await chat.sendMessage(bot.telegram, message)
  }
  request.message = message._id
}

const createTrelloCard = async request => {
  const { data } = await axios({
    method: 'POST',
    url: `${process.env.TRELLO_BASE_URL}/cards`,
    params: {
      key: process.env.TRELLO_API_KEY,
      token: process.env.TRELLO_API_TOKEN
    },
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name: request.link,
      desc: [
        `От: ${request.telegram}`,
        `Ссылка на код: ${request.link}`,
        'Комментарий:',
        request.comment
      ].join('\n'),
      pos: 'top',
      idList: process.env.NEW_CARD_LIST_ID
    }
  })
  request.trello = data
}

export const create = async (req, res) => {
  const request = createRequest(req)
  await sendMessageToChats(request, req.app.get('bot'))
  await createTrelloCard(request)
  await request.save()
  res.json(request)
}
