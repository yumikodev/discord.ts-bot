import { Collection } from "discord.js";
import { Command, SlashCommand } from "./modules/handler/types/collections";
import "./app";

declare module "discord.js" {
  interface Client {
    prefix: Collection<string, Command>;
    slashs: Collection<string, SlashCommand>;
  }
}
