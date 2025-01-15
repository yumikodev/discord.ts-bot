import chalk from "chalk";

export class Logger {
  constructor(private prefix: string) {}

  log(message: string): void {
    console.log(
      chalk.green(
        `${chalk.grey("[LOG]")} ${chalk.blueBright(
          `[${this.prefix}]`,
        )} ${message}`,
      ),
    );
  }

  error(message: string): void {
    console.log(
      chalk.red(
        `${chalk.grey("[ERROR]")} ${chalk.blueBright(
          `[${this.prefix}]`,
        )} ${message}`,
      ),
    );
  }
}
