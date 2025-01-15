import * as PCT from "./types/pct.js";
import * as SCT from "./types/sct.js";

export const enum CommandType {
  Slash,
  Prefix,
}

// Global command constructor
export class CommandController<T extends CommandType> {
  data: T extends CommandType.Slash ? SCT.Data : PCT.Data;
  run: T extends CommandType.Slash ? SCT.Run : PCT.Run;

  constructor(public type: T) {}

  setData(data: T extends CommandType.Slash ? SCT.Data : PCT.Data) {
    this.data = data;
    return this;
  }

  setRun(handler: T extends CommandType.Slash ? SCT.Run : PCT.Run) {
    this.run = handler;
    return this;
  }
}

export function isSlash(
  command: unknown,
): command is CommandController<CommandType.Slash> {
  return (
    command instanceof CommandController && command.type === CommandType.Slash
  );
}

export function isPrefix(
  command: unknown,
): command is CommandController<CommandType.Prefix> {
  return (
    command instanceof CommandController && command.type === CommandType.Prefix
  );
}
