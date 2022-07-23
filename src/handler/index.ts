import { Client } from "discord.js";
import fs from "node:fs";
import { join } from "node:path";
import { commands, slashs } from "..";
import { Command, SlashCommand } from "../types/Collections";

export default async (client: Client) => {
  try {
    /*-------- Nota: use Slash Commands --------*/
    // // Command Handler
    // const commandFiles = fs.readdirSync(join(__dirname, "../commands/cmd"));

    // for (const folders of commandFiles) {
    //   const folder = fs.readdirSync(
    //     join(__dirname, `../commands/cmd/${folders}`)
    //   );

    //   for (const file of folder) {
    //     const command: Command = require(`../commands/cmd/${folders}/${file}`);
    //     commands.set(command.name, command);
    //   }
    // }

    // Slash Command Handler
    const slashFiles = fs.readdirSync(join(__dirname, "../commands"));

    for (const folders of slashFiles) {
      const folder = fs.readdirSync(join(__dirname, `../commands/${folders}`));

      for (const file of folder) {
        const command: SlashCommand = require(`../commands/${folders}/${file}`);
        slashs.set(command.data.name, command);
      }
    }

    // Event handler
    const eventFiles = fs.readdirSync(join(__dirname, "../events"));

    for (const file of eventFiles) {
      const e = require(`../events/${file}`);
      client.on(e.event, (...args) => e.listener(client, ...args));
    }
  } catch (err) {
    console.error(err);
  }
};
