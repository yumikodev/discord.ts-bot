import { Command } from "../types/Commands.js";

export default class {
  data!: Command.Options;
  run!: Command.Run;

  setData(data: Command.Options) {
    this.data = data;
    return this;
  }

  Run(handler: Command.Run) {
    this.run = handler;
    return this;
  }
}
