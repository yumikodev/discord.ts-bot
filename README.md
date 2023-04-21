# discord.ts-bot

Creado por [Yasu Yumiko#5285](https://yasuyumiko.ml)

## Sobre

Este es un bot para Discord, escrito en TypeScript y desarrollado con [Node.js](https://nodejs.org) y [Discord.js](https://npmjs.com/package/discord.js) en su version 14.

## Pasos a seguir

### Configuración:

- Revisar las variables de entorno (`.env.example`)
- Ir a `./src/config/env.ts` y configurarlo para evitar errores.
- [Discord.js](https://npmjs.com/package/discord.js) requiere [Node.js](https://nodejs.org) v16.9 o superior para funcionar.

### Instalación, Compilación & Inicio:

Para instalar los paquetes/dependecias.

```bash
# Using npm
npm i

# Using pnpm
pnpm i

# Using yarn
yarn i
```

Para compilar el código de TypeScript a JavaScript.

```bash
npm run build
```

Para iniciar el bot

```bash
npm start
```

- Si quiere que los Slash Commands sean globales, valla a `./src/builder.ts` y cambie `Routes.applicationGuildCommands` por `Routes.applicationCommands` [(leer mas)](https://discordjs.guide/interactions/slash-commands.html#global-commands)
- Puede cambiar la Presencia de su bot en `./src/events/ready.ts`

## Características

- Gestor de eventos (`Event Handler`).
- Gestor de comandos con subcarpetas (`Command Handler`).
- Gestor de comandos de barra con subcarpetas (`Slash Command Handler`).
- Eslint integrado.

## Licencia

Este proyecto está bajo la [MIT License ❤️](https://github.com/Yumiko0828/discord.ts-bot/blob/main/LICENSE)

## Enlaces

- [Github](https://github.com/yumiko0828)
- [Twitter](https://twitter.com/yumiko0828_)
- [Instagram](https://www.instagram.com/yumiko0828_)
- [npm](https://npmjs.com/~yumiko0828)
- [Website](https://yasuyumiko.ml)

## Gracias por usar esto :D.
