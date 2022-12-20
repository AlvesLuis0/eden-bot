import express from "express";


const app = express();
const date = new Date();
date.setHours(date.getHours() - 3);


app.get("/", (req, res) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  res.status(200);
	res.send(`Init at ${date.getHours()}:${date.getMinutes()}<br>
 	Last Ping at ${ping.getHours()}:${ping.getMinutes()}`);
});

export { app };
