import express from 'express'
import path from 'path'

export const server = express.Router()

server.get('/', function(req, res) {
  res.sendFile(path.resolve('public/index.html'))
})

server.use(express.static('public'))
