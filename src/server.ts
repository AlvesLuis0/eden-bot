import { app } from "./http";
import { Client } from "discord.js";
import { askQuestion } from "./eden";
const bot = new Client({ intents: [1,512,32768] });


app.listen(3000, () => console.log("Server running!"));
bot.once("ready", () => console.log("Bot online!"));


bot.on("messageCreate", async(ctx): Promise<any> => {

  // if(!ctx.content.startsWith("//") || ctx.author.bot) return;
  const message = ctx.content.toLowerCase();
  const messageWithoutPrefix = message.slice(2);


  if(message.startsWith("//")) {
    try { ctx.reply(await askQuestion(messageWithoutPrefix)) }
    catch { ctx.reply("Sei não man") } 
  }
  

  for(const i of ["gay","viado","tchola","biba","baitola"])
    if(message.includes(i))
      return ctx.reply(":rainbow_flag:?");

});


bot.login("M$TAyNjU1NjUzODc5OTc4NDAyOA.GsbFYL.o9u9p4Nod6NpC0e5YT1AR1SzSnMkA7FjilhvfQ");
