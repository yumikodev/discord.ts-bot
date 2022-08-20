import { SlashCommandBuilder } from "@discordjs/builders";
import { Client, CommandInteraction } from "discord.js";

declare type SlashCmd = {
  data: SlashCommandBuilder;
  run(client: Client, interaction: CommandInteraction): Promise<void>;
};
