const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
server.listen(3000, () => {
    console.log('Server đang chay tren cong 3000');
});

module.exports = { io, server };
