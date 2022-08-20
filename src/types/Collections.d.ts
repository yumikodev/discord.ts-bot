import {
  Client,
  CommandInteraction,
  Message,
  SlashCommandBuilder,
} from "discord.js";

declare type Command = {
  data: {
    name: string;
    description: string;
    alias: string[];
  };
  run: (client: Client, message: Message, args: string[]) => Promise<void>;
};

declare type SlashCommand = {
  data: SlashCommandBuilder;
  run: (client: Client, interaction: CommandInteraction) => Promise<void>;
};

export { Command, SlashCommand };
