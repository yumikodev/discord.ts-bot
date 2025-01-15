import {
  CommandController,
  CommandType,
} from "@/modules/controllers/commands.js";
import { SlashCommandBuilder } from "discord.js";

export default new CommandController(CommandType.Slash)
  .setData(
    new SlashCommandBuilder()
      .setName("ping")
      .setDescription("Send a ping request."),
  )
  .setRun(async (int) => {
    try {
      await int.reply({ content: "Pong!" });
      await int.followUp({
        content: `Latency: ${int.client.ws.ping}ms\nBot Latency: ${
          Date.now() - int.createdTimestamp
        }ms`,
      });
    } catch (err) {
      console.log(err);
      await int.reply({ content: err.message });
    }
  });
