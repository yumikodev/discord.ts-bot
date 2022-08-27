import { CommandBuilder } from "../../../components/CommandBuilder";

export default new CommandBuilder({
  data: {
    name: "say",
    alias: ["echo"],
    description: "Envia un mensaje a travéz de mi.",
  },
  async run(client, message, args) {
    try {
      let txt = args.join(" ");
      await message.delete();

      if (!txt)
        return await message.channel.send({
          content: "Tienes que poner el contenido.",
        });

      await message.channel.send({ content: txt });
    } catch (err) {
      console.log(err);
      // @ts-ignore
      await message.channel.send({ content: err.message });
    }
  },
});
