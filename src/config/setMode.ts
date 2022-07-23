function setMode(mode: "development" | "production") {
  let TOKEN;
  let CLIENT_ID = "..."; // ID de tu Cliente de Discord
  let GUILD_ID = "..."; // ID de tu servidor de pruebas

  // Si está en modo de produción:
  if (mode === "production") {
    TOKEN = process.env.TOKEN;
  }
  // Si está en modo de desarrollo:
  if (mode === "development") {
    TOKEN = process.env.DEV_TOKEN;
    CLIENT_ID = "..."; // ID de tu Cliente de pruebas
  }

  return { TOKEN, CLIENT_ID, GUILD_ID };
}

export default setMode;
