import { Client } from "discord.js";
const bot = new Client({ intents: [1,512,32768] });


bot.on("messageCreate", async(ctx) => {

  // if(!ctx.content.startsWith("//") || ctx.author.bot) return;
  
  
  const message = ctx.content;
  

  for(const i of ["gay","viado","tchola","biba","baitola"])
    if(message.includes(i))
      ctx.reply(":rainbow_flag:?");

});


bot.login("MTAyNjU1NjUzODc5OTc4NDAyOA.G6vA9_.ZWtBPy60aeeEiX3QGBzdya43pGKUpFvbbhxHiI");
