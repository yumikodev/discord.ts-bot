import { Client, Message } from "discord.js";

module.exports = {
  name: "say",
  alias: [],
  async run(client: Client, message: Message, args: string[]) {
    const txt = args.slice(0).join(" ");
    await message.channel.sendTyping();

    if (!txt)
      return await message.channel.send("Tienes que escribir el contenido.");

    await message.channel.send(txt);
  },
};
