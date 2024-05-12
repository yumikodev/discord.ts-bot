import {
  ChatInputCommandInteraction,
  Client,
  Message,
  SlashCommandBuilder,
} from "discord.js";

export type CommandType = "prefix" | "slash";

export interface CommandInstance {
  data;
  run;
  type: CommandType;
}

// PCT -> Prefix Command Types
export namespace PCT {
  export interface Data {
    name: string;
    description: string;
    alias: string[];
  }

  export type Run = (
    client: Client,
    message: Message,
    args: string[],
  ) => unknown;
}

// SCT -> Slashs Command Types
export namespace SCT {
  export type Data =
    | SlashCommandBuilder
    | SlashCommandSubcommandsOnlyBuilder
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">;

  export type Run = (
    client: Client,
    interaction: ChatInputCommandInteraction,
  ) => unknown;
}
