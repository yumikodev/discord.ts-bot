import Command from "../../../components/Command.js";

export default new Command()
  .setData({
    name: "ping",
    alias: [],
    description: "Send a ping request",
  })
  .Run(async (client, message) => {
    try {
      const msg = await message.reply({ content: "Pong!" });
      await msg.reply({
        content: `Latency: ${client.ws.ping}ms\nBot Latency: ${
          Date.now() - message.createdTimestamp
        }ms`,
      });
    } catch (err) {
      console.log(err);
      await message.channel.send({ content: err.message });
    }
  });
