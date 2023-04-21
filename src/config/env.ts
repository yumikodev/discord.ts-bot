import { config } from "dotenv";
config();

const environment = (process.env.NODE_ENV ?? "development").toLowerCase();

let TOKEN: string | undefined;
let CLIENT_ID = process.env.CLIENT_ID; // ID de tu Cliente de Discord
const GUILD_ID = process.env.GUILD_ID; // ID de tu servidor de pruebas

// Si está en entorno de produción:
if (environment === "production") {
  TOKEN = process.env.TOKEN;
} else {
  // Si está en entorno de desarrollo:
  TOKEN = process.env.DEV_TOKEN;
  CLIENT_ID = process.env.DEV_CLIENT_ID; // ID de tu Cliente de pruebas
}

export { TOKEN, CLIENT_ID, GUILD_ID };
