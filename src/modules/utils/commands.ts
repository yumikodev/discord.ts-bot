import { CommandInstance, CommandType, PCT, SCT } from "./types/commands.js";

// Prefix Command constructor
export class PrefixCommandController implements CommandInstance {
  data: PCT.Data;
  type: CommandType = "prefix";
  run: PCT.Run;

  setData(data: PCT.Data) {
    this.data = data;
    return this;
  }

  Run(handler: PCT.Run) {
    this.run = handler;
    return this;
  }
}

// Slash Command constructor
export class SlashCommandController implements CommandInstance {
  data: SCT.Data;
  type: CommandType = "slash";
  run: SCT.Run;

  setData(data: SCT.Data) {
    this.data = data;
    return this;
  }

  Run(handler: SCT.Run) {
    this.run = handler;
    return this;
  }
}
