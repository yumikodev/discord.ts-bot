import { ActivityType } from 'discord.js';
import { PREFIX, VERSION } from '@/config.js';
import { EventController } from '@/modules/controllers/event.js';
import { Logger } from '@/modules/utils/logger.js';
import { setPresence } from '@/modules/utils/presence.js';

const logger = new Logger('Ready');

export default new EventController('clientReady', (client) => {
	try {
		logger.log(`${client.user.username} is ready!`);

		setPresence(client, [
			{
				content: `${PREFIX}help - v${VERSION}`,
				type: ActivityType.Playing,
				status: 'idle',
			},
			{
				content: `${client.guilds.cache.size} ${
					client.guilds.cache.size === 1 ? 'servidor' : 'servidores'
				}`,
				type: ActivityType.Watching,
				status: 'idle',
			},
			{
				content: `${client.users.cache.size} ${
					client.users.cache.size === 1 ? 'usuario' : 'usuarios'
				}`,
				type: ActivityType.Listening,
				status: 'idle',
			},
		]);
	} catch (err) {
		logger.error(err);
	}
});
