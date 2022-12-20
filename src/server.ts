import { app } from "./http";
import { Client, EmbedBuilder } from "discord.js";
import { askQuestion } from "./eden";
const bot = new Client({ intents: [1,512,32768] });


app.listen(3000, () => console.log("Server running!"));
bot.once("ready", () => console.log("Bot online!"));


bot.on("messageCreate", async(ctx): Promise<any> => {

  // if(!ctx.content.startsWith("//") || ctx.author.bot) return;
  const message = ctx.content.toLowerCase();
  const messageWithoutPrefix = message.slice(2);


  if(message.startsWith("//")) {
    const embed = new EmbedBuilder()
      .setColor("#e91e63")
      .setTimestamp()
      .setAuthor({
        name: ctx.author.username,
        iconURL: ctx.author.avatarURL()
      });

    try { embed.setDescription(await askQuestion(messageWithoutPrefix)) }
    catch { embed.setDescription("Sei não man") }

    return ctx.channel.send({embeds:[embed]});
  }
  

  for(const i of ["gay","viado","tchola","biba","baitola"])
    if(message.includes(i))
      return ctx.reply(":rainbow_flag:?");

});


bot.login("M$TAyNjU1NjUzODc5OTc4NDAyOA.Gk6X99.O2ZuVdbYqypildZ51zfEfxyM9fqKByA-P22tkM");
