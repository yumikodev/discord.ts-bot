import { Client, Collection, GatewayIntentBits } from "discord.js";
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});
import config from "./config/config";
import handler from "./handler/index";

// Collections
const commands = new Collection();
const slashs = new Collection();

// Handler
handler(client);

// Client Login
client.login(config.token);

export { commands, slashs };
