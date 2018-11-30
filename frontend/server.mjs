import express from 'express'
import path from 'path'

export const server = express.Router()

const sendFile = _path => (req, res) => {
  res.sendFile(path.resolve(_path))
}

server.get('/', sendFile('public/index.html'))
server.get('/requests/', sendFile('public/index.html'))
server.get('/chats/', sendFile('public/index.html'))

server.use(express.static('public'))
