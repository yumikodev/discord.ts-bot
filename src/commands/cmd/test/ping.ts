import { CommandBuilder } from "../../../components/CommandBuilder";

module.exports = new CommandBuilder({
  data: {
    name: "ping",
    alias: ["p"],
    description: "Send a ping request.",
  },
  async run(client, message, args) {
    try {
      let msg = await message.reply({ content: "Pong!" });
      await msg.reply({
        content: `Latency: ${client.ws.ping}ms\nBot Latency: ${
          Date.now() - message.createdTimestamp
        }ms`,
      });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      await message.reply({ content: err.message });
    }
  },
});
