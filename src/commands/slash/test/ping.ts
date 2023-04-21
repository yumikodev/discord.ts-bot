import { SlashCommandBuilder } from "discord.js";
import Slash from "../../../components/SlashCommand.js";

export default new Slash()
  .setData(
    new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Send a ping request.")
  )
  .Run(async (client, int) => {
    try {
      await int.reply({ content: "Pong!" });
      await int.followUp({
        content: `Latency: ${client.ws.ping}ms\nBot Latency: ${
          Date.now() - int.createdTimestamp
        }ms`,
      });
    } catch (err) {
      console.log(err);
      await int.reply({ content: err.message });
    }
  });
