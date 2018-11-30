import { Chat } from '../../../model/Chat'
import { OkResponse } from '../../../lib/classes/OkResponse.mjs'

export const leave = async (req, res) => {
  const telegram = req.app.get('bot').telegram
  const { id } = req.params
  const chat = await Chat.findOne({ id })
  await chat.leave(telegram)
  res.json(new OkResponse())
}
