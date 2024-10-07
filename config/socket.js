const server = require("http").createServer();
const io = require("socket.io")(server, {
    cors: {
      origin: "*",
    },
  });
  
module.exports = { io, server };