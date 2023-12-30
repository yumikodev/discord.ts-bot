import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { Bot } from "../types/Bot.js";
import { REST, Routes } from "discord.js";
import config from "../config/config.js";
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url));

async function builder(commands: unknown[]) {
  const rest = new REST({ version: "10" }).setToken(config.token);

  console.log("Started refreshing application (/) commands.");

  await rest.put(
    Routes.applicationGuildCommands(config.clientId, config.guildId), // Slash Commands en un servidor
    // Routes.applicationCommands(config.clientId), // Slash Commands Globales
    {
      body: commands,
    }
  );

  console.log("Successfully reloaded application (/) commands.");
}

export default async (client: Bot) => {
  const commands = [];

  try {
    /*-------- Nota: use Slash Commands --------*/
    // Command Handler
    const commandFiles = await readdir(join(__dirname, "../commands/prefix"));

    for (const folders of commandFiles) {
      const folder = await readdir(
        join(__dirname, `../commands/prefix/${folders}`)
      );

      for (const file of folder) {
        const command = await import(`../commands/prefix/${folders}/${file}`);
        client.prefix.set(command.default.data.name, command.default);
      }
    }

    // Slash Command Handler
    const slashFiles = await readdir(join(__dirname, "../commands/slash"));

    for (const folders of slashFiles) {
      const folder = await readdir(
        join(__dirname, `../commands/slash/${folders}`)
      );

      for (const file of folder) {
        const command = await import(`../commands/slash/${folders}/${file}`);
        client.slashs.set(command.default.data.name, command.default);
        commands.push(command.default.data.toJSON());
      }
    }

    // Slash Command
    await builder(commands);

    // Event handler
    const eventFiles = await readdir(join(__dirname, "../events"));

    for (const file of eventFiles) {
      const e = await import(`../events/${file}`);
      client.on(e.default.event, (...args) =>
        e.default.listener(client, ...args)
      );
    }
  } catch (err) {
    console.error(err);
  }
};
