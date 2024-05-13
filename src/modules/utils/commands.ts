import { PCT, SCT } from "./types/commands.js";

// Prefix Command constructor
export class PrefixCommandController {
  data: PCT.Data;
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
export class SlashCommandController {
  data: SCT.Data;
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
