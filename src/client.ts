import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { TOKEN } from './config.ts';
import { Handler } from './modules/handler/index.ts';

// Client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

// Collections
client.slashs = new Collection();
client.prefix = new Collection();

// Handler
await Handler(client);

// Client Login
await client.login(TOKEN);
