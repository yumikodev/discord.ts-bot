# Discord.ts-bot

## Created by [@yasuyumiko](https://yumikodev.vercel.app)
#### Contributors: [@Ionut767](https://github.com/Ionut767)

## Sobre / About 

Sp: Este es un bot para Discord, escrito en TypeScript y desarrollado con [Node.js](https://nodejs.org) y [Discord.js](https://npmjs.com/package/discord.js) en su versión 14.

En: This is a Discord bot, written in TypeScript and developed with [Node.js](https://nodejs.org) and [Discord.js](https://npmjs.com/package/discord.js) version 14.



## Pasos a seguir / Steps to Follow

### Configuración / Setup:
Sp:

- Revisa las variables de entorno (`.env.example`)
  - Las propiedades marcadas como `opcional` tienen un valor predeterminado en `./src/config.ts`
- [Discord.js](https://npmjs.com/package/discord.js) requiere [Node.js](https://nodejs.org) v16.9 o superior para funcionar.
- Puedes cambiar la presencia del bot en `./src/events/init/ready.ts`
- Puedes cambiar de comandos de servidor a comandos globales en `./src/modules/builder/index.ts`. ([Aprende m s](https://discordjs.guide/creating-your-bot/command-deployment.html#comandos-globales))

En:

- Review the environment variables (`.env.example`)
  - Properties marked as `optional` have a default value in `./src/config.ts`
- [Discord.js](https://npmjs.com/package/discord.js) requires [Node.js](https://nodejs.org) v16.9 or higher to run.
- You can change the bot's Presence in `./src/events/init/ready.ts`
- You can switch from server commands to global commands in `./src/modules/builder/index.ts`. ([Learn more](https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands))

### Instalación, Compilación & Inicio / Installation, Compilation & Start:
Sp: Para instalar los paquetes/dependecias.<br/>
En: To install the packages/dependencies.

```bash
# Using npm
npm i

# Using pnpm
pnpm i

# Using yarn
yarn i

# Using Bun
bun install
```

Sp: Para compilar el código de TypeScript a JavaScript. <br/>
En: To compile TypeScript code to JavaScript.

```bash
# Using npm
npm run build

# Using pnpm
pnpm run build

# Using yarn
yarn run build

# Using Bun
bun run build

```
Sp: Para iniciar el bot
En:To start the bot

```bash
npm start
```

> [!TIP]
> Sp: Si esta usando Bun, ejecute el código de la siguiente manera.
> En: If you are using Bun, run the code as follows.

Para producción / For production:

```bash
bun run start:b
```

Para desarrollo / For development:

```bash
bun run dev:b
```

> [!NOTE]
> Sp: Opcionalmente, puede reemplazar los scripts dentro de `package.json`.
> En: Optionally, you can replace the scripts inside `package.json`.

---

## Características / Features
Sp:

- Gestor de eventos con subcarpetas (`Event Handler`).
- Gestor de comandos con subcarpetas (`Command Handler`).
- Gestor de comandos de barra con subcarpetas (`Slash Command Handler`).
- Eslint integrado.
- Prettier integrado.

En:
- Event handler with subfolders (`Event Handler`).
- Command handler with subfolders (`Command Handler`).
- Slash command handler with subfolders (`Slash Command Handler`).
- Integrated Eslint.
- Integrated Prettier.

---

## License

Este proyecto está bajo la [MIT License ❤️](https://github.com/Yumiko0828/discord.ts-bot/blob/main/LICENSE)

This project is licensed under the [MIT License ❤️](https://github.com/Yumiko0828/discord.ts-bot/blob/main/LICENSE).

---

## Links

- [Github](https://github.com/yumiko0828)
- [Twitter](https://twitter.com/yumikodev)
- [Instagram](https://www.instagram.com/yumiko.dev)
- [npm](https://npmjs.com/~yumiko0828)
- [Website](https://yumikodev.vercel.app)

---

##  Gracias por usar esto / Thank you for using this :D

---

Sp: Espero que esta versión mejorada sea de tu agrado. ¡Déjame saber si necesitas algo más!<br/>
En: I hope you like this improved version. Let me know if you need anything else!