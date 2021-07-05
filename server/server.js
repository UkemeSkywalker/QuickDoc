const { Socket } = require("socket.io")

const io = require("socket.io")(3001, {
  cors:{
    origin: "http://localhost:3000",
    method: ['GET', 'POST']
  }
})

io.on("connection", Socket => { 
  console.log("connected");
})