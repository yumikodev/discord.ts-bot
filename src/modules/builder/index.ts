import config from "@/config";
import { REST, Routes } from "discord.js";

export async function builder(commands: unknown[]) {
  const rest = new REST({ version: "10" }).setToken(config.TOKEN);

  console.log("Started refreshing application (/) commands.");

  await rest.put(
    Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID), // Slash Commands en un servidor
    // Routes.applicationCommands(config.clientId), // Slash Commands Globales
    {
      body: commands,
    },
  );

  console.log("Successfully reloaded application (/) commands.");
}
