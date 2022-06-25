import { Client, Message } from "discord.js";
import { commands } from "../index";
import config from "../config/config";
import { Cmd } from "../types/cmd";

module.exports = {
  name: "messageCreate",
  async run(client: Client, message: Message) {
    try {
      if (message.channel.type === "DM") return;
      if (message.author.bot) return;

      const prefix = config.prefix;

      if (!message.content.startsWith(prefix)) return;

      const args = await message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/g);
      const command = args.shift()?.toLowerCase();

      // @ts-ignore
      const cmd: Cmd = commands.find(
        (c: any) => c.name === command || (c.alias && c.alias.includes(command))
      );

      if (!cmd) {
        await message.channel.sendTyping();
        return await message.reply({
          content: `Command \`${prefix}${command}\` does not exist`,
        });
      }

      if (cmd) return cmd.run(client, message, args);
    } catch (err: any) {
      message.channel.send(`Error: ${err.message}`);
    }
  },
};
