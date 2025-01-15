import { CLIENT_ID, GUILD_ID, TOKEN } from "@/config.js";
import { REST, Routes } from "discord.js";

export async function builder(commands: unknown[]) {
  const rest = new REST({ version: "10" }).setToken(TOKEN);

  console.log("Started refreshing application (/) commands.");

  await rest.put(
    Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), // Slash Commands en un servidor
    // Routes.applicationCommands(CLIENT_ID), // Slash Commands Globales
    {
      body: commands,
    },
  );

  console.log("Successfully reloaded application (/) commands.");
}
