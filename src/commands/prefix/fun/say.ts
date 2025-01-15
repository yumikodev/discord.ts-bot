import {
  CommandController,
  CommandType,
} from "@/modules/controllers/commands.js";
import { ChannelType } from "discord.js";

export default new CommandController(CommandType.Prefix)
  .setData({
    name: "say",
    alias: ["echo"],
    description: "Envia un mensaje a travéz de mi.",
  })
  .setRun(async (message, args) => {
    if (message.channel.type !== ChannelType.GuildText) return;

    try {
      const txt = args.join(" ");
      await message.delete();

      if (!txt)
        return await message.channel.send({
          content: "Tienes que poner el contenido.",
        });

      await message.channel.send({ content: txt });
    } catch (err) {
      console.log(err);
      await message.channel.send({ content: err.message });
    }
  });
