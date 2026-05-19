// import { WebSocketServer } from "ws";
// let wss = null;
// export async function GET(request) {
//   if (!wss) {
//     wss = new WebSocketServer({ noServer: true });
//     wss.on("connection", (socket) => {
//       console.log("client connected");

//       socket.send("hello client");
//     });
//   }
//   return Response.json({ message: "ws server is running" }, { status: 200 });
// }
// app/api/socket/route.js

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "WebSocket endpoint exists",
  });
}
