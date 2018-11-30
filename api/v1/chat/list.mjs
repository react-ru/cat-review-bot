import { Chat } from '../../../model/Chat'
import { ListResponse } from '../../../lib/classes/ListResponse.mjs'

export const list = async (req, res) => {
  const telegram = req.app.get('bot').telegram
  const chats = await Chat.find({})
  for (let chat of chats) {
    chat.chat = await telegram.getChat(chat.id)
  }
  res.json(new ListResponse(chats))
}
