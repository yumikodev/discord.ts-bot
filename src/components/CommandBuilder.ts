import { CommandOptions, SlashCommandOptions } from "./CommandBuilderOptions";

/**
 * Modelo para Slash Command Handler
 */
export class SlashBuilder {
  constructor(option: SlashCommandOptions) {
    this.data = option.data;
    this.run = option.run;
  }

  data;
  run;
}

/**
 * Modelo para Command Prefix Handler
 */
export class CommandBuilder {
  constructor(options: CommandOptions) {
    this.data = options.data;
    this.run = options.run;
  }
  data;
  run;
}
