import { EmbedBuilder, Message } from "discord.js";
import { askToEden } from "./askToEden";
import { getStatus } from "./getStatus";


export function myEmbed(ctx:Message) {
  return new EmbedBuilder()
    .setAuthor({
    name: ctx.author.username,
    iconURL: ctx.author.avatarURL()
  })
    .setTimestamp()
    .setColor("#E91E63")
}


export default {
  askToEden,
  getStatus
}
