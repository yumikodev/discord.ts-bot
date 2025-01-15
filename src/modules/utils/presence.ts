import {
  ActivityType,
  Client,
  PresenceData,
  PresenceStatusData,
} from "discord.js";

type StatusType = {
  type:
    | ActivityType.Playing
    | ActivityType.Streaming
    | ActivityType.Listening
    | ActivityType.Watching
    | ActivityType.Competing;
  content: string;
  status: PresenceStatusData;
  url?: string;
}[];

export function setPresence(client: Client<true>, statusOptions: StatusType) {
  let index = 0;
  let presence: PresenceData;

  setInterval(() => {
    index++;
    if (index >= statusOptions.length) index = 0;

    if (statusOptions[index].type !== ActivityType.Streaming) {
      presence = {
        activities: [
          {
            name: statusOptions[index].content,
            type: statusOptions[index].type,
          },
        ],
        status: statusOptions[index].status,
      };
    } else {
      presence = {
        activities: [
          {
            name: statusOptions[index].content,
            type: statusOptions[index].type,
            url: statusOptions[index].url,
          },
        ],
        status: statusOptions[index].status,
      };
    }

    client.user.setPresence(presence);
  }, 10 * 1000 /* <-- Cada 10 segundos */);
}
