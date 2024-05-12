import { ChannelType } from "discord.js";
import config from "@/config";
import EventController from "@/modules/utils/event";

export default new EventController("messageCreate", async (message) => {
  try {
    if (message.channel.type === ChannelType.DM) return;
    if (message.author.bot) return;

    const prefix = config.PREFIX;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();

    const cmd = message.client.prefix.find(
      (c) =>
        c.data.name === command ||
        (c.data.alias && c.data.alias.includes(`${command}`))
    );

    if (!cmd) {
      await message.channel.sendTyping();
      return await message.reply({
        content: `Command \`${command}\` does not exist`,
      });
    }

    await message.channel.sendTyping();
    await cmd.run(message.client, message, args);
  } catch (err) {
    console.log(err);
    await message.reply({ content: err.message });
  }
});
