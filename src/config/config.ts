import { version } from "../../package.json";
import { config } from "dotenv";
config();

export default {
  token: process.env.TOKEN, // Your token here
  clientId: "", // Your Client Id here
  guildId: "", // Your Guild Id here
  prefix: "$", // Your prefix here
  version, // The version of the bot here
};
