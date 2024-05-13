import type {
  ChatInputCommandInteraction,
  Client,
  Message,
  SlashCommandBuilder,
  SlashCommandSubcommandsOnlyBuilder,
  SlashCommandOptionsOnlyBuilder,
} from "discord.js";

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
    | SlashCommandOptionsOnlyBuilder;

  export type Run = (
    client: Client,
    interaction: ChatInputCommandInteraction<"cached">,
  ) => unknown;
}
