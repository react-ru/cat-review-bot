import mongoose from 'mongoose'

export const chat = new mongoose.Schema({
  id: Number
})

chat.methods.sendMessage = async function sendMessage(telegram, message) {
  await telegram.sendMessage(this.id, message.text, {
    parse_mode: 'HTML'
  })
}
