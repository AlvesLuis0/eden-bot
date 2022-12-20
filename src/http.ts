import express from "express";
import { status } from "./entity/Status";


const app = express();


app.get("/", (req, res) => {
  status.addPing();

  let page = status.getInit();
  for(const i of status.getPing())
    page += `<br>${i}`;

  res
    .status(200)
    .send(page);
});

export { app };
