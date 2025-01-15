import { join } from "node:path";
import { Client } from "discord.js";
import { browseInFolders } from "./browse-in-folders.js";
import { Handlers } from "./handlers.js";
import { builder } from "../builder/index.js";

const __dirname = import.meta.dirname;

export async function Handler(client: Client) {
  try {
    // Slash Command Handler
    await browseInFolders(
      join(__dirname, "../../commands"),
      Handlers.prefixCommands(client),
      Handlers.slashCommands(client),
    );

    // Events Handler
    await browseInFolders(
      join(__dirname, "../../events"),
      Handlers.events(client),
    );

    // Load Slash Command
    await builder(Handlers.commands);
  } catch (err) {
    console.error(err);
  }
}
