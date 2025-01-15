import { Collection } from "discord.js";
import {
  CommandController,
  CommandType,
} from "./modules/controllers/commands.js";
import "./app";

declare module "discord.js" {
  interface Client {
    prefix: Collection<string, CommandController<CommandType.Prefix>>;
    slashs: Collection<string, CommandController<CommandType.Slash>>;
  }
}
