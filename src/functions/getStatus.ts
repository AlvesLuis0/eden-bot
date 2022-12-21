import { Message } from "discord.js";
import { myEmbed } from ".";
import { status } from "../entity/Status";


export function getStatus(ctx:Message<boolean>) {
  const embed = myEmbed(ctx);
  let text = `**Init at:**\n${status.getInit()}\n\n**Pings at:**`;

  for(const i of status.getPing())
    text += `\n${i}`;
  
  return embed.setDescription(text);
}
