import { relative, join } from "node:path";
import { Client } from "discord.js";
import { Callback } from "./browse-in-folders.js";
import { EventController } from "../controllers/event.js";
import { isPrefix, isSlash } from "../controllers/commands.js";
import { Logger } from "../utils/logger.js";
import { PREFIX } from "@/config.js";

interface ESModule {
  default: unknown;
}

const __dirname = import.meta.dirname;

export class Handlers {
  static commands: unknown[] = [];

  // Prefix Commands Handler
  static prefixCommands(client: Client): Callback {
    const logger = new Logger("CommandHandler");

    return async (path, fileName) => {
      const rPath = relative(__dirname, path); // Relative path
      const command: ESModule = await import(join(rPath, fileName));

      if (isPrefix(command.default)) {
        client.prefix.set(command.default.data.name, command.default);
        logger.log(
          `{ ${PREFIX}${command.default.data.name} } command has been loaded successfully.`,
        );
      }
    };
  }

  // Slash Commands Handler
  static slashCommands(client: Client): Callback {
    const logger = new Logger("CommandHandler");

    return async (path, fileName) => {
      const rPath = relative(__dirname, path); // Relative path
      const command: ESModule = await import(join(rPath, fileName));

      if (isSlash(command.default)) {
        client.slashs.set(command.default.data.name, command.default);
        this.commands.push(command.default.data.toJSON());
        logger.log(
          `{ /${command.default.data.name} } command has been loaded successfully.`,
        );
      }
    };
  }

  // Event Handler
  static events(client: Client): Callback {
    const logger = new Logger("EventHandler");

    return async (path, fileName) => {
      const rPath = relative(__dirname, path); // Relative path
      const event: ESModule = await import(join(rPath, fileName));

      if (event.default instanceof EventController) {
        client.on(event.default.event, event.default.listener);
        logger.log(
          `{ ${event.default.event} } event has been loaded successfully.`,
        );
      }
    };
  }
}
