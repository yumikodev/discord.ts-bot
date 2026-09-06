import { type ZodError, z } from 'zod';
import { Logger } from './modules/utils/logger.js';

if (process.env.NODE_ENV !== 'production') {
	await import('dotenv/config');
}

const logger = new Logger('Config');

const schema = z.object({
	TOKEN: z.string().nonempty(),
	CLIENT_ID: z.string().nonempty(),
	GUILD_ID: z.string().nonempty(),
	PREFIX: z.string().default('.'),
	VERSION: z.string().default('0.1'),
});

const compiledSchema = z.compile(schema);

const { CLIENT_ID, GUILD_ID, PREFIX, TOKEN, VERSION } = await compiledSchema
	.parseAsync(process.env)
	.catch((e: ZodError) => {
		logger.error(JSON.parse(e.message)[0].message || e.message);
		throw e;
	})
	.then((r) => {
		logger.log('Environment variables has been loaded successfully');
		return r;
	});

// Env variables
export { CLIENT_ID, GUILD_ID, PREFIX, TOKEN, VERSION };
