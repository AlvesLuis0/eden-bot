import { app } from "./http";
import { Client, EmbedBuilder, Message } from "discord.js";
import { askQuestion } from "./eden";
import { status } from "./entity/Status"


const bot = new Client({ intents: [1,512,32768] });


function myEmbed(ctx: Message<boolean>) {
  const embed = new EmbedBuilder()
    .setColor("#e91e63")
    .setTimestamp()
    .setAuthor({
      name: ctx.author.username,
      iconURL: ctx.author.avatarURL()
    });

  return embed;
}


app.listen(3000, () => console.log("Server running!"));
bot.once("ready", () => console.log("Bot online!"));


bot.on("messageCreate", async(ctx): Promise<any> => {

  const message = ctx.content.toLowerCase();
  const messageWithoutPrefix = message.slice(2);


  if(message == "//status") {
    const embed = myEmbed(ctx);
    
    let description = `Init at:\n${status.getInit()}\n\nPings at:`;
    for(const i of status.getPing())
      description += `\n${i}`;

    embed.setDescription(description);

    return ctx.channel.send({embeds: [embed]});
  }


  if(message.startsWith("//")) {
    const embed = myEmbed(ctx);

    try { embed.setDescription(await askQuestion(messageWithoutPrefix)) }
    catch { embed.setDescription("Sei não man") }

    ctx.channel.send({embeds:[embed]});
  }
  

  for(const i of ["gay","viado","tchola","biba","baitola"])
    if(message.includes(i))
      return ctx.reply(":rainbow_flag:?");

});


bot.login("MTAyNjU1NjUzODc5OTc4NDAyOA.Gk6X99.O2ZuVdbYqypildZ51zfEfxyM9fqKByA-P22tkM");
