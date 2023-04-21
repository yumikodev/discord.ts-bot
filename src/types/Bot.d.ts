import type { Client, Collection } from "discord.js";
import { Command, SlashCommand } from "./Collections.js";

interface Bot extends Client {
  commands: Collection<string, Command>;
  slashs: Collection<string, SlashCommand>;
}