const server = require("http").createServer();
const io = require("socket.io")(server);

module.exports = { io, server };