const app = require('./app')
const port = process.env.PORT || 3000
const socketServer = require("http").createServer(app);
// handles socket connection betweeen 2 players on the server
const socketConfig = {
    cors: {
        origin: "*"
    }
};
const io = require("socket.io")(socketServer, socketConfig);
const sockPort = null;


// console.log(io)


app.get("/",(req,res) => {
    res.sendFile("index.html");
})

socketServer.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}\nsocket on ${sockPort}\n sockets: ${io.sockets}`)
})

io.on("connection", socket => {
    console.log("fired")
    console.log(`socket id: ${socket.id}`);
});
