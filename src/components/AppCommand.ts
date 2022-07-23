import { AppCommandOptions } from "./AppCommandOptions";

/**
 * Modelo para Slash Command Handler
 */
class AppCommand {
  constructor(option: AppCommandOptions) {
    this.data = option.data;
    this.run = option.run;
  }

  data;
  run;
}

export default AppCommand;
