import { version } from "../../package.json";
import { config } from "dotenv";
import setMode from "./setMode";
config();

const { CLIENT_ID, GUILD_ID, TOKEN } = setMode("development"); // Si estas en modo desarrollo, cambialo

export default {
  token: TOKEN,
  clientId: CLIENT_ID,
  guildId: GUILD_ID,
  prefix: "!",
  version,
};
