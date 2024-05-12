import EventController from "@/modules/utils/event";

export default new EventController("interactionCreate", async (int) => {
  if (!int.isChatInputCommand()) return;

  const command = int.client.slashs.get(int.commandName);
  try {
    if (!command) {
      await int.channel?.sendTyping();
      return await int.reply({
        content: "An error has ocurred",
        ephemeral: true,
      });
    }
    await int.channel?.sendTyping();
    await command.run(int.client, int);
  } catch (err) {
    console.error(err);

    await int.channel?.sendTyping();
    await int.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});
