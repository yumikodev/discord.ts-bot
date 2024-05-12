import { SlashCommandController } from "@/modules/utils/commands";
import { SlashCommandBuilder } from "discord.js";

export default new SlashCommandController()
  .setData(
    new SlashCommandBuilder()
      .setName("say")
      .setDescription("Envia un mensaje a travéz de mi.")
      .addStringOption((option) =>
        option
          .setName("content")
          .setDescription("El contenido del mensaje.")
          .setRequired(true),
      ),
  )
  .Run(async (client, int) => {
    try {
      const txt = int.options.get("content");

      await int.reply({
        content: "Mensaje enviado!",
        ephemeral: true,
      });
      await int.channel?.send({ content: `${txt?.value}` });
    } catch (err) {
      console.log(err);
      await int.reply({ content: err.message });
    }
  });
