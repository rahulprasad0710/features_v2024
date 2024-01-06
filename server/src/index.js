const express = require("express");
const app = express();
const http = require("http");
const httpServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true,
    },
});

io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("chat-message", (msg) => {
        console.log("recieved message: " + msg);
        socket.emit("msg-from-server", {
            message: `msg from server: ${msg}`,
            username: socket.username,
        });
    });

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

app.get("/", (req, res) => {
    res.status(200).json("Hello World!");
});

const port = process.env.PORT || 3000;

httpServer.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
