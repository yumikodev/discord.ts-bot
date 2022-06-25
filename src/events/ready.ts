import { Activity, Client, Message } from "discord.js";
import config from "../config/config";
import { Status } from "../types/activity";

module.exports = {
  name: "ready",
  run(client: Client, message: Message) {
    console.clear();
    console.log(`${client.user?.username} is Online!`);

    async function $presence() {
      const status: Status = [
        {
          type: "PLAYING",
          content: `${config.prefix}help - v${config.version}`,
        },
        {
          type: "LISTENING",
          content: `${client.guilds.cache.size} ${
            client.guilds.cache.size > 1 ? "servidores" : "servidor"
          }`,
        },
        {
          type: "WATCHING",
          content: `${client.users.cache.size} ${
            client.users.cache.size > 1 ? "usuarios" : "usuario"
          }`,
        },
      ];
  
      const option = Math.floor(Math.random() * status.length);
      client.user?.setPresence({
        activities: [
          {
            name: status[option].content,
            type: status[option].type,
          },
        ],
        status: "idle"
      });
    }
    setInterval($presence, 8 * 1000);
    $presence();
  }
}