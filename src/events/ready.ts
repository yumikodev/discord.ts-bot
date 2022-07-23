import ClientEvent from "../components/ClientEvent";
import config from "../config/config";
import { ActivityType } from "discord.js";
import ClientActivityPresence from "../components/ClientPresence";

module.exports = new ClientEvent("ready", async (client) => {
  console.clear();
  console.log(`${client.user?.username} en linea!`);

  new ClientActivityPresence(client, [
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
