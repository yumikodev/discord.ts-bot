import { ActivityType, Client, PresenceData } from "discord.js";
import { StatusType } from "./types/status";

export class setPresence {
  constructor(client: Client<true>, statusOptions: StatusType) {
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
