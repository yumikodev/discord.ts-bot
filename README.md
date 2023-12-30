# discord.ts-bot

Creado por [@yasuyumiko](https://yumikodev.vercel.app)

## Sobre

Este es un bot para Discord, escrito en TypeScript y desarrollado con [Node.js](https://nodejs.org) y [Discord.js](https://npmjs.com/package/discord.js) en su version 14.

## Pasos a seguir

### Configuración:

- Revisar las variables de entorno (`.env.example`)
  - Las propiedades marcadas como `opcionales` tienen un valor por defecto en `./src/config/config.ts`
- [Discord.js](https://npmjs.com/package/discord.js) requiere [Node.js](https://nodejs.org) v16.9 o superior para funcionar.
- Puede cambiar la Presencia de su bot en `./src/events/ready.ts`
- Puede cambiar de comandos de servidor a comandos globales en `./src/handler/main.ts`. ([Ver más](https://discordjs.guide/creating-your-bot/command-deployment.html#guild-commands))

### Instalación, Compilación & Inicio:

Para instalar los paquetes/dependecias.

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

Para compilar el código de TypeScript a JavaScript.

```bash
npm run build
```

Para iniciar el bot

```bash
npm start
```

> [!TIP]
> Si esta usando Bun, ejecute el código de la siguiente manera.

Para producción:

```bash
bun run src/index.ts
```

Para desarrollo:

```bash
bun run --watch src/index.ts
```

> [!NOTE]
> Opcionalmente, puede reemplazar los scripts dentro de `package.json`.

## Características

- Gestor de eventos (`Event Handler`).
- Gestor de comandos con subcarpetas (`Command Handler`).
- Gestor de comandos de barra con subcarpetas (`Slash Command Handler`).
- Eslint integrado.

## Licencia

Este proyecto está bajo la [MIT License ❤️](https://github.com/Yumiko0828/discord.ts-bot/blob/main/LICENSE)

## Enlaces

- [Github](https://github.com/yumiko0828)
- [Twitter](https://twitter.com/yumikodev)
- [Instagram](https://www.instagram.com/yumiko.dev)
- [npm](https://npmjs.com/~yumiko0828)
- [Sitio web](https://yumikodev.vercel.app)

## Gracias por usar esto :D.
