import { Client, Message } from "discord.js";

module.exports = {
  name: " ",
  alias: [],
  async run(client: Client, message: Message, args: string[]) {
    try {



    } catch (err) {
      console.log(err);
      // @ts-ignore
      await message.reply({ content: err.message });
    }
  },
};
