import { Client } from "discord.js";
import { commands, slashs } from "../index";
import { join } from "node:path";
import fs from "node:fs";
import { Cmd } from "../types/cmd";
import { Int } from "../types/slash";

export default async (client: Client) => {
  // Command Handler
  const commandFiles = fs.readdirSync(join(__dirname, "../commands/cmd"));

  for (const folders of commandFiles) {
    const folder = fs.readdirSync(
      join(__dirname, `../commands/cmd/${folders}`)
    );

    for (const file of folder) {
      const command: Cmd = require(`../commands/cmd/${folders}/${file}`);
      commands.set(command.name, command);
    }
  }

  // Slash Command Handler
  const slashFiles = fs.readdirSync(join(__dirname, "../commands/slash"));

  for (const folders of slashFiles) {
    const folder = fs.readdirSync(
      join(__dirname, `../commands/slash/${folders}`)
    );

    for (const file of folder) {
      const command: Int = require(`../commands/slash/${folders}/${file}`);
      slashs.set(command.data.name, command);
    }
  }

  // Event handler
  const eventFiles = fs
    .readdirSync(join(__dirname, "../events"))
    .filter((file) => file.endsWith(".ts"));

  for (const file of eventFiles) {
    const e = require(`../events/${file}`);
    client.on(e.name, (...args) => e.run(client, ...args));
  }
};
