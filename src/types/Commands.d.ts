import {
  ChatInputCommandInteraction,
  Message,
  SlashCommandBuilder,
} from "discord.js";
import { Bot } from "./Bot.js";

export namespace PrefixCommand {
  export interface Options {
    name: string;
    description: string;
    alias: string[];
  }

  export type Run = (client: Bot, message: Message, args: string[]) => unknown;
}

export namespace SlashCommand {
  export type Data = SlashCommandBuilder | object | unknown;

  export type Run = (
    client: Bot,
    interaction: ChatInputCommandInteraction
  ) => unknown;
}
