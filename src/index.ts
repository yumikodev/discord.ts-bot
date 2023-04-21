import { Client, Collection, GatewayIntentBits } from "discord.js";
import config from "./config/config.js";
import handler from "./handler/main.js";
import { Bot } from "./types/Bot.js";

// Client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
}) as Bot;

// Collections
client.slashs = new Collection();
client.commands = new Collection();

// Handler
handler(client);

// Client Login
client.login(config.token);
