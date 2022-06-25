import { ExcludeEnum } from "discord.js";
import { ActivityTypes } from "discord.js/typings/enums";

declare type Status = [
  { type: ExcludeEnum<typeof ActivityTypes, "CUSTOM"> | undefined; content: string },
  { type: ExcludeEnum<typeof ActivityTypes, "CUSTOM"> | undefined; content: string },
  { type: ExcludeEnum<typeof ActivityTypes, "CUSTOM"> | undefined; content: string }
];
