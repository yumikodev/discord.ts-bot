import { join } from 'node:path';
import type { Client } from 'discord.js';
import { builder } from '../builder/index.js';
import { Logger } from '../utils/logger.js';
import { browseInFolders } from './browse-in-folders.js';
import { Handlers } from './handlers.js';

const __dirname = import.meta.dirname;
const logger = new Logger('MainHandler');

export async function Handler(client: Client): Promise<void> {
	try {
		// Prefix/Slash Command Handler
		await browseInFolders(
			join(__dirname, '../../commands'),
			Handlers.prefixCommands(client),
			Handlers.slashCommands(client),
		).then(() => logger.log('All commands has been loaded successfully'));

		// Events Handler
		await browseInFolders(
			join(__dirname, '../../events'),
			Handlers.events(client),
		).then(() => logger.log('Discord events has been loaded successfully'));

		// Load Slash Command
		await builder(Handlers.commands);
	} catch (err) {
		logger.error(err);
		throw err;
	}
}
