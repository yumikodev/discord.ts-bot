import { ActivityType } from "discord.js";
import { EventController } from "@/modules/controllers/event.js";
import { setPresence } from "@/modules/utils/presence.js";
import { VERSION, PREFIX } from "@/config.js";
import { Logger } from "@/modules/utils/logger.js";

export default new EventController("ready", (client) => {
  const logger = new Logger("Ready");
  logger.log(`${client.user.username} ready!`);

  setPresence(client, [
    {
      content: `${PREFIX}help - v${VERSION}`,
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
