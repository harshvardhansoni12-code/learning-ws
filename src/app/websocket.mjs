// websocket.js

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("client connected");

  socket.send("hello client");

  socket.on("message", (message) => {
    console.log(message.toString());

    socket.send(`echo: ${message}`);
  });

  socket.on("close", (socket) => {
    socket.send("client disconnected");
  });
});

console.log("ws://localhost:8080");
