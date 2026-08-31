import { REST, Routes } from 'discord.js';
import { CLIENT_ID, GUILD_ID, TOKEN } from '@/config.js';
import { Logger } from '../utils/logger.js';

const logger = new Logger('Builder');

export async function builder(commands: unknown[]): Promise<void> {
	const rest = new REST({ version: '10' }).setToken(TOKEN);

	logger.log('Started refreshing application (/) commands.');

	await rest
		.put(
			Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), // Slash Commands en un servidor
			// Routes.applicationCommands(CLIENT_ID), // Slash Commands Globales
			{
				body: commands,
			},
		)
		.catch((e) => {
			logger.error(e);
			throw e;
		});

	logger.log('Successfully reloaded application (/) commands.');
}
