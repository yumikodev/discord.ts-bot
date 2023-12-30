import { config } from "dotenv";
config();

export default {
  token: process.env.BOT_TOKEN || "",
  clientId: process.env.CLIENT_ID || "",
  guildId: process.env.GUILD_ID || "",
  prefix: process.env.BOT_PREFIX || "!",
  version: process.env.BOT_VERSION || "1.0.0",
};
