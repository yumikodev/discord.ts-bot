import { Routes } from "discord.js";
import { REST } from "@discordjs/rest";
import { readdirSync } from "node:fs";
import { join } from "node:path";
import config from "./config/config";

const commands: any[] = [];

const commandFiles = readdirSync(join(__dirname, "./commands"));

for (const folders of commandFiles) {
  const folder = readdirSync(join(__dirname, `./commands/${folders}`));

  for (const file of folder) {
    const command = require(`./commands/${folders}/${file}`);
    const a = require("./commands/test/ping");
    console.log(a.data);
    commands.push(command.data.toJSON());
  }
}

const rest = new REST({ version: "10" }).setToken(`${config.token}`);

(async () => {
  try {
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
