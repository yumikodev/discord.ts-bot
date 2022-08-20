import { Command, SlashCommand } from "../types/Collections";
import { readdir } from "node:fs/promises";
import { commands, slashs } from "..";
import { Client } from "discord.js";
import { join } from "node:path";

export default async (client: Client) => {
  try {
    /*-------- Nota: use Slash Commands --------*/
    // Command Handler
    const commandFiles = await readdir(join(__dirname, "../commands/cmd"));

    for (const folders of commandFiles) {
      const folder = await readdir(
        join(__dirname, `../commands/cmd/${folders}`)
      );

      for (const file of folder) {
        const command: Command = require(`../commands/cmd/${folders}/${file}`);
        commands.set(command.data.name, command);
      }
    }

    // Slash Command Handler
    const slashFiles = await readdir(join(__dirname, "../commands/slash"));

    for (const folders of slashFiles) {
      const folder = await readdir(
        join(__dirname, `../commands/slash/${folders}`)
      );

      for (const file of folder) {
        const command: SlashCommand = require(`../commands/slash/${folders}/${file}`);
        slashs.set(command.data.name, command);
      }
    }

    // Event handler
    const eventFiles = await readdir(join(__dirname, "../events"));

    for (const file of eventFiles) {
      const e = require(`../events/${file}`);
      client.on(e.event, (...args) => e.listener(client, ...args));
    }
  } catch (err) {
    console.error(err);
  }
};
