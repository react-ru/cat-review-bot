import mongoose from 'mongoose'

export const chat = new mongoose.Schema({
  id: Number,
  chat: Object, // Should be empty always
})

chat.methods.sendMessage = async function sendMessage(telegram, message) {
  await telegram.sendMessage(this.id, message.text, {
    parse_mode: 'HTML'
  })
}

chat.methods.leave = async function leave(telegram) {
  await telegram.leaveChat(this.id)
}
