import { Client, Collection, GatewayIntentBits } from "discord.js";
import config from "./config";
import { Handler } from "./modules/handler";

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
Handler(client);

// Client Login
client.login(config.TOKEN);
