import { EventController } from "@/modules/controllers/event.js";

export default new EventController("interactionCreate", async (int) => {
  if (!int.isChatInputCommand()) return;
  if (!int.inCachedGuild()) return;

  const command = int.client.slashs.get(int.commandName);

  try {
    await int.channel?.sendTyping();

    if (!command)
      return await int.reply({
        content: "An error has ocurred",
        ephemeral: true,
      });

    await command.run(int);
  } catch (err) {
    console.error(err);

    await int.channel?.sendTyping();
    await int.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});
