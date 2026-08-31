import chalk from 'chalk';
export class Logger {
	constructor(private prefix: string) {}

	log(message: string): void {
		console.log(
			chalk.green(
				[
					this.#logTemplate(),
					'LOG',
					chalk.yellowBright(`[${this.prefix}]`),
					message,
				].join(' '),
			),
		);
	}

	error(message: string): void {
		console.log(
			chalk.red(
				[
					this.#logTemplate(),
					'ERROR',
					chalk.yellowBright(`[${this.prefix}]`),
					message,
				].join(' '),
			),
		);
	}

	#logTemplate() {
		const logDate = new Date().toLocaleString();

		return ['[Bot]', process.ppid, '-', chalk.whiteBright(logDate)].join(' ');
	}
}
