import type { Client, Collection } from "discord.js";
import { Command, SlashCommand } from "./Collections.js";

interface Bot<Ready extends boolean = boolean> extends Client<Ready> {
  prefix: Collection<string, Command>;
  slashs: Collection<string, SlashCommand>;
}
