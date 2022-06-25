import { Client, Intents, Collection } from "discord.js";
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
import { config } from "dotenv";
config();

// Collections
const commands = new Collection();
const slashs = new Collection();

// Handler
import handler from "./handler/index";
handler(client);

// Client Login
client.login(process.env.TOKEN);
export { commands, slashs }