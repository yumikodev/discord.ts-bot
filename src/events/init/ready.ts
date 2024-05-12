import { ActivityType } from "discord.js";
import { setPresence } from "@/modules/presence";
import EventController from "@/modules/utils/event";
import config from "@/config";

export default new EventController("ready", async (client) => {
  console.log(`${client.user?.username} en linea!`);

  new setPresence(client, [
    {
      content: `${config.PREFIX}help - v${config.VERSION}`,
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
