const express=require('express')
const socket=require('socket.io')
const app=express()
const server=app.listen(8000,()=>
{
    console.log('the port is listening at 8000.....')
})
app.use(express.static(__dirname))
const io=socket(server)
io.on('connection',(socket)=>
{
    socket.on("chat",(data)=>
{
    io.sockets.emit("chat",data)
})
 socket.on('typing',(data)=>
{
  socket.broadcast.emit("typing",data)
})
})