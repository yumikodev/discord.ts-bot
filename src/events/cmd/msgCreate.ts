import { ChannelType } from "discord.js";
import { PREFIX } from "@/config.js";
import { EventController } from "@/modules/controllers/event.js";

export default new EventController("messageCreate", async (message) => {
  if (message.channel.type === ChannelType.DM) return;
  if (message.author.bot) return;

  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
  const command = args.shift()?.toLowerCase();

  const cmd = message.client.prefix.find(
    (c) =>
      c.data.name === command ||
      (c.data.alias && c.data.alias.includes(`${command}`)),
  );

  try {
    if (!cmd) {
      await message.channel.sendTyping();
      return await message.reply({
        content: `Command \`${command}\` does not exist`,
      });
    }

    await message.channel.sendTyping();
    await cmd.run(message, args);
  } catch (err) {
    console.log(err);
    await message.reply({ content: err.message });
  }
});
