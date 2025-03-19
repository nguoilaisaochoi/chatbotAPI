const app = require("../app");

const PORT = process.env.PORT || 3001; 
const server = require("http").createServer(app);
const io = require("socket.io")(server);

server.listen(PORT, () => console.log("server runing on post" + PORT));
module.exports = { io, server };
