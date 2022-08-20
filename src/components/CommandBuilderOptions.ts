import {
  Client,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
  Message,
} from "discord.js";

export type SlashCommandOptions = {
  data: SlashCommandBuilder | any;
  run: (
    client: Client,
    interaction: ChatInputCommandInteraction
  ) => Promise<void | any>;
};

export type CommandOptions = {
  data: {
    name: string;
    description: string;
    alias: string[];
  };
  run(client: Client, message: Message, args: string[]): Promise<void | any>;
};
