import { Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import { readdir } from "node:fs/promises";
import { join } from "node:path";
import config from "./config/config";

(async () => {
  try {
    const commands: any[] = [];

    const commandFiles = await readdir(join(__dirname, "./commands/slash"));

    for (const folders of commandFiles) {
      const folder = await readdir(
        join(__dirname, `./commands/slash/${folders}`)
      );

      for (const file of folder) {
        const command = require(`./commands/slash/${folders}/${file}`);
        commands.push(command.data.toJSON());
      }
    }

    const rest = new REST({ version: "10" }).setToken(`${config.token}`);

    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId), // Slash Commands on a server
      // Routes.applicationCommands(config.clientId), // Global Slash Commands
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (err) {
    console.error(err);
  }
})();
