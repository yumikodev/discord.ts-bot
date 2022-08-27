import setPresence from "../components/setPresence";
import ClientEvent from "../components/ClientEvent";
import { ActivityType } from "discord.js";
import config from "../config/config";

export default new ClientEvent("ready", async (client) => {
  console.clear();
  console.log(`${client.user?.username} en linea!`);

  new setPresence(client, [
    {
      content: `${config.prefix}help - v${config.version}`,
      type: ActivityType.Playing,
      status: "idle",
    },
    {
      content: `${client.guilds.cache.size} ${
        client.guilds.cache.size === 1 ? "servidor" : "servidores"
      }`,
      type: ActivityType.Watching,
      status: "idle",
    },
    {
      content: `${client.users.cache.size} ${
        client.users.cache.size === 1 ? "usuario" : "usuarios"
      }`,
      type: ActivityType.Listening,
      status: "idle",
    },
  ]);
});
