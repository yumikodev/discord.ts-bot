import {
  CommandInteraction,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import { Bot } from "./Bot.js";

declare interface Command {
  data: {
    name: string;
    description: string;
    alias: string[];
  };
  run: (client: Bot, message: Message, args: string[]) => unknown;
}

declare interface SlashCommand {
  data: SlashCommandBuilder;
  run: (client: Bot, interaction: CommandInteraction) => unknown;
}

export { Command, SlashCommand };
