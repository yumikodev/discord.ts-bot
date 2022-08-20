import { CommandBuilder } from "../../../components/CommandBuilder";

module.exports = new CommandBuilder({
  data: {
    name: "say",
    alias: ["echo"],
    description: "",
  },
  async run(client, message, args) {
    try {
      let txt = args.join(" ");
      await message.delete();

      if (!txt)
        return await message.reply({
          content: "Tienes que poner el contenido.",
        });

      await message.channel.send({ content: txt });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      await message.reply({ content: err.message });
    }
  },
});
