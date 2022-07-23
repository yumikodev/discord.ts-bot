import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";

export type AppCommandOptions = {
  data: SlashCommandBuilder | any;
  run: (client: Client, interaction: CommandInteraction) => void;
};
