import {
  CommandController,
  CommandType,
} from "@/modules/controllers/commands.js";
import { ChannelType } from "discord.js";

export default new CommandController(CommandType.Prefix)
  .setData({
    name: "ping",
    alias: [],
    description: "Send a ping request",
  })
  .setRun(async (message) => {
    if (message.channel.type !== ChannelType.GuildText) return;

    const { client } = message;

    try {
      const msg = await message.reply({ content: "Pong!" });
      await msg.reply({
        content: `Latency: ${client.ws.ping}ms\nBot Latency: ${
          Date.now() - message.createdTimestamp
        }ms`,
      });
    } catch (err) {
      console.log(err);
      await message.channel.send({ content: err.message });
    }
  });
