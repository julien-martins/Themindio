const express = require('express')
const { pathToFileURL } = require('url')
const app = express()
const port = 3000

var path = require('path')

const server= require('http').Server(app)
const io = require('socket.io')(server)

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root: path.join(__dirname, '../client')})
})

io.on('connection', (socket)=>{
    console.log(`connecte au client ${socket.id}`)
    socket.on('disconnect', ()=>{
        console.log(`${socket.id} s'est deconnecte`)
    })
})

server.listen(port, ()=>{
    console.log("Listening on port " + port + "...");
})