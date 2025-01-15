import { CLIENT_ID, GUILD_ID, TOKEN } from "@/config.js";
import { REST, Routes } from "discord.js";
import { Logger } from "../utils/logger.js";

export async function builder(commands: unknown[]) {
  const logger = new Logger("Builder");
  const rest = new REST({ version: "10" }).setToken(TOKEN);

  logger.log("Started refreshing application (/) commands.");

  await rest.put(
    Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), // Slash Commands en un servidor
    // Routes.applicationCommands(CLIENT_ID), // Slash Commands Globales
    {
      body: commands,
    },
  );

  logger.log("Successfully reloaded application (/) commands.");
}
