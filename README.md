# Discord.ts-bot

## Created by [Edwin Jibaja](https://edwinjibaja.dev)
#### Contributors: [@AIGIX](https://github.com/aigix)

## Sobre / About

Sp: Este es un bot para Discord, desarrollado con TypeScript, [Node.js](https://nodejs.org) y [Discord.js](https://npmjs.com/package/discord.js) v14. El proyecto está estructurado para escalar con comandos por carpetas, eventos, validación de entorno y utilidades modulares.

En: This is a Discord bot built with TypeScript, [Node.js](https://nodejs.org) and [Discord.js](https://npmjs.com/package/discord.js) v14. The project is organized to scale with folder-based commands, event handlers, environment validation, and modular utilities.

---

## Novedades recientes / Recent updates

Sp:

- Se actualizó la configuración de entorno con validación usando [Zod](https://zod.dev).
- Se mejoró el sistema de logs con colores y prefijos más legibles.
- La carga de comandos y eventos quedó organizada por handlers y controladores.
- Se añadió soporte para comandos de prefijo y slash commands desde subcarpetas.
- El registro de comandos slash se hace de forma automática al iniciar el bot.
- Se reemplazó la configuración de linting por [Biome](https://biomejs.dev) y se actualizó el stack de dependencias.

En:

- Environment configuration was upgraded with validation via [Zod](https://zod.dev).
- The logging system was improved with colored, readable output and prefixes.
- Command and event loading is now organized through handlers and controllers.
- Support was added for prefix commands and slash commands from nested folders.
- Slash commands are registered automatically when the bot starts.
- Linting was updated to [Biome](https://biomejs.dev), and the dependency stack was refreshed.

---

## Requisitos / Requirements

- [Node.js](https://nodejs.org) 16.9+ (18+ recomendado)
- Un token de bot de Discord
- El ID del cliente y del servidor donde se registrarán los comandos slash
- [pnpm](https://pnpm.io), [npm](https://www.npmjs.com), [yarn](https://yarnpkg.com) o [Bun](https://bun.sh)

---

## Configuración / Setup

Sp:

Crea un archivo `.env` en la raíz del proyecto con las variables necesarias:

```env
TOKEN=your_discord_bot_token
CLIENT_ID=your_application_client_id
GUILD_ID=your_server_id
PREFIX=. # (opcional)
VERSION=0.1 #  (opcional)
```

- Las propiedades marcadas como opcionales tienen valores por defecto en `src/config.ts`.
- Puedes cambiar la presencia del bot en `src/events/init/ready.ts`.
- Puedes alternar entre comandos de servidor y globales en `src/modules/builder/index.ts`.
- Lee más sobre despliegue de comandos slash aquí: [Discord.js Guide](https://discordjs.guide/creating-your-bot/command-deployment.html)

En:

Create a `.env` file in the project root with the required variables:

```env
TOKEN=your_discord_bot_token
CLIENT_ID=your_application_client_id
GUILD_ID=your_server_id
PREFIX=. # (optional)
VERSION=0.1 # (optional)
```

- Optional properties have default values in `src/config.ts`.
- You can change the bot presence in `src/events/init/ready.ts`.
- You can switch between guild and global slash commands in `src/modules/builder/index.ts`.
- Learn more about slash command deployment here: [Discord.js Guide](https://discordjs.guide/creating-your-bot/command-deployment.html)

---

## Estructura del proyecto / Project structure

```text
src/
├── client.ts
├── config.ts
├── index.ts
├── commands/
│   ├── prefix/
│   │   ├── fun/
│   │   └── test/
│   └── slash/
│       ├── fun/
│       └── test/
├── events/
│   ├── cmd/
│   └── init/
├── modules/
│   ├── builder/
│   ├── controllers/
│   ├── handler/
│   └── utils/
└── ...
```

---

## Instalación, compilación y ejecución / Installation, build and start

Sp: Para instalar las dependencias.

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

En: To install dependencies.

Sp: Para compilar el código TypeScript.

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn run build

# bun
bun run build
```

En: To compile the TypeScript code.

Sp: Para iniciar el bot.

```bash
npm start
```

En: To start the bot.

### Modo desarrollo / Development mode

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn run dev

# bun
bun run dev:b
```

> [!TIP]
> Sp: Si usas Bun, también puedes ejecutar el proyecto con `bun run start:b` para producción o `bun run dev:b` para desarrollo.
> En: If you use Bun, you can also run the project with `bun run start:b` for production or `bun run dev:b` for development.

---

## Características / Features

Sp:

- Sistema de eventos con subcarpetas (`Event Handler`).
- Sistema de comandos con prefijo y slash commands (`Command Handler`).
- Carga automática de archivos por directorios.
- Registro dinámico de comandos slash por guild.
- Validación de variables de entorno con `Zod`.
- Logs personalizados con colores para facilitar el debugging.
- Estructura modular para mantener el código ordenado y escalable.
- Stack actualizada con `Biome`, `TypeScript 7` y dependencias modernas.

En:

- Folder-based event system (`Event Handler`).
- Prefix and slash command system (`Command Handler`).
- Automatic file loading from directories.
- Dynamic slash command registration per guild.
- Environment validation with `Zod`.
- Custom colored logs to simplify debugging.
- Modular structure to keep the code organized and scalable.
- Updated stack with `Biome`, `TypeScript 7`, and modern dependencies.

> [!NOTE]
> Sp: El sistema recorre recursivamente todo lo que exista dentro de `src/commands` y `src/events`, incluso en subcarpetas. Sin embargo, solo detectará archivos que exporten por defecto una instancia o clase válida para el handler correspondiente. Si un archivo no cumple esa condición, será ignorado.
>
> En: The system recursively scans everything inside `src/commands` and `src/events`, including nested folders. However, it only detects files that export by default a valid instance or class for the corresponding handler. If a file does not meet that condition, it will be ignored.

## Ejemplos rápidos / Quick examples

### Slash command

```ts
import { SlashCommandBuilder } from 'discord.js';
import {
  CommandController,
  CommandType,
} from '@/modules/controllers/commands.js';

export default new CommandController(CommandType.Slash)
  .setData(
    new SlashCommandBuilder()
      .setName('ping')
      .setDescription('Ping del bot'),
  )
  .setRun(async (interaction) => {
    await interaction.reply({ content: 'Pong!' });
  });
```

### Prefix command

```ts
import { ChannelType } from 'discord.js';
import {
  CommandController,
  CommandType,
} from '@/modules/controllers/commands.js';

export default new CommandController(CommandType.Prefix)
  .setData({
    name: 'ping',
    alias: [],
    description: 'Ping del bot',
  })
  .setRun(async (message) => {
    if (message.channel.type !== ChannelType.GuildText) return;
    await message.reply({ content: 'Pong!' });
  });
```

### Event

```ts
import { EventController } from '@/modules/controllers/event.js';

export default new EventController('clientReady', (client) => {
  console.log(`${client.user.username} está listo.`);
});
```

---

## Licencia / License

Este proyecto está bajo la [MIT License ❤️](https://github.com/Yumiko0828/discord.ts-bot/blob/main/LICENSE).

This project is licensed under the [MIT License ❤️](https://github.com/Yumiko0828/discord.ts-bot/blob/main/LICENSE).

---

## Links

- [Github](https://github.com/yumikodev)
- [Twitter / X](https://x.com/yumikodev)
- [Instagram](https://www.instagram.com/edwinjibaja)
- [npm](https://npmjs.com/~yumikodev)
- [Website](https://edwinjibaja.dev)

---

## Gracias por usar esto / Thank you for using this :D

Sp: Espero que esta versión mejorada sea de tu agrado. ¡Déjame saber si necesitas algo más!<br/>
En: I hope you like this improved version. Let me know if you need anything else!