import { Chat } from '../model/Chat.mjs'

export const start = async ctx => {
  let chat = await Chat.findOne({
    id: ctx.chat.id
  })

  if (!chat) {
    chat = new Chat({
      id: ctx.chat.id
    })
    await chat.save()
  }
}
