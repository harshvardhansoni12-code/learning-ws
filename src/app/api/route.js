import { WebSocketServer } from "ws";
const port = 8080;
const wss = new WebSocketServer({ port: port });

wss.on("connection", (socket) => {
  socket.send("hello");
});
