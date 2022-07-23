import { SlashCommandBuilder } from "discord.js";
import AppCommand from "../../components/AppCommand";

module.exports = new AppCommand({
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Send a ping request."),
  async run(client, int) {
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
});
