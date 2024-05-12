import "dotenv/config";

// Env variables
export default {
  TOKEN: String(process.env.BOT_TOKEN),
  CLIENT_ID: String(process.env.CLIENT_ID),
  GUILD_ID: String(process.env.GUILD_ID),
  PREFIX: process.env.BOT_PREFIX || "!",
  VERSION: process.env.BOT_VERSION || "1.0.0",
};
