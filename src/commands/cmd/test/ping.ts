import { Client, Message } from "discord.js";

module.exports = {
  name: "ping",
  alias: [],
  run(client: Client, message: Message, args: string[]) {
    message.reply("Pong!");
  },
};
