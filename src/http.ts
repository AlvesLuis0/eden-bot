import express from "express";


const app = express();


app.get("/", (req, res) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping at ${ping.getUTCHours()}:${ping.getUTCMinutes()}`);
  res.sendStatus(200);
});

export { app };
