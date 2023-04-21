import { ChannelType } from "discord.js";
import ClientEvent from "../components/ClientEvent.js";
import config from "../config/config.js";

export default new ClientEvent("messageCreate", async (client, message) => {
  try {
    if (message.channel.type === ChannelType.DM) return;
    if (message.author.bot) return;

    const prefix = config.prefix;

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift()?.toLowerCase();

    const cmd = client.commands.find(
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
    await cmd.run(client, message, args);
  } catch (err) {
    console.log(err);
    await message.reply({ content: err.message });
  }
});
