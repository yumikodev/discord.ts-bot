import {
  Client,
  CommandInteraction,
  Message,
  SlashCommandBuilder,
} from "discord.js";

declare type Command = {
  name: string;
  alias: string[];
  run: (client: Client, message: Message, args: string[]) => void;
};

declare type SlashCommand = {
  data: SlashCommandBuilder;
  run: (client: Client, interaction: CommandInteraction) => void;
};

export { Command, SlashCommand };
