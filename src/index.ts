import type { Collection } from 'discord.js';
import type {
	CommandController,
	CommandType,
} from './modules/controllers/commands.js';
import './client.ts';

declare module 'discord.js' {
	interface Client {
		prefix: Collection<string, CommandController<CommandType.Prefix>>;
		slashs: Collection<string, CommandController<CommandType.Slash>>;
	}
}
