const app = require('./../app');
const server = require("http").createServer(app);
const io = require("socket.io")(server)



io.of('/chatbox').on(connection ,(socket)=>{
    socket.on(message , (d)=>{
      console.log(d)
    })
    console.log('connectd to chat')
    console.log(io)
})