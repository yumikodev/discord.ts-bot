import { Routes } from "discord-api-types/v9";
import { REST } from "@discordjs/rest";
import config from "./config/config";
import { join } from "node:path";
import fs from "node:fs";

const commands: any[] = [];

const commandFiles = fs.readdirSync(join(__dirname, "./commands/slash"));

for (const folders of commandFiles) {
  const folder = fs.readdirSync(join(__dirname, `./commands/slash/${folders}`));

  for (const file of folder) {
    const command = require(`./commands/slash/${folders}/${file}`);
    commands.push(command.data.toJSON());
  }
}

// @ts-ignore
const rest = new REST({ version: 9 }).setToken(config.token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(config.clientId, config.guildId), // Slash commands on a server
      // Routes.applicationCommands(config.clientId), // Global slash commands
      {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (err) {
    console.error(err);
  }
})();
