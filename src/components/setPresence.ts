import { ActivityType, PresenceData } from "discord.js";
import { StatusType } from "../types/StatusType.js";
import { Bot } from "../types/Bot.js";

class setPresence {
  constructor(client: Bot<true>, statusOptions: StatusType) {
    setInterval(() => {
      const options = Math.floor(Math.random() * statusOptions.length);
      let presence: PresenceData;

      if (statusOptions[options].type !== ActivityType.Streaming) {
        presence = {
          activities: [
            {
              name: statusOptions[options].content,
              type: statusOptions[options].type,
            },
          ],
          status: statusOptions[options].status,
        };
      } else {
        presence = {
          activities: [
            {
              name: statusOptions[options].content,
              type: statusOptions[options].type,
              url: statusOptions[options].url,
            },
          ],
          status: statusOptions[options].status,
        };
      }
      client.user.setPresence(presence);
    }, 10 * 1000 /* <-- Cada 10 segundos */);
  }
}

export default setPresence;
