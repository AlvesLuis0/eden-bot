import { app } from "./http";
import { Client } from "discord.js";
import functions from "./functions";


const bot = new Client({ intents: [1,512,32768] });


app.listen(3000, () => console.log("Server running!"));
bot.once("ready", () => console.log("Bot online!"));


bot.on("messageCreate", async(ctx): Promise<any> => {


  const message = ctx.content.toLowerCase();
  const messageWithoutPrefix = message.slice(2);


  if(message == "//status") {
    return ctx.channel.send({embeds: [functions.getStatus(ctx)]});
  }

  if(message.startsWith("//")) {
    ctx.channel.send({embeds:[await functions.askToEden(ctx, messageWithoutPrefix)]});
  }


});


bot.login("M$TAyNjU1NjUzODc5OTc4NDAyOA.Gvah_C.InJ-A_3WWUO29iXD5cljcZ_va9F7A0mgSFC17E");
