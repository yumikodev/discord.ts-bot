import { EventController } from '@/modules/controllers/event.js';
import { Logger } from '@/modules/utils/logger.js';

const logger = new Logger('InteractionCreate');

export default new EventController('interactionCreate', async (int) => {
	if (!int.isChatInputCommand()) return;
	if (!int.inCachedGuild()) return;

	const command = int.client.slashs.get(int.commandName);

	try {
		if (!command)
			return await int.reply({
				content: 'An error has ocurred',
				ephemeral: true,
			});

		await command.run(int);
	} catch (err) {
		logger.error(err);
		await int.reply({
			content: 'There was an error while executing this command!',
			ephemeral: true,
		});
	}
});
