import Joi from "joi";
import "dotenv/config";

interface Env {
  TOKEN: string;
  CLIENT_ID: string;
  GUILD_ID: string;
  PREFIX: string;
  VERSION: string;
}

const schema = Joi.object<Env>({
  TOKEN: Joi.string().required(),
  CLIENT_ID: Joi.string().required(),
  GUILD_ID: Joi.string().required(),
  PREFIX: Joi.string().default("!"),
  VERSION: Joi.string().default("1.0.0"),
}).unknown(true);

const { CLIENT_ID, GUILD_ID, PREFIX, TOKEN, VERSION } = await schema
  .validateAsync(process.env)
  .catch((e) => {
    throw new Error(e.message);
  });

// Env variables
export { CLIENT_ID, GUILD_ID, PREFIX, TOKEN, VERSION };
