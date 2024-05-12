import { ActivityType, PresenceStatusData } from "discord.js";

declare type StatusType = {
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
