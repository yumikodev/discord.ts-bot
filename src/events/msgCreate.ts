import { ChannelType } from "discord.js";
import { commands } from "..";
import ClientEvent from "../components/ClientEvent";
import config from "../config/config";
import { Command } from "../types/Collections";

module.exports = new ClientEvent("messageCreate", async (client, message) => {
  try {
    if (message.channel.type === ChannelType.DM) return;
    if (message.author.bot) return;

    const prefix = config.prefix;

    if (!message.content.startsWith(prefix)) return;

    const args: string[] = message.content
      .slice(prefix.length)
      .trim()
      .split(/ +/g);
    const command = args.shift()?.toLowerCase();

    // @ts-ignore
    const cmd: Command = commands.find((c) => c.data.name === command || (c.data.alias && c.data.alias.includes(command)));

    if (!cmd)
      return await message.reply({
        content: `Command \`${command}\` does not exist`,
      });

    await message.channel.sendTyping();
    await cmd.run(client, message, args);
  } catch (err) {
    console.log(err);
    // @ts-ignore
    await message.reply({ content: err.message });
  }
});
