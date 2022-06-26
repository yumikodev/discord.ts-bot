import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, CommandInteraction } from "discord.js";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("Manda un mensaje a travéz de mi.")
    .addStringOption((option) =>
      option
        .setName("content")
        .setDescription("El contenido del mensaje.")
        .setRequired(true)
    ),
  async run(client: Client, int: CommandInteraction) {
    try {
      const txt = int.options.getString("content");

      await int.channel?.sendTyping();
      await int.reply({ content: "Mensaje enviado.", ephemeral: true });
      await int.channel?.send({ content: txt });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      await int.reply({ content: err.message });
    }
  },
};
