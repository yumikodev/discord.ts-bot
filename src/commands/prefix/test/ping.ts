import { PrefixCommandController } from "@/modules/utils/commands";
import { ChannelType } from "discord.js";

export default new PrefixCommandController()
  .setData({
    name: "ping",
    alias: [],
    description: "Send a ping request",
  })
  .Run(async (client, message) => {
    if (message.channel.type !== ChannelType.GuildText) return;

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
