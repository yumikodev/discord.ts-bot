import { PrefixCommand } from "../types/Commands.js";

export default class {
  data!: PrefixCommand.Options;
  run!: PrefixCommand.Run;

  setData(data: PrefixCommand.Options) {
    this.data = data;
    return this;
  }

  Run(handler: PrefixCommand.Run) {
    this.run = handler;
    return this;
  }
}
