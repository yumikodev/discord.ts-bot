import { relative, join } from "node:path";
import { Client } from "discord.js";
import { Callback } from "./browse-in-folders";
import EventController from "../utils/event";
import {
  PrefixCommandController,
  SlashCommandController,
} from "../utils/commands";

interface ESModule {
  default: unknown;
}

export class Handlers {
  static commands: unknown[] = [];

  // Prefix Commands Handler
  static prefixCommands(client: Client): Callback {
    return async (path, fileName) => {
      const rPath = relative(__dirname, path); // Relative path
      const command: ESModule = await import(join(rPath, fileName));

      if (command.default instanceof PrefixCommandController) {
        client.prefix.set(command.default.data.name, command.default);
      }
    };
  }

  // Slash Commands Handler
  static slashCommands(client: Client): Callback {
    return async (path, fileName) => {
      const rPath = relative(__dirname, path); // Relative path
      const command: ESModule = await import(join(rPath, fileName));

      if (command.default instanceof SlashCommandController) {
        client.slashs.set(command.default.data.name, command.default);
        this.commands.push(command.default.data.toJSON());
      }
    };
  }

  // Event Handler
  static events(client: Client): Callback {
    return async (path, fileName) => {
      const rPath = relative(__dirname, path); // Relative path
      const event: ESModule = await import(join(rPath, fileName));

      if (event.default instanceof EventController) {
        client.on(event.default.event, event.default.listener);
      }
    };
  }
}
