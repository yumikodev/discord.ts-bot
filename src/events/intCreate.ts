import { Client, Interaction } from "discord.js";
import { slashs } from "../index";
import { SlashCmd } from "../types/slash";

module.exports = {
  name: "interactionCreate",
  async run(client: Client, interaction: Interaction) {
    if (!interaction.isCommand()) return;

    // @ts-ignore
    const command: SlashCmd = slashs.get(interaction.commandName);

    if (!command)
      return await interaction.reply({
        content: "An error has ocurred",
        ephemeral: true,
      });

    try {
      await command.run(client, interaction);
    } catch (err) {
      console.error(err);

      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  },
};
