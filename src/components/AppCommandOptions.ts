import { Client, ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export type AppCommandOptions = {
  data: SlashCommandBuilder | any;
  run: (client: Client, interaction: ChatInputCommandInteraction) => void;
};
