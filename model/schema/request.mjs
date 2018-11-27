import mongoose from 'mongoose'

export const request = new mongoose.Schema({
  telegram: String,
  link: String,
  comment: String,
  message: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'messsage'
  },
  trello: Object,
  pubdate: Date
})
