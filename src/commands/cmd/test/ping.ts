import { Client, Message } from "discord.js";

module.exports = {
  name: "ping",
  alias: [],
  async run(client: Client, message: Message, args: string[]) {
    try {
      await message.channel.sendTyping();
      await message.reply({ content: "Pong!" });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      await message.reply({ content: err.message });
    }
  },
};
