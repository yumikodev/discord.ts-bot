import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, CommandInteraction } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Send a ping request."),
  async run(client: Client, int: CommandInteraction) {
    try {
      await int.reply({ content: "Pong!" });
      await int.followUp({
        content: `Latency: ${client.ws.ping}ms\nBot Latency: ${
          Date.now() - int.createdTimestamp
        }ms`,
      });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      await int.reply({ content: err.message });
    }
  },
};
