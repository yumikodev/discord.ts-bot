import { SlashCommand } from "../types/Commands.js";

export default class {
  data!: SlashCommand.Data;
  run!: SlashCommand.Run;

  setData(data: SlashCommand.Data) {
    this.data = data;
    return this;
  }

  Run(handler: SlashCommand.Run) {
    this.run = handler;
    return this;
  }
}
