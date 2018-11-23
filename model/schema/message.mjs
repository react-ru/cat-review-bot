import mongoose from 'mongoose'

export const message = new mongoose.Schema({
  text: String
})
